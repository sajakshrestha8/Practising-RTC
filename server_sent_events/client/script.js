console.log("Is js running properly??");

async function getData() {
  const URL = "http://localhost:8080/startBuild";

  try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
