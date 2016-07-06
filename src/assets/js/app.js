$('.search_input').keyup(function(){
    var searchTerm = $(this).val();
    var myExp = new RegExp(searchTerm, "i");
    $.getJSON('data/data.json', function(data){
    var output;
        $.each(data, function(key,val){
            if (val.first_name.search(myExp) != -1 || val.last_name.search(myExp) != -1)  {
                output += "<tr>";
                output += "<td>"+val.id+"</td>";
                output += "<td>"+val.first_name+"</td>";
                output += "<td>"+val.last_name+"</td>";
                output += "<td>"+val.email+"</td>";
                output += "<td>"+val.gender+"</td>";
                output += "<td>"+val.ip_address+"</td>";
                output += "</tr>";
            }
        });
        if (searchTerm == "") {
            output = " ";
        }
        $('tbody').html(output);
    });
});
