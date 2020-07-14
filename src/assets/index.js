const reviewButton = document.querySelector('.form-button')

let palindromeTries = []


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
    //, .
    let reverseWord = '' 
    for(let i = word.length; i > -1; i--){
        reverseWord += word.charAt(i)
    }

    if (reverseWord === '' || reverseWord === " " || reverseWord === null){
        swal('Recuerda escribir algo en la casilla 😥', '', 'error')
    } else if(word !== reverseWord){
        swal('Aquí no tenemos un palindromo 😥', '', 'error')
    } else {
        swal('Estupendo encontramos un palíndromo 😁', '', 'success')  
    } 
    console.log(reverseWord)
}

const showPalindromeTries = (triesArray) =>{
    for(var i = 0; i < triesArray.length; i++){
        if(triesArray[i] === ''){
            document.getElementById("triesText").innerHTML = '(espacio en blanco)'
        } else {
            document.getElementById("triesText").innerHTML = triesArray[i]
        }
    }
}
// Lista de intentos
reviewButton.onclick = () => {
    inputText = document.getElementById("formInput").value
    palindromeTries.push(inputText)
    palindromeChecker(inputText)
    showPalindromeTries(palindromeTries)
}
