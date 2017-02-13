/*
 * Homey CommandClass
 * MultiLevel Switch
 * Versions 1 - 4
 * 
 * JUST FOR REFERENCE!
 * Basic knowledge still needed.
*/

/*
 * =========== GENERAL CODE: VERSION 1 ON/OFF ===========
*/

'onoff': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		return {
			'Value': (value > 0) ? 'on/enable' : 'off/disable'
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => {
		if (typeof report['Value'] === 'string')
			return report['Value'] === 'on/enable';
		
		return report['Value (Raw)'][0] > 0;
	}
}

/*
 * =========== GENERAL CODE: VERSION 1 DIM ===========
*/

'dim': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		if (value >= 1) value = 0.99;
		
		return {
			'Value': value * 100
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => report['Value (Raw)'][0] / 100
}

/*
 * =========== GENERAL CODE: VERSIONS 2 - 3 ON/OFF ===========
*/

'onoff': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		return {
			'Value': (value > 0) ? 'on/enable' : 'off/disable',
			'Dimming Duration': 'Factory default'
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => {
		if (typeof report['Value'] === 'string')
			return report['Value'] === 'on/enable';
		
		return report['Value (Raw)'][0] > 0;
	}
}

/*
 * =========== GENERAL CODE: VERSIONS 2 - 3 DIM ===========
*/

'dim': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		if (value >= 1) value = 0.99;
		
		return {
			'Value': value * 100,
			'Dimming Duration': 'Factory default'
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => report['Value (Raw)'][0] / 100
}

/*
 * =========== GENERAL CODE: VERSION 4 ON/OFF ===========
 * !! REPORT UNTESTED !!
*/

'onoff': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		return {
			'Value': (value > 0) ? 'on/enable' : 'off/disable',
			'Dimming Duration': 'Factory default'
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => report['Target Value (Raw)'][0] > 0;
}

/*
 * =========== GENERAL CODE: VERSION 4 DIM ===========
 * !! REPORT UNTESTED !!
*/

'dim': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_GET',
	'command_set': 'SWITCH_MULTILEVEL_SET',
	'command_set_parser': value => {
		if (value >= 1) value = 0.99;
		
		return {
			'Value': value * 100,
			'Dimming Duration': 'Factory default'
		};
	},
	'command_report': 'SWITCH_MULTILEVEL_REPORT',
	'command_report_parser': report => report['Target Value (Raw)'][0] / 100;
}

/*
 * =========== GENERAL CODE: VERSION 3 - 4 SUPPORTED SWITCH TYPES ===========
 * [#CAPABILITY#] = the used (temporary) capability
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
	'command_get': 'SWITCH_MULTILEVEL_SUPPORTED_GET',
	'command_report': 'SWITCH_MULTILEVEL_SUPPORTED_REPORT'
}

/*
 * SUPPORTED SWITCH TYPES (*):
 * ---------- FROM VERSION 3 ----------
 * # - 00 / 63/FF <= THE HEXIDECIMAL/RAW VALUES
 * 0 - Undefined
 * 1 - Off / On
 * 2 - Down / Up
 * 3 - Close / Open
 * 4 - Counter-Clockwise / Clockwise
 * 5 - Left / Right
 * 6 - Reverse / Forward
 * 7 - Pull / Push
*/
