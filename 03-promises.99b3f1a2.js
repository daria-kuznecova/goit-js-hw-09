const e=document.querySelector(".form"),o=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]');function l(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(u){u.preventDefault(),e.disabled=!0;for(let e=1;e<=n.value;e++){const n=Number(o.value)+Number(t.value)*(e-1);l(e,n).then((({position:e,delay:o})=>{console.log(`Fulfilled promise ${e} in ${o} ms`)})).catch((({position:e,delay:o})=>{console.log(`Rejected promise ${e} in ${o} ms`)})),console.log(n)}}));
//# sourceMappingURL=03-promises.99b3f1a2.js.map
