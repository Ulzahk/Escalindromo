const reviewButton = document.querySelector('.form-button')
const inputAction = document.getElementById('formInput')
let enterCounter = 0
let palindromeTries = []
const enterListener = document.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13 && enterCounter === 0){
        event.preventDefault()
        document.getElementById('formInput').focus()
        enterCounter++
    } 
})

const palindromeChecker = (word) =>{
    //.trim() elimina espacios de los lados
    //.toLowerCase() cambia todas las letras a minusculas
    //.replace(/\s+/g, '') cambia los espacios en blanco elimnandolos
    word = word.toLowerCase().trim().replace(/\s+/g, '')
    word = word.replace(/á/g,'a')
    word = word.replace(/é/g,'e')
    word = word.replace(/í/g,'i')
    word = word.replace(/ó/g,'o')
    word = word.replace(/ú/g,'u')
    word = word.replace(/ü/g,'u')
    word = word.replace(/\./g,'')
    word = word.replace(/\,/g,'')
    let reverseWord = '' 
    for(let i = word.length; i > -1; i--){
        reverseWord += word.charAt(i)
    }

    if (reverseWord === '' || reverseWord === " " || reverseWord === null){
        swal('Recuerda escribir algo en la casilla 😥', '', 'error')
    } else if(reverseWord.includes('0') || reverseWord.includes('1') || reverseWord.includes('2') ||reverseWord.includes('3') || reverseWord.includes('4') || reverseWord.includes('5') || reverseWord.includes('6') || reverseWord.includes('7') || reverseWord.includes('8') || reverseWord.includes('9')){
        swal('Recuerda escribir solamente letras 😥', '', 'error')
    } else if (word !== reverseWord){
        swal('Aquí no tenemos un palindromo 😥', '', 'error')
    } else {
        swal('Estupendo encontramos un palíndromo 😁', '', 'success')
    } 
    console.log(reverseWord)
}

const showPalindromeTry = (triesArray) =>{
    for(var i = 0; i < triesArray.length; i++){
        if(triesArray[i] === ''){
            document.getElementById("triesText").innerHTML = '(espacio en blanco)'
        } else {
            document.getElementById("triesText").innerHTML = triesArray[i]
        }
    }
}

const showPalindromesList = (triesArray) => {
    let elementHTML = ''
    triesArray.forEach( (item) => {
        elementHTML += '<li>' + item + '</li>'
    })
    document.getElementById("list-container").innerHTML = '<ul>' + elementHTML + '</ul>'
}

const emptyInput = () =>{
    inputText = document.getElementById('formInput').value = ''
}

inputAction.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13){
        event.preventDefault()
        inputText = document.getElementById('formInput').value
        palindromeTries.push(inputText)
        palindromeChecker(inputText)
        showPalindromeTry(palindromeTries)
        showPalindromesList(palindromeTries)
        emptyInput()
    } else {
        reviewButton.onclick = () => {
            inputText = document.getElementById('formInput').value
            palindromeTries.push(inputText)
            palindromeChecker(inputText)
            showPalindromeTry(palindromeTries)
            showPalindromesList(palindromeTries)
            emptyInput()
        }
    }
})


