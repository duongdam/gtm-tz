import moment from "moment-timezone";


const gtmTz = (zone) => {
    let result = ''
    const tz = zone ? (+moment.tz(zone).format('ZZ')) / 100 : (+moment().format('ZZ')) / 100
    const isInt = Number.isInteger(tz)
    if (!isInt) {
        result = `${`${tz}`.replace('.', ':')}0`
        result = ['-', '+'].includes(`${result}`.charAt(0)) ? `${result}` : `+${result}`
    } else {
        result = ['-', '+'].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`
    }
    return `GTM${result}`
}

export default gtmTz
