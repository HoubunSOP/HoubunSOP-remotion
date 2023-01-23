import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const Title: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [20, 40], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
<div style={{opacity}} className="text-gray-700 text-5xl font-bold leading-relaxed">
	<div className="w-[811px] h-[327px]">
		<p className="absolute left-[169px] top-[392px] text-[200px] font-bold text-left text-white">
			芳文月刊
		</p>
		<p className="absolute left-[158px] top-[307px] text-[70px] text-left text-white">
			2022.12
		</p>
	</div>
</div>
	);
};
