import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
// import { Marker } from "google-maps-react";
// import {InfoWindow} from 'google-map-react';
import ShipTracker from '../components/ShipTracker';
import SideBar from '../components/SideBar';
import { Ship } from '../components/ShipTracker';
import Client from '../Contentful';

// import icon from '../logos/weeksmarine.png';

// import MapControl from '../components/MapControl';
// import { MarkerClickHandle } from '../components/ShipTracker';


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
	option.active {
		background: yellow;
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
			type: 'All',
			shipTypes: [],
			activeShipTypes: [],
			logoMap: {}
		};
		this.updateRequest = this.updateRequest.bind(this);
		this.countDownInterval = null;
	}

	async componentDidMount() {
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
		await this.updateRequest();

		const shipTypeResults = await Client.getEntries({
			content_type: 'cashmanCompetitors'
		});

		console.log(shipTypeResults);
		const shipTypes = shipTypeResults.items.map((data) => data.fields);

		const logoMap = shipTypes.reduce((acc, type) => {
			return {
				...acc,
				[type.name]: type.images.fields.file.url
			};
		}, {});
		console.log({ shipTypes });
		this.setState({
			logoMap
		});
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
		return (
			<div className="google-map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyBm59I3P5VB3JR25MWz-GKgf4PZs8XEsqc' }}
					center={{
						lat: this.props.activeShip ? this.props.activeShip.latitude : 42.4,
						lng: this.props.activeShip ? this.props.activeShip.longitude : -71.1
					}}
					zoom={8}
				>
					{/* {filteredShips.map((ship) => (
						<Ship ship={ship} key={ship.CALLSIGN} lat={ship.LATITUDE} lng={ship.LONGITUDE} />
					))} */}

					{/* Rendering all the markers here */}
					{this.state.ships.map((ship) => (
						<Ship
							ship={ship}
							key={ship.CALLSIGN}
							lat={ship.LATITUDE}
							lng={ship.LONGITUDE}
							logoMap={this.state.logoMap}
						/>
					))}

					<select className="combo-companies" onClick={this.props.handleDropdownChange}>
						<option value="All">All</option>
						{/* <option value="Cashman Dredging">Cashman Dredging</option>
						<option value="Donjon">Donjon</option>
						<option value="Dutra">Dutra</option>
						<option value="Great Lakes Dredge and Dock">Great Lakes Dredge and Dock</option>
						<option value="Manson">Manson</option>
						<option value="Marinex">Marinex</option>
						<option value="Norfolk">Norfolk</option>
						<option value="Orion">Orion</option>
						<option value="USACE">USACE</option>
						<option value="Weeks">Weeks</option> */}
						{this.state.shipTypes.map((type) => (
							<option
								className={this.state.activeShipTypes.includes(type) ? 'active' : ''}
								key={type}
								value={type}
							>
								{type}
							</option>
						))}
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
		ships: [],
		activeShipTypes: [],
		activeCompanies: [],
		activeShip: null
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

	handleDropdownChange = (e) => {
		const shipType = e.target.value;

		if (this.state.activeShipTypes.includes(shipType)) {
			const filteredShipTypes = this.state.activeShipTypes.filter((type) => type !== shipType);
			this.setState({
				activeShipTypes: filteredShipTypes
			});
		} else {
			this.setState({
				activeShipTypes: [ ...this.state.activeShipTypes, shipType ]
			});
		}
	};

	setActiveShip = (name, latitude, longitude) => {
		this.setState({
			activeShip: {
				name,
				latitude,
				longitude
			}
		});
	};

	render() {
		return (
			<MapContainer>
				{/* This is the Google Map Tracking Page */}
				<pre>{JSON.stringify(this.state.activeShip, null, 2)}</pre>
				<BoatMap activeShip={this.state.activeShip} handleDropdownChange={this.handleDropdownChange} />
				<SideBar activeShip={this.state.activeShip} activeShipTypes={this.state.activeShipTypes} />
				<ShipTracker ships={this.state.ships} setActiveShip={this.setActiveShip} />
			</MapContainer>
		);
	}
}
