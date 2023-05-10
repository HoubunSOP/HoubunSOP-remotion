import {Audio} from 'remotion';
import {staticFile, AbsoluteFill, Img} from 'remotion';
import Sequences from './Sequences';

// 此文件仅为为了添加背景图片所建立的，timeline请跳转至Sequences.tsx
const VideoLine = () => {
	return (
		<AbsoluteFill>
			<Img src={staticFile('assets/Img/Background/background.png')} />
			<Audio src={staticFile('assets/audio/background.mp3')} />
			<Sequences />
		</AbsoluteFill>
	);
};

export default VideoLine;
