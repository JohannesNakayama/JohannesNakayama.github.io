function safeLocalStorageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {
    }
}

function setTheme(mode) {
    safeLocalStorageSet("theme-storage", mode);
}

function toggleTheme() {
    var mode = safeLocalStorageGet("theme-storage");
    if (mode === "light") {
        setTheme("dark");
        updateItemToggleTheme();
    } else if (mode === "dark") {
        setTheme("light");
        updateItemToggleTheme();
    }
}

function updateItemToggleTheme() {
    let mode = getSavedTheme();

    const darkModeStyle = document.getElementById("darkModeStyle");
    if (darkModeStyle) {
        darkModeStyle.disabled = (mode === "light");
    }

    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
    if (sunIcon && moonIcon) {
        sunIcon.style.display = (mode === "dark") ? "inline-block" : "none";
        moonIcon.style.display = (mode === "light") ? "inline-block" : "none";
    }

    let htmlElement = document.querySelector("html");
    if (mode === "dark") {
        htmlElement.classList.remove("light")
        htmlElement.classList.add("dark")
    } else if (mode === "light") {
        htmlElement.classList.remove("dark")
        htmlElement.classList.add("light")
    }
}

function getSavedTheme() {
    let currentTheme = safeLocalStorageGet("theme-storage");
    if(!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    }

    return currentTheme;
}

updateItemToggleTheme();
