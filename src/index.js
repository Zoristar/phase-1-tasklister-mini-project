document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.querySelector("#new-task-description");
  const form = document.querySelector("#create-task-form");
  const task = document.querySelector("#tasks");
  const input2 = document.createElement("input");
  input2.type = "text";
  input2.name = "user-name";
  input2.placeholder = "user";
  input2.id = "input2"
  form.appendChild(input2);
  const prior = document.createElement('h4')
  prior.innerText = "Choose priority"
  form.appendChild(prior)

  const select = document.createElement("select");
  const option = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  select.id = "select"

  option.innerText = "high";
  option2.innerText = "medium";
  option3.innerText = "low";

  select.appendChild(option);
  select.appendChild(option2);
  select.appendChild(option3);
  form.appendChild(select);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "X";
    li.innerText = input.value + " " + input2.value + " ";
    task.appendChild(li).appendChild(btn);
    switch (select.value) {
      case "high":
        li.style.color = "red";
        break;
      case "medium":
        li.style.color = "yellow";
        break;
      case "low":
        li.style.color = "green";
    }
    
    btn.addEventListener("click", () => {
      task.removeChild(li);
    });
    e.target.reset();
  });
  
});

