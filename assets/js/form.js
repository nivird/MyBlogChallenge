document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
  
    // Store data in sessionStorage
    sessionStorage.setItem("input1", input1);
    sessionStorage.setItem("input2", input2);
    sessionStorage.setItem("input3", input3);
    // Redirect to result page
    window.location.href = "blog.html";
  });