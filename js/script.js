// window.onload = function() {
//     var loadTime = window.performance.timing.domContentLoadedEventEnd
//     - window.performance.timing.navigationStart;
//     document.getElementById('footer__speed-loaded-page__value').innerText = loadTime;
//     console.log('Page load time is ' + loadTime);
// }

// (()=>{
//     var e,t;
//     e = document.querySelector(".footer__speed-loaded-page__value"),
//     t = (new Date).getTime(), 
//     window.addEventListener("load",( function() {
//             var n = ((new Date).getTime()-t);
//             e.textContent = n.toString()
//         }))
//     }
// ) ();

// window.addEventListener('load', (e) => {
//     let timestemp = new Date(e.timeStamp).getTime()
//     console.log('loading time is', timestemp)
//     document.getElementById('loadingTime').innerText = "loading time is "+timestemp
// })

(()=>{
    t = (new Date).getTime();
    window.addEventListener('load', function() {
        let timestemp = (new Date).getTime() - t;
        console.log('loading time is', timestemp)
        document.getElementById('footer__speed-loaded-page__value').innerText = timestemp
    })
    }
) ();