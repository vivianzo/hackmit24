import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);  // Chat messages state
  const [newMessage, setNewMessage] = useState('');  // Input state for new message

  const handleSendMessage = () => {
    // Prevent adding empty messages
    if (newMessage.trim() === "") return;
    
    // Add the new message to the messages array
    setMessages([...messages, newMessage]);
    
    // Clear the input field after sending
    setNewMessage('');
  };

  return (
    <div>
      <h2>Chat Page</h2>
      
      {/* Display messages */}
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>

      {/* Input for new messages */}
      <div className="message-input">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type your message here..." 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
