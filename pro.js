var weblist = []
var Websitename = document.getElementById("WebsiteName");
var WebsiteLink = document.getElementById("WebsiteLink");
var cardView = document.getElementById("cardView")
var cardedit = document.getElementById("cardedit")
var mainbtn = document.getElementById("mainbtn")
var toastElement = document.getElementById('bootstrap-toast');
var selectedindex = -1


// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }
function mainbtnapp() {

  if (mainbtn.innerHTML === "Save") {
    createnewlink()

  } else { Update() }
  // alert("added new link")
}

function createnewlink() {
  // event.preventDefault();
  var websiteObject =
  {
    name: Websitename.value,
    link: WebsiteLink.value
  };
  weblist.push(websiteObject);


  readwebsite();
  clear();
  toast()

}

// console.log(weblist);



function readwebsite() {
  var index = 0
  var HTMLCollectionwebsite = ``;

  for (var item of weblist) {

    HTMLCollectionwebsite +=
      ` <div class="col-sm-6 col-lg-4 ">
        <div class="card bg-secondary-subtle ">
        <div class="card-body">
            <div class="col-12 row">
            <h5 class="card-title col-8">${item.name}</h5>
            <div class="col-2 " onclick="edit(${index})" style="height: 40px;"> <i class="fa-solid fa-pen "></i></div>
            <div class="col-2 " onclick="remove(${index})" style="height: 40px;"> <i class="fa-solid fa-trash "></i></div>
            </div>
            <p class="card-text">${item.link} </p>
            <a href="http://${item.link}" target="_blank" class="btn btn-dark btn-outline-info">Visit Website</a>
          </div>
           </div>
           </div>`

    index++
  }

  cardView.innerHTML = HTMLCollectionwebsite;
  toast()

}
function remove(index) {
  weblist.splice(index, 1)

  readwebsite()
  function removealerttoast () {
    
 
  var toastDesign =
      `<div class="position-fixed top-0 end-0 p-3 bg-danger text-white border-1 rounded-2" >
  
    <strong class="me-auto text-capitalize">deleted link</strong>
    </div>`;
    toastElement.innerHTML = toastDesign
  }
  removealerttoast ()
  setTimeout (function removetoast() {var toastDesign =``
    toastElement.innerHTML = toastDesign
    
  },1000);
  


}

function clear() {


  Websitename.value = ``
  WebsiteLink.value = ``
}

function edit(index) {
  var editobject = weblist[index]
  Websitename.value = editobject.name
  WebsiteLink.value = editobject.link
  mainbtn.innerHTML = ("Edit")
  selectedindex = index
  
}

function Update() {

  // weblist[selectedindex]=editobject
  // Websitename.value = editobject.name
  //  WebsiteLink.value =  editobject.link

  var newwebsiteObject =
  {
    name: Websitename.value,
    link: WebsiteLink.value
  };
  weblist.splice(selectedindex, 1, newwebsiteObject)
  readwebsite()
  clear()
  mainbtn.innerHTML = ("Save")
}



function toast() {
  if (mainbtn.innerText === 'Save') {


    var toastDesign =
      `<div class="position-fixed top-0 end-0 p-3 bg-success text-white border-1 rounded-2" >
  
    <strong class="me-auto text-capitalize">Added new link</strong>
    </div>`;
    toastElement.innerHTML = toastDesign
    setTimeout (function removetoast() {var toastDesign =``
      toastElement.innerHTML = toastDesign
      
    },1000);
    
  
  }
  else if (mainbtn.innerText === 'Edit') {
    var toastDesign =
    `<div class="position-fixed top-0 end-0 p-3 bg-warning text-white border-1 rounded-2" >
  
    <strong class="me-auto text-capitalize">Edit link</strong>
    </div>`;
    toastElement.innerHTML = toastDesign
   
    setTimeout (function removetoast() {var toastDesign =``
      toastElement.innerHTML = toastDesign
      
    },1000);
    
  
  }
  }


  

