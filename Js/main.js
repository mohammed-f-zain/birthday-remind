let profiles = [
  {
    username: "eva",
    gender: "female",
    birthday: "05 May 1994",
  },
  {
    username: "Mohammad",
    gender: "Male",
    birthday: "05 May 1997",
  },
  {
    username: "Majd",
    gender: "Female",
    birthday: "05 May 1995",
  },
  {
    username: "Rawan",
    gender: "Female",
    birthday: "05 May 2000",
  },
  {
    username: "Hussam",
    gender: "Male",
    birthday: "05 May 1999",
  },
];

let profilesContainer = document.getElementById("birthday__profile-container");
let currentDate = new Date();
let month = currentDate.toLocaleString("default", { month: "long" });
let day = currentDate.getDay();
let counter = 0;
let span = document.getElementById("counter");
let year = currentDate.getFullYear();

for (let profile of profiles) {
  let birthday = profile.birthday.split(" ");
  let age_cal = year - birthday[2];
  if (birthday[1] === month && birthday[0] == day) {
    //Way 1 : The easy way
    if (profile.gender == "Male") {
      profilesContainer.innerHTML += ` <div class="birthday__profile">
            <img src="images/male.png" alt="">
            <div class="birthday__info">
                <p>${profile.username}</p>
                <p> ${age_cal}</p>
            </div>
        </div>`;
      counter++;
      span.innerHTML = `${counter}`;
    } else {
      profilesContainer.innerHTML += ` <div class="birthday__profile">
            <img src="images/female.png" alt="">
            <div class="birthday__info">
                <p>${profile.username}</p>
                <p> ${age_cal}</p>
            </div>
        </div>`;
      counter++;
      span.innerHTML = `${counter}`;
    }
  }
}
document.querySelector(".btn__clear").addEventListener("click", function () {
  console.log("test");
  counter = 0;
  span.innerHTML = `${counter}`;
  profilesContainer.innerHTML = ``;
});

//Way 2 : The hard way
//  let profileCard =  document.createElement('div')
// profileCard.className='birthday__profile';
// profilesContainer.appendChild(profileCard)
// let profileImg = document.createElement('img')
// profileImg.setAttribute('src','assets/img/female.png')
// profileCard.appendChild(profileImg);
// let birthdayInfo = document.createElement('div')
// birthdayInfo.className = 'birthday__info'
// profileCard.appendChild(birthdayInfo)**
// let username = document.createElement('p')
//username.appendChild(document.createTextNode(profile.username))
//birthdayInfo.appendChild(username)
//let age = document.createElement('p')
//age.appendChild(document.createTextNode(profile.age))
//birthdayInfo.appendChild(age)
//console.log(profile)
