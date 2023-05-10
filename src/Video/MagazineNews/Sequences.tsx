/* eslint-disable react/jsx-pascal-case */
import {Sequence} from 'remotion';
import {MagazineNewsOP} from './OP';

const MagazineNewsSequences = () => {
    return (
        <>
            <Sequence durationInFrames={500}>
                <MagazineNewsOP/>
            </Sequence>
        </>
    );
};

export default MagazineNewsSequences;
