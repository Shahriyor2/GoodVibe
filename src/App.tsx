import { useState } from "react";
import first from "./assets/1.gif";
import second from "./assets/2.gif";
import third from "./assets/3.gif";
import chetvortiy from "./assets/4.gif";
import patiy from "./assets/5.gif";
import шестой from "./assets/6.gif";
import седьмой from "./assets/7.gif";
import восмой from "./assets/8.gif";
import девятый from "./assets/9.gif";
import десятый from "./assets/10.gif";
import одинадйаитый from "./assets/11.gif";

const messages = [
  "Ты очень добрая. И это чувствуется.",
  "Даже в грусти ты остаёшься светлой.",
  "Ты важнее, чем тебе кажется.",
  "Мир становится тише, когда ты улыбаешься.",
  "Кто-то сейчас думает о тебе с теплом.",
  "Ты заслуживаешь заботы. Просто так.",
  "Иногда достаточно одного доброго момента.",
  "Ты умеешь создавать уют вокруг себя.",
  "Иногда твоё присутствие достаточно, чтобы день стал светлее.",
  "Твои мысли и поступки ценны больше, чем ты думаешь.",
  "Не забывай, что мир любит твою доброту.",
  "Ты — причина, почему кто-то улыбается сегодня.",
];

const gifs = [
  first,
  second,
  third,
  chetvortiy,
  patiy,
  шестой,
  седьмой,
  восмой,
  девятый,
  десятый,
  одинадйаитый,
];

export default function HeartCard() {
  const [started, setStarted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [gifIndex, setGifIndex] = useState(0);
  const [heart, setHeart] = useState("🤍");
  const [heartStyle, setHeartStyle] = useState({});
  const [messageOpacity, setMessageOpacity] = useState(1);
  const [clickCount, setClickCount] = useState(0);

  const startSlideshow = () => setStarted(true);

  const showMessage = () => {
    const nextGifIndex = (gifIndex + 1) % gifs.length;
    setGifIndex(nextGifIndex);

    const nextMessageIndex = (messageIndex + 1) % messages.length;
    setMessageIndex(nextMessageIndex);
    setClickCount((prev) => (prev + 1) % messages.length);

    setMessageOpacity(0);
    setTimeout(() => {
      setMessageOpacity(1);

      setHeart("❤️");
      setHeartStyle({ transform: "scale(1.4) rotate(10deg)" });

      setTimeout(() => {
        setHeart("🤍");
        setHeartStyle({ transform: "scale(1) rotate(0deg)" });
      }, 500);
    }, 200);
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <div style={{ ...styles.heart, ...heartStyle }}>{heart}</div>

        {!started ? (
          <>
            <div style={styles.message}>
              Привет, Катя! Планировал отправить в момент, когда тебе было не по
              себе, не суть - просто читай 💫
            </div>
            <button style={styles.button} onClick={startSlideshow}>
              Начать
            </button>
          </>
        ) : (
          <>
            <img src={gifs[gifIndex]} alt="милые гифки" style={styles.gif} />

            <div style={{ ...styles.message, opacity: messageOpacity }}>
              {messages[messageIndex]}
            </div>

            <div style={styles.counter}>
              Нажатий: {clickCount + 1} из {messages.length}
            </div>

            <button style={styles.button} onClick={showMessage}>
              Следующее 💫
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    margin: 0,
    padding: 0,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fde2e4, #e0f4ff)",
    fontFamily: '"Segoe UI", sans-serif',
  },
  card: {
    background: "white",
    padding: "50px 30px",
    borderRadius: 24,
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
    width: "90%",
    maxWidth: 420,
    boxSizing: "border-box",
  },
  heart: {
    fontSize: 64,
    marginBottom: 15,
    transition: "transform 0.4s ease",
  },
  gif: {
    width: 150,
    height: 150,
    margin: "0 auto 20px",
    borderRadius: 12,
    objectFit: "cover" as const,
  },
  message: {
    fontSize: 22,
    color: "#444",
    marginBottom: 20,
    minHeight: 80,
    lineHeight: 1.5,
    transition: "opacity 0.5s ease",
  },
  counter: {
    marginBottom: 15,
    fontSize: 16,
    color: "#666",
  },
  button: {
    background: "#ff6b81",
    color: "white",
    border: "none",
    padding: "18px 36px",
    borderRadius: 999,
    fontSize: 20,
    cursor: "pointer",
    transition: "background 0.25s, transform 0.25s",
    width: "100%",
    maxWidth: 300,
  },
};
