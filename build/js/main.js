$(".search_input").keyup(function(){var t=$(this).val(),a=new RegExp(t,"i");$.getJSON("data/data.json",function(d){var e;$.each(d,function(t,d){d.first_name.search(a)==-1&&d.last_name.search(a)==-1||(e+="<tr>",e+="<td>"+d.id+"</td>",e+="<td>"+d.first_name+"</td>",e+="<td>"+d.last_name+"</td>",e+="<td>"+d.email+"</td>",e+="<td>"+d.gender+"</td>",e+="<td>"+d.ip_address+"</td>",e+="</tr>")}),""==t&&(e=" "),$("tbody").html(e)})});