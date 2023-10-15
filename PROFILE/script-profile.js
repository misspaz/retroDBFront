const profilebox$$ = document.querySelector(".profile-bg");


const localgetFetch = async (profileId) => {
  const response = await fetch(
    `http://localhost:5000/user/profile/${profileId}`,
    {
      method: "GET",
      headers: {
      Authorization: `Bearer ${token}`,
      }
    }
  );
  const result = await response.json();
  console.log(result);

  //   const h2$$ = document.createElement("h2");
  //   h2$$.textContent = `${result.age}`;
  //   profilebox$$.appendChild(h2$$);

  return;
};

const init = async () => {
  localgetFetch();
};
init();


