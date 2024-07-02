//랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약엔 유저가 랜덤번호를 맞추면, 맞췄습니다
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up

// 유저가 1~100 범위 밖 숫자를 입력시 알려주고 기회 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");// play-button이라는 document선택
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chancesArea = document.getElementById("chances-area");
// Reset버튼을 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝남
let chances = 5;
let gameOver = false;
let userHistory = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function updateChances() {
    chancesArea.textContent = `남은 기회: ${chances}`;
}
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("답:", computerNum)
}
function play() {
    let userValue = parseInt(userInput.value);

    // 리셋후 바로 입력 버튼을 눌렀을 때 맞춤이 뜨는 버그가 있음
    // 입력값이 있는지 확인하는 isNaN(userValue) 추가
    if (isNaN(userValue) || userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이의 숫자를 입력해 주세요.";
        return;
    }

    if (userHistory.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
        return;
    }
    

    chances--;
    userHistory.push(userValue);
    updateChances();
    if (userValue < computerNum) {
        resultArea.textContent = "UP!!";
        console.log("Up!");
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!";
        console.log("Down!");
    } else {
        resultArea.textContent = "맞춤!!";
        console.log("맞춤");
    }

    if (chances === 0 && userValue !== computerNum) {
        gameOver = true;
        resultArea.textContent = `게임 종료! 정답은 ${computerNum}입니다.`;
    }

    if (gameOver) {
        playButton.disabled = true;
    }
}
function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "리셋되었습니다";
    chances = 5;
    gameOver = false;
    userHistory = [];
    playButton.disabled = false;
    updateChances();
}
pickRandomNum();

console.log(computerNum); 

// 배경 
// Online Tutorials 강의중 하나입니다

let numbers =document.querySelector('.numbers'); // . 안붙이면 에러 TypeError: Cannot read properties of null
let numString=numbers.textContent;
let splitNum = numString.split("");

numbers.textContent ="";
for(let i=0;i<splitNum.length;i++){
    numbers.innerHTML += "<span>"+splitNum[i]+"</span>"
}