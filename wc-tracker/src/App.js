import './App.css';

function App() {
  return (
    <div>
      <header>
      <div id="sample-pfp"></div>
      <h1>My Workouts</h1>
      </header>
      <div class="workouts-list">
        <div class="workout-expand">
          <h3>January 3rd, 2021</h3>
          <ul>
            <li>Tan Sau 100x</li>
            <li>Pak Dar 100x</li>
            <li>Sil Lum Tau 50x</li>
          </ul>
        </div>
        <div class="workout-collapse">
          <h3>January 2nd, 2021</h3>
        </div>
        <div class="workout-collapse">
          <h3>January 2nd, 2021</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
