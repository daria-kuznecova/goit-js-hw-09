const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.d4986f59.js.map
