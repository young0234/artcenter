/* 메인메뉴바 */
let menuItems = document.querySelectorAll('.menu_item');
let subMenus = document.querySelectorAll('.sub_menu');
let mainMenu = document.querySelector('.menu_icon');
mainMenu.addEventListener('click', function () {
  subMenus.forEach(function (sub) {
    if (sub.style.display === 'none' || sub.style.display === '') {
      sub.style.display = 'block';
    } else {
      sub.style.display = 'none';
    }
  });
});
menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    subMenus.forEach(function (sub) {
      sub.style.display = 'none'; 
    });
    let target = document.getElementById(item.dataset.target);
    if (target) {
      target.style.display = 'block';
    }
  });
});
subMenus.forEach(function (sub) {
  sub.addEventListener('mouseenter', function () {
    sub.style.display = 'block';
  });
  
  sub.addEventListener('mouseleave', function () {
    sub.style.display = 'none';
  });
});
document.querySelector('.main_menu').addEventListener('mouseleave', function () {
  subMenus.forEach(function (sub) {
    sub.style.display = 'none';
  });
});

/* 뉴스 탭 */
let tabButtons = document.querySelectorAll('.tab_btn');
let tabContents = document.querySelectorAll('.tab_content');
console.log(tabButtons, tabContents)
tabButtons.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    tabButtons.forEach(function (button) {
      button.classList.remove('active')
    });
    tabContents.forEach(function (content) {
      content.classList.remove('active')
    });
    btn.classList.add('active')
    tabContents[index].classList.add('active')
  });
});
/* 사업 */
let workItems = document.querySelectorAll('.work_tap > li');
let subTaps = document.querySelectorAll('.work_subtap');
workItems.forEach(function (item, index) {
  item.addEventListener('click', function () {
    workItems.forEach(function (el) {
      el.classList.remove('active');
    });
    subTaps.forEach(function (sub) {
      sub.classList.remove('active');
    });
    item.classList.add('active');
    let currentSubTap = item.querySelector('.work_subtap');
    if (currentSubTap) {
      currentSubTap.classList.add('active');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let subMenus = document.querySelectorAll(".work_tap > li");
  let workContents = document.querySelectorAll(".work_content");
  subMenus.forEach((menu, mainIdx) => {
    let subTabs = menu.querySelectorAll(".work_subtap li");
    subTabs.forEach((sub, subIdx) => {
      sub.addEventListener("click", (e) => {
        e.preventDefault();
        workContents.forEach(content => content.classList.remove("active"));
        const target = document.querySelector(`.work_content[data-main="${mainIdx}"][data-sub="${subIdx}"]`);
        if (target) target.classList.add("active");
        subTabs.forEach(s => s.classList.remove("active"));
        sub.classList.add("active");
      });
    });
  });
});
function toggleContent(contentId) {
  const content = document.getElementById("art_korea_content");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
};
/* 카드뉴스 스와이퍼 */
var swiper = new Swiper(".cardnewsSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
  loopAdditionalSlides: 1,
});
/* 발간자료 스와이퍼 */
var swiper = new Swiper(".pageSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 5,
  spaceBetween: 30, 
  loop: true, 
  loopAdditionalSlides: 1,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,  
    },
    1024: {
      slidesPerView: 5, // 데스크탑에서 5개 슬라이드
      spaceBetween: 30, // 기본 간격
    }
  },
})
/* 큐메뉴 */
window.addEventListener('scroll', function () {
  let qMenu = document.querySelector('.qMenu');
  if (window.scrollY > 300) {
    qMenu.classList.add('show');
  } else {
    qMenu.classList.remove('show');
  }
});
/* 지도 */
new daum.roughmap.Lander({
  "timestamp" : "1746061171054",
  "key" : "2nvur",
  "mapWidth" : "710",
  "mapHeight" : "360"
}).render();
/* 아이콘 스와이퍼 */
var swiper = new Swiper(".iconSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 1,
});
/* 메인페이지 날짜 */
let targetDate = new Date('2025-10-29T00:00:00');
function updateDisplay() {
  let now = new Date();
  let diff = targetDate - now;
  let dDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = now.getHours();     
  let minutes = now.getMinutes();  
  let seconds = now.getSeconds();   
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  document.querySelector('.dday_text').textContent =
    `10월 29일 D-day ${dDay < 0 ? '+' + Math.abs(dDay) : dDay}일`;
  document.querySelector('.time_text').textContent =
    `현재 시각: ${hours}:${minutes}:${seconds}`;
};
setInterval(updateDisplay, 1000);
updateDisplay();
/* 탑버튼 */
let scrollBtn = document.getElementById("scrollTopBtn");
let mediaQuery = window.matchMedia("(max-width: 768px)");
function handleScrollEvent() {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";  
  } else {
    scrollBtn.style.display = "none";   
  }
}
function setupScrollListener() {
  if (mediaQuery.matches) {
    window.addEventListener("scroll", handleScrollEvent);
  } else {
    window.removeEventListener("scroll", handleScrollEvent);
    scrollBtn.style.display = "none";
  }
}
mediaQuery.addListener(setupScrollListener);
setupScrollListener();
/* 전체 메뉴바 */
let menuIcon = document.querySelector('.menu_icon');
let accordionMenu = document.querySelector('.accordion');
console.log(menuIcon, accordionMenu);
menuIcon.addEventListener('click', function() {
  if (window.innerWidth > 768) return;
  if (accordionMenu.style.right === '0px') {
    accordionMenu.style.right = '-250px';
  } else {
    accordionMenu.style.display = 'block';
    setTimeout(() => {
      accordionMenu.style.right = '0'; 
    }, 10); 
  }
});
document.querySelectorAll('.accodion_title').forEach(item => {
  item.addEventListener('click', function() {
    let content = this.nextElementSibling; 
    document.querySelectorAll('.accodion_content.active').forEach(activeContent => {
      if (activeContent !== content) {
        activeContent.classList.remove('active');
      }
    });
    content.classList.toggle('active');
  });
});
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    accordionMenu.style.display = 'none'; 
    accordionMenu.style.right = '-250px';
  }
});

/* aos */
AOS.init();