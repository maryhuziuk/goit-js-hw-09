!function(){var e=document.querySelector("button[data-start]"),t=document.querySelector("#datetime-picker"),n=document.querySelector("span[data-days]"),a=document.querySelector("span[data-hours]"),o=document.querySelector("span[data-minutes]"),r=document.querySelector("span[data-seconds]"),s=null;e.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.setAttribute("disabled",!0),s=setInterval(u,1e3)})),e.setAttribute("disabled",!0);var l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(t){var n=t[0];e.removeAttribute("disabled"),n<new Date&&(e.setAttribute("disabled",!0),alert("Please choose a date in the future"))}};flatpickr(t,l);function u(){var e=t._flatpickr.selectedDates[0]-new Date,l=d(e);e<=0?clearInterval(s):(n.textContent=l.days,a.textContent=l.hours,o.textContent=l.minutes,r.textContent=l.seconds)}function d(e){var t=6e4,n=36e5,a=24*n;return{days:Math.floor(e/a),hours:Math.floor(e%a/n),minutes:Math.floor(e%a%n/t),seconds:Math.floor(e%a%n%t/1e3)}}console.log(d(2e3)),console.log(d(14e4)),console.log(d(2414e4))}();
//# sourceMappingURL=02-timer.f5614d0e.js.map