
/*Data una lista della spesa, stampare sulla pagina 
gli elementi della lista individualmente con un ciclo while.
 */

const list = ["pasta", "formaggio", "pomodoro", "lattuga", "uova"];
const listEL = document.getElementById("listEL");

let i=0;

while (i < list.length) {
 console.log(list[i])
 const products = `<li>${list[i]}</li>`;
 listEL.innerHTML += products;
 i++;
 
}