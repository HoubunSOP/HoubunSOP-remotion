import {Easing, interpolate, useCurrentFrame} from 'remotion';
/*****************
 *
 * 交叉溶解组件
 *
 * 使用方法：
 * <CrossDissolution scene1={Scene1} scene2={Scene2} transitionFrames={[0, 100]} />
 *****************/
export interface CrossDissolutionProps {
	scene1: React.FC;
	scene2: React.FC;
	transitionFrames: number[];
}

export const CrossDissolution: React.FC<CrossDissolutionProps> = ({
	scene1: Scene1,
	scene2: Scene2,
	transitionFrames = [0, 50],
}) => {
	const frame = useCurrentFrame();

	// 计算过渡值
	const transition = interpolate(frame, transitionFrames, [0, 1], {
		easing: Easing.linear,
		extrapolateRight: 'clamp',
	});

	return (
		<div style={{position: 'relative', width: '100%', height: '100%'}}>
			{/* Scene1 */}
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
				<Scene1 />
			</div>

			{/* Scene2 */}
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
				<Scene2 />
			</div>
		</div>
	);
};
