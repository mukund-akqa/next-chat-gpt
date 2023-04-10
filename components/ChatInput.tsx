'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { db } from '../firebase'

type Props = {
    chatId:string
}

function ChatInput({chatId}:Props) {
    const [prompt,setPrompt] = useState("")
    const {data:session} = useSession()

    // const model = "text-davinci-003"
    const model = "GPT-3.5-turbo"

    const sendMessage = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!prompt) return;
        const input:any = prompt.trim();
        setPrompt("");
        const message:any = {
            text:input,
            createdAt:serverTimestamp(),
            user:{
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }
        await addDoc(collection(db, 'users',session?.user?.email!, 'chats', chatId, 'messages'),message)
        console.log(message)
        
        const notification = toast.loading("Chat GPT")

        await fetch('/api/askQuestion',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt:input,
                chatId,
                model,
                session
            })
        }).then(()=>{
            toast.success("responded",{
                id:notification
            })
        })

    }
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
        <form className='p-5 space-x-5 flex' onSubmit={sendMessage}>
            <input type="text" placeholder='type your message here' className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300' value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
            <button type='submit' className='bg-[#11A37F] hover:opacity-50 px-4 py-2 text-white font-bold disabled:cursor-not-allowed disabled:text-gray-300' disabled={!prompt || !session}>
                <PaperAirplaneIcon className='h-4 w-4 -rotate-45'/>
            </button>
        </form>
    </div>
  )
}

export default ChatInput