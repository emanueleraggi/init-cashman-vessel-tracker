import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
// import { Marker } from "google-maps-react";
// import { InfoWindow } from 'google-map-react';
import ShipTracker from '../components/ShipTracker';
import SideBar from '../components/SideBar';
import { Ship } from '../components/ShipTracker';
import Client from '../Contentful';
// import InfoWindowMap from '../components/InfoWindowEx';
// import InfoWindowEx from '../components/InfoWindowEx';

// import icon from '../logos/weeksmarine.png';

// import MapControl from '../components/MapControl';
// import { MarkerClickHandle } from '../components/ShipTracker';
// 	grid-template-areas: "google-map   sidebar" "ship-tracker sidebar";

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
			buttonEnabled: false,
			buttonClickedAt: new Date(),
			progress: 0,
			ships: [],
			type: 'All',
			shipTypes: [],
			activeShipTypes: [],
			logoMap: {}
			// showingInfoWindow: false
		};
		this.updateRequest = this.updateRequest.bind(this);
		this.countDownInterval = null;
	}

	async componentDidMount() {
		this.countDownInterval = setInterval(() => {
			// if (!this.state.buttonClickedAt) return;
			// const date = new Date();
			// const diff = Math.floor((date.getTime() - this.state.buttonClickedAt.getTime()) / 1000);
			// if (diff < 90) {
			// 	this.setState({
			// 		progress: diff,
			// 		buttonEnabled: false
			// 	});
			// } else {
			// 	this.setState({
			// 		progress: 0,
			// 		buttonClickedAt: null,
			// 		buttonEnabled: true
			// 	});
			// }
		}, 500);

		await this.updateRequest();

		let newShips = localStorage.getItem('shipData');
		debugger;

		if (newShips) {
			this.setState({ ships: newShips });
		}

		const shipTypeResults = await Client.getEntries({
			content_type: 'cashmanCompetitors'
		});

		// console.log(shipTypeResults);
		const shipTypes = shipTypeResults.items.map((data) => data.fields);

		const logoMap = shipTypes.reduce((acc, type) => {
			return {
				...acc,
				[type.name]: type.images.fields.file.url
			};
		}, {});
		// console.log({ shipTypes });
		this.setState({
			logoMap
		});

		// let updateInterval = setInterval(() => {
		// 	this.updateRequest();
		// }, 60 * 1000);
		// this.setState({ updateInterval });
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.type !== prevState.type) {
			console.log('dropdown value changed for ' + this.state.type);
		}
	}

	componentWillUnmount() {
		// this.state.updateInterval;
		clearInterval(this.countdownInterval);
	}

	async updateRequest() {
		const url = 'http://localhost:3001/hello';
		// console.log(url);
		const fetchingData = await fetch(url);
		const ships = await fetchingData.json();
		console.log('fetched ships', ships);

		// console.log(ships);

		localStorage.setItem('shipData', ships);
		// setTimeout(() => {
		// 	this.setState({ buttonEnabled: true });
		// });
	}

	handleChange = (e) => {
		this.setState({
			type: e.target.value
		});
		console.log(e.target.value);
	};

	handleMarkerClick = (event, data) => {
		this.props.setActiveShip(data.AIS.NAME, data.AIS.LATITUDE, data.AIS.LONGITUDE);
		console.log('marker click');
		console.log(event.target, data);
		console.log(data.AIS.NAME);
		// return data;
		// this.props.setActiveShip(data.NAME, data.LATITUDE, data.LONGITUDE, this.state.ships.images);
	};

	render() {
		console.log('ships ', this.state.ships);
		return (
			<div className="google-map">
				<GoogleMapReact
					// ships={this.state.ships}
					bootstrapURLKeys={{ key: 'AIzaSyBm59I3P5VB3JR25MWz-GKgf4PZs8XEsqc' }}
					center={{
						lat: this.props.activeShip ? this.props.activeShip.latitude : 37.99,
						lng: this.props.activeShip ? this.props.activeShip.longitude : -97.31
					}}
					zoom={5.5}
				>
					{/* {filteredShips.map((ship) => (
						<Ship ship={ship} key={ship.CALLSIGN} lat={ship.LATITUDE} lng={ship.LONGITUDE} />
					))} */}

					{/* Rendering all the markers here */}
					{this.state.ships.map((ship) => (
						<Ship
							ship={ship}
							key={ship.AIS.MMSI}
							lat={ship.AIS.LATITUDE}
							lng={ship.AIS.LONGITUDE}
							logoMap={this.state.logoMap}
							logoClick={this.handleMarkerClick}

							// windowClickOpen={this.handleWindow}
						/>
					))}

					{/* <InfoWindow
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					/> */}
					{/* <select className="combo-companies" onClick={this.props.handleDropdownChange}>
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
						{this.state.shipTypes.map((type) => {
							console.log(type);
							return (
								<option
									className={this.state.activeShipTypes.includes(type) ? 'active' : ''}
									key={type.images.sys.id}
									value={type}
								>
									{type}
								</option>
							);
						})}
					</select> */}

					{/* <div class="progress-circle p0">
						<span>{this.state.progress}%</span>
						<div class="left-half-clipper">
							<div class="first50-bar" />
							<div class="value-bar" />
						</div>
					</div>
					<button className="btn-next-request" onClick={() => this.updateRequest()}>
						Time to Next API Request
					</button> */}

					{/* <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
						<div>
							<h3>{this.state.selectedPlace.name}</h3>
							<button type="button" onClick={this.showDetails.bind(this, this.state.selectedPlace)}>
								Show details
							</button>
						</div>
					</InfoWindowEx> */}
				</GoogleMapReact>
			</div>
		);
	}
}

export default class GoogleMap extends React.Component {
	state = {
		activeShipTypes: [],
		activeCompanies: [],
		activeShip: null
	};

	// async componentDidMount() {
	// 	const url = 'http://localhost:3001/hello';
	// 	// console.log(url);
	// 	const fetchingData = await fetch(url);
	// 	const ships = await fetchingData.json();

	// 	console.log('fetched ships', ships);
	// 	//console.log(ships);

	// 	this.setState({
	// 		ships
	// 	});
	// }

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
		// const images = markedShip ? markedShip.images : null;
		return (
			<MapContainer>
				{/* This is the Google Map Tracking Page */}
				{/* <pre>{JSON.stringify(this.state.activeShip, null, 2)}</pre> */}
				<BoatMap
					setActiveShip={this.setActiveShip}
					activeShip={this.state.activeShip}
					handleDropdownChange={this.handleDropdownChange}
					// activeWindow={this.setActiveWindow}
				/>
				<SideBar
					// markedShip={images}
					activeShip={this.state.activeShip}
					activeShipTypes={this.state.activeShipTypes}
				/>
				<ShipTracker
					ships={this.state.ships}
					setActiveShip={this.setActiveShip}
					onMarkerClick={this.handleMarkerClick}
				/>
			</MapContainer>
		);
	}
}
