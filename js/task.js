const button = document.getElementById('togg1')
console.log(button)


button.addEventListener('click', taskEvent)



function taskEvent() {
//Pour masquer la div Profil
const profil = document.querySelector('.hide');
console.log(profil)
profil.classList.toggle("block");
}    


