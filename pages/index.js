'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import Bills from '../components/Bills';
import Analytics from '../components/Analytics';
import Rewards from '../components/Rewards';

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />
      {!user ? <Landing /> : <Dashboard user={user} />}
      <Bills />
      <Analytics />
      <Rewards />
      <Footer />
    </div>
  );
}
