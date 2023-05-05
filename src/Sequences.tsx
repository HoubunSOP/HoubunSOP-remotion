/* eslint-disable react/jsx-pascal-case */
import {Sequence} from 'remotion';
import {OP} from './Video/OP/Composition';
import {MagazineNewsIndex} from './Video/MagazineNews';

const Sequences = () => {
	return (
		<>
			<Sequence durationInFrames={300}>
				<OP />
			</Sequence>
			<Sequence from={240} durationInFrames={500}>
				<MagazineNewsIndex />
			</Sequence>
		</>
	);
};

export default Sequences;
