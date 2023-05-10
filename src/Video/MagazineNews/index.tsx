/* eslint-disable react/jsx-pascal-case */
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import MagazineNewsSequences from "./Sequences";

function calculateStyles(frame: number) {
    const transition = interpolate(frame, [0, 40], [0, 1], {
        easing: Easing.linear,
        extrapolateRight: 'clamp',
    });
    return {transition};
}

const MagazineNewsIndex = () => {
    const frame = useCurrentFrame();
    const {transition} = calculateStyles(frame);
    return (
        <div
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                opacity: interpolate(transition, [0, 1], [0, 1]),
                zIndex: 2,
            }}
        >
            <MagazineNewsSequences/>
        </div>
    );
};

export default MagazineNewsIndex;
