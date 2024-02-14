const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.body;t.addEventListener("click",(()=>{timer=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(timer)}));
//# sourceMappingURL=01-color-switcher.513612a9.js.map
