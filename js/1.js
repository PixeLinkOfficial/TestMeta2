import {cart,savetolocals} from "./cart.js";


//


let butkur =document.querySelector('.kurdish');

butkur.addEventListener('click',()=>{
  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('header').style.direction='rtl';
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });
  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });

  
  document.querySelector('.div1p1').innerHTML="ڤەخوارنێن گەرم";
  document.querySelector('.pburg1').innerHTML="چا";
  document.querySelector('.pburg2').innerHTML="كەپەچينو";
  document.querySelector('.pburg3').innerHTML="كەرەمێل لاتێی";
  document.querySelector('.pburg4').innerHTML="ئێسپرێسو سینگل";
  document.querySelector('.pburg5').innerHTML="ئێسپرێسو دەبل";
  document.querySelector('.pburg6').innerHTML="ڤانێلا لاتێی";
  document.querySelector('.pburg7').innerHTML="لاتێی ئێسپانی";
  document.querySelector('.pburg8').innerHTML="چایا ليمون و گێزەرا";
  document.querySelector('.pburg9').innerHTML="شوكولاتا گەرم";
  document.querySelector('.pburg10').innerHTML="قەهوا كزوان";
  document.querySelector('.pburg11').innerHTML="چايا کەسک";
  document.querySelector('.pburg12').innerHTML="لاتێی";
  document.querySelector('.pburg13').innerHTML="نسکافی دگەل شيری";
  document.querySelector('.pburg14').innerHTML="موچا";
  document.querySelector('.pburg15').innerHTML="نسكافيا رەش";
  document.querySelector('.pburg16').innerHTML="قەهوا ترکی";
  document.querySelector('.pburg17').innerHTML="سحلب";
  document.querySelector('.pburg18').innerHTML="ئەمێريكانو";

  document.querySelector('.div1p2').innerHTML="شريناهی";
  document.querySelector('.pburg19').innerHTML="كرێپا نوتيلا";
  document.querySelector('.pburg20').innerHTML="كرێپا لوتس";
  document.querySelector('.pburg21').innerHTML="كرێپا كيندەر";
  document.querySelector('.pburg22').innerHTML="كرێپا فستەق";
  document.querySelector('.pburg23').innerHTML="مينی پانكيك";
  document.querySelector('.pburg24').innerHTML="پانكيك";

  document.querySelector('.div1p3').innerHTML="ڤەخوارنێن تەزی";
  document.querySelector('.k1').innerHTML="كەرەمێل فراپی";
  document.querySelector('.k2').innerHTML="ئێسپرێسو دگەل بەفرێ";
  document.querySelector('.k3').innerHTML="موچا دگەل بەفرێ";
  document.querySelector('.k4').innerHTML="كەرەمێل لاتێی دگەل بەفرێ";
  document.querySelector('.k5').innerHTML="ڤانێلا لاتێی دگەل بەفرێ";
  document.querySelector('.k6').innerHTML="لاتێی دگەل بەفرێ";
  document.querySelector('.k7').innerHTML="لاتێیا ئيسپانی دگەل بەفرێ";

  document.querySelector('.div1p4').innerHTML="موهيتو";
  document.querySelector('.k8').innerHTML="كرز";
  document.querySelector('.k9').innerHTML="اناناس";
  document.querySelector('.k10').innerHTML="فرولا";
  document.querySelector('.k11').innerHTML="بلوبيري";
  document.querySelector('.k12').innerHTML="هنار";

  document.querySelector('.div1p5').innerHTML="ڤەخوارنێن ريدبول";
  document.querySelector('.k13').innerHTML="بلوبيري مكسيكي";
  document.querySelector('.k14').innerHTML="فراوله";
  document.querySelector('.k15').innerHTML="هنار";
  document.querySelector('.k16').innerHTML="هوايى شين";
  document.querySelector('.k17').innerHTML="اناناس";
  document.querySelector('.k18').innerHTML="مانكو";
  document.querySelector('.k19').innerHTML="مكسيكى";

  document.querySelector('.div1p6').innerHTML="سموثى";
  document.querySelector('.k20').innerHTML="بلوبيرى";
  document.querySelector('.k21').innerHTML="كوكتيل مانكو";
  document.querySelector('.k22').innerHTML="كوكتيل فيقى";
  document.querySelector('.k23').innerHTML="اناناس";
  document.querySelector('.k24').innerHTML="فراوله";

  document.querySelector('.div1p7').innerHTML="ملكشيك";
  document.querySelector('.k25').innerHTML="اوريو";
  document.querySelector('.k26').innerHTML="لوتس";
  document.querySelector('.k27').innerHTML="نوتيله";
  document.querySelector('.k28').innerHTML="كنده ر";
  document.querySelector('.k29').innerHTML="فستق";
  document.querySelector('.k30').innerHTML="فراوله";
  document.querySelector('.k31').innerHTML="كه رميله";

  document.querySelector('.div1p8').innerHTML="عصير طبيعى";
  document.querySelector('.k32').innerHTML="هنار";
  document.querySelector('.k33').innerHTML="افكادو";
  document.querySelector('.k34').innerHTML="شير و موز";
  document.querySelector('.k35').innerHTML="كوكتيل فيقى";
  document.querySelector('.k36').innerHTML="ليمون دكه ل  نعناع";
  document.querySelector('.k37').innerHTML="ليمون";
  document.querySelector('.k38').innerHTML="برتقال";
  document.querySelector('.k39').innerHTML="اناناس";

  document.querySelector('.div1p10').innerHTML="نركيله";
  document.querySelector('.k40').innerHTML="طبيعى";
  document.querySelector('.k41').innerHTML="علك و نعناع";
  document.querySelector('.k42').innerHTML="ليمون و نعناع";
  document.querySelector('.k43').innerHTML="انكليزى";
  document.querySelector('.k44').innerHTML="تفاحتين";
  document.querySelector('.k45').innerHTML="خلطه ميتا";
  
  document.querySelector('.div1p11').innerHTML="بليارد";
  document.querySelector('.k46').innerHTML="ئيك ساعه";
  
  document.querySelector('.div1p12').innerHTML="بليستيشن";
  document.querySelector('.k47').innerHTML="ئيك ساعه";


});

