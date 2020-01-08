const path = require("path");
const EasyConfig = require("../../EasyConfig.js")

module.exports = {
	extensions: [".js", ".jsx"],
	alias: Object.assign({
		"@": path.resolve(__dirname, "../../src/")
	}, EasyConfig.alias)
}