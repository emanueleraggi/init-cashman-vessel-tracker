import React from 'react';
import { Table } from 'reactstrap';
import '../components/ShipTracker.css';
// import { InfoWindow } from 'google-map-react';
// import donjonImage from '../logos/DJ5.png';

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

// console.log(donjonImage);

const shipCompanyMap = {
	MICHIGAN: 'DONJON',
	// 'JP BOISSEAU': 'DONJON',
	// 'DELAWARE BAY': 'DONJON',
	// 'ATLANTIC SALVOR': 'DONJON',
	STUYVESANT: 'DUTRA',
	// 'PAULA LEE': 'DUTRA',
	COLUMBIA: 'DUTRA',
	// OHIO: 'GREATLAKESDREDGEANDDOCK',
	// 'DREDGE TEXAS': 'GREATLAKESDREDGEANDDOCK',
	'TERRAPIN ISLAND': 'GREATLAKESDREDGEANDDOCK',
	// 'DREDGE ILLINOIS': 'GREATLAKESDREDGEANDDOCK',
	// CAROLINA: 'GREATLAKESDREDGEANDDOCK',
	// GL54: 'GREATLAKESDREDGEANDDOCK',
	'SUGAR ISLAND': 'GREATLAKESDREDGEANDDOCK',
	'PADRE ISLAND': 'GREATLAKESDREDGEANDDOCK',
	// 'DREDGE 55': 'GREATLAKESDREDGEANDDOCK',
	// 'DREDGE NEW YORK': 'GREATLAKESDREDGEANDDOCK',
	'LIBERTY ISLAND': 'GREATLAKESDREDGEANDDOCK',
	// 'DREDGE 51': 'GREATLAKESDREDGEANDDOCK',
	// ALASKA: 'GREATLAKESDREDGEANDDOCK',
	'DODGE ISLAND': 'GREATLAKESDREDGEANDDOCK',
	// VULCAN: 'MANSON',
	NEWPORT: 'MANSON',
	BAYPORT: 'MANSON',
	// 'DREDGE NJORD': 'MANSON',
	// HAGAR: 'MANSON',
	// VALHALLA: 'MANSON',
	// 'H R MORRIS': 'MANSON',
	// 'ROBERT M. WHITE': 'MANSON',
	// 'DREDGE EINAR': 'MANSON',
	'GLENN EDWARDS': 'MANSON',
	// 'PETER DEJONG': 'MARINEX',
	// 'DREDGE HAMPTON ROADS': 'MARINEX',
	// 'DREDGE SAVANNAH': 'MARINEX',
	// 'DREDGE E STROUD': 'MIKEHOOKS',
	// 'DREDGE 32': 'MIKEHOOKS',
	// 'MISSOURI H': 'MIKEHOOKS',
	// 'MIKE HOOKS': 'MIKEHOOKS',
	VIRGINIAN: 'NORFOLK',
	'       ATLANTIC': 'NORFOLK',
	CHARLESTEON: 'NORFOLK',
	PULLEN: 'NORFOLK',
	// 'DREDGE 428': 'NORFOLK',
	// ESSEX: 'NORFOLK',
	// 'LINDA LAQUAY': 'ORION',
	// 'JOHN C.LAQUAY': 'ORION',
	// 'WAYMON L BOYD': 'ORION',
	// HURLEY: 'USACE',
	// 'DREDGE GOETZ': 'USACE',
	ESSAYONS: 'USACE',
	YAQUINA: 'USACE',
	MCFARLAND: 'USACE',
	'DREDGE WHEELER': 'USACE',
	MURDEN: 'USACE',
	CURRITUCK: 'USACE',
	// 'WEEKS 551': 'WEEKS',
	// BORINQUEN: 'WEEKS',
	// 'G D MORGRAN': 'WEEKS',
	// '506 BUCKET DREDGE': 'WEEKS',
	// 'E W ELLEFSEN': 'WEEKS',
	// 'C R MCCASKILL': 'WEEKS',
	'B.E. LINDHOLM': 'WEEKS',
	'R S WEEKS': 'WEEKS',
	'RN WEEKS': 'WEEKS',
	MAGDALEN: 'WEEKS',
	// 'CAPT FRANK': 'WEEKS',
	// 'CAPT. AJ FOURNIER': 'CASHMANDREDGING',
	// 'FJ BELESIMO': 'CASHMANDREDGING',
	// 'DALE PYATT': 'CASHMANDREDGING',
	ATCHAFALAYA: 'CASHMANDREDGING'
};

