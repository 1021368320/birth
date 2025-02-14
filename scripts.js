// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // 背景音乐控制
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggle.textContent = '暂停音乐';
    } else {
      bgMusic.pause();
      musicToggle.textContent = '播放音乐';
    }
  });

  // 生日计数器
  const birthDate = new Date('2000-02-14');
  const counter = document.getElementById('counter');
  const counterMessage = document.getElementById('counter-message');

  function updateCounter() {
    const now = new Date();
    const diff = now - birthDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    counter.textContent = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    counterMessage.textContent = `你已经闪耀了${days}天！`;
  }
  setInterval(updateCounter, 1000);

  // 蜡烛交互
  const candles = document.querySelectorAll('.candle');
  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      candle.style.opacity = 0;
      const wishNote = document.createElement('div');
      wishNote.textContent = '愿望成真！';
      wishNote.classList.add('wish-note');
      document.body.appendChild(wishNote);
      setTimeout(() => wishNote.remove(), 2000);
    });
  });

  // 祝福留言板
  const wishInput = document.getElementById('wish-input');
  const submitWish = document.getElementById('submit-wish');
  const wishDisplay = document.getElementById('wish-display');

  submitWish.addEventListener('click', () => {
    const wish = wishInput.value.trim();
    if (wish) {
      const wishItem = document.createElement('p');
      wishItem.textContent = wish;
      wishDisplay.appendChild(wishItem);
      wishInput.value = '';
    }
  });
});