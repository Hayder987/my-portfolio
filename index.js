//------home-------start---------------------------------------//
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
  let letters = word.textContent.split("");
  word.textContent="";
  
  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });

});
let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText= ()=>{
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i)=>{
    setTimeout(()=>{
        letter.className = "letter out";

    },i * 80);
  });
   nextWord.style.opacity = "1";
   Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
        letter.className = "letter in";
    },340 + i * 80);
   });

   currentWordIndex = currentWordIndex===maxWordIndex ? 0 : currentWordIndex +1 ;

}
changeText();
setInterval(changeText,3000);

//------home-------ends--------------------------------------------------------------//

//------circle-------start-------------------------------------------------------------//

let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(()=>{
  if(counter1== 85){
    clearInterval();
  }
  else{
    counter1 += 1;
    number1.innerHTML = counter1 + "%";
  }
  
},21)

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(()=>{
  if(counter2== 72){
    clearInterval();
  }
  else{
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
  
},26);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(()=>{
  if(counter3== 91){
    clearInterval();
  }
  else{
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }
  
},22);

let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(()=>{
  if(counter4== 67){
    clearInterval();
  }
  else{
    counter4 += 1;
    number4.innerHTML = counter4 + "%";
  }
  
},30)


//------circle-------ends--------------------------------------------------------------//

//------Mixit up portfelio-------Start--------------------------------------------------------------//
var mixer = mixitup('.portfolio-gallery');
//------Mixit up portfelio-------Ends--------------------------------------------------------------//

//------Menu bar-------Start--------------------------------------------------------------//

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 <section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");

}

activeMenu();
window.addEventListener("scroll",activeMenu);

//------Sticky nav-bar---------------------------------------------------------------------//
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
})

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}

//------Menu bar-------Ends--------------------------------------------------------------//

// ----------------parallax start here----------------------------//
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     if(entry.isIntersecting){
      entry.target.classList.add("show-items");
     }else{
      entry.target.classList.remove("show-items");
     }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

// ----------------parallax ends here---------------------//