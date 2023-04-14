const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`).then(resp => resp.json()).then(moviesJson => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = moviesJson.title;
        summary.innerText = moviesJson.summary;
    }); 
  });


}

document.addEventListener('DOMContentLoaded', init);