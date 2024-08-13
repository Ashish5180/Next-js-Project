"use client";

import { useState, useEffect, useRef } from 'react';

function SkillProgressBar({ skill, initialPercentage }) {
  const [percentage, setPercentage] = useState(initialPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const barRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!isDragging || !barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newPercentage = Math.min(100, Math.max(0, Math.round((offsetX / rect.width) * 100)));
    setPercentage(newPercentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMouseMove(e); // Update the position immediately
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    // Set the initial percentage based on prop
    setPercentage(initialPercentage);
  }, [initialPercentage]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-semibold">{skill}</span>
        <span className="text-orange-500 font-semibold">{percentage}%</span>
      </div>
      <div
        ref={barRef}
        className="w-full bg-gray-300 rounded-full h-2.5 relative cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
        <div
          className="absolute top-[-1.8px] -right-1 w-4 h-4 bg-white border-2 border-orange-700 rounded-full"
          style={{ left: `${percentage}%`, transform: 'translateX(-50%) ' }}
        ></div>
      </div>
    </div>
  );
}

export default SkillProgressBar;
