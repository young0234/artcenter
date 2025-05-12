/* 페이지네이션 */
let rowsPerPage = 10; 
let rows = document.querySelectorAll('#my-table tbody tr');
console.log(rows)
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount/ rowsPerPage); 
let numbers = document.querySelector('#numbers');
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
};
let numberBtn = numbers.querySelectorAll('a');
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    displayRow(idx)
  });
});
displayRow(0);
function displayRow(idx){
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = Array.from(rows);
  console.log(rowsArray);
  for(let ra of rowsArray){
    ra.style.display = 'none';
  };
  let newRows = rowsArray.slice(start, end);
  for(let nr of newRows){
    nr.style.display = '';
  };
  for(let nb of numberBtn){
    nb.classList.remove('active')
  };
  numberBtn[idx].classList.add('active')
};
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
