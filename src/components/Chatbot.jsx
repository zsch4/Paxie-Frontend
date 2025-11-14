import { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Minus, Maximize2, ChevronUp, User } from 'lucide-react';
import BotIcon from './BotIcon';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [helpText, setHelpText] = useState('');
  const [showHelp, setShowHelp] = useState(true);

  const messagesEndRef = useRef(null);
  const chatButtonRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = {
        id: 1,
        text: "Hi, I am Paxie!\nHow can I help you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (!isOpen && showHelp) {
      const fullMessage = "Need Help? Chat with me!";
      let index = 0;

      setHelpText("");

      const interval = setInterval(() => {
        if (index < fullMessage.length) {
          setHelpText(fullMessage.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowHelp(false), 1000);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isOpen, showHelp]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          const botMessage = {
            id: Date.now(), 
            text: "Thank you for your message! I'm here to help you with your tasks and questions.",
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
          resolve();
        }, 1000);
      });
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage = {
        id: Date.now(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false); 
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Help Message */}
      {!isOpen && showHelp && (
        <div className="fixed bottom-24 right-8 px-4 py-2 rounded-lg shadow-lg transition-all bg-blue-500 text-white z-40">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{helpText}</span>
          </div>
        </div>
      )}

      {/* Chatbot Button */}
      <button
        ref={chatButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 p-1 bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-blue-600 z-40 ${
          isOpen ? 'scale-110' : ''
        }`}
      >
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isOpen ? 'rotate-180 opacity-100 scale-100' : 'rotate-0 opacity-90 scale-95'}`}
          >
          {!isOpen ? (
            <BotIcon w={45} h={45} />
          ) : (
            <ChevronUp className="text-white h-11 w-11" />
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bg-white rounded-3xl shadow-2xl flex flex-col z-50 overflow-hidden transition-all duration-300  animate-chatPopIn ${
            isMaximized 
              ? 'inset-4' 
              : 'bottom-24 right-8 w-[380px] h-[450px]'
          }`}
        >
          <div className="w-full h-full bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className=" bg-blue-500 p-2 flex items-center justify-between cursor-move">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white ml-1.5 rounded-full flex items-center justify-center">
                  <BotIcon w={30} h={30} />
                </div>
                <h3 className="font-semibold text-white text-lg">Chat With Paxie</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="text-white hover:bg-blue-600 rounded-lg p-1 transition-colors"
                  title={isMaximized ? "Restore" : "Maximize"}
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-600 rounded-lg p-1 transition-colors"
                  title="Minimize"
                >
                  <Minus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender != 'user' && <div className="w-10 h-10 mt-auto mr-2 bg-white rounded-full flex items-center justify-center">
                    <BotIcon w={30} h={30} />
                  </div>}
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-white text-gray-700 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  </div>
                  {message.sender === 'user' &&<div className="w-10 h-10 mt-auto ml-2 bg-white rounded-full flex items-center justify-center">
                    <User w={30} h={30} />
                  </div>}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start mb-4">
                   <div className="w-10 h-10 bg-white ml-1.5 rounded-full flex items-center justify-center">
                      <BotIcon w={30} h={30} />
                    </div>
                  <div className="w-10 h-10 mt-auto mr-2 bg-white rounded-full flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2 items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask your question.."
                  className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className={`p-2 rounded-full transition-colors ${
                    !inputMessage.trim() || isTyping
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}