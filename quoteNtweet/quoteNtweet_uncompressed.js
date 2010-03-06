javascript:
var shortUrl;
var txt=window.getSelection()||document.getSelection()||document.selection.createRange().text;
var head=document.getElementsByTagName('head')[0];
var script=document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('charset', "utf-8");
script.setAttribute('src', "http://bit.ly/javascript-api.js?version=latest&login=sdqali&apiKey=R_f2d4d52225ef4a86f908cddc15a8e6d0");
head.appendChild(script);
BitlyCB.shortenResponse=function(data){
    var firstResult;
    for(var r in data.results){
	firstResult = data.results[r];
	break;
    };
    shortUrl=firstResult['shortUrl'];
};
BitlyClient.shorten(window.location.href, 'BitlyCB.shortenResponse');
var statusMessage=txt+" "+shortUrl;
loc="http://twitter.com/?status="+statusMessage;
twitterWindow=window.open(loc,'quoteNtweet','width=700,height=500,toolbar=no,menubar=no,scrollbars=yes,resizable=no,status=no,minimized=no');
twitterWindow.focus();
