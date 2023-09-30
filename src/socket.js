import { io } from "socket.io-client";

const url = process.env.NODE_ENV === 'production' ? 'https://sketchpad-server.onrender.com' : 'http://localhost:5000'

export const socket = io(url);