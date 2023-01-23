import {Composition} from 'remotion';
import {OP} from './OP/Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="OP"
				component={OP}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
      <Composition
				id="MagazineInformation"
				component={OP}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
