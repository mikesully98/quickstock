  // As expected, as passed to constructor.


const lgSizes =['lg',24,28,32,43,48,49,50,55,65,75,85];
const samsungSizes = ['samsung',32,40,43,50,55,65,75,85];
const sonySizes =['sony',43,49,50,55,65,75,85];
const elementSizes = ['element',24,29,32,43,48,49,50,55,65,75,85];
const hisenseSizes = ['hisense',24,28,32,43,48,49,50,55,58,65,75,85];
const rcaSizes = ['rca',24,28,32,43,48,49,50,55,65,75,85];
const tclSizes = ['tcl',24,28,32,43,48,49,50,55,65,75,85];

const lgSeries = ['24LJ4540-WU','24LF454B','24LM520S-WU','32LM570','32LM620','43UN7000','43UN7300','OLED48CX','49NANO85','50UN7300','50UN7000','OLED55CX','55UN7300','OLED55BX','55NANO85','55NANO81','55UN7000','OLED55GX','55NANO90','OLED65CX','70UN7370','65UN7300','70UN7070','OLED65BX','65NANO85','65NANO90','65UN7000','65NANO81','OLED65GX','65NANO99','OLED65WX','86UN8570','75UN7070','OLED77CX','75UN7370','75NANO80','86NANO90','75NANO85','75NANO90','82UN8570','OLED77GX','75NANO99','OLED77ZX'];
const samsungSeries = ['UN32N5300','UN32M4500B','QN32Q50','QN32LS03T','UN40N5200','UN43TU7000','UN43TU8000','UN43TU6900','UN43Q60T','UN50TU7000','UN50TU8000','QN50Q60T','QN50Q70T','QN50Q80T','UN55TU8300','UN55TU8000','UN55TU7000','QN55Q60T','QN55Q70T','QN55Q80T','QN65Q60T','QN65Q70T','QN65Q80T','QN65Q90T','UN65TU7000','UN65TU8000'];
const sonySeries = ['XBR43X800H','XBR49X800H','XBR49X950H','XBR55X800H','XBR55A8H','XBR55X900H','XBR55X950H','XBR55A9G','KD55X750H','XBR65X900H','XBR65X800H','KD65X750H','XBR65X950H','XBR65A9G','XBR75X800H','XBR75X900H','XBR85X800H','XBR77A9G','XBR85X900H','XBR85X950H','XBR75X950H','KD75X750H','XBR85Z8H'];
const elementSeries = ['E1AA32R-G','E1AA24R-G','E1AA32N-G','E1AA19N-G','E1AA24N-G','E2AA40R-G','E4AA43R-G','E4AA50R-G','E4AA43N-G', 'E4AA50N-G','E4AA55R-G','E4AA55N-G','E4AA65R-G','E4SW7019RKU','E4AA65N-G','E4FAA75R-G'];
const hisenseSeries = ['32H4F','32H5500F','43H6570G','50H6570G','50H8G','43H5500G','58H6570G','55H8G','58R7E1','65H6570G','65H8G','75H6570G','75H8G'];
const rcaSeries = ['RT3205','RTR4060D','RT4038'];
const tclSeries = ['32S335','32S325','32S327','50S425','40S325','43S425','50S535','55S425','55R635','55S525','55S535','65R635','65S425','65S525','65S535','65S435','75S425','75S535','75R635'];

let brandChoice;
let currentBrand;
let currentSeries = document.querySelector('#myDropdownc');
let currentSize = document.querySelector('#myDropdownb');

let finalTelevision;


function myFunction(letter) {
    document.getElementById(`myDropdown${letter}`).classList.toggle("show");
}

