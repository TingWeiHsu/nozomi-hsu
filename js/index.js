function showAll() {
    var x = document.getElementsByClassName("project__sec");
    console.log('show all')
    console.log(x);
    for (let i = 0; i < x.length ; i++){
       if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } 
    }
  }

  function hideAll() {
    var x = document.getElementsByClassName("project__sec");
    console.log('hide all')
    console.log(x);
    for (let i = 0; i < x.length ; i++){
        x[i].style.display = "none";
    }
  }

  function removeActive() {
    var x = document.getElementsByClassName("project__laber--items");
    console.log('remove all')
    console.log(x);
    for (let i = 0; i < x.length ; i++){
        x[i].classList.remove("label__items--active");
    }
  }

  function showActive(t){
    removeActive();
    t.classList.add("label__items--active");
  }



  function showUi() {
    console.log('show ui')
    hideAll();
    var x = document.getElementsByClassName("project__sec--UI");
    for (let i = 0; i < x.length ; i++){
       if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } 
    }
  }


  function showUx() {
    console.log('show ui')
    hideAll();
    var x = document.getElementsByClassName("project__sec--UX");
    for (let i = 0; i < x.length ; i++){
       if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } 
    }
  }



  function showVisual() {
    console.log('show ui')
    hideAll();
    var x = document.getElementsByClassName("project__sec--visual");
    for (let i = 0; i < x.length ; i++){
       if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } 
    }
  }


  function showDev() {
    console.log('show ui')
    hideAll();
    var x = document.getElementsByClassName("project__sec--dev");
    for (let i = 0; i < x.length ; i++){
       if (x[i].style.display === "none") {
        x[i].style.display = "block";
      } 
    }
  }