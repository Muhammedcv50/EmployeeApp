const btn = document.getElementById('bu');      //bu - id of create button

btn.addEventListener('click', check);


//Debounce Function
let timer;
function fun()
{

    if(!timer)
    {   
        btn.style.backgroundColor = 'grey';
        btn.style.color = 'black';
        //console.log("test");
    }
    timer = setTimeout(() => {timer = undefined;
         btn.style.backgroundColor='#03AEEE';
        btn.style.color = 'white'; 
       }, 2000);
    return false;

 }

 //Form Validation
 function check()                              
 {  
    console.log("kyri");
    let res =true;
    var ename= document.getElementById("ename").value;
    var eid= document.getElementById("eid").value;
    var edate= document.getElementById("edate").value;
    var exp= document.getElementById("exp").value;
    //var email= document.getElementById("email").value;



    var rename= /^[A-Za-z]+$/;
    var reid= /^E-[0-9]+$/i;  //i- case insensitive
    var redate= /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
    var rexp= /^[0-9]+$/;
    //var remail= /^$/;
   
    if (!rename.test(ename))
     {
        alert("Employee name should contain more than one character!!");
        res=false;
    }
    else if (!reid.test(eid))
     {
        alert("Employee ID invalid!!");
        res=false;
    }
    else if (!redate.test(edate))
     {
        alert("Date should be in dd/mm/yyyy format");
        res=false;
    }
    else if (!rexp.test(exp))
     {
        alert("Experience should be a number");
        res=false;
    }

    if(res==true)
    {
       fun();
    }
 }