let butara = document.querySelector('.arabic');

butara.addEventListener('click', () => {
  document.querySelector('body').style.fontFamily= "'Noto Sans Arabic', serif";
  document.querySelector('body').style.fontWeight= 600;
  document.querySelector('.div1p').style.fontWeight=700;
  document.querySelector('header').style.direction='rtl';
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'right';  // Align text to the right
    element.style.alignItems = 'end';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '7%';  // Set margin for the button inside the .bmm2 element
    }
  });

  const element2 = document.querySelectorAll('.pburg');
  element2.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });
  const element3 = document.querySelectorAll('.ppriceb');
  element3.forEach(element => {
    element.style.marginRight='15px';   // Align items to the end (works if flex container)
  });

  document.querySelector('.div1p1').innerHTML="المشروبات الساخنة";
  document.querySelector('.pburg1').innerHTML="شاي";
  document.querySelector('.pburg2').innerHTML="كباجينو";
  document.querySelector('.pburg3').innerHTML="كراميل لاتي";
  document.querySelector('.pburg4').innerHTML="اسبريسو سنكل";
  document.querySelector('.pburg5').innerHTML="اسبريسو دبل";
  document.querySelector('.pburg6').innerHTML="فانيلا لاتي";
  document.querySelector('.pburg7').innerHTML="اسبانش لاتي";
  document.querySelector('.pburg8').innerHTML="شاي بلليمون والزنجبيل";
  document.querySelector('.pburg9').innerHTML="هوت شكولا";
  document.querySelector('.pburg10').innerHTML="قهوة كزوان";
  document.querySelector('.pburg11').innerHTML="شاي اخضر";
  document.querySelector('.pburg12').innerHTML="لاتي";
  document.querySelector('.pburg13').innerHTML="نسكافي بلحليب";
  document.querySelector('.pburg14').innerHTML="موجا";
  document.querySelector('.pburg15').innerHTML="نسكافي اسود";
  document.querySelector('.pburg16').innerHTML="قهوة تركية";
  document.querySelector('.pburg17').innerHTML="سحلب";
  document.querySelector('.pburg18').innerHTML="امريكانو";

  document.querySelector('.div1p2').innerHTML="حلوى";
  document.querySelector('.pburg19').innerHTML="كريب نوتيلا";
  document.querySelector('.pburg20').innerHTML="كريب لوتس";
  document.querySelector('.pburg21').innerHTML="كريب كندر";
  document.querySelector('.pburg22').innerHTML="كريب فستق";
  document.querySelector('.pburg23').innerHTML="ميني بانكيك";
  document.querySelector('.pburg24').innerHTML="بانكيك";

  document.querySelector('.div1p3').innerHTML="المشروبات الباردة";
  document.querySelector('.k1').innerHTML="كراميل فرابي";
  document.querySelector('.k2').innerHTML="اسبريسو بلثلح";
  document.querySelector('.k3').innerHTML="موجا بلثلج";
  document.querySelector('.k4').innerHTML="كراميل لاتي بلثلج";
  document.querySelector('.k5').innerHTML="فانيلا لاتي بلثلج";
  document.querySelector('.k6').innerHTML="لاتي بلثلح";
  document.querySelector('.k7').innerHTML="اسبانش لاتي بلثلج";

  document.querySelector('.div1p4').innerHTML="موهيتو";
  document.querySelector('.k8').innerHTML="كرز";
  document.querySelector('.k9').innerHTML="اناناس";
  document.querySelector('.k10').innerHTML="فرولا";
  document.querySelector('.k11').innerHTML="بلوبيري";
  document.querySelector('.k12').innerHTML="رمان";

  document.querySelector('.div1p5').innerHTML="مشروبات الطاقة";
  document.querySelector('.k13').innerHTML="بلوبيري مكسيكي";
  document.querySelector('.k14').innerHTML="فراولة";
  document.querySelector('.k15').innerHTML="رمان";
  document.querySelector('.k16').innerHTML="هوايي ازرق";
  document.querySelector('.k17').innerHTML="اناناس";
  document.querySelector('.k18').innerHTML="مانجو";
  document.querySelector('.k19').innerHTML="مكسيكي";

  document.querySelector('.div1p6').innerHTML="سموثي";
  document.querySelector('.k20').innerHTML="بلوبيري";
  document.querySelector('.k21').innerHTML="كوكتيل مانجو";
  document.querySelector('.k22').innerHTML="كوكتيل فاكهة";
  document.querySelector('.k23').innerHTML="اناناس";
  document.querySelector('.k24').innerHTML="فراولة";

  document.querySelector('.div1p7').innerHTML="ملكشيك";
  document.querySelector('.k25').innerHTML="اوريو";
  document.querySelector('.k26').innerHTML="لوتس";
  document.querySelector('.k27').innerHTML="نوتيلا";
  document.querySelector('.k28').innerHTML="كندر";
  document.querySelector('.k29').innerHTML="فستق";
  document.querySelector('.k30').innerHTML="فراولة";
  document.querySelector('.k31').innerHTML="كرميلا";

  document.querySelector('.div1p8').innerHTML="عصير طبيعي";
  document.querySelector('.k32').innerHTML="رمان";
  document.querySelector('.k33').innerHTML="افكادو";
  document.querySelector('.k34').innerHTML="حليب بالموز";
  document.querySelector('.k35').innerHTML="كوكتيل فواكه";
  document.querySelector('.k36').innerHTML="ليمون بالنعناع";
  document.querySelector('.k37').innerHTML="ليمون";
  document.querySelector('.k38').innerHTML="برتقال";
  document.querySelector('.k39').innerHTML="اناناس";

  document.querySelector('.div1p10').innerHTML="نركيلا";
  document.querySelector('.k40').innerHTML="طبيعي";
  document.querySelector('.k41').innerHTML="علك بالنعناع";
  document.querySelector('.k42').innerHTML="ليمون بالنعناع";
  document.querySelector('.k43').innerHTML="انكليزي";
  document.querySelector('.k44').innerHTML="تفاحتين";
  document.querySelector('.k45').innerHTML="خلطة ميتا";
  
  document.querySelector('.div1p11').innerHTML="بليارد";
  document.querySelector('.k46').innerHTML="ساعة واحدة";
  
  document.querySelector('.div1p12').innerHTML="بليستيشن";
  document.querySelector('.k47').innerHTML="ساعة واحدة";
  

  

});

