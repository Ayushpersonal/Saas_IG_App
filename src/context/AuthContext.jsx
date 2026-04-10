import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persistence check (e.g., from a refresh token endpoint)
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Ideally: const res = await api.get('/auth/me');
        // setUser(res.data.user);
        
        // Mocking for now
        const savedUser = localStorage.getItem('user');
        if (savedUser) setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Auth initialization failed", err);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email, password) => {
    // 1. Call your API: const res = await api.post('/login', { email, password });
    // 2. Set user: setUser(res.data.user);
    // 3. Save to storage (or cookies handled by browser)
    const isDemo = email === 'demo@cartflow.ai';
    const mockUser = { 
      id: isDemo ? 99 : 1, 
      email, 
      name: isDemo ? 'Demo User' : 'Standard User' 
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Call logout API to clear cookies
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
