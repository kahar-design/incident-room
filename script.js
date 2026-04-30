function setLang(lang){

 fetch(lang+".json")
 .then(r=>r.json())
 .then(d=>{

   document.getElementById("title").innerText = d.title;
   document.getElementById("subtitle").innerText = d.subtitle;

   let cv = document.getElementById("cvBtn");
   cv.innerText = d.cvText;
   cv.href = lang==="fr" ? "cv-fr.pdf" : "cv-en.pdf";
 });
}

setLang("en");
