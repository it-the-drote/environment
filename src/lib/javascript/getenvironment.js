exports.getEnv = function() {
	var fs = require('fs');
	return fs.readFileSync('/etc/apps/environment.type').toString().split('\n')[0];
}
