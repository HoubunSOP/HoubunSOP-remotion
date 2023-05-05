import {Composition} from 'remotion';
import VideoLine from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	const durationInFrame = 600;
	return (
		<>
			<Composition
				id="FantasiaMonthly"
				component={VideoLine}
				durationInFrames={durationInFrame}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
