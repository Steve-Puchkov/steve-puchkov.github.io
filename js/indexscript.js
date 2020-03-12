$(document).ready(function(){
gsap.fromTo(".right", {rotateX:0, rotateY:0, rotateZ:0}, {rotateX:360, rotateY:360, rotateZ:360, duration:2.8,  repeat:-1, ease:"linear"}); 
gsap.fromTo(".right", {y:-50, x:-180}, {y:-50, x:180, duration:1.8,  repeat:-1, yoyo:true, ease:"linear"});
gsap.fromTo(".demchik", {x:-180}, {x:180, duration:1.8,  repeat:-1, yoyo:true, ease:"linear"});
$('.button').click(function(){
  console.log('clicked');
  $(".loading").css({"display":"block"});
  gsap.fromTo(".loader-strip", {width:0}, {width:500, delay:0.2, duration:2.8, ease:"steps(12)"});
  let dice = Math.floor(Math.random() * 3) + 1;
  var interval = 3 * 1000;
  switch (dice) {
    case 1:
      var ymca = new Audio("https://cs7-4v4.vkuseraudio.net/p8/5fa8b764f259a9.mp3?extra=FhXG6Ia2Fyk8RPL_PGVEincM_2GUbzlaP5cz97br8P365HbLGvhZVn63CqDb0X-oeKLZV-jrzX3JThHw95qzV36WHeSHBI5pZMsD1FftP_5-ED__B-t-ccvyUXQgvkSpLP0UAcpxUDxnQfGjRk3t1g");
     setTimeout(function() {
       ymca.loop = true;
       ymca.play();
     $(".healthy").css({"display":"block"});
     gsap.fromTo(".healthy", {opacity:0}, {opacity:1, duration:1, ease:"steps(12)"});
     gsap.fromTo(".healthy h1", {opacity:0, y:-50}, {opacity:1, y:0, delay:1.5, duration:1.3, ease:"elastic.out(1, 0.3)"});
     gsap.fromTo(".healthy p", {opacity:0, y:50}, {opacity:1, y:0, delay:1.5, duration:1.3, ease:"elastic.out(1, 0.3)"});
     gsap.fromTo(".healthy img", {opacity:0}, {opacity:1, delay:1.5, duration:1.8, ease:"linear"});
     gsap.fromTo(".healthy img", {y:30, scaleY:0.9}, {y:0, scaleY:1, duration:0.2,  repeat:-1, yoyo:true, ease:"power1.inOut"});
     gsap.fromTo(".healthy img", {skewX:-10, transformPosition:"50% 100%"}, {skewX:10, transformPosition:"50% 100%", duration:0.4,  repeat:-1, yoyo:true, ease:"power1.inOut"});
     }, interval);
    break;
      
    case 2:
      
      var plague = new Audio("https://cs7-1v4.vkuseraudio.net/p9/00c7e48ed69aea.mp3?extra=KVVDFFAJOqsL5mxihTVyQtL8IcNAdDjak3ARW4ux80yg8FCiTtoBqqr_yOMCMbR3U38YD-_z1OtWbz568-muMU6M8Agn4UfTmojJZHZ7ytsZUxjl5T_KF48prhrYnXRS5drZXVFM6XMbqVJwHgPxl5Q");
     setTimeout(function() {
       plague.loop = true;
       plague.play();
     $(".warning").css({"display":"block"});
     gsap.fromTo(".warning", {opacity:0}, {opacity:1, duration:1, ease:"steps(12)"});
     gsap.fromTo(".warning h1", {scale:0.9}, {scale:1, duration:0.2, repeat:-1, yoyo:true, ease:"linear"});
     gsap.fromTo(".warning img", {scale:0.8}, {scale:1, duration:0.2, repeat:-1, yoyo:true, ease:"linear"});
     }, interval);
    break;
      
    case 3:
      
      var caretaker = new Audio("https://cs1-62v4.vkuseraudio.net/p23/50f2c7799c1d29.mp3?extra=Sfthqr_PABPAFqyS9dcfT-EiWpYXRx8nRfRvuUZg0uyfTP0FCClpgJybvJFuEa6f-QxYR__-uwDhZE08pxnuTe3n8O9BBiq2QVjhYHCl6SYBVFs7AFhl5AM3ZRNGdoYX3NVN-XS-dN4uW6DcB-h23ko");
     setTimeout(function() {
       caretaker.loop = true;
       caretaker.play();
     $(".death").css({"display":"block"});
     gsap.fromTo(".death", {opacity:0}, {opacity:1, duration:5.8, ease:"steps(24)"});
     }, interval);
    break;
      
  }
});
});