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