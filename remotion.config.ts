import {Config} from 'remotion';
import {webpackOverride} from './src/webpack-override';

Config.setImageFormat('jpeg');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(webpackOverride);
Config.setBrowserExecutable(
	'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
);
