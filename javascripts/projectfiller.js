function fillProjects() {
    var tableHTML = "<td><div class=\"row\">"; //skeleton table row
    tableHTML += "<div class=\"column img-col\"><img class=\"project-img\"></div>";
    tableHTML += "<div class=\"column details-col\"><h2 class=\"project-name\"></h2>";
    tableHTML += "<h4 class=\"project-lang\"></h4></div></div>";
    tableHTML += "<div class=\"row\"><p class=\"project-desc\"></p>";
    tableHTML += "<button class=\"button project-button\"></button></div></td>";

    //setup variables and console outputs
    var table, curCell, curRow, titleRow, descRow, tmp;
    table = document.getElementById("project-table1");
    console.log(table);

    //fill in a row
    curRow = table.insertRow();
    curRow.setAttribute("class", "project");
    curRow.innerHTML = tableHTML;
    tmp = curRow.getElementsByClassName("project-img");
}