    let container = document.getElementById("container");
    let upInner = document.getElementById("up-inner");
    let upCover = document.getElementById("up-cover");
    let down = document.getElementById("down");
    let menu = document.querySelector("menu");
    let backgroundImage = document.querySelector("[alt=some]");
    let offButton = document.getElementById("off");
    let homeButton = document.getElementById("home");
    let calories = document.getElementById("calories");
    let caloriesDisplay = document.getElementById("calories-display");
    let caloriesForm = document.getElementById("calories-form");
    let caloriesInputs = document.querySelectorAll(".calories-inputs");
    let caloriesSendButton = document.getElementById("send");
    let time = document.getElementById("time");
    let timeDisplay=document.getElementById("time-display");
    let timeContent = document.getElementById("time-content");
    let joke = document.getElementById("joke");
    let jokeDisplay = document.getElementById("joke-display");
    let jokeContent = document.getElementById("joke-content");
    let generateJoke= document.getElementById("generate-joke");
    let musicPlayButton = document.getElementById("play-and-pause");
    let musicDisplay = document.getElementById("music-display");
    let music = document.getElementById("music");
    let musicIcon = document.querySelector("[alt=music-icon]");
    const bgm = new Audio('angel-piano.mp3');
    const laughing = new Audio("laughing.mp3");

     setTimeout(function(){
        upCover.style.transform = "rotateX(15deg) translateX(-25vw)";
        upInner.style.transform = "rotateX(15deg) translateX(-25vw)";
        upInner.style.zIndex = "3";
        container.style.perspectiveOrigin='55% 20%';
     },500);
      

    
  
    offButton.addEventListener("click",function(){
      upInner.style.zIndex = "1";
      upCover.style.transform = "rotateX(-110deg) translateX(-25vw)";
      upInner.style.transform = "rotateX(-110deg) translateX(-25vw)";
      container.style.perspectiveOrigin='35% 20%';
      setTimeout(()=> window.open("","_self").close(),1700);
    })
   
  calories.addEventListener("click",function(){
    caloriesForm.style.display='flex';
    caloriesDisplay.style.display='block';
    menu.style.display='none';
    backgroundImage.style.display='none';
    upInner.style.backgroundColor='white';
  })  

  for(let i=0;i<caloriesInputs.length;i++){
    caloriesInputs[i].addEventListener("focus",function(){
      upCover.style.transform = "rotateX(180deg) translateX(-25vw)";
      upInner.style.transform = "rotateX(180deg) translateX(-25vw)";
      down.style.transform = "rotateX(-180deg) translateX(-25vw)";
      down.style.zIndex='4';
      container.style.scale='2';
      container.style.top='-50vh';
    })
    caloriesInputs[i].addEventListener("blur",function(){
      upCover.style.transform = "rotateX(15deg) translateX(-25vw)";
      upInner.style.transform = "rotateX(15deg) translateX(-25vw)";
      down.style.transform = "rotateX(-110deg) translateX(-25vw)";
      down.style.zIndex='0';
      container.style.scale='1';
      container.style.top='0';
    })
  }

  time.addEventListener("click",function(){
    timeDisplay.style.display='block';
    timeContent.innerText=new Date().toLocaleString();
    backgroundImage.style.display='none';
    upInner.style.backgroundColor='white';
    menu.style.opacity='0';
  })
    
   joke.addEventListener("click",function(){
    generateJoke.style.display='inline';
    menu.style.display='none';
    jokeDisplay.style.display='block';
    backgroundImage.style.display='none';
    upInner.style.backgroundColor='white';
   }) 
     
   music.addEventListener("click",function(){
    musicPlayButton.style.display='inline';
    menu.style.display='none';
    musicDisplay.style.display='block';
    backgroundImage.style.display='none';
    upInner.style.backgroundColor='white';
   })


   caloriesSendButton.addEventListener("click",sendCalories);
   musicPlayButton.addEventListener("click",function(){
      if(bgm.paused){
        bgm.play();
        musicIcon.src='images/pause.png';
      }else{
        bgm.pause();
        musicIcon.src='images/play.png';
      }
   })
  generateJoke.addEventListener("click",searchJoke);
   homeButton.addEventListener("click",function(){
    musicPlayButton.style.display='none';
     generateJoke.style.display='none';
     caloriesForm.style.display='none';
      bgm.pause();
      menu.style.display='grid';
      menu.style.opacity='1';
      upInner.style.backgroundColor='black';
      musicDisplay.style.display='none';
      jokeDisplay.style.display='none';
      timeDisplay.style.display='none';
      caloriesDisplay.style.display='none';
      backgroundImage.style.display='inline';
   })

  async  function sendCalories(){
    let activity = document.getElementById("activity").value;
    let weight = document.getElementById("weight").value;
    let minutes = document.getElementById("minutes").value;
    let pounds = parseInt(weight) * 2.2046226218;
    
    let url = `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${activity}&weight=${pounds}&duration=${minutes}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
        'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
     
      
      for(let i=0;i<result.length;i++){
        let box =document.createElement('div');
        box.style.marginBlock='50px';
        for (const key in result[i]) {
          let text = document.createElement('p');
          text.style.fontSize='24px';
          text.style.marginBlock='5px';
          console.log(key,result[i][key]);
          text.innerText=key+':'+result[i][key];
          box.appendChild(text);
        }
        caloriesDisplay.appendChild(box);
      }
     
    } catch (error) {
      console.error(error);
    }
   }

async function searchJoke(){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const joke = result[0].joke;
    console.log(result[0].joke);
    jokeContent.innerText=joke+'🤣';
    laughing.play();
  } catch (error) {
    console.error(error);
  }
}

const url = 'https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7f3e04d0fmsh481d6b03cd7494ep14cfdcjsn8775ef35e2c3',
		'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com'
	}
};

//0.45359237kg = 1 pound

/*

{
    "activities": [
        "Cycling, mountain bike, bmx",
        "Cycling, <10 mph, leisure bicycling",
        "Cycling, >20 mph, racing",
        "Cycling, 10-11.9 mph, light",
        "Cycling, 12-13.9 mph, moderate",
        "Cycling, 14-15.9 mph, vigorous",
        "Cycling, 16-19 mph, very fast, racing",
        "Unicycling",
        "Stationary cycling, very light",
        "Stationary cycling, light",
        "Stationary cycling, moderate",
        "Stationary cycling, vigorous",
        "Stationary cycling, very vigorous",
        "Calisthenics, vigorous, pushups, situps…",
        "Calisthenics, light",
        "Circuit training, minimal rest",
        "Weight lifting, body building, vigorous",
        "Weight lifting, light workout",
        "Health club exercise",
        "Stair machine",
        "Rowing machine, light",
        "Rowing machine, moderate",
        "Rowing machine, vigorous",
        "Rowing machine, very vigorous",
        "Ski machine",
        "Aerobics, low impact",
        "Aerobics, high impact",
        "Aerobics, step aerobics",
        "Aerobics, general",
        "Jazzercise",
        "Stretching, hatha yoga",
        "Mild stretching",
        "Instructing aerobic class",
        "Water aerobics",
        "Ballet, twist, jazz, tap",
        "Ballroom dancing, slow",
        "Ballroom dancing, fast",
        "Running, 5 mph (12 minute mile)",
        "Running, 5.2 mph (11.5 minute mile)",
        "Running, 6 mph (10 min mile)",
        "Running, 6.7 mph (9 min mile)",
        "Running, 7 mph (8.5 min mile)",
        "Running, 7.5mph (8 min mile)",
        "Running, 8 mph (7.5 min mile)",
        "Running, 8.6 mph (7 min mile)",
        "Running, 9 mph (6.5 min mile)",
        "Running, 10 mph (6 min mile)",
        "Running, 10.9 mph (5.5 min mile)",
        "Running, cross country",
        "Running, general",
        "Running, on a track, team practice",
        "Running, stairs, up",
        "Track and field (shot, discus)",
        "Track and field (high jump, pole vault)",
        "Track and field (hurdles)",
        "Archery",
        "Badminton",
        "Basketball game, competitive",
        "Playing basketball, non game",
        "Basketball, officiating",
        "Basketball, shooting baskets",
        "Basketball, wheelchair",
        "Running, training, pushing wheelchair",
        "Billiards",
        "Bowling",
        "Boxing, in ring",
        "Boxing, punching bag",
        "Boxing, sparring",
        "Coaching: football, basketball, soccer…",
        "Cricket (batting, bowling)",
        "Croquet",
        "Curling",
        "Darts (wall or lawn)",
        "Fencing",
        "Football, competitive",
        "Football, touch, flag, general",
        "Football or baseball, playing catch",
        "Frisbee playing, general",
        "Frisbee, ultimate frisbee",
        "Golf, general",
        "Golf, walking and carrying clubs",
        "Golf, driving range",
        "Golf, miniature golf",
        "Golf, walking and pulling clubs",
        "Golf, using power cart",
        "Gymnastics",
        "Hacky sack",
        "Handball",
        "Handball, team",
        "Hockey, field hockey",
        "Hockey, ice hockey",
        "Riding a horse, general",
        "Horesback riding, saddling horse",
        "Horseback riding, grooming horse",
        "Horseback riding, trotting",
        "Horseback riding, walking",
        "Horse racing, galloping",
        "Horse grooming, moderate",
        "Horseshoe pitching",
        "Jai alai",
        "Martial arts, judo, karate, jujitsu",
        "Martial arts, kick boxing",
        "Martial arts, tae kwan do",
        "Krav maga training",
        "Juggling",
        "Kickball",
        "Lacrosse",
        "Orienteering",
        "Playing paddleball",
        "Paddleball, competitive",
        "Polo",
        "Racquetball, competitive",
        "Playing racquetball",
        "Rock climbing, ascending rock",
        "Rock climbing, rappelling",
        "Jumping rope, fast",
        "Jumping rope, moderate",
        "Jumping rope, slow",
        "Rugby",
        "Shuffleboard, lawn bowling",
        "Skateboarding",
        "Roller skating",
        "Roller blading, in-line skating",
        "Sky diving",
        "Soccer, competitive",
        "Playing soccer",
        "Softball or baseball",
        "Softball, officiating",
        "Softball, pitching",
        "Squash",
        "Table tennis, ping pong",
        "Tai chi",
        "Playing tennis",
        "Tennis, doubles",
        "Tennis, singles",
        "Trampoline",
        "Volleyball, competitive",
        "Playing volleyball",
        "Volleyball, beach",
        "Wrestling",
        "Wallyball",
        "Backpacking, Hiking with pack",
        "Carrying infant, level ground",
        "Carrying infant, upstairs",
        "Carrying 16 to 24 lbs, upstairs",
        "Carrying 25 to 49 lbs, upstairs",
        "Standing, playing with children, light",
        "Walk/run, playing with children, moderate",
        "Walk/run, playing with children, vigorous",
        "Carrying small children",
        "Loading, unloading car",
        "Climbing hills, carrying up to 9 lbs",
        "Climbing hills, carrying 10 to 20 lb",
        "Climbing hills, carrying 21 to 42 lb",
        "Climbing hills, carrying over 42 lb",
        "Walking downstairs",
        "Hiking, cross country",
        "Bird watching",
        "Marching, rapidly, military",
        "Children's games, hopscotch, dodgeball",
        "Pushing stroller or walking with children",
        "Pushing a wheelchair",
        "Race walking",
        "Rock climbing, mountain climbing",
        "Walking using crutches",
        "Walking the dog",
        "Walking, under 2.0 mph, very slow",
        "Walking 2.0 mph, slow",
        "Walking 2.5 mph",
        "Walking 3.0 mph, moderate",
        "Walking 3.5 mph, brisk pace",
        "Walking 3.5 mph, uphill",
        "Walking 4.0 mph, very brisk",
        "Walking 4.5 mph",
        "Walking 5.0 mph",
        "Boating, power, speed boat",
        "Canoeing, camping trip",
        "Canoeing, rowing, light",
        "Canoeing, rowing, moderate",
        "Canoeing, rowing, vigorous",
        "Crew, sculling, rowing, competition",
        "Kayaking",
        "Paddle boat",
        "Windsurfing, sailing",
        "Sailing, competition",
        "Sailing, yachting, ocean sailing",
        "Skiing, water skiing",
        "Ski mobiling",
        "Skin diving, fast",
        "Skin diving, moderate",
        "Skin diving, scuba diving",
        "Snorkeling",
        "Surfing, body surfing or board surfing",
        "Whitewater rafting, kayaking, canoeing",
        "Swimming laps, freestyle, fast",
        "Swimming laps, freestyle, slow",
        "Swimming backstroke",
        "Swimming breaststroke",
        "Swimming butterfly",
        "Swimming leisurely, not laps",
        "Swimming sidestroke",
        "Swimming synchronized",
        "Swimming, treading water, fast, vigorous",
        "Swimming, treading water, moderate",
        "Water aerobics, water calisthenics",
        "Water polo",
        "Water volleyball",
        "Water jogging",
        "Diving, springboard or platform",
        "Ice skating, < 9 mph",
        "Ice skating, average speed",
        "Ice skating, rapidly",
        "Speed skating, ice, competitive",
        "Cross country snow skiing, slow",
        "Cross country skiing, moderate",
        "Cross country skiing, vigorous",
        "Cross country skiing, racing",
        "Cross country skiing, uphill",
        "Snow skiing, downhill skiing, light",
        "Downhill snow skiing, moderate",
        "Downhill snow skiing, racing",
        "Sledding, tobagganing, luge",
        "Snow shoeing",
        "Snowmobiling",
        "General housework",
        "Cleaning gutters",
        "Painting",
        "Sit, playing with animals",
        "Walk / run, playing with animals",
        "Bathing dog",
        "Mowing lawn, walk, power mower",
        "Mowing lawn, riding mower",
        "Walking, snow blower",
        "Riding, snow blower",
        "Shoveling snow by hand",
        "Raking lawn",
        "Gardening, general",
        "Bagging grass, leaves",
        "Watering lawn or garden",
        "Weeding, cultivating garden",
        "Carpentry, general",
        "Carrying heavy loads",
        "Carrying moderate loads upstairs",
        "General cleaning",
        "Cleaning, dusting",
        "Taking out trash",
        "Walking, pushing a wheelchair",
        "Teach physical education,exercise class",
        "Teach exercise classes (& participate)"
    ]
}


*/ 
