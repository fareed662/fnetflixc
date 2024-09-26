const reveal = document.querySelector('.reveal')
const reveal2 = document.querySelector('.reveal2')
const reveal3 = document.querySelector('.reveal3')
const reveal4 = document.querySelector('.reveal4')
const reveal5 = document.querySelector('.reveal5')
const reveal6 = document.querySelector('.reveal6')

const plus = document.querySelector('.plus')
const plus2 = document.querySelector('.plus2')
const plus3 = document.querySelector('.plus3')
const plus4 = document.querySelector('.plus4')
const plus5 = document.querySelector('.plus5')
const plus6 = document.querySelector('.plus6')

const cancel = document.querySelector('.cancel')
const cancel2 = document.querySelector('.cancel2')
const cancel3 = document.querySelector('.cancel3')
const cancel4 = document.querySelector('.cancel4')
const cancel5 = document.querySelector('.cancel5')
const cancel6 = document.querySelector('.cancel6')
const dd = document.querySelector('.dd')
const dm = document.querySelector('.style')


const faqc = document.querySelector('.faqc')


// 1
plus.addEventListener('click', function(a){
    a.preventDefault();  
    reveal.style.display='block';
   plus.style.display='none';
   cancel.style.display='block ';
   reveal.style.transition='display 2s'
   
   })

cancel.addEventListener('click', function(b){
    b.preventDefault();  
    reveal.style.display='none';
   plus.style.display='block';
   cancel.style.display='none';
   
})

// 2
plus2.addEventListener('click', function(c){
    c.preventDefault();  
    reveal2.style.display='block';
   plus2.style.display='none';
   cancel2.style.display='block ';
   
   })

cancel2.addEventListener('click', function(d){
    d.preventDefault();  
    reveal2.style.display='none';
   plus2.style.display='block';
   cancel2.style.display='none';
   
})


// 3
plus3.addEventListener('click', function(e){
    e.preventDefault();  
    reveal3.style.display='block';
   plus3.style.display='none';
   cancel3.style.display='block ';
   
   })

cancel3.addEventListener('click', function(f){
    f.preventDefault();  
    reveal3.style.display='none';
   plus3.style.display='block';
   cancel3.style.display='none';
   
})

// 4
plus4.addEventListener('click', function(g){
    g.preventDefault();  
    reveal4.style.display='block';
   plus4.style.display='none';
   cancel4.style.display='block ';
   
   })

cancel4.addEventListener('click', function(h){
    h.preventDefault();  
    reveal4.style.display='none';
   plus4.style.display='block';
   cancel4.style.display='none';
   
})

// 5
plus5.addEventListener('click', function(i){
    i.preventDefault();  
    reveal5.style.display='block';
   plus5.style.display='none';
   cancel5.style.display='block ';
   
   })

cancel5.addEventListener('click', function(j){
    j.preventDefault();  
    reveal5.style.display='none';
   plus5.style.display='block';
   cancel5.style.display='none';
   
})

//6
plus6.addEventListener('click', function(k){
    k.preventDefault();  
    reveal6.style.display='block';
   plus6.style.display='none';
   cancel6.style.display='block ';
   
   })

cancel6.addEventListener('click', function(l){
    l.preventDefault();  
    reveal6.style.display='none';
   plus6.style.display='block';
   cancel6.style.display='none';
})

dd.addEventListener('click', function(p) {
    p.preventDefault()
    dd.classList.add('out')
})


const images = document.querySelector('.images')




const next =document.querySelector('.next')
const prev =document.querySelector('.prev')


images.classList.add('rty');

const a = images.children;
let index=0

//prev.style.display='none';
function USLIDEPOS(){
    for (  i=0; i<=a.length; i++){
        a[i].style.transform = `translateX(-${index* 140}px)`;
        a[i].classList.add('trans');

       if(window.innerWidth <= 500){
        a[i].style.transform = `translateX(-${index* 85}px)`;
       }
      
    }
    
       
}

next.addEventListener('click', function (u) {
    u.preventDefault()
    index = (index + 1)% a.length;
    USLIDEPOS();
    
    
})


prev.addEventListener('click', function(n) {
    n.preventDefault()
    index = (index -1 + a.length)% a.length;
    USLIDEPOS();
})




/*
next.addEventListener('click', function(u) {
    u.preventDefault()
    images.classList.remove('rty');
    images.classList.add('none');
    images2.classList.remove('none');
    images2.classList.add('rty');
})

prev.addEventListener('click', function(n) {
    n.preventDefault()
    images.classList.add('rty');
    images.classList.remove('none');
    images2.classList.add('none');
    images2.classList.remove('rty');
})

*/  

function change(n) {
    
}

/*

const slide = document.getElementsByClassName('.i1')


let index = 0;
console.log(slide.length)

function change(n) {
    index+= n;
    if(index >= slide.length ){
        index = 0;
    }else if(index<0){
      index = slide.length - 1;
    }
}

function uslide() {
   for(let i=0; i<slide.length; i++){
      slide[i].classList.remove("active");
   }
   slide[index].classList.add("active");
}
*/

//document.querySelector('.next').onclick = function(n) {
  //  n.preventDefault()
    
//}






//tra(-${curentindex*300}px)