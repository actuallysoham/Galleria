// API key 1 : ddd366bc-2382-43d7-ae14-9e09d60fcfaf
// API key 2 : 55b06756-30fe-4883-8cbc-f6a805f8b86d

var key = "55b06756-30fe-4883-8cbc-f6a805f8b86d";
var period_records = [];

$(document).ready(function () {
    
    var url = 'https://api.harvardartmuseums.org/period?size=100&apikey=' + key;
    $.getJSON(url, function (result) {
        period_records = period_records.concat(result.records);
        records = result.records;
        var pages = result.info.pages;
        //console.log(pages);

        for (i = 2; i <= pages; i++) {
            //console.log(period_records);
            new_url = url + "&page=" + i;
            //console.log(new_url);
            $.getJSON(new_url, function (result) {
                period_records = period_records.concat(result.records);
                //console.log(result.records);
                //console.log(period_records);
            });
            
        }

        //setTimeout(function () { console.log(period_records.length); }, 3000);

        var periods = [];
        setTimeout(function () {
            for (i = 0; i < period_records.length; i++) {
                if (period_records[i]["objectcount"] > 500) {
                    periods.push([period_records[i]["name"], period_records[i]["id"], period_records[i]["objectcount"]])
                }
            }

        }, 3000)
        

        setTimeout(function () { console.log(periods); }, 5000);
      
    })

});
