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
    let weekday = date.getDate()
    console.log(weekday)
    let myTable = create("table",parent,"","")
    let myTableHead = create("thead",myTable,"","")
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
            btn.innerText = "12"
            return col
        })
        return row
    })
}

dateTimeTable(document.getElementById("datatimepicker") as HTMLElement)
console.log("ende")