/**
 * Create erzeugt ein HTML-Element und hängt dieses im Elternelement ein. Optional können Klassenname
 * und ID angegeben werden.
 * 
 * @param htmlElement zu erzeugendes Element
 * @param parent Elternelement
 * @param className Klassenname (leerer String für kein Klassennamen)
 * @param id ID (leerer String für keine ID)
 */
function create<T>(htmlElement:string, parent:HTMLElement,className:string,id:string){
    let elem = document.createElement(htmlElement)
    if (className) elem.className = className
    if (id) elem.id = id
    parent.appendChild(elem)
    return elem
}

function dateTimeTable(parent:HTMLElement){
    
    let date = new Date(Date.now())
    let months = ["Januar","Februar","März","April","Mai", "Juni","Juli", "August", "September", "Oktober","November","Dezember"]
    let lengthOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
    let indexMonth = date.getMonth()
    let year = date.getFullYear()
    date = new Date(`${date.getFullYear()}-${date.getMonth()+1}-01`)
    let weekday = date.getDay()
    let myTable = create("table",parent,"","")
    let myTableHead = create("thead",myTable,"","")
    let myHeadRow1 = create("tr",myTableHead,"","")
    let thleft = create("th",myHeadRow1,"","")
    let left = create("button", thleft,"","left")
    left.innerText = "<<"

    let colspanTh5 = create("th",myHeadRow1,"","") as HTMLTableHeaderCellElement
    colspanTh5.colSpan = 5

    let month = create("label",colspanTh5,"","month")
    
    left.addEventListener("click",e=>{
        if (indexMonth==0) {
            indexMonth = 11
            year--
            month.innerText = `${months[indexMonth]} ${year}`
        }
        else {
            indexMonth--
            month.innerText = `${months[indexMonth]} ${year}`
        }
    })


    month.innerText = `${months[indexMonth]} ${year}`
    let thright = create("th",myHeadRow1,"","")
    let right = create("button", thright,"","right")
    right.innerText = ">>"
    right.style.cssFloat = "right"
    right.addEventListener("click",e=>{
        if (indexMonth==11) {
            indexMonth = 0
            year++
            month.innerText = `${months[indexMonth]} ${year}`
        }
        else {
            indexMonth++
            month.innerText = `${months[indexMonth]} ${year}`
        }
    })

    let myHeadRow = create("tr",myTableHead,"","")
    let days=["Mo","Di","Mi","Do","Fr","Sa","So"]
    for (let x=0;x<7;x++){
        let elem = create("th",myHeadRow,"","")
        elem.innerText = days[x]
    }
    let myTableBody =  create("tbody",myTable,"","")
    let myBodyRows = [1,2,3,4,5,6].map(x=>{
        let row = create("tr",myTableBody,"","")
        let myBodyCells = [1,2,3,4,5,6,7].map(y=>{
            let col = create("td",row,"","")
            let btn = create("button",col,"selectable",`${x}_${y}`) as HTMLButtonElement
            btn.innerText = "14"
            return col
        })
        return row
    })
    let test = Array.prototype.slice.call((document.querySelector("tbody") as HTMLElement).querySelectorAll("button"))
    console.log(test)
}

dateTimeTable(document.getElementById("datatimepicker") as HTMLElement)
console.log("ende")