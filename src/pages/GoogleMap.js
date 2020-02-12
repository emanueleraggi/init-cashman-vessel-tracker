import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
// import { Marker } from "google-maps-react";
// import {InfoWindow} from 'google-map-react';

import ShipTracker from '../components/ShipTracker';
import SideBar from '../components/SideBar';
import { Ship } from '../components/ShipTracker';

// import MapControl from '../components/MapControl';
// import { MarkerClickHandle } from '../components/ShipTracker';

// const btnSearch = document.getElementById('btnSearch');
// const txtSearch = document.getElementById('boat');
// const resultArea = document.getElementById('result');
// let out = '';

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

// var expanded = false;
// function showCheckboxes() {
// 	var checkboxes = document.getElementById('checkboxes');
// 	if (!expanded) {
// 		checkboxes.style.display = 'block';
// 		expanded = true;
// 	} else {
// 		checkboxes.style.display = 'none';
// 		expanded = false;
// 	}
// }

class BoatMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonEnabled: true,
			buttonClickedAt: null,
			progress: 0,
			ships: [],
			type: 'All'
		};
		this.updateRequest = this.updateRequest.bind(this);
		this.countDownInterval = null;
	}

	componentDidMount() {
		this.countDownInterval = setInterval(() => {
			if (!this.state.buttonClickedAt) return;
			const date = new Date();
			const diff = Math.floor((date.getTime() - this.state.buttonClickedAt.getTime()) / 1000);

			if (diff < 90) {
				this.setState({
					progress: diff,
					buttonEnabled: false
				});
			} else {
				this.setState({
					progress: 0,
					buttonClickedAt: null,
					buttonEnabled: true
				});
			}
		}, 500);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.type !== prevState.type) {
			// The user has selected a different value from the dropdown
			// To get this value: this.state.type
			// do anything you want here...
			console.log('dropdown value changed for ' + this.state.type);
		}
	}

	componentWillUnmount() {
		clearInterval(this.countdownInterval);
	}

	async updateRequest() {
		const url = 'http://localhost:3001/hello';
		console.log(url);
		const fetchingData = await fetch(url);
		const ships = await fetchingData.json();

		console.log(ships);

		this.setState({
			buttonEnabled: false,
			buttonClickedAt: new Date(),
			progress: 0,
			ships
		});
		setTimeout(() => {
			this.setState({ buttonEnabled: true });
		});
	}

	handleChange = (e) => {
		this.setState({
			type: e.target.value
		});
		console.log(e.target.value);
	};

	render() {
		// All the ships
		const ships = this.state.ships;

		// Debug
		console.log('this.state.type: ' + this.state.type);

		// Only the ships matching the dropdown selected value
		const filteredShips = ships.filter((ship) => {
			console.log('ship.shipImage: ' + ship.shipImage);

			if (ship.shipImage !== this.state.type) {
				console.log('ship.shipImage does not match the filtered value');
			}

			return ship.shipImage === this.state.type;
		});

		// Debug
		console.log(ships);
		console.log(filteredShips);

		return (
			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyBm59I3P5VB3JR25MWz-GKgf4PZs8XEsqc' }}
					center={{
						lat: 42.4,
						lng: -71.1
					}}
					zoom={8}
				>
					{filteredShips.map((ship) => (
						<Ship ship={ship} key={ship.CALLSIGN} lat={ship.LATITUDE} lng={ship.LONGITUDE} />
					))}

					{/* {this.state.ships.map((ship) => (
						<Ship ship={ship} key={ship.CALLSIGN} lat={ship.LATITUDE} lng={ship.LONGITUDE} /> */}

					{/* <YourControlButtonComponentHere /> */}
					<select className="combo-companies" value={this.state.type} onChange={this.handleChange}>
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
					</select>

					{/* <select className="combo-companies">
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

					{/* <div className="combo-companies"> */}
					{/* <div className="selectBox" onClick={showCheckboxes}>
						<select>
							<option value="All">All</option>
							<option value="Cashman Dredging">Cashman Dredging</option>
							<option value="Donjon">Donjon</option>
							<option value="Dutra">Dutra</option>
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
					</div> */}
					{/* </div> */}

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
						<span>{this.state.progress}%</span>
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

export default class GoogleMap extends React.Component {
	state = {
		ships: []
	};

	async componentDidMount() {
		const url = 'http://localhost:3001/hello';
		console.log(url);
		const fetchingData = await fetch(url);
		const ships = await fetchingData.json();

		console.log(ships);

		this.setState({
			ships
		});
	}

	render() {
		return (
			<MapContainer>
				{/* This is the Google Map Tracking Page */}
				<BoatMap />
				<SideBar />
				<ShipTracker ships={this.state.ships} />
			</MapContainer>
		);
	}
}
