let theme = localStorage.getItem("theme");
const themeToggle = document.querySelector("#themeToggleButton");
const themeToggleButton = document.getElementById("themeToggleButton");

const enableDarkTheme = () => {
    document.body.classList.add("darkTheme");
    localStorage.setItem("theme" , "darkmode");
    themeToggleButton.innerHTML = "sunny";
};

const disableDarkTheme = () => {
    document.body.classList.remove("darkTheme");
    localStorage.setItem("theme" , "lightmode");
    themeToggleButton.innerHTML = "dark_mode";
};

themeToggle.addEventListener("click", () => {
    theme = localStorage.getItem("theme");
    if (theme !== "darkmode") {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
});


// returning user check
function getUserPref(theme) {
    if (theme == "lightmode") {
        return "lightmode";
    } else if (theme == "darkmode") {
        return "darkmode";
    } else if (theme == null) {
        return null;
    }
}

// check OS theme and account for user override
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // OS is dark, css set to dark, button uses moon, update storage
    themeToggleButton.innerHTML = "dark_mode";
    localStorage.setItem("OSpref" , "darkpref");

    /**
     * First time visitor or returning user?
     * Help turn on dark mode unless specified
     */
    if (getUserPref(theme) == null || getUserPref(theme) == "darkmode") {
        enableDarkTheme();
    }
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // OS is light, css set to light, button uses sun, update storage
    themeToggleButton.innerHTML = "sunny";
    localStorage.setItem("OSpref" , "lightpref");
    
    /**
     * Is this a returning user preferring dark mode?
     */
    if (getUserPref(theme) == "darkmode") {
        enableDarkTheme();
    }
}
