import { ChatMessage } from "src/types/chat";

let messageCallback: ((message: ChatMessage) => void) | null = null;

// Create WebSocket connection.
const wsUrl = `${import.meta.env.VITE_WEBSOCKET_URL || "ws://localhost:5050"}/history-stream`;
const ws = new WebSocket(wsUrl);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const message: ChatMessage = {
    ...data,
  };

  if (messageCallback) {
    messageCallback(message);
  }
};

export const chatDataService = {
  onMessage(callback: (message: ChatMessage) => void): void {
    messageCallback = callback;
  },
};
