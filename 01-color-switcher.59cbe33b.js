!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;t.addEventListener("click",(function(){e=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}),1e3),t.disabled=!0})),n.addEventListener("click",(function(){clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.59cbe33b.js.map