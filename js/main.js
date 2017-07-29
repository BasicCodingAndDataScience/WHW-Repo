zingchart.THEME="classic";
var myConfig = {
    "type":"line",
    "plotarea":{


    },
    "csv":{
      "url":"/DrugDeathsStates1999-2015(Cleaned).csv",
      "vertical-labels":true
    }



};

zingchart.render({
	id : 'myChart',
	data : myConfig,
	height: 750,
	width: 1225,
});
