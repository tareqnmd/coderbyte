const HALF_DAY_IN_MINUTES = 720;
const FULL_DAY_IN_MINUTES = 1440;

const timeObj = (str) => {
	const amPm = str.slice(-2);
	const [hours, mins] = str.slice(0, str.length - 2).split(':');
	const timeObjDetails = {
		amPm,
		totalMins: Number(hours) * 60 + Number(mins),
	};
	return timeObjDetails;
};

function CountingMinutesI(str) {
	const [firstTimeStr, secondTimeStr] = str.split('-');
	const firstTimeDetails = timeObj(firstTimeStr);
	const secTimeDetails = timeObj(secondTimeStr);
	const timeDiff = secTimeDetails.totalMins - firstTimeDetails.totalMins;
	if (firstTimeDetails.amPm === secTimeDetails.amPm) {
		if (firstTimeDetails.totalMins < secTimeDetails.totalMins) {
			return timeDiff;
		} else {
			return FULL_DAY_IN_MINUTES + timeDiff;
		}
	} else {
		return HALF_DAY_IN_MINUTES + timeDiff;
	}
}

console.log(CountingMinutesI('9:00am-10:00am'));
console.log(CountingMinutesI('1:00am-11:00pm'));
console.log(CountingMinutesI('12:30pm-12:00am'));
console.log(CountingMinutesI('1:23am-1:08am'));
