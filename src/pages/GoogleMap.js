import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import ShipTracker from '../components/ShipTracker';
import SideBar from '../components/SideBar';

// const btnSearch = document.getElementById('btnSearch');
// const txtSearch = document.getElementById('boat');
const resultArea = document.getElementById('result');
let out = '';

const fetchConfig = {
	method: 'GET',
	// headers: {"Access-Control-Allow-Origin": "*"}, <--check this
	mode: 'no-cors'
};

// function boatOut(boat) {
// 	console.log(boat);
// 	out += `<div class="boat">
// 			<div class="boatText">
// 			<h2>${boat[0]}</h2>
// 			<h3>${boat[8]}</h3>
// 			<p><em>${boat[9]}</em></p>
// 			</div><!-- boatText -->
// 			</div><!-- boat -->`;
// }

const MapContainer = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr 200px;
	grid-gap: 10px;
	height: 100vh;
	grid-template-areas: "google-map   sidebar" "ship-tracker sidebar";

	.google-map {
		background: #424242;
		grid-area: google-map;
		position: relative;
		height: 100%;
		width: 100%;
	}
	.map-sidebar {
		background: #9dc183;
		grid-area: sidebar;
	}
	.ship-tracker {
		grid-area: ship-tracker;
	}
`;

var expanded = false;
function showCheckboxes() {
	var checkboxes = document.getElementById('checkboxes');
	if (!expanded) {
		checkboxes.style.display = 'block';
		expanded = true;
	} else {
		checkboxes.style.display = 'none';
		expanded = false;
	}
}

class BoatMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonEnabled: true
		};
		this.updateRequest = this.updateRequest.bind(this);
	}

	updateRequest() {
		const url =
			'http://data.aishub.net/ws.php?username=AH_3076_929F7762&format=1&output=json&compress=3&latmin=12.11&latmax=48.95&lonmin=-124.97&lonmax=-58.95';
		console.log(url);
		fetch(url, fetchConfig)
			.then(function(data) {
				console.log(data);
				return this.dummyData;
			})
			.then(function(jsonObject) {
				const boatData = JSON.parse(jsonObject);
				console.log(boatData);
				console.log(jsonObject);
				// for (boat in jsonObject) {
				// 	const boatInfo = [
				// 		jsonObject[boat].mmsi,
				// 		jsonObject[boat].time,
				// 		jsonObject[boat].longitude,
				// 		jsonObject[boat].latitude,
				// 		jsonObject[boat].cog,
				// 		jsonObject[boat].sog,
				// 		jsonObject[boat].heading,
				// 		jsonObject[boat].navsat,
				// 		jsonObject[boat].imo,
				// 		jsonObject[boat].name,
				// 		jsonObject[boat].callsign,
				// 		jsonObject[boat].type,
				// 		jsonObject[boat].a,
				// 		jsonObject[boat].b,
				// 		jsonObject[boat].c,
				// 		jsonObject[boat].d,
				// 		jsonObject[boat].draught,
				// 		jsonObject[boat].dest,
				// 		jsonObject[boat].eta
				// 	// ];
				// 	boatOut(boatInfo);
				// 	console.log(boatInfo);
				// }
				resultArea.innerHTML = out;
			})
			.catch(function(e) {
				console.log('Error' + e);
			});
		this.setState({
			buttonEnabled: false
		});
		setTimeout(() => {
			this.setState({ buttonEnabled: true });
		});
	}

	dummyData = [
		{
			ERROR: false,
			USERNAME: 'AH_3076_929F7762',
			FORMAT: 'HUMAN',
			LATITUDE_MIN: 20.5,
			LATITUDE_MAX: 30.8,
			LONGITUDE_MIN: -15,
			LONGITUDE_MAX: 18.6,
			RECORDS: 14
		},
		[
			{
				MMSI: 566619000,
				TIME: '2020-01-25 19:51:38 GMT',
				LONGITUDE: -14.84344,
				LATITUDE: 28.282,
				COG: 15.7,
				SOG: 11.3,
				HEADING: 16,
				ROT: 0,
				NAVSTAT: 0,
				IMO: 9529504,
				NAME: 'NORD SUMMIT',
				CALLSIGN: 'S6RW5',
				TYPE: 70,
				A: 174,
				B: 26,
				C: 20,
				D: 12,
				DRAUGHT: 12.1,
				DEST: 'NO SAU',
				ETA: '02-02 12:00'
			},
			{
				MMSI: 236446000,
				TIME: '2020-01-25 19:51:28 GMT',
				LONGITUDE: -14.83202,
				LATITUDE: 28.64639,
				COG: 38,
				SOG: 12.1,
				HEADING: 38,
				ROT: 3,
				NAVSTAT: 0,
				IMO: 9291561,
				NAME: 'KEY BAY',
				CALLSIGN: 'ZDIJ4',
				TYPE: 83,
				A: 82,
				B: 18,
				C: 1,
				D: 19,
				DRAUGHT: 6.1,
				DEST: 'CASABLANCA',
				ETA: '01-27 15:00'
			},
			{
				MMSI: 636091701,
				TIME: '2020-01-25 19:29:58 GMT',
				LONGITUDE: -14.77867,
				LATITUDE: 28.75667,
				COG: 40,
				SOG: 13.2,
				HEADING: 38,
				ROT: 0,
				NAVSTAT: 5,
				IMO: 9420863,
				NAME: 'VOGE TRUST',
				CALLSIGN: 'A8RR2',
				TYPE: 89,
				A: 149,
				B: 34,
				C: 7,
				D: 20,
				DRAUGHT: 7.5,
				DEST: 'GIBRALTAR FO',
				ETA: '01-22 18:00'
			}
		]
	];

	render() {
		return (
			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyBm59I3P5VB3JR25MWz-GKgf4PZs8XEsqc' }}
					center={{
						lat: 42.4,
						lng: -71.1
					}}
					zoom={11}
				>
					{/* <select className="combo-companies" onClick={showCheckboxes}>
				<option value="All">All</option>
				<option value="Cashman Dredging">Cashman Dredging</option>
				<option value="Donjon">Donjon</option>
				<option value="Dutra">Dutra</option>
				<option value="Great Lakes Dredge and Dock">Great Lakes Dredge and Dock</option>
				<option value="Manson">Manson</option>
				<option value="Marinex">Marinex</option>
				<option value="Norfolk">Norfolk</option>
				<option value="Orion">Orion</option>
				<option value="USACE">USACE</option>
				<option value="Weeks">Weeks</option>
			</select> */}
					<form className="combo-companies">
						<div className="multiselect" />
						<div className="selectBox" onClick={showCheckboxes}>
							<select>
								<option>All</option>
							</select>
							<div className="overSelect" />
						</div>
						<div id="checkboxes">
							<label for="Cashman Dredging">
								<input type="checkbox" id="Cashman Dredging" />Cashman Dredging
							</label>
							<label for="Donjon">
								<input type="checkbox" id="Donjon" />Donjon
							</label>
							<label for="Dutra">
								<input type="checkbox" id="Dutra" />Dutra
							</label>
							<label for="Great Lakes Dredge and Dock">
								<input type="checkbox" id="Great Lakes" />Great Lakes
							</label>
							<label for="Manson">
								<input type="checkbox" id="Manson" />Manson
							</label>
							<label for="Marinex">
								<input type="checkbox" id="Marinex" />Marinex
							</label>
							<label for="Norfolk">
								<input type="checkbox" id="Marinex" />Norfolk
							</label>
							<label for="Orion">
								<input type="checkbox" id="Orion" />Orion
							</label>
							<label for="USACE">
								<input type="checkbox" id="USACE" />USACE
							</label>
							<label for="Weeks">
								<input type="checkbox" id="Weeks" />Weeks
							</label>
						</div>
					</form>

					<select className="combo-equipment">
						<option>All</option>
						<option selected>Bucket</option>
						<option>Excavator</option>
						<option>Tug</option>
						<option>Hopper</option>
						<option>Cutter</option>
						<option>Crane</option>
						<option>Crewboat</option>
						<option>Dustpan</option>
					</select>

					<select className="combo-vessels">
						<option selected>None</option>
						<option>Trajectory</option>
						<option>Heading</option>
						<option>Destination</option>
						<option>Draught</option>
					</select>

					<select className="combo-data-period">
						<option selected>None</option>
						<option>1 Day</option>
						<option>5 Days</option>
						<option>1 Week</option>
						<option>2 Weeks</option>
						<option>3 Weeks</option>
						<option>1 Months</option>
						<option>6 Months</option>
						<option>1 Year</option>
						<option>2 Years</option>
						<option>3 Years</option>
						<option>5 Years</option>
					</select>

					<div class="progress-circle p0">
						<span>0%</span>
						<div class="left-half-clipper">
							<div class="first50-bar" />
							<div class="value-bar" />
						</div>
					</div>
					<button className="btn-next-request" onClick={() => this.updateRequest()}>
						Time to Next API Request
					</button>
				</GoogleMapReact>
			</div>
		);
	}
}

export default function GoogleMap() {
	return (
		<MapContainer>
			{/* This is the Google Map Tracking Page */}
			<BoatMap />
			<SideBar />
			<ShipTracker />
		</MapContainer>
	);
}
