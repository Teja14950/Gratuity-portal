function goToPage() {
    if(document.querySelector("input[name='name']").value !== "") {
        window.location.href = "prof.html"; 
    }
    else{
        alert("Please enter your name");
    }
}
const params = new URLSearchParams(window.location.search);
const prof = params.get('prof'); 
document.getElementById("prof-name").innerText = prof ? prof.toUpperCase() : "Unknown";
// to handle submission of testimonial
document.querySelector("#bs").addEventListener("click", () => {
    const comment = document.getElementById("comment").value.trim();
    if (comment === "") {
        alert("Please write a testimonial before submitting.");
        return;
    }
    window.location.href = "thankyou.html";
});

const user = document.getElementById()

function filterProfessors() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const selectedDept = document.getElementById("departmentfilter").value;
  const professors = document.querySelectorAll(".prof-card");

  professors.forEach(card => {
    const profName = card.getAttribute("data-name").toLowerCase();
    const profDept = card.getAttribute("data-dept");

    const nameMatches = profName.includes(searchInput);
    const deptMatches = selectedDept === "all" || profDept === selectedDept;

    if (nameMatches && deptMatches) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