// const shipCompanyMap2 = {
// 	367029520: 'DONJON', // ok -> MICHIGAN
// 	366909730: 'DONJON', // ok -> JP BOISSEAU
// 	367128570: 'DONJON', // ok -> DELAWARE BAY
// 	366744010: 'DONJON', // ok -> ATLANTIC SALVOR
// 	368098000: 'DUTRA', // ok -> STUYVESANT
// 	367324810: 'DUTRA', // ok -> PAULA LEE
// 	367437430: 'DUTRA', // ok -> COLUMBIA
// 	367188386: 'GREATLAKESDREDGEANDDOCK', // ok -> OHIO (GLDD last received 2014)
// 	369010000: 'GREATLAKESDREDGEANDDOCK', // ok -> DREDGE TEXAS
// 	366692000: 'GREATLAKESDREDGEANDDOCK', // ok -> TERRAPIN ISLAND
// 	366796250: 'GREATLAKESDREDGEANDDOCK', // ok -> DREDGE ILLINOIS
// 	367340160: 'GREATLAKESDREDGEANDDOCK', // ok -> CAROLINA
// 	338025000: 'GREATLAKESDREDGEANDDOCK', // ok -> GL54
// 	538002695: 'GREATLAKESDREDGEANDDOCK', // ok -> SUGAR ISLAND
// 	367525000: 'GREATLAKESDREDGEANDDOCK', // ok -> PADRE ISLAND
// 	366896390: 'GREATLAKESDREDGEANDDOCK', // ok -> DREDGE 55
// 	369118000: 'GREATLAKESDREDGEANDDOCK', // ok -> DREDGE NEW YORK
// 	369053000: 'GREATLAKESDREDGEANDDOCK', // ok -> LIBERTY ISLAND
// 	367157000: 'GREATLAKESDREDGEANDDOCK', // ok -> DREDGE 51
// 	367131000: 'GREATLAKESDREDGEANDDOCK', // ok -> ALASKA
// 	303589000: 'GREATLAKESDREDGEANDDOCK', // ok -> DODGE ISLAND
// 	367366670: 'MANSON', // ok -> VULCAN
// 	366942880: 'MANSON', // ok -> NEWPORT
// 	338570000: 'MANSON', // ok -> BAYPORT
// 	366053209: 'MANSON', // ok -> DREDGE NJORD
// 	366924720: 'MANSON', // ok -> HAGAR
// 	366806940: 'MANSON', // ok -> VALHALLA
// 	367421990: 'MANSON', // ok -> H.R. MORRIS
// 	367785950: 'MANSON', // ok -> ROBERT M. WHITE
// 	367389840: 'MANSON', // ok -> DREDGE EINAR
// 	367087140: 'MANSON', // ok -> GLENN EDWARDS
// 	367756560: 'MARINEX', // ok -> PETER DEJONG
// 	338107888: 'MARINEX', // ok -> DREDGE HAMPTON ROADS
// 	338160398: 'MARINEX', // ok -> DREDGE SAVANNAH
// 	367310140: 'MIKEHOOKS', // ok -> DREDGE E STROUD
// 	367338310: 'MIKEHOOKS', // ok -> DREDGE 32
// 	367189030: 'MIKEHOOKS', // ok -> MISSOURI H
// 	367413270: 'MIKEHOOKS', // ok -> MIKE HOOKS
// 	367473140: 'NORFOLK', // ok -> VIRGINIAN
// 	367473180: 'NORFOLK', // ok -> ATLANTIC
// 	368683000: 'NORFOLK', // ok -> CHARLESTON
// 	367473150: 'NORFOLK', // ok -> PULLEN
// 	367652280: 'NORFOLK', // ok -> DREDGE 428
// 	367473230: 'NORFOLK', // ok -> ESSEX
// 	367466940: 'ORION', // ok -> LINDA LAQUAY
// 	367317850: 'ORION', // ok -> JOHN C.LAQUAY
// 	367141920: 'ORION', // ok -> WAYMON L BOYD
// 	368756000: 'USACE', // ok -> HURLEY
// 	369970726: 'USACE', // ok -> DREDGE GOETZ
// 	366972000: 'USACE', // ok -> ESSAYONS
// 	366971000: 'USACE', // ok -> YAQUINA
// 	338997000: 'USACE', // ok -> MCFARLAND
// 	366982000: 'USACE', // ok -> WHEELER
// 	369970571: 'USACE', // ok -> MURDEN
// 	369970446: 'USACE', // ok -> CURRITUCK
// 	507027: 'WEEKS', // ok -> WEEKS 551
// 	367333540: 'WEEKS', // ok -> BORINQUEN
// 	367500770: 'WEEKS', // ok -> G D MORGRAN
// 	367176730: 'WEEKS', // ok -> 506 BUCKET DREDGE
// 	367323150: 'WEEKS', // ok -> E W ELLEFSEN
// 	367529860: 'WEEKS', // ok -> C R MCCASKILL
// 	368954410: 'WEEKS', // ok -> B.E.LINDHOLM
// 	366955430: 'WEEKS', // ok -> R S WEEKS
// 	303390000: 'WEEKS', // ok -> R.N.WEEKS
// 	369305000: 'WEEKS', // ok -> MAGDALEN
// 	367500810: 'WEEKS', // ok -> CAPT FRANK
// 	367091750: 'CASHMANDREDGING', // ok -> CAPT. AJ FOURNIER
// 	338111149: 'CASHMANDREDGING', // ok -> FJ BELESIMO
// 	367766220: 'CASHMANDREDGING', // ok -> DALE PYATT
// 	367453000: 'CASHMANDREDGING' // ok -> ATCHAFALAYA
// };

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

