/*
 * Homey CommandClass
 * Battery
 * Version 1
 * 
 * JUST FOR REFERENCE!
 * Basic knowledge still needed.
*/

/*
 * =========== GENERAL CODE: VERSION 1 ===========
*/

'measure_battery': {
	'command_class': 'COMMAND_CLASS_BATTERY',
	'command_get': 'BATTERY_GET',
	'command_report': 'BATTERY_REPORT',
	'command_report_parser': report => {
		if (report['Battery Level'] === "battery low warning")
			return 1;
		
		return report['Battery Level (Raw)'][0];
	}
}
