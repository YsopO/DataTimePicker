/**
 * Create erzeugt ein HTML-Element und hängt dieses im Elternelement ein. Optional können Klassenname
 * und ID angegeben werden.
 *
 * @param htmlElement zu erzeugendes Element
 * @param parent Elternelement
 * @param className Klassenname (leerer String für kein Klassennamen)
 * @param id ID (leerer String für keine ID)
 */
function create(htmlElement, parent, className, id) {
    var elem = document.createElement(htmlElement);
    if (className)
        elem.className = className;
    if (id)
        elem.id = id;
    parent.appendChild(elem);
    return elem;
}
function dateTimeTable(parent) {
    var date = new Date(Date.now());
    var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var lengthOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var indexMonth = date.getMonth();
    var year = date.getFullYear();
    date = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-01");
    var weekday = date.getDay();
    var myTable = create("table", parent, "", "");
    var myTableHead = create("thead", myTable, "", "");
    var myHeadRow1 = create("tr", myTableHead, "", "");
    var thleft = create("th", myHeadRow1, "", "");
    var left = create("button", thleft, "", "left");
    left.innerText = "<<";
    var colspanTh5 = create("th", myHeadRow1, "", "");
    colspanTh5.colSpan = 5;
    var month = create("label", colspanTh5, "", "month");
    left.addEventListener("click", function (e) {
        if (indexMonth == 0) {
            indexMonth = 11;
            year--;
            month.innerText = months[indexMonth] + " " + year;
        }
        else {
            indexMonth--;
            month.innerText = months[indexMonth] + " " + year;
        }
    });
    month.innerText = months[indexMonth] + " " + year;
    var thright = create("th", myHeadRow1, "", "");
    var right = create("button", thright, "", "right");
    right.innerText = ">>";
    right.style.cssFloat = "right";
    right.addEventListener("click", function (e) {
        if (indexMonth == 11) {
            indexMonth = 0;
            year++;
            month.innerText = months[indexMonth] + " " + year;
        }
        else {
            indexMonth++;
            month.innerText = months[indexMonth] + " " + year;
        }
    });
    var myHeadRow = create("tr", myTableHead, "", "");
    var days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
    for (var x = 0; x < 7; x++) {
        var elem = create("th", myHeadRow, "", "");
        elem.innerText = days[x];
    }
    var myTableBody = create("tbody", myTable, "", "");
    var myBodyRows = [1, 2, 3, 4, 5, 6].map(function (x) {
        var row = create("tr", myTableBody, "", "");
        var myBodyCells = [1, 2, 3, 4, 5, 6, 7].map(function (y) {
            var col = create("td", row, "", "");
            var btn = create("button", col, "selectable", x + "_" + y);
            btn.innerText = "14";
            return col;
        });
        return row;
    });
    var test = Array.prototype.slice.call(document.querySelector("tbody").querySelectorAll("button"));
    console.log(test);
}
dateTimeTable(document.getElementById("datatimepicker"));
console.log("ende");
