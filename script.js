const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function MiniCircle(){
    window.addEventListener("mousemove", function(dets){
        console.log(dets);
        
    })
}

MiniCircle();