//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

const { Children } = require("react");

function updateStructure(rec1, rec2) {
	let parent = {};
	let child = {};
	let flag = "";
	if (Number(rec2['top'].replace('px', '')) > Number(rec1['top'].replace('px', '')) && Number(rec1['top'].replace('px', '')) + Number(rec1['height'].replace('px', '')) > Number(rec2['top'].replace('px', '')) + Number(rec2['height'].replace('px', '')) &&
		Number(rec2['left'].replace('px', '')) > Number(rec1['left'].replace('px', '')) && Number(rec1['left'].replace('px', '')) + Number(rec1['width'].replace('px', '')) > Number(rec2['left'].replace('px', '')) + Number(rec2['width'].replace('px', ''))) {
		flag = "some";
		parent['top'] = rec1['top'];
		parent['left'] = rec1['left'];
		parent['height'] = rec1['height'];
		parent['width'] = rec1['width'];
		parent['children'] = [];
		child['top'] = (rec2['top'].replace('px', '') - rec1['top'].replace('px', '')) + 'px';
		child['left'] = (rec2['left'].replace('px', '') - rec1['left'].replace('px', '')) + 'px';
		child['height'] = rec2['height'];
		child['width'] = rec2['width'];
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (Number(rec2['top'].replace('px', '')) == Number(rec1['top'].replace('px', '')) && Number(rec1['top'].replace('px', '')) + Number(rec1['height'].replace('px', '')) == Number(rec2['top'].replace('px', '')) + Number(rec2['height'].replace('px', '')) &&
		Number(rec2['left'].replace('px', '')) == Number(rec1['left'].replace('px', '')) && Number(rec1['left'].replace('px', '')) + Number(rec1['width'].replace('px', '')) == Number(rec2['left'].replace('px', '')) + Number(rec2['width'].replace('px', ''))) {
		flag = "some";
		parent['top'] = rec1['top'];
		parent['left'] = rec1['left'];
		parent['height'] = rec1['height'];
		parent['width'] = rec1['width'];
		parent['children'] = [];
		child['top'] = '0px';
		child['left'] = '0px';
		child['height'] = rec2['height'];
		child['width'] = rec2['width'];
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (Number(rec1['top'].replace('px', '')) > Number(rec2['top'].replace('px', '')) && Number(rec2['top'].replace('px', '')) + Number(rec2['height'].replace('px', '')) > Number(rec1['top'].replace('px', '')) + Number(rec1['height'].replace('px', '')) &&
		Number(rec1['left'].replace('px', '')) > Number(rec2['left'].replace('px', '')) && Number(rec2['left'].replace('px', '')) + Number(rec2['width'].replace('px', '')) > Number(rec1['left'].replace('px', '')) + Number(rec1['width'].replace('px', ''))) {
		flag = "some";
		parent['top'] = rec2['top'];
		parent['left'] = rec2['left'];
		parent['height'] = rec2['height'];
		parent['width'] = rec2['width'];
		parent['children'] = [];
		child['top'] = (rec1['top'].replace('px', '') - rec2['top'].replace('px', '')) + 'px';
		child['left'] = (rec1['left'].replace('px', '') - rec2['left'].replace('px', '')) + 'px';
		child['height'] = rec1['height'];
		child['width'] = rec1['width'];
		child['children'] = [];
		parent['children'].push(child);
	}
	if (flag == "") {
		return rec1;
	}
	else {
		return parent;
	}
	//write your code
}

module.exports = updateStructure;
