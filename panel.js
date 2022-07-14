function panelSwitch(ref) {
    var b1 = document.getElementsByClassName("b1")[0];
    var b2 = document.getElementsByClassName("b2")[0];
    var block1 = document.getElementsByClassName("block1")[0];
    var block2 = document.getElementsByClassName("block2")[0];

    if (ref.classList.contains('b1')) {
        if (!ref.classList.contains('active')) {
            b1.classList.add("active");
            b2.classList.remove("active");
            block1.style.display = "block";
            block2.style.display = "none";
            b2.style.borderBottom = "1px solid #F26A35";
            b1.style.borderBottom = "none";

        }

    } else {
        if (!ref.classList.contains('active')) {
            b2.classList.add("active");
            b1.classList.remove("active");
            block2.style.display = "block";
            block1.style.display = "none";
            b1.style.borderBottom = "1px solid #F26A35";
            b2.style.borderBottom = "none";
        }
    }

}