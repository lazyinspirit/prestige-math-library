export const TRACKS = Object.freeze([
  { title: 'Salut d’Amour, Op. 12', composer: 'Edward Elgar', performer: 'Luis Kolodin', file: '/audio/elgar-salut.mp3' },
  { title: 'Prelude in C Major, BWV 846', composer: 'J. S. Bach', performer: 'Kimiko Ishizaka', file: '/audio/bach-prelude.mp3' },
  { title: 'Moonlight Sonata · II. Allegretto', composer: 'Ludwig van Beethoven', performer: 'Musopen recording', file: '/audio/beethoven-allegretto.mp3' },
  { title: 'Nocturne, Op. 9 No. 2', composer: 'Frédéric Chopin', performer: 'Frank Levy', file: '/audio/chopin-nocturne.mp3' },
]);

export function initMusic() {
  const audio = document.querySelector('#piano');
  const toggle = document.querySelector('#music-toggle');
  const menu = document.querySelector('#music-menu');
  const panel = document.querySelector('#music-panel');
  const status = document.querySelector('#music-status');
  const playlist = document.querySelector('#playlist');
  let index = 0, desiredPlaying = true, waitingForGesture = false, request = 0;
  audio.volume = .24;

  function update() {
    const playing = !audio.paused;
    toggle.setAttribute('aria-pressed', String(playing));
    toggle.setAttribute('aria-label', playing ? 'Pause piano music' : 'Play piano music');
    toggle.title = `${playing ? 'Pause' : 'Play'} · ${TRACKS[index].title}`;
    toggle.classList.toggle('playing', playing);
    document.querySelector('#music-pause').hidden = !playing;
    playlist.querySelectorAll('button').forEach((button, i) => button.setAttribute('aria-current', String(i === index)));
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
  }
  function loadTrack(next) {
    index = (next + TRACKS.length) % TRACKS.length;
    audio.src = TRACKS[index].file;
    if ('mediaSession' in navigator && 'MediaMetadata' in window) {
      navigator.mediaSession.metadata = new MediaMetadata({ title: TRACKS[index].title, artist: TRACKS[index].performer, album: 'The mathematical universe' });
    }
    update();
  }
  async function play() {
    desiredPlaying = true;
    const ticket = ++request;
    status.textContent = 'Loading piano…';
    try {
      await audio.play();
      if (ticket !== request) return;
      waitingForGesture = false;
      status.textContent = `${TRACKS[index].performer} · repeating playlist`;
    } catch (error) {
      if (ticket !== request || !desiredPlaying) return;
      waitingForGesture = error.name === 'NotAllowedError';
      status.textContent = waitingForGesture ? 'Press ♪ or touch the galaxy to play.' : 'This track could not play. Try again or choose another.';
    }
    update();
  }
  function pause() {
    desiredPlaying = false; waitingForGesture = false; request++;
    audio.pause(); status.textContent = 'Paused'; update();
  }
  function nextTrack() { loadTrack(index + 1); if (desiredPlaying) void play(); }
  for (const [i, track] of TRACKS.entries()) {
    const button = document.createElement('button');
    const title = document.createElement('span'), composer = document.createElement('small');
    title.textContent = track.title; composer.textContent = track.composer;
    button.append(title, composer);
    button.onclick = () => { loadTrack(i); void play(); };
    playlist.append(button);
  }
  toggle.onclick = () => { if (desiredPlaying && !audio.paused) pause(); else void play(); };
  menu.onclick = () => { panel.hidden = !panel.hidden; menu.setAttribute('aria-expanded', String(!panel.hidden)); };
  document.querySelector('#music-next').onclick = nextTrack;
  document.querySelector('#music-volume').oninput = event => { audio.volume = Number(event.target.value); };
  audio.addEventListener('ended', nextTrack);
  audio.addEventListener('play', update);
  audio.addEventListener('pause', update);
  audio.addEventListener('error', () => { status.textContent = 'This track could not load. Choose another or retry.'; update(); });
  document.querySelector('#universe').addEventListener('pointerdown', () => { if (waitingForGesture) void play(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { panel.hidden = true; menu.setAttribute('aria-expanded', 'false'); } });
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => void play());
    navigator.mediaSession.setActionHandler('pause', pause);
    navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
    navigator.mediaSession.setActionHandler('previoustrack', () => { loadTrack(index - 1); if (desiredPlaying) void play(); });
  }
  loadTrack(0);
  void play(); // A blocked autoplay request becomes a click-to-start state, never a fake playing state.
}
