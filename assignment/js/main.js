/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

$(document).ready(function(){
  $("button").click(function(){
    var url=$('#text-input1').val();
    var lon=$('#text-input2').val();
    var lat=$('#text-input3').val();
    var downloadData = $.ajax(url);
    var parseData = function(d){
      return JSON.parse(d);
    };
    var makeMarkers = function(array){
      var markers = [];
      _.each(array,function(obj){
        markers.push(L.marker([obj[lat],obj[lon]]));
      });
      return markers;
    };
    var plotMarkers = function(arr) {
      _.each(arr,function(marker){marker.addTo(map);});
    };
    downloadData.done(function(data){
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      plotMarkers(markers);
    });
  });
});


var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
