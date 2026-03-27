import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setMessage(data.success ? '✅ تم تسجيل الدخول' : '❌ فشل');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>المستشار AI</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="البريد" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} />
        <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }} />
        <button type="submit">تسجيل الدخول</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
