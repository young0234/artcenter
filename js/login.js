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
function initAccordionMenu() {
  let menuIcon = document.querySelector('.menu_icon');
  let accordionMenu = document.querySelector('.accordion');
  if (!menuIcon || !accordionMenu) return;
  menuIcon.addEventListener('click', function () {
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
  document.querySelectorAll('.accordion_title').forEach(item => {
    item.addEventListener('click', function () {
      let content = this.nextElementSibling;
      document.querySelectorAll('.accordion_content.active').forEach(activeContent => {
        if (activeContent !== content) {
          activeContent.classList.remove('active');
        }
      });
      content.classList.toggle('active');
    });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      accordionMenu.style.display = 'none';
      accordionMenu.style.right = '-250px';
    }
  });
  window.addEventListener('scroll', function () {
    if (window.innerWidth <= 768 && accordionMenu.style.right === '0px') {
      accordionMenu.style.right = '-250px';
    }
  });
}
document.addEventListener('DOMContentLoaded', function () {
  initAccordionMenu();
});