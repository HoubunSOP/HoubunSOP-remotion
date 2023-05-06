import {Easing, interpolate, useCurrentFrame, Img, staticFile} from 'remotion';

function calculateStyles(frame: number) {
	const marginLeft = interpolate(frame, [0, 50], [-1000, 0], {
		easing: Easing.bezier(0.15, 0.44, 0.24, 1),
		extrapolateRight: 'clamp',
	});
	const titleOpacity = interpolate(frame, [0, 50], [0, 1], {
		easing: Easing.bezier(0.15, 0.44, 0.24, 1),
		extrapolateRight: 'clamp',
	});
	const subTitleOpacity = interpolate(frame, [40, 90], [0, 1], {
		easing: Easing.bezier(0.15, 0.44, 0.24, 1),
		extrapolateRight: 'clamp',
	});
	const transition = interpolate(frame, [230, 270], [0, 1], {
		easing: Easing.linear,
		extrapolateRight: 'clamp',
	});
	return {marginLeft, titleOpacity, subTitleOpacity, transition};
}

export const OP = () => {
	const frame = useCurrentFrame();
	const {marginLeft, titleOpacity, subTitleOpacity, transition} =
		calculateStyles(frame);

	return (
		<div
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				opacity: interpolate(transition, [0, 1], [1, 0]),
				zIndex: 1,
			}}
		>
			<div className="w-[811px] h-[327px]">
				<Img
					src={staticFile('assets/Img/1230-2.png')}
					className="w-[1920px] h-[1080px] absolute"
				/>
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'black',
						opacity: interpolate(frame, [0, 30], [1, 0], {
							easing: Easing.linear,
							extrapolateRight: 'clamp',
						}),
					}}
				/>
				<p
					style={{
						transform: `translateX(${marginLeft}px)`,
						opacity: titleOpacity,
						textShadow: '0px 0px 30px #fff',
					}}
					className="whitespace-pre-wrap absolute top-[392px] left-[169px] font-['Inter'] text-[200px] leading-[normal] font-bold text-left text-white  text-shadow-md"
				>
					芳文月刊
				</p>
				<p
					style={{
						opacity: subTitleOpacity,
						textShadow: '0px 0px 30px #fff',
					}}
					className="whitespace-pre-wrap absolute top-[307px] left-[158px] font-['Inter'] text-[70px] leading-[normal] text-left text-white"
				>
					2023.4
				</p>
				<Img
					style={{
						opacity: subTitleOpacity,
						filter: 'drop-shadow(0px 0px 30px #fff)',
					}}
					src={staticFile('assets/Img/logo/logo-light.png')}
					className="w-[289px] h-[55px] absolute left-[177px] top-[909px] object-cover"
				/>
			</div>
		</div>
	);
};
