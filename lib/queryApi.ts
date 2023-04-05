import openai from "./chatgpt";

const query = async (prompt:string, chatId:string, model:string)=>{
    const res:any = await openai.createCompletion({
        model,
        prompt,
        temperature:0.9,
        max_tokens:1000,
        frequency_penalty:0,
        presence_penalty:0
    }).then(res=>
        res.data.choices[0].text
        // console.log(res.data.choices[0].text)
    ).catch(err=>{
        console.log(err.message)
    })
   return res;
}
export default query