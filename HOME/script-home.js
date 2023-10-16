const allgames$$ = document.querySelector(".all-videogames");

const localgetFetch = async () => {
  const response = await fetch(
    "http://localhost:5000/videogames/getallvideogames",
    { method: "GET" }
  );
  const result = await response.json();
  // console.log(result);
  for (const videogame of result) {
    const div$$ = document.createElement("div");
    div$$.classList.add("videogame-bg");
    const title$$ = document.createElement("h2");
    const year$$ = document.createElement("p");
    const genre$$ = document.createElement("p");
    const country$$ = document.createElement("p");
    const image$$ = document.createElement("img");

    image$$.setAttribute("src", videogame.image);
    image$$.classList.add("game-image");
    country$$.textContent = videogame.country;
    country$$.classList.add("info-games");
    genre$$.textContent = videogame.genre;
    genre$$.classList.add("info-games");
    year$$.textContent = videogame.year;
    year$$.classList.add("info-games");
    title$$.textContent = videogame.title;
    title$$.classList.add("info-games");
    title$$.classList.add("game-title");
    div$$.appendChild(title$$);
    div$$.appendChild(genre$$);
    div$$.appendChild(year$$);
    div$$.appendChild(country$$);
    div$$.appendChild(image$$);
   
     const section$$ = document.querySelector(".videogames");
    section$$.appendChild(div$$);
    
    document.body.appendChild(section$$);
  }
  return result;
};

const agarraInput$$ = (arrayGames) => {
    const input$$ = document.querySelector("input");
  
    input$$.addEventListener("input", () =>
      searchGames(input$$.value, arrayGames)
    );
  };

  
  const searchGames = (filtro, games) => {
    let gamesSearched = games.filter((game) =>
      game.title.toLowerCase().includes(filtro.toLowerCase())
    );
  
    pintaGames(gamesSearched);
  };

const pintaGames = (gamesSearched) => {
  const sectiondiv$$ = document.querySelector(".videogames")
  sectiondiv$$.innerHTML=""
  for (const videogame of gamesSearched) {
    const div$$ = document.createElement("div");
    div$$.classList.add("videogame-bg");
    const title$$ = document.createElement("h2");
    const year$$ = document.createElement("p");
    const genre$$ = document.createElement("p");
    const country$$ = document.createElement("p");
    const image$$ = document.createElement("img");

    image$$.setAttribute("src", videogame.image);
    image$$.classList.add("game-image");
    country$$.textContent = videogame.country;
    country$$.classList.add("info-games");
    genre$$.textContent = videogame.genre;
    genre$$.classList.add("info-games");
    year$$.textContent = videogame.year;
    year$$.classList.add("info-games");
    title$$.textContent = videogame.title;
    title$$.classList.add("info-games");
    title$$.classList.add("game-title");
    div$$.appendChild(title$$);
    div$$.appendChild(genre$$);
    div$$.appendChild(year$$);
    div$$.appendChild(country$$);
    div$$.appendChild(image$$);
   
     const section$$ = document.querySelector(".videogames");
    section$$.appendChild(div$$);
    
    document.body.appendChild(section$$);
  }
  return
    
}


const init = async () => {
   const arrayGames = await localgetFetch();
    agarraInput$$(arrayGames);
    // const arrayGames = await localgetFetch()
//   console.log(arrayGames);
//   drawInput$$(arrayGames);
//   searchGames();
};
init();
