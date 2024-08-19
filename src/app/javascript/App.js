document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 576) {
      //window.location.href = "src/app/html/smart-index.html";
      pageAlerts('alert', 'Este player não está funcionado.', 'O acesso ao site sera diretamente no dispositivo cujo qual fora inicido. Sendo assim o dispositivo de tela grande atual tera que exibir a versão mobile de site, até que ua versão totalmente funcional especifica para dispositivos grandes seja lançada. Agradecemos a compreenção.');
    }
    const navButtons = document.querySelectorAll(".option-bar");

    navButtons.forEach(button => {
        button.addEventListener("click", handleNavClick);
        updateHeaderVisibility();
    });
    
    showTab("home");
    updateHeaderVisibility();
});

// PAGINA SEARCH

document.addEventListener("click", function (event) {
    if (
        event.target.tagName === "A" &&
        event.target.getAttribute("target") === "_blank"
    ) {
      
        event.preventDefault();

    }
});

const searchBox = document.getElementById("search-box");
let navBar = document.querySelector("nav");
let suggest = document.querySelector(".suggest");
let seeing = document.querySelector("#search .categories .what-am-I-seeing");
const btnSuggest = document.getElementById("btn-suggest-movie");
const clearInput = document.querySelector(".clear-input");

searchBox.addEventListener("focus", () => {
    navBar.classList.add("keyboard-visible");
    suggest.classList.add("keyboard-visible");
});

searchBox.addEventListener("blur", () => {
    navBar.classList.remove("keyboard-visible");
    suggest.classList.remove("keyboard-visible");
});

btnSuggest.addEventListener("click", () => {
    searchBox.value = "Resgate 2";
});

clearInput.addEventListener("click", () => {
    let resultsContainer = document.querySelector("#search .results");
    let recommendations = document.querySelector("#search .recommendations");

    searchBox.value = "";
    resultsContainer.innerHTML = "";
    recommendations.classList.remove("hidden");
    clearInputDisplayOff();
    seeing.innerText = "Recomendações";
});

searchBox.addEventListener("input", () => {
    if (searchBox.value != "") {
        clearInput.style.display = "flex";
        seeing.innerText = "Principais resutados";
    } else {
        clearInputDisplayOff();
        seeing.innerText = "Digite algo...";
    }
});

function clearInputDisplayOff() {
    clearInput.style.display = "none";
}

// DETECTAR TEMA

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

function handleThemeChange(event) {
    if (event.matches) {
        // Tema escuro ativado
        console.log("Tema escuro ativado");
    } else {
        // Tema claro ativado
        console.log("Tema claro ativado");
    }
}

darkModeMediaQuery.addListener(handleThemeChange);

handleThemeChange(darkModeMediaQuery);

const PgSearch = document.querySelector("#search .scroll");

PgSearch.addEventListener("scroll", headerSearch);

function headerSearch() {
    const ElementHeaderSearch = document.querySelector(
        "#search .scroll .header"
    );
    let top = PgSearch.scrollTop;
    if (top == 0) {
        ElementHeaderSearch.classList.remove("active");
    } else if (top > 120) {
        ElementHeaderSearch.classList.add("active");
    }
}

window.functionsRenderPages = function functionsRenderPages(
    profile,
    email,
    firstName,
    lastName,
    userName
) {
    profileSelectorHeader(profile);
    profileEmail(email);
    profileName(userName);
};

function profileSelectorHeader(img) {
    let current = `../../../accets/default_profile_photo/${img}`;
    let picturesOfUsers = document.querySelectorAll(
        ".header-more-options .options .users img"
    );
    let all_imgUserProfile = document.querySelectorAll(".img-user-profile");

    all_imgUserProfile.forEach(imgUser => {
        imgUser.src = current;
    });
    picturesOfUsers.forEach(users => {
        if (users.src.includes(current)) {
            users.classList.add("active");
        }
    });
}
function profileEmail(email) {
    document.querySelectorAll(".firebase.email").forEach(select => {
        select.innerText = email;
    });
}

function profileName(userName) {
    document.querySelectorAll(".firebase.name").forEach(select => {
        select.innerText = userName;
    });
}

window.dataFirebase = function dataFirebase(userFirebaseData) {
    userFirebaseData.forEach((data, index) => {
        functionsRenderPages(
            data.profile,
            data.email,
            data.firstName,
            data.lastName,
            data.userName
        );
    

    window.display_profilePhotoOptions = function display_profilePhotoOptions(url) {
        let option = document.createElement("div");
        

        let img = document.createElement("img");
        let urlLocal = `../../../accets/default_profile_photo/${url}`
        img.setAttribute("src", urlLocal);
        
        let check = document.createElement('div');
        check.classList.add('check-current');
        check.innerHTML = `
        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      		<use xlink:href="src/icons/ios-checkmark-circle.svg#path-1"></use>
				</svg>
					`;
        
        if (data.profile == url) {
          option.classList.add('option', 'current');
        } else {
          option.classList.add('option');
        }
        
        option.addEventListener('click', ()=> {
          updateProfilePhoto(url);
        });
        
        let contaiment = document.querySelector("#edit-profile .profile-picture .dynamic");
        
        option.appendChild(img);
        option.appendChild(check);
        contaiment.appendChild(option);
    };
  });
};

//underMaintenance();
function underMaintenance() {
    let type = "alert";
    let titleAlert = "Problemas?";
    let textAlert =
        "Talvez o app apresente falhas,  nosso app está passando por manutenções.";

    document.querySelector("#alert").classList.add("active");
    document.querySelectorAll("#alert .content").forEach(content => {
        content.classList.remove("active");
    });
    document.querySelector(`#alert .type-${type}`).classList.add("active");
    document.querySelector(`#alert .type-${type} .top h3`).innerText =
        titleAlert;
    document.querySelector(`#alert .type-${type} .top p`).innerText = textAlert;

    document
        .querySelector(`#alert .type-${type} .yes`)
        .addEventListener("click", () => {
            document.querySelector("#alert").classList.remove("active");
        });
}
