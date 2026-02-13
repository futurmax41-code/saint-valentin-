/* pluie de coeurs */
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*2)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},300);

/* chiffres cadenas */
function next(el){
  let n=parseInt(el.textContent);
  el.textContent=(n+1)%10;
}

/* verifier code */
function check(){
  const nums=document.querySelectorAll(".num");
  let code="";
  nums.forEach(n=>code+=n.textContent);

  if(code==="0214"){
    document.querySelector(".padlock").textContent="🔓";
    document.querySelector(".padlock").classList.add("unlock");
    document.getElementById("status").textContent="Bienvenue mon amour ❤️";

    setTimeout(()=>{
      window.location.href="sorpresa.html";
    },1500);
  } else {
    document.getElementById("status").textContent="Encore un effort 😘";
  }
}

/* sons photos */
function playSound(id){
  document.querySelectorAll("audio").forEach(a=>{
    a.pause(); a.currentTime=0;
  });
  document.getElementById(id).play();
}

/* musique */
const music=document.getElementById("music");
if(music){
  document.body.addEventListener("click",()=>{
    music.play().catch(()=>{});
  });
}
