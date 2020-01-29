import React from 'react';
import { Table } from 'reactstrap';
import shipData from '../dummyData/ships';

const [ metadata, ships ] = shipData;

const ShipTracker = () => {
	if (metadata.ERROR) {
		return <h1>No data received</h1>;
	}

	return (
		<div className="ship-tracker">
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Callsign</th>
						<th>Heading</th>
						<th>SOG</th>
						<th>IMO</th>
						<th>MMSI</th>
						<th>Longitude</th>
						<th>Latitudee</th>
					</tr>
				</thead>
				<tbody>
					{ships.map((ship, index) => {
						const { IMO, NAME, CALLSIGN, HEADING, SOG, MMSI, LONGITUDE, LATITUDE } = ship;
						const cells = [ NAME, CALLSIGN, HEADING, SOG, IMO, MMSI, LONGITUDE, LATITUDE ];
						return (
							<tr>
								<th scope="row">{index}</th>
								{cells.map((cell) => <td>{cell}</td>)}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ShipTracker;
