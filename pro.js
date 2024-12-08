var weblist=[]
var Websitename = document.getElementById("WebsiteName");
var WebsiteLink = document.getElementById("WebsiteLink");
var cardView = document.getElementById("cardView")
var cardedit = document.getElementById("cardedit")
var mainbtn=document.getElementById("mainbtn")
var selectedindex=-1


// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }
function mainbtnapp() {
    
if (mainbtn.innerHTML==="Save") {createnewlink()
  
}else{Update()}
alert("added new link")
}

function createnewlink() { 
  // event.preventDefault();
    var websiteObject =
    {
    name:Websitename.value,
    link:WebsiteLink.value
    };
    weblist.push(websiteObject);
    

    readwebsite();
    clear();
}

// console.log(weblist);



function readwebsite() {
  var index=0
  var HTMLCollectionwebsite=``;
  
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
           </div>




           
           
           
           
           `
                
            index++
        }

          cardView.innerHTML = HTMLCollectionwebsite ;
    
}
function remove(index) 
{ weblist.splice(index,1)
  
  readwebsite()
}
function clear() {
  

  Websitename.value=``
  WebsiteLink.value=``
}

function edit(index) {
  var editobject =weblist[index]
  Websitename.value = editobject.name
   WebsiteLink.value =  editobject.link
   mainbtn.innerHTML=("Edit")
   selectedindex=index}

function Update() {

  // weblist[selectedindex]=editobject
  // Websitename.value = editobject.name
  //  WebsiteLink.value =  editobject.link

   var newwebsiteObject =
   {
   name:Websitename.value,
   link:WebsiteLink.value
   };
weblist.splice(selectedindex,1,newwebsiteObject)
readwebsite()
clear()
mainbtn.innerHTML=("Save")
}


  //  htmledit =`<form class="row g-3">
  //       <div class="col-md-12">
          
  //         <input type="email" class="form-control bg-dark-subtle" id="WebsiteLink" placeholder="https://someurl.com">${editobject.name} 
  //       </div>
  //       <div class="col-12 ">
          
  //         <input type="text" class="  form-control bg-dark-subtle "
  //          id="WebsiteName" placeholder=" web site name"> ${editobject.link}
           
  //       </div>
        
        
  //       <div class="col-12">
        
  //         <textarea type="textarea" style="resize: vertical; " rows="3" class="form-control bg-dark-subtle" id="inputAddress" 
  //         placeholder="description">
  //         </textarea>
  //         </div>
       
  //       <div class="col-12">
  //         <button type="button" class="btn btn-success col-12" onclick="createnewlink()">Create</button>
  //       </div>
  //     </form>`

  //     cardedit.innerHTML = htmledit ;



