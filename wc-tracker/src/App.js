import './App.css';
import Login from './components/register/login';

// For right now, the entire application will be "single-page"
// this means that I am coding and designing the entire app on one page, in one functional component
// until I break things apart. What can go wrong? 


function App() {
  return (
    <div>
    {/* WORKOUT PAGE */}
    <header>
     <Login />
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

      {/* PROFILE PAGE PAGE */}
      <header>
        <h1>My Profile</h1>
      </header>
        <div>
        <p>Name</p>
        <p>Email</p>
        <p>Rank</p>
        <p>Profile Picture:
          <div id="sample-pfp"></div>
        </p>
        </div>

    {/* WELCOME/HOME PAGE */}
    <header>
      <h1>Welcome!</h1>
    </header>
    <div>
      <h2>Wing Chun Workout Tracker Version 0.0.1</h2>
      <h3>Recent News and Updates:</h3>
      <ul>
        <li>Created a skeleton of the website</li>
      </ul>
    </div>
    </div>
  );
}

export default App;
