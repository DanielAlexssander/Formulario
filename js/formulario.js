(function () {
    'use strict';

    const txtTitle = document.getElementById("txtTitulo")
    const acceptTerms = document.getElementById("chkAceito")
    const form = document.querySelector(".formCadastro")
    const btn = document.getElementById("btn")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]
    btn.disabled = true

    acceptTerms.addEventListener("change", function () {
            btn.disabled = !this.checked
    })

    function showErrorMessage(msg) {
        // feedbackMessage.setAttribute("class", "show")
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        txtTitle.addEventListener("keydown", closeFeedBack)
        txtDescription.addEventListener("keydown", closeFeedBackByDesc)

        feedbackMessageCloseBtn.focus()
        txtTitle.focus()
    }

    function closeFeedBack () {
        feedbackMessage.classList.remove("show")
        txtTitle.focus()
    }
    function closeFeedBackByDesc () {
        feedbackMessage.classList.remove("show")
    }

    feedbackMessageCloseBtn.addEventListener("click", closeFeedBack)


    form.addEventListener("submit", function (e) {
        if (!txtTitle.value) {
            showErrorMessage("Preecha todos os campos")
            e.preventDefault() //impede de enviar o form
        }
    })
    // btn.addEventListener("click", function (e) {})


    // ------------------- Caracteres funcional -------------------

    const txtDescription = document. getElementById("txtDescricao")
    const contContainer = document.getElementById("contador")
    const missing = document.querySelector("#contador span")
    const max = txtDescription.maxLength
    missing.textContent = max

    // contContainer.removeAttribute("style")
    contContainer.style.display = "block"

    txtDescription.addEventListener("input", function () {
        let numWords = this.value.length
        console.log(numWords)
        let caractersMissing = parseInt(max) - parseInt(numWords)
        missing.textContent = caractersMissing
    })

})()