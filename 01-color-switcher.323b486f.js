const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1,t.stopBtn.disabled=!0})),t.startBtn.addEventListener("click",n);let e=null;function n(n){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1}n({});
//# sourceMappingURL=01-color-switcher.323b486f.js.map