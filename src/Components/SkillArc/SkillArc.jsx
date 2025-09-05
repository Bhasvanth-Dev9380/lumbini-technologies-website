import React from 'react';

const SkillArc = () => {

  const src = `${import.meta.env.BASE_URL}SkillArc_main_web-main/index.html`;
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      backgroundColor: 'white'
    }}>
      <iframe
        src={src}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        title="SkillArc"
      />
    </div>
  );
};

export default SkillArc; 