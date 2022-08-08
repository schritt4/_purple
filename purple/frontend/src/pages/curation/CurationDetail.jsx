import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";

const Div0 = styled.div`
	display: flex;
`;

export default function CurationDetail() {
	const location = useLocation();
	const id = location.state.id;
	const image = location.state.image;
	const title = location.state.title;
	const content = location.state.content;
	const created_at = location.state.created_at;

	return (
		<>
			<BodyWrapper>
				<Div0>
					id: {id}
					image : {image}
					title : {title}
					content : {content}
					creatd_at : {created_at}
				</Div0>
			</BodyWrapper>
			<Footer />
		</>
	);
}
