// import React, { useState } from "react";

// const messages = [
//   "Ты очень добрая. И это чувствуется.",
//   "Даже в грусти ты остаёшься светлой.",
//   "Ты важнее, чем тебе кажется.",
//   "Мир становится тише, когда ты улыбаешься.",
//   "Кто-то сейчас думает о тебе с теплом.",
//   "Ты заслуживаешь заботы. Просто так.",
//   "Иногда достаточно одного доброго момента.",
// ];

// export default function HeartCard() {
//   const [message, setMessage] = useState("Если тебе грустно — ты не одна.");
//   const [heart, setHeart] = useState("🤍");
//   const [heartStyle, setHeartStyle] = useState({});
//   const [messageOpacity, setMessageOpacity] = useState(1);

//   const showMessage = () => {
//     const random = Math.floor(Math.random() * messages.length);
//     setMessageOpacity(0);

//     setTimeout(() => {
//       setMessage(messages[random]);
//       setMessageOpacity(1);

//       setHeart("❤️");
//       setHeartStyle({ transform: "scale(1.4) rotate(10deg)" });

//       setTimeout(() => {
//         setHeart("🤍");
//         setHeartStyle({ transform: "scale(1) rotate(0deg)" });
//       }, 500);
//     }, 200);
//   };

//   const styles = {
//     body: {
//       margin: 0,
//       padding: 0,
//       height: "100vh",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background: "linear-gradient(135deg, #fde2e4, #e0f4ff)",
//       fontFamily: '"Segoe UI", sans-serif',
//     },
//     card: {
//       background: "white",
//       padding: "50px 30px",
//       borderRadius: "24px",
//       textAlign: "center",
//       boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
//       width: "90%",
//       maxWidth: "420px",
//       boxSizing: "border-box",
//     },
//     heart: {
//       fontSize: "64px",
//       marginBottom: "25px",
//       transition: "transform 0.4s ease",
//     },
//     message: {
//       fontSize: "22px",
//       color: "#444",
//       marginBottom: "30px",
//       minHeight: "80px",
//       lineHeight: 1.5,
//       transition: "opacity 0.5s ease",
//     },
//     button: {
//       background: "#ff6b81",
//       color: "white",
//       border: "none",
//       padding: "18px 36px",
//       borderRadius: "999px",
//       fontSize: "20px",
//       cursor: "pointer",
//       transition: "background 0.25s, transform 0.25s",
//       width: "100%",
//       maxWidth: "300px",
//     },
//   };

//   return (
//     <div style={styles.body}>
//       <div style={styles.card}>
//         <div style={{ ...styles.heart, ...heartStyle }}>{heart}</div>
//         <div style={{ ...styles.message, opacity: messageOpacity }}>
//           {message}
//         </div>
//         <button style={styles.button} onClick={showMessage}>
//           Нажми 💫
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import first from "./assets/1.gif";
import second from "./assets/2.gif";
import third from "./assets/3.gif";
import chetvortiy from "./assets/4.gif";
import patiy from "./assets/5.gif";
//
import шестой from "./assets/6.gif";
import седьмой from "./assets/7.gif";
import восмой from "./assets/8.gif";
import девятый from "./assets/9.gif";
import десятый from "./assets/10.gif";
import одинадйаитый from "./assets/11.gif";

// Сообщения
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
  const [message, setMessage] = useState("Если тебе грустно — ты не одна.");
  const [heart, setHeart] = useState("🤍");
  const [heartStyle, setHeartStyle] = useState({});
  const [messageOpacity, setMessageOpacity] = useState(1);
  const [gifIndex, setGifIndex] = useState(0);

  const showMessage = () => {
    const randomMessageIndex = Math.floor(Math.random() * messages.length);
    const nextGifIndex = (gifIndex + 1) % gifs.length;

    setMessageOpacity(0);

    setTimeout(() => {
      setMessage(messages[randomMessageIndex]);
      setMessageOpacity(1);

      setHeart("❤️");
      setHeartStyle({ transform: "scale(1.4) rotate(10deg)" });

      setGifIndex(nextGifIndex);

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

        {/* GIF перед сообщением */}
        <img
          src={gifs[gifIndex]}
          alt="тут должны были быть милые гифки, но код решил не вставлять их"
          style={styles.gif}
        />

        <div style={{ ...styles.message, opacity: messageOpacity }}>
          {message}
        </div>
        <button style={styles.button} onClick={showMessage}>
          Нажми 💫
        </button>
      </div>
    </div>
  );
}

const styles = {
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
    borderRadius: "24px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
    width: "90%",
    maxWidth: "420px",
    boxSizing: "border-box",
  },
  heart: {
    fontSize: "64px",
    marginBottom: "15px",
    transition: "transform 0.4s ease",
  },
  gif: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px",
    borderRadius: "12px",
    objectFit: "cover",
  },
  message: {
    fontSize: "22px",
    color: "#444",
    marginBottom: "30px",
    minHeight: "80px",
    lineHeight: 1.5,
    transition: "opacity 0.5s ease",
  },
  button: {
    background: "#ff6b81",
    color: "white",
    border: "none",
    padding: "18px 36px",
    borderRadius: "999px",
    fontSize: "20px",
    cursor: "pointer",
    transition: "background 0.25s, transform 0.25s",
    width: "100%",
    maxWidth: "300px",
  },
};
