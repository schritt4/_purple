/*global kakao*/
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import React from "react";
import { useEffect } from "react";
import styled from 'styled-components';

const options = {
	center: new window.kakao.maps.LatLng(33.450701, 126.570667),
	level: 3,
};

const { kakao } = window;

export default function MapContainer() {
	useEffect(() => {
		const container = document.getElementById("myMap");
		const options = {
			center: new kakao.maps.LatLng(35.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(container, options);
	}, []);

	return (
		<>
			<div
				id="myMap"
				style={{
					width: "100vw",
					height: "90vh",
				}}
			></div>
			<Footer />
		</>
	);
}
