function setActiveLink(param) {
    const a = document.getElementsByClassName("header__link-active");
    if (a.length > 0) a[0].classList.remove("header__link-active");
    param.add("header__link-active");
}

