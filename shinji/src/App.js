import logo from './logo.svg';
import './App.css';
import sound from './sound/Helicopter.mp3'


const audio = new Audio(sound)

function onSoundButtonClick() {
  audio.play()
}

function onStopButtonClick() {
  audio.pause()
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h6 style={{fontSize: '200px', margin: 0}}>Shinji</h6>
        <div>
          <button class="button" style={{ backgroundColor: 'blue' }} title='SoundButton'  onClick={onSoundButtonClick}>Sound</button>
          <button class="button" style={{ backgroundColor: 'red' }} title='StopButton'  onClick={onStopButtonClick}>Stop</button>
        </div>
      </header>
    </div>
  );
}


export default App;
