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
});


// DROP DOWN SCRIPT

const NavListItems = document.querySelectorAll('.dropDown-open');

NavListItems.forEach((lists) => {
    lists.addEventListener('click', () => {
        if (lists.classList.contains('active')) {
            lists.classList.remove('active');
        } else {
            lists.classList.add('active');
        }

    })
})

// POP FORM SCRIPT

PopupForm_Btn.onclick = function () {
    PopForm.classList.add('active');
    Opacity.classList.add('active');

    if (PopForm.classList.contains('active')) {
        Opacity.onclick = function () {
            Opacity.classList.add('active');
        }
    }
}

// COUNTER FOR ABOUT US PAGE

const myNum = document.querySelectorAll('.count');
let speed = 24;

const Experienced_Section = document.querySelector(".experience-section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                myNum.forEach((myCount) => {

                    let target_Count = myCount.dataset.count;
                    let init_Count = +myCount.innerText;

                    let new_increment_speed = Math.floor(target_Count / speed);

                    const updateNumber = () => {
                        init_Count += new_increment_speed;
                        myCount.innerText = init_Count;

                        if (init_Count < target_Count) {
                            setTimeout(() => {
                                updateNumber()
                            }, 50);
                        }
                    }

                    updateNumber();

                })
                return;
            }

        });
    },
    {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
    }
);
observer.observe(Experienced_Section);

// HOME PAGE SCRIPT


















// function truncateText(selector, maxLength) {
//     var element = document.querySelector(selector),
//         truncated = element.innerText;

//     if (truncated.length > maxLength) {
//         truncated = truncated.substr(0, maxLength) + '...';
//     }
//     return truncated;
// }

// var descrip = document.querySelectorAll('.description p')

// descrip.forEach((para) => {
//     para.innerText = truncateText('.description p', 107);
// })