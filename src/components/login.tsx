import { useEffect, useState } from 'react';
import { auth, provider } from '../firebase/config';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import type { User } from 'firebase/auth';

const Login = () => {
  const [user, setUser] = useState<User | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Google sign-in
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // update local state
    } catch (error) {
      console.error("❌ Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      {user ? (
        <p className="text-lg font-semibold">👋 Welcome, {user.displayName}</p>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
