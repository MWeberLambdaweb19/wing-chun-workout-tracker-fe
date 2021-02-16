import {
    group1,
    group2,
    group3,
    group4,
    group5
  } from "../dummyData/dummyData.js";
  
  function ExercisesList() {
    let acc = document.getElementsByClassName("accordion");
    console.log(acc);
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        acc[i].classList.toggle("active");
        console.log(acc[i]);
      });
    }
    return (
      <div>
        <div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <h3 class="accordion">Group 1</h3>
        <div class="panel">
          {group1.map((item, key) => (
            <p id={key}>{item}</p>
          ))}
        </div>
        <h3 class="accordion">Group 2</h3>
        <div class="panel">
          {group2.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <h3 class="accordion">Group 3</h3>
        <div class="panel">
          {group3.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <h3 class="accordion">Group 4</h3>
        <div class="panel">
          {group4.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <h3 class="accordion">Group 5</h3>
        <div class="panel">
          {group5.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }
  
  export default ExercisesList;
  