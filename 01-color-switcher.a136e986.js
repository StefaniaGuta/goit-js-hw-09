const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let n=null;t.addEventListener("click",(()=>{n=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.a136e986.js.map
