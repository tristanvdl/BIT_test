window.addEventListener('load',function(){
    var output_head = "",
        output_body = "",
        head_array =  Object.keys(json_obj[1]),
        search_class = document.querySelector('.search_input');

    //TABLE HEAD
    output_head += "<tr>";
    for (var key in head_array ) {
        output_head += "<th>" + head_array[key] + "</th>";
    }
    output_head += "</tr>";
    document.querySelector('.tHead').innerHTML = output_head;

    //TABLE BODY
    for (var i = 0; i < json_obj.length; i++) {
        output_body += "<tr>";
        for (var key in json_obj[i]) {
            output_body += "<td>"+json_obj[i][key]+"</td>";
        }
        output_body += "</tr>";
    }
    document.querySelector('.tBody').innerHTML = output_body;

});
