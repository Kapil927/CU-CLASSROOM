"use client";
import { useState } from "react";
import { Github } from "lucide-react";
import { PhoneCall } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Braces } from 'lucide-react';
import { motion } from "framer-motion";
import Image from "next/image";

const App = () => {
  return (
    <PhoneCall />
  );
};

export default App;


import { Hint } from "@/components/hint";
import { links } from "@/config";

import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I help you?" }]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
  
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        hi: "Hello! Welcome to CU Classroom. How can I assist you today?",
        hello: "Hi there! How can I assist you?",
        help: "Sure! What do you need help with?",
        bye: "Goodbye! Have a great day!",
        "what is this platform": "CU Classroom is an advanced AI-powered online education platform designed to enhance virtual learning and collaboration. It provides an interactive environment where students and teachers can engage in real-time, ensuring a seamless online education experience.",
        "who is my supervisor": "Er. Navneet (E14843)",
        "who are my evaluation panelists":  "Er. Shivali Devi (E12930) & Er. Rashmi (E16835)",
        "who developed you":  "CU Classroom was proudly developed by 2nd-year students of Chandigarh University: Hemant Dhaka , Vishal , Ronak Yadav, Kapil Thakur"
      };
      const lowerInput = input.toLowerCase();
      const botReply = botResponses[lowerInput] || "I'm not sure how to respond to that.";
  
      setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botReply }]);
    }, 500);
  };
  
  



  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col justify-between text-white">
      <div className="flex flex-col gap-y-4">
        <List />
        <NewButton />
      </div>

      <div className="aspect-square flex flex-col gap-1">
      <div
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-slate-600 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition cursor-pointer"
          >
        <Hint label="AI Help" side="right" align="start" sideOffset={18}>


            <Cpu className="text-white h-5 w-5"/>
        
        </Hint>
      </div>    
      {isChatOpen && (
        <motion.div 
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 w-80 bg-gray-800 text-white shadow-lg p-4 rounded-lg"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat Bot</h2>
            <button onClick={() => setIsChatOpen(false)} className="text-white text-xl">✖</button>
          </div>
          <div className="h-40 overflow-y-auto p-2 border border-gray-700 rounded mt-2">
            {messages.map((msg, index) => (
              <p key={index} className={`text-sm ${msg.sender === "bot" ? "text-gray-300" : "text-blue-400"}`}>
                {msg.text}
              </p>
            ))}
          </div>
          <div className="flex mt-2">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none"
            />
            <button onClick={handleSendMessage} className="ml-2 bg-blue-600 px-3 py-1 rounded">Send</button>
          </div>
        </motion.div>
      )} 
      <div className="aspect-square flex flex-col gap-1">
        <Hint label="Connect" side="right" align="start" sideOffset={18}>
          <a
            href={links.cuRoom}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-slate-600 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition"
          >
            
            <PhoneCall className="text-white h-5 w-5"/>
          </a>
        </Hint>
      </div>

        <Hint label="Source Code" side="right" align="start" sideOffset={18}>
          <a
            href={links.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="bg-slate-600 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition"
          >
            
            <Github className="text-white h-5 w-5" />
          </a>
        </Hint>


        <div className="relative">
        
      <div
        className="bg-slate-600 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Braces className="text-white h-5 w-5" />
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 h-full w-80 bg-gray-800 text-white shadow-lg p-4 flex flex-col space-y-4"
        >           
          <div className="flex justify-between">
          <Image src="/cu2.png" alt="CU Logo" width={260} height={500} className="mb-4" />
          <div
        className=" cursor-pointer text-white text-xl"
        onClick={() => setIsOpen(false)}>
        ✖
      </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Developers</h2>
 
          </div>
          <table className="w-full border-collapse border border-gray-600 text-left">
            <thead>
              <tr className="bg-gray-700">
                <th className="border border-gray-600 px-4 py-2">UID</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">23BCS11726</td>
                <td className="border border-gray-600 px-4 py-2">Hemant Dhaka</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">23BCS11981</td>
                <td className="border border-gray-600 px-4 py-2">Vishal</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">23BCS12249</td>
                <td className="border border-gray-600 px-4 py-2">Ronak Yadav</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">24BCS80042</td>
                <td className="border border-gray-600 px-4 py-2">Kapil Thakur</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 border-t border-gray-600 pt-2">
            <h2 className="text-lg font-semibold">Under Guidance of</h2>
            <h3 className="text-md font-semibold mt-2">Supervisor</h3>
            <table className="w-full border-collapse border border-gray-600 text-left mt-2">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 px-4 py-2">E-Code</th>
                  <th className="border border-gray-600 px-4 py-2">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">E14843</td>
                  <td className="border border-gray-600 px-4 py-2">Er. Navneet</td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-md font-semibold mt-4">Evaluation Panelists</h3>
            <table className="w-full border-collapse border border-gray-600 text-left mt-2">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 px-4 py-2">E-Code</th>
                  <th className="border border-gray-600 px-4 py-2">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">E12930</td>
                  <td className="border border-gray-600 px-4 py-2">Er. Shivali Devi</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">E16835</td>
                  <td className="border border-gray-600 px-4 py-2">Er. Rashmi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
      </div>
    </aside>
  );
};
