const NavList = document.querySelector('.list-items');
const NavBtn = document.querySelector('.hamburger');
const Close = document.querySelectorAll('.remove');
const Opacity = document.querySelector('.overlay');
const PopupForm_Btn = document.querySelector('.appointment-form-btn');
const PopForm = document.querySelector('.form-popup');

NavBtn.onclick = function () {
    NavList.classList.add('active');
    NavBtn.classList.add('active');
    Opacity.classList.add('active');
}
Opacity.onclick = function () {
    NavList.classList.remove('active');
    NavBtn.classList.remove('active');
    Opacity.classList.remove('active');
}
Close.forEach(closed => {
    closed.onclick = function () {
        NavList.classList.remove('active');
        NavBtn.classList.remove('active');
        Opacity.classList.remove('active');
        PopForm.classList.remove('active');
        document.querySelector('body').style.overflow = "auto";
    }
})

PopupForm_Btn.onclick = function () {
    PopForm.classList.add('active');
    Opacity.classList.add('active');

    if (PopForm.classList.contains('active')) {
        Opacity.onclick = function () {
            Opacity.classList.add('active');
        }
    }
        
}