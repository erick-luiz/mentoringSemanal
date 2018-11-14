var evaluatorHoliday = (function(){

	var getHolidaysByYear = function(callback){

		if(!localStorage.getItem('holidays')){
			
			var url = 'https://raw.githubusercontent.com/erickLFLopes/mentoringSemanal/master/holidays/'+localStorage.getItem('holidaysYear')+'.json';
			var xhttp = new XMLHttpRequest();
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var data = JSON.parse(this.responseText);
					var out = [];
					for(var i = 0; i < data.length; i++){
						out.push(data[i].date);
					}
					localStorage.setItem('holidays', out);
					if(callback) callback();
				}
			};
			xhttp.open("GET", url, true);
			xhttp.send();
		}
	}

	var validateHolidaysYear = function(){
		var year = (new Date()).getUTCFullYear();
		
		if(!(localStorage.getItem('holidaysYear') && localStorage.getItem('holidaysYear') == year)){
			localStorage.setItem('holidaysYear',year);
			localStorage.removeItem('holidays');
		}
		getHolidaysByYear();
	}

	var validateHolidays = function(){

		if(!localStorage.getItem('holidays')){
			getHolidaysByYear();
		}
	}
	
	var getHolidays = function(){
		var holidays = localStorage.getItem('holidays').split(',');
		var dates = [];
		for (var i = holidays.length - 1; i >= 0; i--) {
			var date = holidays[i].split('/');
			dates.push(new Date(date[2],--date[1],date[0]));
		}
		return dates;
	}

	var verifyDate = function(date){
		var holidays = getHolidays();
		for (var i = holidays.length - 1; i >= 0; i--) {
			if(date - holidays[i] === 0) return true;
		}
		return false;
	}

	/* Processing data */
	validateHolidaysYear();
	validateHolidays();

	return {
		getHolidays:getHolidays,
		verifyDate:verifyDate
	};
})();