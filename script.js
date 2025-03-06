let playButton = document.querySelector("#play");
let audio = document.querySelector("audio");
let li = document.querySelector('li')

let arr = [
  {
    id: 1,
    name: "not-like-us",
    singer: "Kendrick Lamar",
    src: "./music/not-like-us.mp3",
    img: "https://i.pinimg.com/736x/cf/5a/ae/cf5aae8c7c97a13b546d78ad9d2e33da.jpg"
  },
  {
    id: 2,
    name: "melody",
    singer: "Uncknown",
    src: "./music/melody.mp3",
    img: "https://i.pinimg.com/736x/71/73/b7/7173b7e5d225380d5f3ad253db2f6893.jpg"
  },
  {
    id: 3,
    name: "blue",
    singer: "Bille Eilish",
    src: "./music/blue.mp3",
    img: "https://i.pinimg.com/736x/82/e2/85/82e28516e3879a3ed7db114dea7ba1a8.jpg"
  },
  {
    id: 4,
    name: "Gangam Style",
    singer: "Psy",
    src: "./music/gangam-style.mp3",
    img: "https://i.pinimg.com/736x/79/33/43/793343dafcaf7011b70f74e0482ef5e8.jpg"
  },
  {
    id: 5,
    name: "первое свидание",
    singer: "Алёна Швец",
    src: "./music/первое-свидание.mp3",
    img: "https://i.pinimg.com/736x/ff/29/43/ff294364d344c93e9199c4e9a866a1ae.jpg"
  },
];

playButton.onclick = () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "⏸";
  } else {
    audio.pause();
    playButton.textContent = "▶";
  }
};

function render() {
  const trackList = document.querySelector('.track-list');
  let img = document.querySelector('#img')
  let text = document.querySelector('#text')

  arr.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('track-item') 

      const numberSpan = document.createElement('span');
      numberSpan.classList.add('track-number') 
      numberSpan.textContent = item.id;

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('track-title')
      titleDiv.textContent = item.name;

      const artistsDiv = document.createElement('div');
      artistsDiv.classList.add('track-artists')
      artistsDiv.textContent = item.singer;

      const durationSpan = document.createElement('span');
      durationSpan.className = 'track-duration';
      durationSpan.textContent = audio.duration;

      li.appendChild(numberSpan);
      li.appendChild(titleDiv);
      li.appendChild(artistsDiv);
      li.appendChild(durationSpan);

      trackList.append(li)
      li.onclick = () => {
        audio.src = item.src
        audio.play()
        playButton.textContent = '⏸'
        img.src = item.img
        text.textContent = item.singer
      }
    });
  
}
render()