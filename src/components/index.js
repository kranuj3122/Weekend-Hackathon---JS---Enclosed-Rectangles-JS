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
	if (rec2['top'] > rec1['top'] && rec1['top'] + rec1['height'] > rec2['top'] + rec2['height'] &&
		rec2['left'] > rec1['left'] && rec1['left'] + rec1['width'] > rec2['left'] + rec2['width']) {
		flag = "some";
		parent['top'] = rec1['top'] + 'px';
		parent['left'] = rec1['left'] + 'px';
		parent['height'] = rec1['height'] + 'px';
		parent['width'] = rec1['width'] + 'px';
		parent['children'] = [];
		child['top'] = (rec2['top'] - rec1['top']) + 'px';
		child['left'] = (rec2['left'] - rec1['left']) + 'px';
		child['height'] = rec2['height'] + 'px';
		child['width'] = rec2['width'] + 'px';
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (rec2['top'] == rec1['top'] && rec1['top'] + rec1['height'] == rec2['top'] + rec2['height'] &&
		rec2['left'] == rec1['left'] && rec1['left'] + rec1['width'] == rec2['left'] + rec2['width']) {
		flag = "some";
		parent['top'] = rec1['top'] + 'px';
		parent['left'] = rec1['left'] + 'px';
		parent['height'] = rec1['height'] + 'px';
		parent['width'] = rec1['width'] + 'px';
		parent['children'] = [];
		child['top'] = (rec2['top'] - rec1['top']) + 'px';
		child['left'] = (rec2['left'] - rec1['left']) + 'px';
		child['height'] = rec2['height'] + 'px';
		child['width'] = rec2['width'] + 'px';
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (rec1['top'] > rec2['top'] && rec2['top'] + rec2['height'] > rec1['top'] + rec1['height'] &&
		rec1['left'] > rec2['left'] && rec2['left'] + rec2['width'] > rec1['left'] + rec1['width']) {
		flag = "some";
		parent['top'] = rec2['top'] + 'px';
		parent['left'] = rec2['left'] + 'px';
		parent['height'] = rec2['height'] + 'px';
		parent['width'] = rec2['width'] + 'px';
		parent['children'] = [];
		child['top'] = (rec1['top'] - rec2['top']) + 'px';
		child['left'] = (rec1['left'] - rec2['left']) + 'px';
		child['height'] = rec1['height'] + 'px';
		child['width'] = rec1['width'] + 'px';
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
