import React from 'react';
import { Table } from 'reactstrap';
import '../components/ShipTracker.css';

import donjonImage from '../logos/DJ5.png';
// import dutraImage from '../logos/dutra.png';
// import glddImage from '../logos/greatlakesdredgeanddock.png';

// import mansonImage from '../logos/mansonconstruction.png';
// import marinexImage from '../logos/Marinex2.png';
// import mikehooksImage from '../logos/MH.png';

// import norfolkImage from '../logos/ND7.png';
// import oprionImage from '../logos/ORN4.png';
// import usaceImage from '../logos/USACE4.png';
// import weeksImage from '../logos/weeksmarine.png';
// import cashmanDredgingImage from '../logos/cashmandredging.png';

// import defaultImg from '../logos/cashmandredging.png';

console.log(donjonImage);

const shipCompanyMap = {
	MICHIGAN: 'DONJON',
	'JP BOISSEAU': 'DONJON',
	'DELAWARE BAY': 'DONJON',
	'ATLANTIC SALVOR': 'DONJON',
	STUYVESANT: 'DUTRA',
	'PAULA LEE': 'DUTRA',
	COLUMBIA: 'DUTRA',
	OHIO: 'GREATLAKESDREDGEANDDOCK',
	'DREDGE TEXAS': 'GREATLAKESDREDGEANDDOCK',
	'TERRAPIN ISLAND': 'GREATLAKESDREDGEANDDOCK',
	'DREDGE ILLINOIS': 'GREATLAKESDREDGEANDDOCK',
	CAROLINA: 'GREATLAKESDREDGEANDDOCK',
	GL54: 'GREATLAKESDREDGEANDDOCK',
	'SUGAR ISLAND': 'GREATLAKESDREDGEANDDOCK',
	'PADRE ISLAND': 'GREATLAKESDREDGEANDDOCK',
	'DREDGE 55': 'GREATLAKESDREDGEANDDOCK',
	'DREDGE NEW YORK': 'GREATLAKESDREDGEANDDOCK',
	'LIBERTY ISLAND': 'GREATLAKESDREDGEANDDOCK',
	'DREDGE 51': 'GREATLAKESDREDGEANDDOCK',
	ALASKA: 'GREATLAKESDREDGEANDDOCK',
	'DODGE ISLAND': 'GREATLAKESDREDGEANDDOCK',
	VULCAN: 'MANSON',
	NEWPORT: 'MANSON',
	BAYPORT: 'MANSON',
	'DREDGE NJORD': 'MANSON',
	HAGAR: 'MANSON',
	VALHALLA: 'MANSON',
	'H.R. MORRIS': 'MANSON',
	'ROBERT M. WHITE': 'MANSON',
	'DREDGE EINAR': 'MANSON',
	'GLENN EDWARDS': 'MANSON',
	'PETER DEJONG': 'MARINEX',
	'DREDGE HAMPTON ROADS': 'MARINEX',
	'DREDGE SAVANNAH': 'MARINEX',
	'DREDGE E STROUD': 'MIKEHOOKS',
	'DREDGE 32': 'MIKEHOOKS',
	'MISSOURI H': 'MIKEHOOKS',
	'MIKE HOOKS': 'MIKEHOOKS',
	VIRGINIAN: 'NORFOLK',
	ATLANTIC: 'NORFOLK',
	CHARLESTON: 'NORFOLK',
	PULLEN: 'NORFOLK',
	'DREDGE 428': 'NORFOLK',
	ESSEX: 'NORFOLK',
	'LINDA LAQUAY': 'ORION',
	'JOHN C.LAQUAY': 'ORION',
	'WAYMON L BOYD': 'ORION',
	HURLEY: 'USACE',
	'DREDGE GOETZ': 'USACE',
	ESSAYONS: 'USACE',
	YAQUINA: 'USACE',
	MCFARLAND: 'USACE',
	WHEELER: 'USACE',
	MURDEN: 'USACE',
	CURRITUCK: 'USACE',
	'WEEKS 551': 'WEEKS',
	BORINQUEN: 'WEEKS',
	'G D MORGRAN': 'WEEKS',
	'506 BUCKET DREDGE': 'WEEKS',
	'E W ELLEFSEN': 'WEEKS',
	'C R MCCASKILL': 'WEEKS',
	'B.E.LINDHOLM': 'WEEKS',
	'R S WEEKS': 'WEEKS',
	'R.N.WEEKS': 'WEEKS',
	MAGDALEN: 'WEEKS',
	'CAPT FRANK': 'WEEKS',
	'CAPT. AJ FOURNIER': 'CASHMANDREDGING',
	'FJ BELESIMO': 'CASHMANDREDGING',
	'DALE PYATT': 'CASHMANDREDGING',
	ATCHAFALAYA: 'CASHMANDREDGING'
};

// const companyImageMap = {
// 	DONJON: donjonImage,
// 	DUTRA: dutraImage,
// 	GREATLAKESDREDGEANDDOCK: glddImage,
// 	MANSON: mansonImage,
// 	MARINEX: marinexImage,
// 	MIKEHOOKS: mikehooksImage,
// 	NORFOLK: norfolkImage,
// 	ORION: oprionImage,
// 	USACE: usaceImage,
// 	WEEKS: weeksImage,
// 	CASHMANDREDGING: cashmanDredgingImage
// };

// const associationMap = Object.values(shipCompanyMap).reduce(
// 	(acc, curr) => ({
// 		...acc,
// 		[curr]: companyImageMap[curr]
// 	}),
// 	{}
// );

// console.log(associationMap);
// console.log(companyImageMap);

// function dummy(props) {
// 	return <p>{props.children}</p>;
//}

const Ship = ({ ship, logoMap, logoClick }) => {
	const shipName = ship.NAME;
	const company = shipCompanyMap[shipName];
	// console.log({ company });
	const img = logoMap[company && company.split(' ').join('').toUpperCase()]; // FIX ME

	// const shipImage = companyImageMap[company];
	// let customMarker = 'clicked';
	return (
		<div onClick={(event) => logoClick(event, ship)}>
			{/* Render shipImage image */}
			<img src={img} alt="Logo" />
		</div>
	);
};
export { Ship };

const ShipTracker = ({ ships, setActiveShip }) => {
	console.log('These are the ships: ', { ships });

	return (
		<div className="ship-tracker">
			<Table className="flags-table" responsive hover>
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
							<tr onClick={() => setActiveShip(NAME, LATITUDE, LONGITUDE)} key={index}>
								<th scope="row">{index}</th>
								{cells.map((cell) => <td key={IMO}>{cell}</td>)}
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};

export default ShipTracker;
