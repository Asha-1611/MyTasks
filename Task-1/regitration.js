document.getElementById("registrationform").addEventListener("submit",function(e){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let department = document.getElementById("department").value;
    let phoneno = document.getElementById("phoneno").value;
    let gender = document.getElementById("gender").value;
    let errorMsg=document.getElementById("errorMsg");
    fetch("https://localhost:3000/register",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            email:email,
            date:date,
            department:department,
            phoneno:phoneno,
            gender:gender
        })
    })
    .then(response=> response.json())
    .then(date=>{
        document.getElementById("result").innerText=data.message;
    })
    .catch(error=>{
        console.log(error);
    });
});