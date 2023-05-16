function refresh(){
    let nodeList = document.querySelectorAll('.foodcontainer');
    let foodDivs = Array.from(nodeList);
    console.log(foodDivs);
    let foodDivsInitialLength = foodDivs.length;
    let mainDiv = document.querySelector('main');

    for(let i = 0; i < foodDivsInitialLength; i++){
        foodDivs = Array.from(nodeList);
        let randomElementIndex = Math.floor(Math.random() * foodDivs.length);

        let randomElement = foodDivs[randomElementIndex];

        console.log(randomElement);

        mainDiv.appendChild(randomElement);
    }
}

window.onbeforeunload = refresh();