var nameInput = document.getElementById("siteName")
var linkInput = document.getElementById("siteUrl")
var dataList = []

function addSubmit(){
   var book = {
    name: nameInput.value,
    link: linkInput.value
    
   }
   dataList.push(book)

   displayData()
}

function displayData(){

   var temb =""
   for (var i = 0; i<dataList.length; i++){
      temb = temb + `  <tr>
      <td>`+i+`</td>
      <td>`+dataList[i].name+`</td>
      <td><button class="btn btn-info">Visit</button></td>
      <td><button class="btn btn-danger">Delete</button></td>
  </tr>
`
   }
   document.getElementById("myData").innerHTML=temb

}



localStorage.setItem("Route")