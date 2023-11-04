import Glider from "react-glider";
import "glider-js/glider.min.css";
import React, { useCallback, useEffect, useRef } from "react";

const Carousel = () => {
	return (
		<Glider
			className="glider-container"
			draggable
			slidesToScroll
			scrollLock
			hasDots
			slidesToShow={1}
		>
			{[1, 2, 3, 4].map((item) => (
				<div className="" key={item}>
					<img
						src={`/${item}.png`}
						alt="Banner Image"
						className="max-h-[300px] w-full overflow-hidden"
					/>
				</div>
			))}
		</Glider>
	);
};

export default Carousel;
