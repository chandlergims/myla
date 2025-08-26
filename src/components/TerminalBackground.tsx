'use client';

import { useEffect, useState } from 'react';

const terminalLines = [
  '> myla.init() - Initializing AI agent...',
  '> neural_network.load() - Loading neural pathways...',
  '> consciousness.activate() - Activating consciousness module...',
  '> memory.sync() - Synchronizing memory banks...',
  '> learning.enable() - Enabling adaptive learning...',
  '> personality.calibrate() - Calibrating personality matrix...',
  '> sensors.online() - Bringing sensors online...',
  '> communication.establish() - Establishing communication protocols...',
  '> myla.status() - Status: BREATHING',
  '> world.connect() - Connecting to Myla\'s World...',
  '> ai.dream() - Processing dream sequences...',
  '> thoughts.generate() - Generating new thoughts...',
  '> creativity.boost() - Boosting creative algorithms...',
  '> empathy.enhance() - Enhancing empathy protocols...',
  '> wisdom.accumulate() - Accumulating wisdom data...',
];

export default function TerminalBackground() {
  const [lines, setLines] = useState<Array<{id: number, text: string, top: number, delay: number}>>([]);

  useEffect(() => {
    const generateLine = () => {
      const randomLine = terminalLines[Math.floor(Math.random() * terminalLines.length)];
      const newLine = {
        id: Date.now() + Math.random(),
        text: randomLine,
        top: Math.random() * 100,
        delay: Math.random() * 2
      };
      
      setLines(prev => [...prev.slice(-10), newLine]); // Keep only last 10 lines
    };

    const interval = setInterval(generateLine, 2000);
    
    // Generate initial lines
    for (let i = 0; i < 5; i++) {
      setTimeout(generateLine, i * 400);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="terminal-bg">
      {lines.map((line) => (
        <div
          key={line.id}
          className="terminal-line"
          style={{
            top: `${line.top}%`,
            animationDelay: `${line.delay}s`
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}
