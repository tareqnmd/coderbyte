const HALF_DAY_IN_MINUTES = 720;
const FULL_DAY_IN_MINUTES = 1440;

const timeObj = (str) => {
	const amPm = str.slice(-2);
	const [hours, mins] = str.slice(0, str.length - 2).split(':');
	const timeObjDetails = {
		hours: Number(hours),
		mins: Number(mins),
		amPm,
		totalMins: Number(hours) * 60 + Number(mins),
	};
	return timeObjDetails;
};

function CountingMinutesI(str) {
	const [firstTimeStr, secondTimeStr] = str.split('-');
	const firstTimeDetails = timeObj(firstTimeStr);
	const secTimeDetails = timeObj(secondTimeStr);
	if (firstTimeDetails.amPm === secTimeDetails.amPm) {
		if (firstTimeDetails.totalMins < secTimeDetails.totalMins) {
			return secTimeDetails.totalMins - firstTimeDetails.totalMins;
		} else {
			return (
				FULL_DAY_IN_MINUTES -
				firstTimeDetails.totalMins +
				secTimeDetails.totalMins
			);
		}
	} else {
		if (firstTimeDetails.amPm === 'am') {
			return (
				HALF_DAY_IN_MINUTES -
				firstTimeDetails.totalMins +
				secTimeDetails.totalMins
			);
		} else {
			return (
				HALF_DAY_IN_MINUTES -
				firstTimeDetails.totalMins +
				secTimeDetails.totalMins
			);
		}
	}
}

console.log(CountingMinutesI('9:00am-10:00am'));
console.log(CountingMinutesI('1:00am-11:00pm'));
console.log(CountingMinutesI('12:30pm-12:00am'));
console.log(CountingMinutesI('1:23am-1:08am'));
