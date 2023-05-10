import {Easing, interpolate, useCurrentFrame, Img, staticFile} from 'remotion';

function calculateStyles(frame: number) {
	const inOpacity = interpolate(frame, [40, 90], [0, 1], {
		easing: Easing.bezier(0.15, 0.44, 0.24, 1),
		extrapolateRight: 'clamp',
	});
	return {inOpacity};
}

export const MagazineNewsOP = () => {
	const frame = useCurrentFrame();
	const {inOpacity} = calculateStyles(frame);

	return (

			<div className="w-[1920px] h-[1080px] relative overflow-hidden bg-black/[0.56]">
				<div className="w-[1920px] h-[1080px] absolute left-[-1px] top-[-1px] bg-black/[0.49]" />
				<p
					style={{opacity: inOpacity, textShadow: '0px 0px 30px #fff'}}
					className="w-[245px] h-[57px] absolute left-[846px] top-[217px] text-6xl font-bold text-left text-white"
				>
					杂志资讯
				</p>
				<p
					style={{opacity: inOpacity, textShadow: '0px 0px 30px #fff'}}
					className="w-[721px] h-[103px] absolute left-[602px] top-[552px] text-[45px] font-bold text-center text-white"
				>
					<span className="w-[721px] h-[103px] text-[45px] font-bold text-center text-white">
						将以日期为顺序展示本月的杂志信息
					</span>
					<br />
					<span className="w-[721px] h-[103px] text-[45px] font-bold text-center text-white">
						白色方块内的数字为 杂志发布日期
					</span>
				</p>
				<Img
					style={{
						opacity: inOpacity,
						filter: 'drop-shadow(0px 0px 30px #fff)',
						transform: 'rotateZ(48.78deg)',
					}}
					src={staticFile('assets/Img/icon/icons8-light-on-100.png')}
					className="w-[92.7px] h-[102.5px] absolute left-[925.91px] top-[386.27px] object-cover"
				/>
			</div>
	);
};
