(()=>{
    t = (new Date).getTime();
    window.addEventListener('load', function() {
        let timestemp = (new Date).getTime() - t;
        console.log('loading time is', timestemp)
        document.getElementById('footer__speed-loaded-page__value').innerText = timestemp
    })
    }
) ();