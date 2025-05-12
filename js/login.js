/* 로그인 입력 안할 시 */
document.getElementById("login-btn").addEventListener("click", function(event) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    event.preventDefault(); 
  } else {
    alert("로그인 성공!");
  }
});
/* 아코디언 */
document.addEventListener('DOMContentLoaded', function () {
  const accordionTitles = document.querySelectorAll('.accordion_title');
  const accordionContents = document.querySelectorAll('.accordion_content');
  accordionTitles.forEach(title => {
    title.addEventListener('click', function () {
      let content = this.nextElementSibling;
      accordionContents.forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.classList.remove('active');
        }
      });
      content.classList.toggle('active');
    });
  });
  let menuIcon = document.querySelector('.menu_icon');
  let accordionMenu = document.querySelector('.accordion');
  
  if (menuIcon && accordionMenu) {
    menuIcon.addEventListener('click', function () {
      if (window.innerWidth <= 768) { 
        if (accordionMenu.style.right === '0px') {
          accordionMenu.style.right = '-250px';
        } else {
          accordionMenu.style.display = 'block';
          setTimeout(() => {
            accordionMenu.style.right = '0'; 
          }, 10);
        }
      }
    });
  }
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (accordionMenu) {
        accordionMenu.style.display = 'none'; 
        accordionMenu.style.right = '-250px';
      }
    }
  });
});