import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import ShipTracker from '../components/ShipTracker';
import SideBar from '../components/SideBar';

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

const BoatMap = () => (
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
				<div class="multiselect" />
				<div class="selectBox" onClick={showCheckboxes}>
					<select>
						<option>All</option>
					</select>
					<div class="overSelect" />
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
			<button className="btn-next-request">Time to Next API Request</button>
		</GoogleMapReact>
	</div>
);

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
