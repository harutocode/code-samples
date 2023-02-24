const button = document.createElement("button");
button.textContent = "ご飯を与える";

let food = 0;
button.onclick = function() {
    let comment = "";
    food++;
    if(food < 10) {
        comment = "まだ足りない〜😫";
    } else if(food < 20) {
        comment = "ご飯ありがとー！🍙";
    } else if(food < 30) {
        comment = "まだ食べられる！😆";
    } else if(food < 40) {
        comment = "幸せ･･･💕🤤";
    }
    if(food >= 40) {
        comment = "もう食べ切れないよ🥱";
        food = 40; // 40が最大値
    }
    button.textContent = `満腹度:${food} ${comment}`;
}

document.body.appendChild(button);