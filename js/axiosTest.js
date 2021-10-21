// https://akabab.github.io/superhero-api/api/

function getHeroesInfo(id, search) {
  let parseString;
  if (id === "all") {
    parseString = "https://akabab.github.io/superhero-api/api/all.json";
  } else {
    parseString = `https://akabab.github.io/superhero-api/api/id/${id}.json`;
  }

  axios
    .get(parseString)
    .then(function (response) {
      if (response.data && id === "all" && search !== "") {
        const result = response.data.filter(hero => hero.name.toLowerCase().includes(search.toLowerCase()));
        showHeroes(result);
      }
      if (response.data && id === "all" && search === "") {
        document.getElementsByClassName("sk-chase")[0].remove();
        showHeroes(response.data);
      } else {
        showHeroDetailInfo(id, response.data);
        console.log(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

function showHeroes(heroes) {
  const heroCardSelector = document.querySelector(".hero-section");

  document.querySelector(".hero-section").innerHTML = "";

  heroes.forEach((hero) => {
    const heroCard = document.createElement("div");
    heroCard.classList.add("hero-section__card");
    heroCard.innerHTML = `
      <div class="hero-section__name">
      <a class="hero-section__url" href="hero-info.html?id=${hero.id}" onclick="showHeroDetailInfo(${hero.id})">${hero.name}</a>
    </div>
    <div class="hero-section__image">
      <img src="${hero.images.sm}" alt="${hero.name}" />
    </div>
          `;
    heroCardSelector.appendChild(heroCard);
  });
}

function showHeroDetailInfo(id, heroData) {
  const heroInfoSelector = document.querySelector(".hero-info");
  document.querySelector(".hero-info").innerHTML = "";
  let powerstatsStr = `
  <tr>
    <td class="hero-info__header" colspan="2">${"powerstats".toUpperCase()}</td>
  </tr>
  `;
  Object.keys(heroData.powerstats).map(
    (item) =>
      (powerstatsStr += `
    <tr>
      <td class="hero-info__tag">${item[0].toUpperCase() + item.slice(1)}</td>
      <td class="hero-info__value">${heroData.powerstats[item]}</td>
    </tr>
    `)
  );
  const heroInfo = document.createElement("div");
  heroInfo.classList.add("hero-info__section");
  heroInfo.innerHTML = `
    <div class="hero-info__name">${heroData.name.toUpperCase()}</div>
        <div class="hero-info__image">
          <img src="${heroData.images.md}" alt="${heroData.name}"/>
          <div class="hero-info__main">
          <p>Race: ${heroData.appearance.race}</p>
          <p>Gender: ${heroData.appearance.gender}</p>
          <p>Place of birth: ${heroData.biography.placeOfBirth}</p>
          </div>
        </div>
        <table class="hero-info__detail">
          ${powerstatsStr}
        </table>
          `;
  heroInfoSelector.appendChild(heroInfo);
}
