!function(){var o,e,n;document.querySelector("input[delay]"),document.querySelector("input[step]"),document.querySelector("input[amount]"),document.querySelector("button");(o=2,e=1500,void(n=new Promise((function(t,c){var i=Math.random()>.3;setInterval((function(){i?t("✅ Fulfilled promise ".concat(o," in ").concat(e,"ms")):c("❌ Rejected promise ".concat(o," in ").concat(e,"ms")),console.log(n)}),1e3)})))).then((function(o){var e=o.position,n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){var e=o.position,n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))}();
//# sourceMappingURL=03-promises.af72693c.js.map
