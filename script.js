// typing effect simple
const text = "I solve Supply Chain & SQL problems.";
let i = 0;

function typing(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();
