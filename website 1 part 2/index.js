const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnim(){
    var tl =gsap.timeline()
    tl.from('#chotiHeading',{
        y:'-20',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut

    })
}

function headingsAnim(){
    var tl =gsap.timeline()
    tl.from('.headings',{
        y:'-20',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut

    })
}

function bigHeadingsAnim(){
    var tl =gsap.timeline()
    tl.from('#bigHeading',{
        y:'60',
        opacity:0,
        delay:.5,
        duration:1.8,
        ease:Expo.easeInOut

    })
}





function circleMouseFollower(){
    window.addEventListener('mousemove',function(dets){
        // console.log(dets.clientX,dets.clientY)
        document.querySelector('#miniCircle').style.transform= `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}



firstPageAnim()
headingsAnim()
bigHeadingsAnim()
circleMouseFollower()