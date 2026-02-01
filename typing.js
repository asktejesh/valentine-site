const letter = [
  "My Dear Karthi 🥰,\n\n",
  "Thank you for coming into my life. I didn’t know what I was missing until I met you. Every day, I feel so happy to have you by my side.\n\n",
  "We’ve been together for one year now, and I still love every moment with you. Our cute fights, our silly laughs, and the way we understand each other make our relationship so special. You always make me smile, even when I’m having a bad day.\n\n",
  "I miss you every day when we are apart. Your voice, your smile, your hugs everything about you makes my heart feel warm and loved.\n\n",
  "I hope that by 2028, we will be together, ready for our marriage, and building our beautiful future. I can’t wait for that day, because I know our love is meant to last forever.\n\n",
  "Thank you for loving me and making my life so beautiful. I love you.\n\n"
];

const signatureText = "Yours forever,\nChandu 💖";

let i = 0, j = 0;
const speed = 35;
const typedText = document.getElementById("typed-text");
const signature = document.getElementById("signature");

function typeLetter() {
  if (i < letter.length) {
    if (j < letter[i].length) {
      typedText.innerHTML += letter[i][j] === "\n" ? "<br>" : letter[i][j];
      j++;
      setTimeout(typeLetter, speed);
    } else {
      i++;
      j = 0;
      setTimeout(typeLetter, 400);
    }
  } else {
    signature.innerHTML = signatureText.replace("\n", "<br>");
  }
}

window.onload = typeLetter;
