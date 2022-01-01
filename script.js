function ageInDays(){
    var birthYear = document.getElementById('inpt').Value;
    var age = 2022 - birthYear;
    if(age < 0 || age > 200){
      document.getElementById('not-found').style.display = "block";
      document.getElementById('months').style.display = "none";
      document.getElementById('result').style.display = "none";
    }
    else{
    document.getElementById('not-found').style.display = "none";
    document.getElementById('months').style.display = "block";
    document.getElementById('result').style.display = "block"
    var month = age * 12;
    var Days = age * 365;
    document.getElementById('months').innerText = month;
    document.getElementById('result').innerText = Days;
    }
}
document.getElementById('calar').addEventListener("click", function(){
    document.getElementById('inpt').Value = '';
    document.getElementById('months').innerText = 0;
    document.getElementById('result').innerText = 0;

})