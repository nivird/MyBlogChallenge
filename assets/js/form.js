document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
  
    // Store data in sessionStorage
    sessionStorage.setItem("input1", input1);
    sessionStorage.setItem("input2", input2);
    sessionStorage.setItem("input3", input3);
    //sessionStorage.setItem("input1", )
   // localStorage.setItem("input1",username);


// WHEN YOU SAVE, YOU NEED TO SAVE AS AN ARRAY

//[ {name:"", title:"", content:""} , {each object is a post}, {}, {}]

    // Redirect to result page
    window.location.href = "blog.html";
  });