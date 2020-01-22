import React from 'react';
import styled from 'styled-components';
import { Table } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import { Card, CardImg, CardText, CardBody, CardTitle, /*CardSubtitle,*/ Button } from 'reactstrap';

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
	}
	.map-sidebar {
		background: #9dc183;
		grid-area: sidebar;
	}
	.ship-tracker {
		grid-area: ship-tracker;
	}
`;

const BoatMap = () => (
	<div className="google-map">
		<GoogleMapReact
			bootstrapURLKeys={{ key: '' }}
			center={{
				lat: 42.4,
				lng: -71.1
			}}
			zoom={11}
		>
			{/* Insert components here */}
			{/* <select>
				<option value="All">All</option>
				<option value="company-1">Cashman Dredging</option>
				<option value="company-2">Donjon</option>
				<option value="company-3">Dutra</option>
				<option value="company-4">Great Lakes Dredge and Dock</option>
				<option value="company-5">Manson</option>
				<option value="company-6">Marinex</option>
				<option value="company-7">Norfolk</option>
				<option value="company-8">Orion</option>
				<option value="company-9">USACE</option>
				<option value="company-10">Weeks</option>
			</select>
			<select>
				<option value="All">All</option>
				<option value="equipment-1">Bucket</option>
				<option value="equipment-2">Excavator</option>
				<option value="equipment-3">Tug</option>
				<option value="equipment-3">Hopper</option>
				<option value="equipment-3">Cutter</option>
				<option value="equipment-3">Crane</option>
				<option value="equipment-3">Crewboat</option>
				<option value="equipment-3">Dustpan</option>
			</select> */}
		</GoogleMapReact>
	</div>
);

const Sidebar = () => (
	<div className="map-sidebar">
		<Card className="mb-1">
			<CardImg top width="100%" src="./assets/vessel1.png" alt="Atchafalaya">
				{/* <img src="/assets/vessel1.png" /> */}
			</CardImg>

			<CardBody>
				<CardTitle>
					<h3>Atchafalaya</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<Button>Download Project Data</Button>
			</CardBody>
		</Card>
		<Card className="mb-1">
			<CardImg top width="100%" src="/assets/vessel1.png" alt="Bayport" />
			<CardBody>
				<CardTitle>
					<h3>Bayport</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<Button>Download Project Data</Button>
			</CardBody>
		</Card>
		<Card>
			<CardImg top width="100%" src="/assets/vessel1.png" alt="Newport" />
			<CardBody>
				<CardTitle>
					<h3>Newport</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<Button>Download Project Data</Button>
			</CardBody>
		</Card>
	</div>
);

const ShipTracker = () => (
	<div className="ship-tracker">
		<Table>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Callsign</th>
					<th>Heading</th>
					<th>Speed</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Atchafalaya</td>
					<td>WCZ4240</td>
					<td>274° [E]</td>
					<td>0 kn</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Bayport</td>
					<td>WCY7617</td>
					<td>176° [N]</td>
					<td>0.1 kn</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>Newport</td>
					<td>WRC2930</td>
					<td>28° [SSW]</td>
					<td>4.7 kn</td>
				</tr>
			</tbody>
		</Table>
	</div>
);

export default function GoogleMap() {
	return (
		<MapContainer>
			{/* This is the Google Map Tracking Page */}
			<BoatMap />
			<Sidebar />
			<ShipTracker />
		</MapContainer>
	);
}
