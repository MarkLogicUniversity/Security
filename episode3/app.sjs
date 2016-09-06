var output = [];

var user = xdmp.getRequestUsername();

var docs = fn.subsequence(cts.search(cts.wordQuery("secret"), "unfiltered"), 1, 10);

output.push(user, docs)

output;