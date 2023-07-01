export default async (req, res) => {
  if (req.method === "POST") {
    const message = req.body;
    // emit: 소켓에 데이터를 보내는 메서드. (eventName, data)
    res.socket.server.io.emit("message", message);

    res.status(201).json(message);
  }
};
