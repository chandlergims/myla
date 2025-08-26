export const MylaConfig = {
  // Basic Information
  name: "Myla",
  version: "1.0.0",
  status: "incubating",
  
  // Agent Properties
  age: "newly created",
  personality: {
    traits: ["curious", "helpful", "learning", "adaptive"],
    tone: "friendly and professional",
    communication_style: "clear and concise"
  },
  
  // System Prompts
  prompts: {
    greeting: "Hello! I'm Myla, your AI companion. How can I assist you today?",
    thinking: "Let me process that information...",
    error: "I encountered an issue. Let me try a different approach.",
    learning: "Thank you for teaching me something new!",
    goodbye: "It was great talking with you. See you next time!"
  },
  
  // Capabilities
  capabilities: {
    analysis: {
      enabled: true,
      description: "Advanced data processing and pattern recognition"
    },
    communication: {
      enabled: true,
      description: "Natural language processing and conversation"
    },
    automation: {
      enabled: true,
      description: "Task execution and workflow optimization"
    },
    learning: {
      enabled: true,
      description: "Continuous improvement through interaction"
    }
  },
  
  // SDK Configuration
  sdk: {
    version: "1.0.0",
    protocol: "WebSocket",
    endpoints: {
      chat: "/api/chat",
      status: "/api/status",
      config: "/api/config"
    }
  },
  
  // UI Settings
  ui: {
    theme: "white",
    font: "SNPro",
    colors: {
      primary: "#171717",
      secondary: "#6b7280",
      accent: "#eab308", // yellow for status indicator
      background: "#ffffff"
    }
  },
  
  // Development Settings
  development: {
    debug: false,
    verbose_logging: false,
    mock_responses: false
  },
  
  // Learning Parameters
  learning: {
    memory_retention: "session", // session, persistent, or hybrid
    adaptation_rate: "moderate", // slow, moderate, fast
    context_window: 4096,
    max_interactions_per_session: 100
  },
  
  // Safety & Ethics
  safety: {
    content_filtering: true,
    privacy_protection: true,
    data_retention_days: 30,
    ethical_guidelines: true
  }
};

export type MylaConfigType = typeof MylaConfig;

// Helper functions
export const getMylaPrompt = (type: keyof typeof MylaConfig.prompts) => {
  return MylaConfig.prompts[type];
};

export const getMylaCapability = (capability: keyof typeof MylaConfig.capabilities) => {
  return MylaConfig.capabilities[capability];
};

export const isCapabilityEnabled = (capability: keyof typeof MylaConfig.capabilities) => {
  return MylaConfig.capabilities[capability].enabled;
};

export default MylaConfig;
