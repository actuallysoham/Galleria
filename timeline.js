// https://www.painterartist.com/static/ptr/product_content/painter/2021/gallery/Hal-Fisher-Ballerina.jpg

// 20th C, 19th C, 18th C, 17th C, 16th C, 4th C BC, 1th C BC, 

objects = {

"c20" : [222185, 225909, 304414, 307680, 312684, 317866, 181354, 227564, 228067, 231028, 299849, 286927, 194857, 220259, 229046, 299819, 300054, 222104, 231994, 299931, 299993, 299997, 304344, 310522, 302046, 304377, 143495, 222214, 222353, 229045, 231443, 299846, 300051, 305207],
"c19" : [213930, 228649, 228651, 228652, 230640, 298102, 299805, 299838, 299841, 307680, 230417, 299926, 299993, 230005, 231028, 299794, 299807, 228650, 299842, 299843, 303460, 303729, 99764, 216190, 228744, 230060, 230108, 231904, 299806, 299846, 303496, 303976, 229060],
"c18" : [221573, 228132, 299877, 299959, 182175, 216960, 227540, 229912, 230042, 297656, 237779, 299949, 203246, 203953, 215214, 215972, 217681, 297681, 299682, 299944, 303561, 340103, 229912, 230042, 297656, 299815, 219603, 227926, 230340, 303397, 194260, 228046], 
"c17" : [149312, 213050, 230503, 299861, 299966, 303829, 331244, 226857, 231737, 231830, 202768, 216547, 222835, 227880, 228639, 230467, 230571, 230910, 231845, 232093, 275147, 299988, 213468, 216430, 217206, 217448, 230913, 303393, 340103, 299919, 213432, 228065, 228161, 237277, 297062, 299847, 303771, 323716, 178555],
"c16" : [165381, 185450, 200061, 216252, 216546, 228385, 232328, 275917, 298989, 299818, 199019, 215763, 216687, 227899, 248399, 299850, 303418, 320989, 149491, 216441, 230607, 232479, 143112, 165387, 217206, 297213, 300021, 303390, 199866, 200055, 215331, 216248, 230293, 232000, 299923, 146520, 149806, 169892],
"bc1" : [204564, 280367, 289234, 4842, 291334, 292450],
"bc4" : [204780, 303742, 304007, 280367, 288856, 167822, 288045] };

var timelineButton = $('.timeline__button');
var timelineItem = $('.timeline__item');
//var objects = [];
//var records = [];

timelineButton.on('click', function(e) {
  e.preventDefault();
  timelineButton.removeClass('is-active');
  $(this).addClass('is-active');

  //https://api.harvardartmuseums.org/object/230503/primaryimageurl?&apikey=ddd366bc-2382-43d7-ae14-9e09d60fcfaf
  
  var day = $(this).attr("data-day");
  //console.log(objects[day])
  var img_url = [];
  var title = [];
  var author = [];

  for (i = 0; i<6; i++){
    var obj_url = "https://api.harvardartmuseums.org/object/" + objects[day][i] + "?&apikey=ddd366bc-2382-43d7-ae14-9e09d60fcfaf";
  //console.log(obj_url);
  
  $.getJSON(obj_url, function(data){
    img_url.push(data.primaryimageurl);
    title.push(data.title);
    //console.log(test_url);
  });
  }
  
  console.log(img_url);
  
  setTimeout(function () { 
    $("#img-1").attr("src", img_url[0]);
    $("#desc-1").html(title[0]);
    $("#img-2").attr("src", img_url[1]);
    $("#desc-2").html(title[1]);
    $("#img-3").attr("src", img_url[2]);
    $("#desc-3").html(title[2]);
    $("#img-4").attr("src", img_url[3]);
    $("#desc-4").html(title[3]);
    $("#img-5").attr("src", img_url[4]);
    $("#desc-5").html(title[4]);
    $("#img-6").attr("src", img_url[5]);
    $("#desc-6").html(title[5]);
    console.log(title)
  
  }, 1500);

  

  timelineItem.removeClass('is-active');
  $('[data-day="'+ day +'"]').addClass('is-active');
  //var century = $(this).attr("century");
  //var url = "https://api.harvardartmuseums.org/object?century=" + century + "&q=totalpageviews:>1200&apikey=ddd366bc-2382-43d7-ae14-9e09d60fcfaf"
  
  /*
  $.getJSON(url,function(result){
    //console.log(result.info);
    records = result.records;
    console.log(records)
    for (i=0; i < records.length; i++){
      if (records[i]["primaryimageurl"] != 'null'){
        objects.push(records[i]["id"])
      }
    }

    //console.log(objects)
    var pages = result.info.pages;

    for (i = 2; i <= pages; i++) {
            new_url = url + "&page=" + i;
            $.getJSON(new_url, function (result) {
              records = result.records;
              for (i=0; i < records.length; i++){
                if (records[i]["primaryimageurl"] != 'null'){
                  objects.push(records[i]["id"])
                }
            }           
        });
    }

    //console.log(objects)
    setTimeout(function () { console.log(objects); }, 5000);

  });

  */

});

