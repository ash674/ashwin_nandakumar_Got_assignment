(()=>{



let sigilButtons = document.querySelectorAll(".sigilContainer"),
    lightbox = document.querySelector(".lightbox"),
    closeButton = lightbox.querySelector(".close-button"),
    videoBox = lightbox.querySelector(".houseVideo"),
    currentHouseName = document.querySelector("h1"),
    houseDescription = document.querySelector(".house-info"),
    imageContainer = document.querySelector("#houseImages"),
    con = document.querySelector(".transition"),
    playControl = document.querySelector(".playButton"),
    pauseControl = document.querySelector(".pauseButton"),
    rewindControl = document.querySelector(".rewindButton");
let globalPaused = false;
const houseData = [

    ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],

    ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],

    ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],

    ["tully",`House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor.`],

    ["Greyjoy",`House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

    ["Arryn",`House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`]

  ];


function showLightBox()
{
  //debugger;
let  houseName = this.className.split(" ")[1];
let  newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);
  paragraph = this.dataset.offset;
let videoSrc = `video/House-${houseName}.mp4`;
}

function hideLightBox()
{
  lightbox.classList.remove("show-lightbox");
  videoBox.pause();
  videoBox.currentTime = 0;
}


function animateBanners()
{
  let offsetWidth = 600;
  let multiplier = this.dataset.offset;
  let newPosition = offsetWidth * multiplier;
  imageContainer.style.right = `${newPosition}px`;
}

function houseInfoChange()
{
  currentHouseName.textContent = `House ${houseData[paragraph][0]}`;
  console.log(currentHouseName.textContent);
  houseDescription.textContent = `${houseData[paragraph][1]}`;
setTimeout(function(){
    lightbox.classList.add("show-lightbox");
    videoBox.src = videoSrc;
    videoBox.load();
    videoBox.play();
 }, 5000)
}

function pauseVideo(){
  videoBox.pause();
  globalPaused = true;

}

function playVideo(){
videoBox.play();
}

function rewindVideo(){
  videoBox.currentTime = 0;
}

imageContainer.addEventListener("transitionend", houseInfoChange);
sigilButtons.forEach(button => button.addEventListener("click", showLightBox));
sigilButtons.forEach(button => button.addEventListener("click", animateBanners));
closeButton.addEventListener("click", hideLightBox);
videoBox.addEventListener("ended", hideLightBox);
playControl.addEventListener("click", playVideo);
pauseControl.addEventListener("click", pauseVideo);
rewindControl.addEventListener("click", rewindVideo);

})();
