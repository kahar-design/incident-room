emailjs.init("YOUR_PUBLIC_KEY");

window.onload=()=>document.getElementById("loader").style.display="none";

function setLang(lang){
 fetch(lang+".json")
 .then(res=>res.json())
 .then(data=>{
   heroTitle.innerText=data.heroTitle;
   heroSub.innerText=data.heroSub;
   ctaBtn.innerText=data.cta;
   cvBtn.innerText=data.cv;
   cvBtn.href= lang==="fr" ? "cv-fr.pdf":"cv-en.pdf";
 });
}

setLang("en");

const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
 const update=()=>{
   const target=+counter.dataset.target;
   const c=+counter.innerText;
   const inc=target/200;
   if(c<target){counter.innerText=Math.ceil(c+inc);setTimeout(update,10);}
 }
 update();
});

document.getElementById("contact-form").addEventListener("submit",function(e){
 e.preventDefault();
 emailjs.sendForm("service_xxx","template_xxx",this)
 .then(()=>alert("Message sent!"));
});
