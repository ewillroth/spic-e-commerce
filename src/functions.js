module.exports = {
	emailValidator: string => {
		if (string.includes('@') && string.includes('.')) {
			return true
		} else {
			return false
		}
	}
}
