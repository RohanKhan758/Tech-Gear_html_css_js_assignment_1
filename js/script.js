function checkAge() {
    const age = parseInt(document.getElementById("age").value);
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = ""; // Clear previous results

    if (age >= 18) {
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "border-success");
        card.innerHTML = `<div class="card-body">You are an adult.</div>`;
        resultDiv.appendChild(card);
    } else {
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "border-warning");
        card.innerHTML = `<div class="card-body">You are a child.</div>`;
        resultDiv.appendChild(card);
    }
}
  
  
  