function fillProjects() {
    var tableHTML = "<td><div class=\"row\">"; //skeleton table row
    tableHTML += "<div class=\"column img-col\"><img class=\"project-img\"></div>";
    tableHTML += "<div class=\"column details-col\"><h2 class=\"project-name\"></h2>";
    tableHTML += "<h4 class=\"project-lang\"></h4></div></div>";
    tableHTML += "<div class=\"row\"><p class=\"project-desc\"></p>";
    tableHTML += "<button class=\"button project-button\"></button></div></td>";

    //setup variables and console outputs
    var table, curRow, data, tmp, clickTxt;
    table = document.getElementById("project-table");
    console.log(table);

    //get project data
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //data.innerHTML = this.responseText;
            data = JSON.parse(this.responseText);
            console.log(data);

            //start building the row
            data.projects.forEach(function(proj){
                curRow = table.insertRow();
                curRow.setAttribute("class", "project");
                curRow.setAttribute("id", proj.projectid);
                curRow.innerHTML = tableHTML;

                //fill in information
                tmp = curRow.getElementsByClassName("project-img");
                tmp[0].setAttribute("src", proj.imgsrc);
                tmp = curRow.getElementsByClassName("project-name");
                tmp[0].innerText = proj.name;
                tmp = curRow.getElementsByClassName("project-lang");
                tmp[0].innerText = "Written in " + proj.language;
                tmp = curRow.getElementsByClassName("project-desc");
                tmp[0].innerText = proj.description;
                tmp = curRow.getElementsByClassName("project-button");

                //set reference button accordingly
                if(proj.github == "") {
                    tmp[0].innerText = "Private";
                    tmp[0].disabled = true;
                } else {
                    tmp[0].innerText = "GitHub Repo";
                    clickTxt = "window.open(\'" + proj.github + "\', \'_blank\')";
                    tmp[0].setAttribute("onclick", clickTxt);
                }
            });
        }
    };
    xmlhttp.open("GET", "projects.json", true);
    xmlhttp.send();
}