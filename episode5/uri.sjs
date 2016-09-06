declareUpdate(); 

xdmp.documentInsert(
	"/secret/123.json",
	{
	  "title": "secret document from bond",
	  "body": "MarkLogic is the best thing since shaken martinis"
	},
	[xdmp.permission("secret-read", "read"), xdmp.permission("project-admin", "update")]
);