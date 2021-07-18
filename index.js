function myValidation(){
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    if(date==""|| month =="" || year==""){
   return false;
    }else { 
        var cc= year.slice(0,1);
        var yy= year.slice(2,3);
        var day=Math.floor( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7);
        return day;
  }
}
 
function myGender(){
    var genderCheck= document.getElementByName("gender");
    var male= document.getElementById("male");
    var female= document.getElementById("female");

    if(!(genderCheck[0].checked || genderCheck[1].checked)){
        return false;
    }else if(male.checked){
        genderCheck=male.value;
        return genderCheck;
    }else if(female.checked){
        genderCheck=female.value;
        return genderCheck;
    }
}

function generateName(){
    var akanMale = ["Kwasi", "Kwadwo", "Twabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysAkan = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if(myGender()=="male"){
        alert("Your Akan name is "+akanMale[myValidation]);
    }
}