function tvChoice(choice) {

  for(let i = currentSize.children.length; i > 0; i--) {
    currentSize.removeChild(currentSize.childNodes[i]);
  }

  if(choice == 'samsung') {
    brandChoice = 'Samsung';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < samsungSizes.length; i++) {
      
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(samsungSizes[i]);
      para.setAttribute('onclick', `tvSeries(${samsungSizes[i]},'samsung')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'lg') {
    brandChoice = 'LG';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < lgSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(lgSizes[i]);
      para.setAttribute('onclick', `tvSeries(${lgSizes[i]},'lg')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'sony') {
    brandChoice = 'Sony';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < sonySizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(sonySizes[i]);
      para.setAttribute('onclick', `tvSeries(${sonySizes[i]},'sony')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'element') {
    brandChoice = 'Element';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < elementSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(elementSizes[i]);
      para.setAttribute('onclick', `tvSeries(${elementSizes[i]},'element')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'tcl') {
    brandChoice = 'TCL';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < tclSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(tclSizes[i]);
      para.setAttribute('onclick', `tvSeries(${tclSizes[i]},'tcl')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'hisense') {
    brandChoice = 'Hisense';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < hisenseSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(hisenseSizes[i]);
      para.setAttribute('onclick', `tvSeries(${hisenseSizes[i]},'hisense')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
  else if(choice == 'rca') {
    brandChoice = 'RCA';
    document.querySelector('#dropbtna').innerText = brandChoice;
    for(let i = 0; i < rcaSizes.length; i++) {
      let dropdown = document.querySelector('#myDropdownb');
      let para = document.createElement("a");
      let node = document.createTextNode(rcaSizes[i]);
      para.setAttribute('onclick', `tvSeries(${rcaSizes[i]},'rca')`);
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  }
}

function tvSeries(size, brand) {
  for(let i = currentSeries.children.length; i > 0; i--) {
    currentSeries.removeChild(currentSeries.childNodes[i]);
  }
  document.querySelector('#dropbtnb').innerText = size + "\"";
  let thisSeries = [];
  if(brand == 'samsung') {
    samsungSeries.forEach(function(item) {
      if(item.includes(`UN${size}`) || item.includes(`QN${size}`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if samsung
  else if(brand == 'lg') {
    lgSeries.forEach(function(item) {
      if(item.includes(`${size}LJ`) || item.includes(`${size}LF`) || item.includes(`${size}LM`) || item.includes(`${size}NANO`) || item.includes(`${size}UN`) || item.includes(`OLED${size}`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if lg
  else if(brand == 'sony') {
    sonySeries.forEach(function(item) {
      if(item.includes(`XBR${size}`) || item.includes(`KD${size}`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if sony
  else if(brand == 'element') {
    elementSeries.forEach(function(item) {
      if(item.includes(`E1AA${size}`) || item.includes(`E2AA${size}`) || item.includes(`E4AA${size}`) || item.includes(`E4FAA${size}`) || item.includes(`E4SW${size}`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if element
  else if(brand == 'tcl') {
    tclSeries.forEach(function(item) {
      if(item.includes(`${size}S`) || item.includes(`${size}R`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if tcl
  else if(brand == 'hisense') {
    hisenseSeries.forEach(function(item) {
      if(item.includes(`${size}H4F`) || item.includes(`${size}H`) || item.includes(`${size}R7`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if hisense
  else if(brand == 'rca') {
    rcaSeries.forEach(function(item) {
      if(item.includes(`RT${size}`) || item.includes(`RTR${size}`)) {
        thisSeries.push(item)
      }
    })
    console.log(thisSeries);

    for(let i = 0; i < thisSeries.length; i++) {
      let dropdown = document.querySelector('#myDropdownc');
      let para = document.createElement("a");
      let node = document.createTextNode(thisSeries[i]);
      para.setAttribute('onclick',`finalTV('${thisSeries[i]}')`)
      para.appendChild(node);
      dropdown.appendChild(para);
    }
  } // if rca

  



} // end tvSeries 

function finalTV(series) {
  document.querySelector('#dropbtnc').innerText = series;
  finalTelevision = series;
}

function callStock() {
  localStorage.setItem('key',finalTelevision);
  let messageBoard = document.getElementById('messageContainer');
  let newMessage = document.createElement('p');
  let node = document.createTextNode(localStorage.getItem('key'));
  newMessage.appendChild(node);
  messageBoard.appendChild(newMessage);

  const data = { finalTelevision };
  const options = {
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-Type':'aplication/json'
    },
    body: JSON.stringify(data)
  };
  fetch('/api', options)
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


  

 


