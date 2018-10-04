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
    var weekday = date.getDate();
    console.log(weekday);
    var myTable = create("table", parent, "", "");
    var myTableHead = create("thead", myTable, "", "");
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
            btn.innerText = "12";
            return col;
        });
        return row;
    });
}
dateTimeTable(document.getElementById("datatimepicker"));
console.log("ende");