let buteng =document.querySelector('.English');

buteng.addEventListener('click',()=>{
  document.querySelector('body').style.fontFamily= "'Roboto', serif";
  document.querySelector('header').style.direction='ltr';
  const elements = document.querySelectorAll('.bmm2');
  elements.forEach(element => {
    element.style.textAlign = 'left';  // Align text to the right
    element.style.alignItems = 'start';   // Align items to the end (works if flex container)
    
    // Check if there is a button inside the .bmm2 element
    const button = element.querySelector('button');
    if (button) {
      button.style.marginRight = '0';  // Set margin for the button inside the .bmm2 element
      button.style.marginLeft= '7%';
    }
  });
  window.location.reload(true);
});


//
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
})

//s

let lbutton=document.querySelector('.lbutton');
let body=document.body;

lbutton.addEventListener('click',(e)=>{
    e.stopPropagation(); //important
    document.querySelector('.rldiv').style.opacity=1;
    document.querySelector('.rldiv').style.display="block";
    document.querySelector('.English').disabled=false;
    document.querySelector('.arabic').disabled=false;
    document.querySelector('.kurdish').disabled=false;
});

body.addEventListener('click',()=>{
    document.querySelector('.rldiv').style.opacity=0;
    document.querySelector('.rldiv').style.display="none";
    document.querySelector('.English').disabled=true;
    document.querySelector('.arabic').disabled=true;
    document.querySelector('.kurdish').disabled=true;
});


