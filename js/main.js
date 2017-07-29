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
var myConfig2 = {
    "type":"line",
    "plotarea":{


    },
    "csv":{
      "url":"/Cleaned Data Set2.csv",
      "vertical-labels":true
    }



};

zingchart.render({
	id : 'Chart2',
	data : myConfig2,
	height: 650,
	width: 1000,
});
