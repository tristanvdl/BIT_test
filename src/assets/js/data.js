function Get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", url ,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var json_obj = JSON.parse(Get('data/data.json'));
