// Pluie de coeurs
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*2)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},300);

// Chiffres cadenas
function next(el){
  let n=parseInt(el.textContent);
  el.textContent=(n+1)%10;
}
