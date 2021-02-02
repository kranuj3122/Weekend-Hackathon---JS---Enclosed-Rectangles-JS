//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	//write your code
	let parent={};
	let child={};
	let flag="";
	if( rec2['top']>=rec1['top'] && rec1['top']+rec1['height']>=rec2['top']+rec2['height'] && 
	rec2['left']>=rec1['left'] && rec1['left']+rec1['width']>=rec2['left']+rec2['width'] ) {
		flag="some";
		parent['top']=rec1['top'];
		parent['left']=rec1['left'];
		parent['height']=rec1['height'];
		parent['width']=rec1['width'];
		parent['children']=[];
		child['top']=rec2['top']-rec1['top'];
		child['left']=rec2['left']-rec1['left'];
		child['height']=rec2['height'];
		child['width']=rec2['width'];
		child['children']=[];
		parent['children'].push(child);
	}
	else if( rec1['top']>rec2['top'] && rec2['top']+rec2['height']>rec1['top']+rec1['height'] && 
	rec1['left']>rec2['left'] && rec2['left']+rec2['width']>rec1['left']+rec1['width'] ) {
		flag="some";
		parent['top']=rec2['top'];
		parent['left']=rec2['left'];
		parent['height']=rec2['height'];
		parent['width']=rec2['width'];
		parent['children']=[];
		child['top']=rec1['top']-rec2['top'];
		child['left']=rec1['left']-rec2['left'];
		child['height']=rec1['height'];
		child['width']=rec1['width'];
		child['children']=[];
		parent['children'].push(child);
	}
	if(flag=="") {
		return rec1;
	}
	else {
		return parent;
	}
}

module.exports = updateStructure;
