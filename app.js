var w = window.innerWidth;
var h = window.innerHeight;

let firstName = "Eddy";
let lastName = "Sullivan";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

const thumbNailContainer = document.getElementById('thumbNailContainer')
const displayImage = document.getElementById('displayImage')



let images = [
    {
        src: `./assets/ship1.jpg`,
        alt: `A picture of The Russian Cruiser Cromoboi`
    },
    {
        src: `./assets/ship2.jpg`,
        alt: `An unknown sail ship, flying the Union Jack.`
    },
    {
        src: `./assets/ship3.jpg`,
        alt: `A sail ship with a sunset in the background`
    },
    {
        src: `./assets/ship4.jpg`,
        alt: `Picture of random unknown ship`
    },
    {
        src: `./assets/ship5.jpg`,
        alt: `A picture of a World War II Essex-class aircraft carrier`
    },
    {
        src: `./assets/ship6.jpg`,
        alt: `A picture of a steam powered ship`
    },
    {
        src: `./assets/ship7.jpg`,
        alt: `A picture the Cruise Liner St. Thomas`
    },
]


function createThumbnails() {
    images.forEach(function (image) {
        let imageElem = document.createElement('img')
        imageElem.src = image.src
        imageElem.alt = image.alt
        imageElem.addEventListener('click', function() {
            console.log(image)
            createBigImage(image)
        })
        imageElem.setAttribute('tabindex', '0')
        thumbNailContainer.appendChild(imageElem)
    })
}

createThumbnails()

 
function createBigImage(img) {
    displayImage.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = img.src
    bigImage.alt = img.alt
    displayImage.appendChild(bigImage)
}