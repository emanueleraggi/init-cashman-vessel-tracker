import { createClient } from 'contentful';

export default createClient({
	space: process.env.REACT_APP_API_SPACE,
	accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

// space: process.env.REACT_APP_API_SPACE,
// accessToken: process.env.REACT_APP_ACCESS_TOKEN

// space: "4uybl1re8fu3",
// accessToken: "gir85I8dtK_mW1wbTr2-Mxy9LCNpFVBkfewG1AFvZjc"
