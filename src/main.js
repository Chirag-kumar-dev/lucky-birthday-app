var dateOfBirth=document.querySelector("#dob");
var luckyNumber=document.querySelector("#lucky-number");
var checkNumberButton=document.querySelector("#check-btn");
var message=document.querySelector("#message");


function sumOfDigits(bdate){
    var bdate=bdate.replaceAll("-","");
    var lucky=luckyNumber.value;
    if(bdate=="" || lucky==""){
        message.innerHTML="Please enter date of birth and lucky number";
        return;
    }
    // if(lucky==""){
    //     message.innerHTML="Please enter lucky number";
    // }
    if (lucky<=0){
        message.innerHTML="Please enter positive lucky Number";
        return 
    }
    var totalSum=0;
    for(let i=0;i<bdate.length;i++){
    var rem=bdate%lucky;
    totalSum=totalSum+Number(bdate.charAt(i))
    }
    console.log(totalSum)
    console.log(totalSum%lucky)
    if (totalSum%lucky===0){
        message.innerHTML="Yehhh!!! Your Birthday is lucky";
    }else{
        message.innerHTML="oopps!! Your Birthday is unlucky";
    }
    return totalSum;
}
function checklucky(){
    var bdate=dateOfBirth.value;
    const sum=sumOfDigits(bdate);
    
}
checkNumberButton.addEventListener("click",checklucky);