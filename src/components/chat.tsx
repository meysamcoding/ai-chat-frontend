import { useState } from 'react';

const Chat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      console.error('❌ Failed to fetch:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-800 rounded">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="w-full p-3 rounded bg-gray-700 text-white mb-4"
      />
      <button
        onClick={sendMessage}
        className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-700 rounded text-white">
          <p className="font-semibold">AI Response:</p>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
