import {Config} from 'remotion';
import {webpackOverride} from './src/webpack-override';

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(webpackOverride);
Config.setBrowserExecutable(
	'D:\\misaka10843\\Downloads\\Chrome-bin\\chrome.exe'
);
