import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	const durationInFrame = 5000;
	return (
		<>
			<Composition
				id="FantasiaMonthly"
				component={MyComposition}
				durationInFrames={durationInFrame}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
