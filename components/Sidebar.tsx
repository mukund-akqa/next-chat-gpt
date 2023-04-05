"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { db } from "../firebase";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import Chatrow from "./Chatrow";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"),orderBy('createdAt','asc'))
  );

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div>{/* Modal Selection */}</div>
          {/* Map Over Chat */}
          {chats?.docs.map(chat=>(
            <Chatrow key={chat.id} id={chat.id}/>
          ))}
        </div>
      </div>
      {session && (
        <img
          src={session.user?.image!}
          alt="profilePic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          onClick={() => signOut()}
        />
      )}
    </div>
  );
}

export default Sidebar;
