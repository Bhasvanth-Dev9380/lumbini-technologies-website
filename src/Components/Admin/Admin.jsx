// Admin.jsx
import React from 'react';

const Admin = () => {
  const src = `${import.meta.env.BASE_URL}Admin/index.html`;
  return (
    <iframe
      title="Admin"
      src={src}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        backgroundColor: 'white',
        zIndex: 1000,
      }}
    />
  );
};

export default Admin;