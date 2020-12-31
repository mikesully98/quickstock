const lgSizes =['lg',24,28,32,43,48,49,50,55,65,75,85];
const samsungSizes = ['samsung',32,40,43,50,55,65,75,85];
const sonySizes =['sony',43,50,55,65,75,85];
const elementSizes = ['element',24,29,32,43,48,49,50,55,65,75,85];
const hisenseSizes = ['hisense',24,28,32,43,48,49,50,55,65,75,85];
const rcaSizes = ['rca',24,28,32,43,48,49,50,55,65,75,85];
const tclSizes = ['tcl',24,28,32,43,48,49,50,55,65,75,85];

const lgSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const samsungSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const sonySeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const elementSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const hisenseSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const rcaSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];
const tclSeries = ['UN43NU7000','UN43NU7000','UN43NU7000','UN43NU7000',];

let brandChoice;

function myFunction(letter) {
    document.getElementById(`myDropdown${letter}`).classList.toggle("show");
}

function tvChoice(choice) {
  if(choice == 'samsung') {
    brandChoice = 'samsung';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(samsungSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'lg') {
    brandChoice = 'lg';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(lgSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'sony') {
    brandChoice = 'sony';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(sonySizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'element') {
    brandChoice = 'element';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(elementSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'tcl') {
    brandChoice = 'tcl';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(tclSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'hisense') {
    brandChoice = 'hisense';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(hisenseSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'rca') {
    brandChoice = 'rca';
    for(let i = 0; i < samsungSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(rcaSizes[i]);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  
}

function tvSeries(choice) {
  
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

