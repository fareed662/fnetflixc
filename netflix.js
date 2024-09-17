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
const dm = document.querySelector('.dm')

const im = document.querySelector('.images')
const faqc = document.querySelector('.faqc')


// 1
plus.addEventListener('click', function(a){
    a.preventDefault();  
    reveal.style.display='block';
   plus.style.display='none';
   cancel.style.display='block ';
   
   
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
    dm.style.display= 'block'
})

console.log(im.length)
//function show(img){
    //for (i = images.length; i > 4; i--) {
        //images[i].style.display = "none";  
        
     // }

//}


//images.show();