const path = require('path');
const GlobEntries = require('webpack-glob-entries');

module.exports = {
	mode: 'production',
	entry: GlobEntries('./src/tests/*.test.ts'), // Generates multiple entry for each test
	output: {
		path: path.join(__dirname, 'dist'),
		libraryTarget: 'commonjs',
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	target: 'web',
	externals: /^(k6|https?\:\/\/)(\/.*)?/,
	stats: {
		colors: true,
	},
	optimization: {
		// Don't minimize, as it's not used in the browser
		minimize: false,
	},
};
