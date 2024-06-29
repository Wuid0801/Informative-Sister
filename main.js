//랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약엔 유저가 랜덤번호를 맞추면, 맞췄습니다
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up
// Reset버튼을 누르면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝남
// 유저가 1~100 범위 밖 숫자를 입력시 알려주고 기회 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button");// play-button이라는 document선택
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("result-area");


playButton.addEventListener("click", play);

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
}
function play() {
    let userValue = userInput.value;
    if (userValue < computerNum) {
        resultArea.textContent = "UP!!";
        console.log("Up!");
    } else if(userValue>computerNum){
        resultArea.textContent = "Down!!";
        console.log("Down!");
    } else{
        resultArea.textContent = "맞춤!!";
        console.log("맞춤");
    }
}

pickRandomNum();

console.log(computerNum); 
