  
// Create an array to hold the messages.
let messages = [];

// Create a variable that will keep track of what id to assign to messages
let id = 0;

// Export an object with methods to create, read, update, and delete messages.
module.exports={

 // get axios response from index and tie it to the correct method
    create:(req,res)=>{
        const{text,time}=req.body;
        let greeting = "hello world"
        messages.push({id,text,time,greeting});
        id++;
        res.status(200).send(messages);
    },

    read: (req,res) =>{
        res.status(200).send(messages);    
    },

    update:(req,res)=>{
        const {text}=req.body;
        const updateID = req.params.id;
        const messageIndex=messages.findIndex(message=>message.id==updateID);
        let message = messages[messageIndex];
    
    
    messages[messageIndex]={
        id:message.id,
        text:text||message.text,
        time:message.time
    };

    res.status(200).send(messages);
    },

    delete: (req,res) => {
        const deleteID = req.params.id;
        messageIndex=messages.findIndex(message=>message.id==deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
};