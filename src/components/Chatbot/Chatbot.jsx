import React, { useState } from 'react';
import { Chatbot, createChatBotMessage } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const config = {
  botName: 'DisasterManager',
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(188,67,203,1) 0%, rgba(21,168,197,1) 100%)',
    },
    chatButton: {
      backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(188,67,203,1) 0%, rgba(21,168,197,1) 100%)',
    },
  },
};

class ActionProvider {
  constructor(createChatBotMessage, setState, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
    this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
    const message = this.createChatBotMessage("Hi there! How can I help?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleHelp = () => {
    const message = this.createChatBotMessage("For immediate assistance, please call our helpline at: 112.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

// Define the MessageParser to parse incoming messages
class MessageParser {
  constructor(actionProvider, createChatBotMessage) {
    this.actionProvider = actionProvider;
    this.createChatBotMessage = createChatBotMessage;
  }

  parse(message) {
    if (message.toLowerCase().includes('hello')) {
      this.actionProvider.handleHello();
    } else if (message.toLowerCase().includes('help')) {
      this.actionProvider.handleHelp();
    }
  }
}

// Define the main chatbot component
const EWSChatbot = () => {
  const [showChat, setShowChat] = useState(true);

  return (
    <div>
      {showChat && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
      <button
        onClick={() => setShowChat(!showChat)}
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
            width: '4rem',
            height: '4rem',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(188,67,203,1) 0%, rgba(21,168,197,1) 100%)', // Ensure this is the intended color
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Optional: adds shadow for better visibility
            transition: 'background 0.3s ease', // Optional: smooth background transition
          }}
      >
          <img
          src="../../../public/images/chatbot.png"
          alt="Chat icon" style={{width: '2rem',height: '2rem'}}
  />

      </button>
    </div>
  );
};

export default EWSChatbot;
