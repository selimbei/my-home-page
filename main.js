let typeText = document.querySelector("#role");
let textToBeTyped = "a software engineer";
let textToBeTypedArr = ["Civil Engineer", "Web Developer"];
let index = 0;
let isAdding = true;
let textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()


// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// // Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// // Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let civil = document.getElementsByClassName("civil");
let design = document.getElementsByClassName("design");
let webDev = document.getElementsByClassName("webDev");

show("all");
function show(el) {
  if (el == "all") {
    for (i = 0; i < civil.length; i++) {
      civil[i].classList.add("show");
    }
    for (i = 0; i < design.length; i++) {
      design[i].classList.add("show");
    }
    for (i = 0; i < webDev.length; i++) {
      webDev[i].classList.add("show");
    }
  }
  if (el == "civil") {
    for (i = 0; i < civil.length; i++) {
      civil[i].classList.add("show");
    }
    for (i = 0; i < design.length; i++) {
      design[i].classList.remove("show");
    }
    for (i = 0; i < webDev.length; i++) {
      webDev[i].classList.remove("show");
    }
  }
  if (el == "design") {
    for (i = 0; i < civil.length; i++) {
      civil[i].classList.remove("show");
    }
    for (i = 0; i < design.length; i++) {
      design[i].classList.add("show");
    }
    for (i = 0; i < webDev.length; i++) {
      webDev[i].classList.remove("show");
    }
  }
  if (el == "webDev") {
    for (i = 0; i < civil.length; i++) {
      civil[i].classList.remove("show");
    }
    for (i = 0; i < design.length; i++) {
      design[i].classList.remove("show");
    }
    for (i = 0; i < webDev.length; i++) {
      webDev[i].classList.add("show");
    }
  }
}