function myFunction() {

    const myCollection = document.querySelectorAll("p");

    for (let i = 0; i < myCollection.length; i++) {
 
 myCollection[i].classList.toggle('changement')
}
}

