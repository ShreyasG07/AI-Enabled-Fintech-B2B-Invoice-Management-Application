//$('#checkall').change(function () {
//  $('.checkSingle').prop('checked',this.checked);
//});
//
//$('.checkSingle').change(function () {
//if ($('.checkSingle:checked').length == $('.checkSingle').length){
//$('#checkall').prop('checked',true);
//}
//else {
//$('#checkall').prop('checked',false);
//}
//});



let data;
let start = 0;
const pageno = 11;

const myFunc = (start , pageno) => {
  const mydata = document.querySelector('#tbody');
  mydata.innerHTML = data.slice(start , start+pageno).map((s, index) => {
	  if(index%2){
	      return("<tr ><td><input class='checkSingle' type='checkbox'></td><td>"+ s.name_customer+ "</td><td>" + s.cust_number+"</td><td>"+ s.invoice_id+"</td><td>"+ s.total_open_amount+"</td><td>"+s.due_in_date+"</td><td>"+s.clear_date+"</td><td>"+s.Bucket_list+"</td></tr>")
	    }
	    else{
	      return("<tr ><td><input class='checkSingle' type='checkbox'></td><td>"+ s.name_customer + "</td><td>" + s.cust_number+"</td><td>"+ s.invoice_id+"</td><td>"+ s.total_open_amount+"</td><td>"+s.due_in_date+"</td><td>"+s.clear_date+"</td><td>"+s.Bucket_list+"</td></tr>")
	    }
  }).join('');
}
const prom = async()=>{
  const shre = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    try {
      const sware = await fetch("http://localhost:3000/data", shre);
      const result= await sware.json()
      console.log(result);
      data=result;
      myFunc(start, pageno);
    } 
  catch (err) {
      console.log(err);
    }
}

window.onload = () => {
  prom();
};

const Prev = (s) => {
  if ( start > 0 ) {
    start = start - pageno;
    myFunc(start, pageno);
  }
}

const Next = (s) => {
  if ( start < data.length - pageno ) {
    start = start + pageno;
    myFunc(start, pageno);
  }
}








var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}




var modal1 = document.getElementById("id01");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}




var modal2 = document.getElementById("id02");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//let datasets = [];
//const newdataset = (ev)=>{
//    ev.preventDefault(); 
//    let newm = {
//      id: Date.now(),
//      name_customer: document.getElementById('cname').value,
//      cust_number: document.getElementById('cusno').value,
//      invoice_number: document.getElementById('invno').value,
//      total_open_amount: document.getElementById('invamo').value,
//      due_in_date: document.getElementById('birth').value,
//    }
//    datasets.push(newm);
//    document.forms[0].reset(); 
//    console.warn('added' , {datasets} );
//    const newData = document.querySelector('#tbody1');
//    newData.innerHTML="<td><input class='checkbox' type='checkbox'></td><td>"+ newm.name_customer +"</td><td>"+newm.cust_number+"</td><td>"+newm.invoice_number+"</td><td>"+newm.total_open_amount+"</td><td>"+newm.due_in_date+"</td><td>-</td><td>Yet To be Predicted</td>";
//}
//
//document.addEventListener('DOMContentLoaded', ()=>{
//  document.getElementById('indav').addEventListener('click', newdataset);
//});


