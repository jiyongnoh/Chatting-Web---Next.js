import { Server } from "socket.io";

export default async (req, res) => {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...✅");
    const httpServer = res.socket.server;

    const io = new Server(httpServer, {
      path: "/api/chat/socketio",
    });

    res.socket.server.io = io;
  }

  res.end();
};
