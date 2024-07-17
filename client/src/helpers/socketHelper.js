import { io } from "socket.io-client";
import { BASE_URL } from "../config";
import { isLoggedIn } from "./authHelper";

export let socket;

export const initiateSocketConnection = () => {
  const user = isLoggedIn();
  const token = user ? user.token : null;

  socket = io(BASE_URL, {
    transports: ['websocket'], // Ensure WebSocket transport is enabled
    auth: {
      token: token,
    },
    withCredentials: true, // Enable credentials if required
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('connect_error', (error) => {
    console.error('WebSocket connection error:', error);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  socket.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log('Socket disconnected');
  }
};
