const apiurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let search = document.querySelector(".search");
let uword = document.querySelector("input");
let pho = document.querySelector(".pho");
let npos = document.querySelector(".npos");
let nmean = document.querySelector(".nmean");
let vpos = document.querySelector(".vpos");
let vmean = document.querySelector(".vmean");
let pro = document.querySelector(".playbox");
let sour = document.querySelector("a");

async function dic(word) {
    const response = await fetch(apiurl + word);
    let data = await response.json();
    console.log(data);
    console.log(data[0].sourceUrls[0]);
    document.querySelector(".userword").innerText = data[0].word;
    document.querySelector(".pho").innerText = data[0].phonetic;
    document.querySelector(".npos").innerText = "POS: "+ data[0].meanings[0].partOfSpeech;
    document.querySelector(".nmean").innerText = data[0].meanings[0].definitions[0].definition;
    document.querySelector(".example").innerText = data[0].meanings[0].definitions[0].example;
    document.querySelector(".playbox").addEventListener("click", ()=>{
        const audio = new Audio();
        audio.src = data[0].phonetics[0].audio;
        audio.play();
        audio.pause();
    })
    document.querySelector(".lin").setAttribute("href", data[0].sourceUrls[0]);
    document.querySelector(".lin").innerHTML = data[0].sourceUrls[0];

}
search.addEventListener("click", ()=>{
    let word = uword.value;
    dic(word);
})
