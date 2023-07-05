import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// * Socket.io
import SocketIOClient from "socket.io-client";

// * MUI
import { Stack, TextField, Alert, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Chatting() {
  const [sendMessage, setSendMessage] = useState("");
  const [connected, setConnected] = useState(false);
  const [chat, setChat] = useState([]);
  const [username, setUsername] = useState("Guest");

  // 소켓 연결
  useEffect(() => {
    // SSR 에서는 client(브라우저) 메서드인 localStorage를 사용할 수 없음
    // 그러므로 useEffect처럼 브라우저 렌더링이 완료된 뒤 실행되는 메서드에 넣어 값을 갱신해야 함.
    setUsername(localStorage.getItem("id"));

    // 접속용 소켓 객체 생성
    const socket = SocketIOClient.connect({
      path: "/api/chat/socketio",
    });

    // 소켓 연결 활성화
    // on: 소켓의 이벤트 발생 시, 데이터를 받아와 콜백을 실행하는 메서드. (eventName, callBack)
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    // 소켓의 메세지가 update 될 때마다 메세지를 받아와서 갱신.
    socket.on("message", (message) => {
      chat.push(message);
      setChat([...chat]);
    });

    // 소켓이 이미 연결되어 있을 시 연결 해제.
    if (socket) return () => socket.disconnect();
  }, []);

  // 메세지 text 변경 onChange 메서드
  const sendMessageHandler = useCallback(
    (e) => {
      setSendMessage(e.target.value);
    },
    [sendMessage]
  );
  // Enter 입력 시 일어나는 이벤트 onKeyPress 메서드
  const enterKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // send message
      e.preventDefault();
      submitSendMessage(e);
    }
  };
  // 메세지를 소켓에 전달하는 메서드
  const submitSendMessage = async (event) => {
    event.preventDefault();
    if (sendMessage) {
      const message = {
        user: username,
        message: sendMessage,
      };

      const response = await axios.post("/api/chat", message);
      // 이후 초기화
      setSendMessage("");
    }
  };

  return (
    <div className="container">
      <Stack spacing={2} direction="column">
        <Alert severity="info">
          채팅 기능은 로그인된 유저에게만 제공됩니다.
        </Alert>
        {/* 채팅 메시지 출력 영역 */}
        <Stack spacing={2} direction="column">
          <Paper variant="outlined" sx={{ minHeight: "300px" }}>
            {chat.length ? (
              chat.map((chat, index) => (
                <div className="chat-message" key={index}>
                  {chat.user} : {chat.message}
                </div>
              ))
            ) : (
              <div className="alert-message">채팅을 시작합니다</div>
            )}
          </Paper>
        </Stack>
        {/* 채팅 메시지 입력 영역 */}
        <Stack spacing={1} direction="row">
          <textarea
            id="chat-message-input"
            label="enter your message"
            variant="outlined"
            value={sendMessage}
            onChange={sendMessageHandler}
            margin="normal"
            autoFocus
            multiline
            rows={2}
            fullWidth
            onKeyUp={enterKeyPress}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={submitSendMessage}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
