declareUpdate();

module.exports.performUpdate = 
	module.amp(function updateStatus(dt, msg){
		var statusUpdate = new NodeBuilder();
		statusUpdate.addNode( {"status": [{"statusDate": dt, "statusMessage": msg}] } );

		var finalNode = statusUpdate.toNode().xpath("./array-node('status')");
		
		for (doc of fn.doc("/secret/44444.json")){
			xdmp.nodeInsertAfter(doc.root.longitude, finalNode);
			return "Sent message: " + msg;
		};
	});
