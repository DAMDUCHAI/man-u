const barsIcon = document.querySelector('.bars');
const timesIcon = document.querySelector('.times');

const opcityModalBars = document.querySelector('.opcity-modal-bars');


const modalBars = document.querySelector('.modal-bars');

barsIcon.addEventListener('click', function(){
    modalBars.classList.remove('modal-bars-hide')
    opcityModalBars.classList.add('show-opacity-bars')
})
timesIcon.addEventListener('click', function(){
    modalBars.classList.add('modal-bars-hide');
    opcityModalBars.classList.remove('show-opacity-bars')

})

opcityModalBars.addEventListener('click', function(){
    opcityModalBars.classList.remove('show-opacity-bars')
    modalBars.classList.add('modal-bars-hide');

})

//filter modal
const filterBtn
= document.querySelector('.filter-btn');
const modalFilter
= document.querySelector('.modal-filter');
const iconFilter = document.querySelectorAll('.modal-filter i');

const subFilter = document.querySelectorAll('.sub-filter');
let checkSubFilter=[false,false,false,false];
let checkBtnFiler=false;
filterBtn.addEventListener('click', function(){
    if(checkBtnFiler===false){
        modalFilter.classList.remove('hide-filter-modal');
        checkBtnFiler=true
    }else{
        modalFilter.classList.add('hide-filter-modal');
        checkBtnFiler=false
    }
})
for (let i = 0; i<iconFilter.length;i++){
    iconFilter[i].addEventListener('click', function(event){
        event.preventDefault();
        if(checkSubFilter[i]===false){
            subFilter[i].classList.remove('hide-filter-modal')
            checkSubFilter[i]=true;
        }else{
            subFilter[i].classList.add('hide-filter-modal')
            checkSubFilter[i]=false;

        }
    })
}