//let ischangedL = false;

function scrollToElement(targetId) {
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Calculate the offset position of the target element
    var targetPosition = targetElement.offsetTop;

    // Height of the fixed header (240px)
    var offset = 240;

    // Scroll to the adjusted position
    window.scrollTo({
      top: targetPosition - offset, // Adjust by subtracting the fixed header height
      behavior: 'smooth', // Smooth scrolling
    });
  } else {
    console.error(`Element with id "${targetId}" not found.`);
  }
}

// Scroll buttons for sc1 to sc8
const scrollButtons = [
  { button: '.item1', target: 'sc1' },
  { button: '.item2', target: 'sc2' },
  { button: '.item3', target: 'sc3' },
  { button: '.item4', target: 'sc4' },
  { button: '.item5', target: 'sc5' },
  { button: '.item6', target: 'sc6' },
  { button: '.item7', target: 'sc7' },
  { button: '.item8', target: 'sc8' },
  { button: '.item9', target: 'sc9' },
  { button: '.item10', target: 'sc10' },
  { button: '.item11', target: 'sc11' },
  { button: '.item12', target: 'sc12' }
];

// Set up event listeners for each scroll button
scrollButtons.forEach(item => {
  const button = document.querySelector(item.button);
  if (button) {
    button.addEventListener('click', function () {
      scrollToElement(item.target);
    });
  }
});

// Example of toggling the layout (to simulate your layout change button)
const layoutToggleButton = document.querySelector('.layout-toggle'); // Change to your layout toggle button selector
layoutToggleButton.addEventListener('click', function () {
  ischangedL = !ischangedL;

  // Toggle visibility of sc1 to sc8 based on ischangedL
  for (let i = 1; i <= 8; i++) {
    const element = document.getElementById(`sc${i}`);
    if (element) {
      element.style.display = ischangedL ? 'block' : 'none';
    }
  }
});




//

//
let count= parseInt(localStorage.getItem("countcart")) || 0;
count=0;
cart.forEach((item)=>{
  count+=item.quantity;
});
console.log(count);
document.querySelector('.cart-num').innerHTML=count;
function f12(){
  if(parseInt(localStorage.getItem("countcart"))===0)
  {
    document.querySelector('.cart-bar').style.opacity=0;
    document.querySelector('.cart-bar').style.pointerEvents="none";
    
  }else
  {
    document.querySelector('.cart-bar').style.opacity=1;  
    document.querySelector('.cart-bar').style.pointerEvents="all";  
  }
}
f12();
//1

document.querySelectorAll('.js-add').forEach((button)=>{
  button.addEventListener('click',()=>{
    let it=button.dataset.productId;
    let matching;

    cart.forEach((item)=>{
      if(item.productid==it)
      {
        matching=item;
      }
    });

    if(matching)
      matching.quantity+=1;
    else{
      cart.push(
      {
          productid:it,
          quantity:1
      }
      );
      
    }
    console.log(cart);
    savetolocals();
    
    count=0;
    cart.forEach((item)=>{
      count+=item.quantity;
    });
    localStorage.setItem("countcart",count.toString());
    document.querySelector('.cart-num').innerHTML=count;
     f12();

  });
 
});

//

//end of 1
// Get references to the elements
// Loop through all pairs of vertical and horizontal elements
  for (let i = 1; i <= 12; i++) {
  const verticalElement = document.querySelector(`.ver${i}`);  // Select the vertical element (ver1, ver2, ..., ver9)
  const horizontalContainer = document.querySelector('.items');  // The container for horizontal scrolling
  const horizontalTarget = document.querySelector(`.hor${i}`);  // Select the horizontal target (hor1, hor2, ..., hor9)

  // Function to check if the vertical element is in the viewport
  function checkScrollPosition() {
    const rect = verticalElement.getBoundingClientRect();

    // Check if the .verN element is within the viewport (vertical scroll)
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      // Get the current document direction (LTR or RTL)
      const isRTL = document.documentElement.dir === 'rtl';

      // Calculate the scroll position considering RTL or LTR
      let scrollPosition;
      if (isRTL) {
        // In RTL, the scroll position is calculated based on the container's total scroll width
        scrollPosition = horizontalContainer.scrollWidth - horizontalTarget.offsetLeft - horizontalTarget.offsetWidth - 30;
      } else {
        // In LTR, we use the normal left offset
        scrollPosition = horizontalTarget.offsetLeft - 30;
      }

      // Scroll the horizontal container to the .horN element
      horizontalContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'  // Smooth scrolling
      });
    }
  }

  // Listen for scroll events on the window for each pair
  window.addEventListener('scroll', checkScrollPosition);

  // Initial check in case the page is already scrolled down
  checkScrollPosition();
}
