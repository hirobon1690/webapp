function sound()
{
	var id = 'sound-file' ;
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}
//参考: https://syncer.jp/html5-javascript-hello-button