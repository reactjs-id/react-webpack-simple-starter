/*eslint-disable */
var context = require.context('./src', true, /.+\.spec\.js?$/);
/*eslint-enable */
context.keys().forEach(context);