// const InfoWindow = props => (
// 	props.show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null
//   )

const Ship = ({ ship, logoMap, logoClick }) => {
	const shipName = ship.AIS.NAME;
	const company = shipCompanyMap[shipName];
	// console.log({ company });
	const img = logoMap[company && company.split(' ').join('').toUpperCase()]; // FIX ME
	// const img = logoMap[company]; // FIX ME

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
	let shipsMapped = null;
	if (ships) {
		shipsMapped = ships.map((ship, index) => {
			// const { IMO, NAME, CALLSIGN, HEADING, SOG, MMSI, LONGITUDE, LATITUDE } = ship;
			// const cells = [ NAME, CALLSIGN, HEADING, SOG, IMO, MMSI, LONGITUDE, LATITUDE ];

			const {
				MMSI,
				TIMESTAMP,
				LATITUDE,
				LONGITUDE,
				COURSE,
				SPEED,
				HEADING,
				NAVSTAT,
				IMO,
				NAME,
				CALLSIGN
			} = ship.AIS;

			const cells = [
				MMSI,
				TIMESTAMP,
				LATITUDE,
				LONGITUDE,
				COURSE,
				SPEED,
				HEADING,
				NAVSTAT,
				IMO,
				NAME,
				CALLSIGN
			];

			return (
				<tr onClick={() => setActiveShip(ship.AIS.NAME, ship.AIS.LATITUDE, ship.AIS.LONGITUDE)} key={index}>
					<th scope="row">{index}</th>
					{cells.map((cell) => <td key={ship.AIS.MMSI}>{cell}</td>)}
				</tr>
			);
		});
	}

	return (
		<div className="ship-tracker">
			<Table className="flags-table" responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>MMSI</th>
						<th>TIMESTAMP</th>
						<th>LATITUDE</th>
						<th>LONGITUDE</th>
						<th>COURSE</th>
						<th>SPEED</th>
						<th>HEADING</th>
						<th>NAVSTAT</th>
						<th>IMO</th>
						<th>NAME</th>
						<th>CALLSIGN</th>
					</tr>
				</thead>
				<tbody>{shipsMapped}</tbody>
			</Table>
		</div>
	);
};

export default ShipTracker;
