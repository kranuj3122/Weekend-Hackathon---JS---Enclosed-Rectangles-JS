//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

const { Children } = require("react");

function updateStructure(rec1, rec2) {
	let top1 = Number(rec1['top'].replace('px', ''));
	let left1 = Number(rec1['left'].replace('px', ''));
	let height1 = Number(rec1['height'].replace('px', ''));
	let width1 = Number(rec1['width'].replace('px', ''));
	let top2 = Number(rec2['top'].replace('px', ''));
	let left2 = Number(rec2['left'].replace('px', ''));
	let height2 = Number(rec2['height'].replace('px', ''));
	let width2 = Number(rec2['width'].replace('px', ''));
	let parent = {};
	let child = {};
	let flag = "";
	if (top2 > top1 && top1 + height1 > top2 + height2 && left2 > left1 && left1 + width1 > left2 + width2) {
		flag = "some";
		parent['top'] = top1 + 'px';
		parent['left'] = left1 + 'px';
		parent['height'] = height1 + 'px';
		parent['width'] = width1 + 'px';
		parent['children'] = [];
		child['top'] = (top2 - top1) + 'px';
		child['left'] = (left2 - left1) + 'px';
		child['height'] = height2;
		child['width'] = width2;
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (top1 == top2 && top1 + height1 == top2 + height2 && left1 == left2 && left1 + width1 == left2 + width2) {
		flag = "some";
		parent['top'] = top1 + 'px';
		parent['left'] = left1 + 'px';
		parent['height'] = height1 + 'px';
		parent['width'] = width1 + 'px';
		parent['children'] = [];
		child['top'] = '0px';
		child['left'] = '0px';
		child['height'] = height2;
		child['width'] = width2;
		child['children'] = [];
		parent['children'].push(child);
	}
	else if (top1 > top2 && top2 + height2 > top1 + height1 && left1 > left2 && left2 + width2 > left1 + width1) {
		flag = "some";
		parent['top'] = top2 + 'px';
		parent['left'] = left2 + 'px';
		parent['height'] = height2 + 'px';
		parent['width'] = width2 + 'px';
		parent['children'] = [];
		child['top'] = (top1 - top2) + 'px';
		child['left'] = (left1 - left2) + 'px';
		child['height'] = height1;
		child['width'] = width1;
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
