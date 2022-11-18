let url = "list.json"

const myList = document.querySelector(".myItem");
const loadingStatus = document.querySelector('.status')

const translation ={
    employment: "Jobb",
    education: "Utbildningar",
   internships: "Praktik"
}

function renderToDOM(a, b = ' '){
    //render item to DOM
    console.log("a: ", a)
    console.log("b: ", b)
    const myRenderedCvItem = document.createElement('div')
    myRenderedCvItem.innerHTML = `<strong>${a}</strong><p>${b}</p>`;
   // render a to dom, and b if it exists
    //console.log(myRenderedCvItem)
    myList.appendChild(myRenderedCvItem)
}


async function getObjData () {
    let response = await fetch(url);
    if (response.ok) {
        let cvData = await response.json( );
        console.log(cvData);


       console.log("employment:")
       const cvDatakeys = Object.keys(cvData);

       renderToDOM(translation[cvDatakeys[0]])

        cvData.employment.forEach (emp => {
            renderToDOM(emp.heading,emp.text)
            console.log(emp.heading) 
            console.log(emp.text) 
        
        }) 

        console.log("education:")
        renderToDOM(translation[cvDatakeys[1]])
        cvData.education.forEach (eduText => {
            renderToDOM(eduText)
            console.log(eduText) 
        
        }) 

        console.log("internships:")
        renderToDOM(translation[cvDatakeys[2]])
        cvData.internships.forEach (intText =>  {
              
            renderToDOM(intText.companyName,intText.text)
                console.log(intText ) 
                console.log(intText.companyName)
                console.log(intText.text)
            
            
            })  
    }
}
getObjData() ;












    
        

    















