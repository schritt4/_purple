import styled from "styled-components";
import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

const Div1 = styled.div`
	background-color: #f5f5f5;
	width: 100vw;
	height: 60vw;
	display: flex;
	
	z-index: -5;
	padding: none;
	flex-direction: column;
`;
const CardsWrapper = styled.div`
	display: flex;
	overflow-x: scroll;
	margin:3vw; 
`;

const CurationImg = styled.img`
	width: 32vw;
	margin: 5vw;  
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export default function Curation() {
	const [data, setData] = useState([]);

	const getData = useCallback(() => {
		axios
			.get("http://127.0.0.1:8000/")
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	});
	useEffect(getData, []);

	let { id } = useParams();

	let findItem = data.find((datas) => {
		return datas.id == id;
	});

	return (
		<>
			<Div1>
				<CardsWrapper>
					{data.map((datas) => (
						<>
							<Link
								to={"/curation/" + datas.id}
								state={{
									id: datas.id,
									image: datas.image,
									title: datas.title,
									content: datas.content,
									created_at : datas.created_at
								}}
							>
								<CurationImg src={datas.image} key={data.id} />
							</Link>
						</>
					))}
				</CardsWrapper>
			</Div1>
		</>
	);
}
