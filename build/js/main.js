function Get(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText}var json_obj=JSON.parse(Get("data/data.json"));window.addEventListener("load",function(){var e="",t="",n=Object.keys(json_obj[1]);e+="<tr>";for(var o in n)e+="<th>"+n[o]+"</th>";e+="</tr>",document.querySelector(".tHead").innerHTML=e;for(var r=0;r<json_obj.length;r++){t+="<tr>";for(var o in json_obj[r])t+="<td>"+json_obj[r][o]+"</td>";t+="</tr>"}document.querySelector(".tBody").innerHTML=t});