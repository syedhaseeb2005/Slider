const merimg = document.querySelector('.img')
const meranumber = document.querySelector('.number')
const prebtn = document.querySelector('.pre')
const nextbtn = document.querySelector('.next')

var content = [
    {
        id:1,
        img: './images/download.jpg',
        number: 1
    },
    {
        id:2,
        img: './images/download(1).jpg',
        number: 2,
    },
    {
        id:3,
        img: './images/download (2).jpg',
        number: 3,
    },
    {
        id:4,
        img: './images/download (3).jpg',
        number: 4,
    }
]
console.log(content)

var counter = 0;

function showcontent(add){
    const item = content[add]
    merimg.src = item.img
    meranumber.textContent = item.number
}
nextbtn.addEventListener("click",()=>{
    counter = ++counter;
    if(counter === content.length - 1){
        nextbtn.style.display = "none"
        prebtn.style.display = "block"
    }else{
        nextbtn.style.display = "block"
        prebtn.style.display = "block"
    }
    showcontent(counter)
})
prebtn.addEventListener("click",()=>{
    counter = --counter;
    if(counter < content.length -1){ 
        nextbtn.style.display = "block"
    }
    showcontent(counter)
})
prebtn.style.display = "none"