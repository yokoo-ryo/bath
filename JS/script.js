function today() {
    const day_time = new Date();
    
    const month = day_time.getMonth() + 1;
    const week = day_time.getDay();
    const day = day_time.getDate();
    const week_ja = new Array("日","月","火","水","木","金","土");
    const hour = day_time.getHours();
    const min = day_time.getMinutes();

    const now = document.getElementById("now");
    
    now.textContent = month + "月" + day + "日" + week_ja[week] + "曜日" + hour + "時" + min + "分";
}

const tbl = document.getElementById("tbl");

function add() {
    
    let tr = document.createElement("tr");

    for(let i = 0; i < 1; i++){
        let td = document.createElement("td");
        let inp = document.createElement("input");

        td.appendChild(inp);
        tr.appendChild(td);
    }

    tbl.appendChild(tr);
}

function del(){
    let rw = tbl.rows.length;

    if(rw > 1){
    tbl.deleteRow(rw-1);
    }
}

function fin(){
    const fin = document.getElementById("fin");
    fin.textContent = "掃除は終わっています!";
}
