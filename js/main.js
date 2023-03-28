const numerosuporte = document.querySelectorAll('.bt-suporte')
const printsuporte = document.querySelector('#n-selecionado')
const submit = document.querySelector('#bt-submit')
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')

submit.disabled = true;

numerosuporte.forEach((btn) => {
    btn.addEventListener("click", () => {
        printsuporte.innerHTML = btn.innerHTML
        submit.disabled = false;
    })
})

submit.addEventListener("click", () => {
    box1.style.display = "none"
    box2.style.display = "block"
})