/*
 * Homey CommandClass
 * Meter
 * Versions 1 - 4
 * 
 * JUST FOR REFERENCE!
 * Basic knowledge still needed.
*/

/*
 * =========== GENERAL CODE: VERSION 1 ===========
 * [#CAPABILITY#] = the used capability
 * [#TYPESCALE#] = a supported meter scale, displayed below
 * Scale = Just the Number (0 - 3)
 *
 * !! Opional !!
 * with Meter Types:
 * 'Electric meter'
 * 'Gas meter'
 * Since there is only 1 Scale, you can have the report parser like this:
 * 'command_report_parser': report => report['Meter Value (Parsed)']
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_GET',
	'command_report': 'METER_REPORT',
	'command_report_parser': report => {
		if (report.hasOwnProperty('Properties1') &&
		report.Properties1.hasOwnProperty('Scale') &&
		report.Properties1.Scale === [#TYPESCALE#])
			return report['Meter Value (Parsed)'];
				
		return null;
	}
}

/*
 * =========== GENERAL CODE: VERSION 2 ===========
 * [#CAPABILITY#] = the used capability
 * [#TYPESCALE#] = a supported scale type, displayed below
 * Scale = Just the Number (0 - 3)
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_GET',
	'command_get_parser': () => {
		return {
			'Properties1': {
				'Scale': [#TYPESCALE#]
			}
		};
	},
	'command_report': 'METER_REPORT',
	'command_report_parser': report => {
		if (report.hasOwnProperty('Properties2') &&
		report.Properties2.hasOwnProperty('Scale') &&
		report.Properties2.Scale === [#TYPESCALE#])
			return report['Meter Value (Parsed)'];
				
		return null;
	}
}

/*
 * =========== GENERAL CODE: VERSION 3 ===========
 * [#CAPABILITY#] = the used capability
 * [#TYPESCALE#] = a supported scale type, displayed below
 * Scale = Just the Number (0 - 6)
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_GET',
	'command_get_parser': () => {
		return {
			'Properties1': {
				'Scale': [#TYPESCALE#]
			}
		};
	},
	'command_report': 'METER_REPORT',
	'command_report_parser': report => {
		if (report.hasOwnProperty('Properties2') &&
		report.Properties2.hasOwnProperty('Scale bits 10') &&
		report.Properties2['Scale bits 10'] === [#TYPESCALE#])
			return report['Meter Value (Parsed)'];
				
		return null;
	}
}

/*
 * =========== GENERAL CODE: VERSION 4 [#TYPESCALE-10#] = 1-6 ===========
 * [#CAPABILITY#] = the used capability
 * [#TYPERATE#] = a supported rate type, displayed below
 * Rate = Full name
 * [#TYPESCALE-10#] = a supported scale type, displayed below
 * Scale = Just the Number (0 - 7)
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_GET',
	'command_get_parser': () => {
		return {
			'Properties1': {
				'Rate Type': '[#TYPERATE#]',
				'Scale': [#TYPESCALE10#]
			},
			'Scale 2': 0
		};
	},
	'command_report': 'METER_REPORT',
	'command_report_parser': report => {
		if (report.hasOwnProperty('Properties2') &&
		report.Properties2.hasOwnProperty('Scale bits 10') &&
		report.Properties2['Scale bits 10'] === [#TYPESCALE-10#])
			return report['Meter Value (Parsed)'];
				
		return null;
	}
}

/*
 * =========== GENERAL CODE: VERSION 4 [#TYPESCALE-2#] = 0-1 ===========
 * [#CAPABILITY#] = the used capability
 * [#TYPERATE#] = a supported rate type, displayed below
 * Rate = Full name
 * [#TYPESCALE-2#] = a supported scale type, displayed below
 * Scale 2 = Just the Number (0 - 7)
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_GET',
	'command_get_parser': () => {
		return {
			'Properties1': {
				'Rate Type': '[#TYPERATE#]',
				'Scale': 7
			},
			'Scale 2': [#TYPESCALE2#]
		};
	},
	'command_report': 'METER_REPORT',
	'command_report_parser': report => {
		if (report.hasOwnProperty('Properties1') &&
		report.Properties1.hasOwnProperty('Scale bits 2') &&
		report.Properties1['Scale bits 2'] === [#TYPESCALE-2#])
		report.hasOwnProperty('Properties2') &&
		report.Properties2.hasOwnProperty('Scale bits 10') &&
		report.Properties2['Scale bits 10'] === 7)
			return report['Meter Value (Parsed)'];
				
		return null;
	}
}

/*
 * =========== GENERAL CODE: GET SUPPORTED TYPES AND SCALES FROM SENSOR ===========
 * This will give you all sensor types that are supported by the device in CLI Debug
 * !!!!! ONLY SUPPORTED FROM VERSION 2 AND UP !!!!!
 *
 * [#CAPABILITY#] = the used (temporary) capability
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_SUPPORTED_GET',
	'command_report': 'METER_SUPPORTED_REPORT'
}

/*
 * =========== GENERAL CODE: RESET METER [GET] ===========
 * !!!!! THIS WILL RESET ALL ACCUMULATED METER VALUES !!!!!!
 * !! ONLY FROM VERSION 2 AND UP !!
 * It will activate as soon as the capability is being GET
 *
 * [#CAPABILITY#] = the used (temporary) capability
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_get': 'METER_RESET'
}

/*
 * =========== GENERAL CODE: RESET METER [SET] ===========
 * !!!!! THIS WILL RESET ALL ACCUMULATED METER VALUES !!!!!!
 * !! ONLY FROM VERSION 2 AND UP !!
 * It will activate as soon as the capability used is being SET
 *
 * [#CAPABILITY#] = the used (temporary) capability
*/

'[#CAPABILITY#]': {
	'command_class': 'COMMAND_CLASS_METER',
	'command_set': 'METER_RESET',
	'command_set_parser': {
		return {};
	}
}

/*
 * SUPPORTED SENSOR TYPES (*) AND SCALES:
 * SCALES FROM VERSION 1 = **---
 * SCALES FROM VERSION 2 = ***--
 * SCALES FROM VERSION 3 = ****-
 * SCALES FROM VERSION 4 = *****
 * --------------------------------------
 
 * Electric meter
 **--- 0 - kilo Watt hours (kWh)
 ***-- 1 - kiloVolt-Ampere hour (kVAh)
 ***-- 2 - Wattage (W)
 ***-- 3 - Pulse Count
 ****- 4 - Voltage (V)
 ****- 5 - Amperage (A)
 ****- 6 - Power Factor
 ***** [#TYPESCALE-2#]: 0, [#TYPESCALE-10#]: 7 - kiloVolt-Ampere reactive (kVar)
 ***** [#TYPESCALE-2#]: 1, [#TYPESCALE-10#]: 7 - kiloVolt-Ampere reactive/hour (kVarh)
 
 * Gas meter
 **--- 0 - Cubic Meters (M³)
 ***-- 1 - Cubic Feet
 ***-- 3 - Pulse Count
 
 * Water meter
 **--- 0 - Cubic Meters (M³)
 **--- 1 - Cubic Feet
 **--- 2 - US Gallon
 ***-- 3 - Pulse Count
 
 * RATE TYPES (*):
 * !! ONLY FROM VERSION 4 !!
 * Import
 *    = Consumed

 * Export
 *    = Produced
*/
