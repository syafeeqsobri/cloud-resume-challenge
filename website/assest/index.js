//JavaScript Code
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://ry2n2b9wge.execute-api.us-east-1.amazonaws.com/dev2", {
      method: "GET"
    });
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
  } catch (error) {
    console.error(error);
    counter.innerHTML = "Couldn't read views";
  }
}

updateCounter();



