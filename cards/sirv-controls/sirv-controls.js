(function(s,i,r,v) {
  v = i.createElement(r); v.async=1;
  v.src = ('file:'==location.protocol?'http:':'') + '//scripts.sirv.com/sirv.js';
  i.getElementsByTagName(r)[0].parentNode.appendChild(v);
})(window, document, 'script');

var spin_playing = false;

function updatePlayPause(play,id) {
spin_playing = play;
if (!spin_playing) {
  Sirv.instance(id).pause();
}
jQuery('#pause-button-'+id).css({'display':(spin_playing)?'inline':'none'});
jQuery('#play-button-'+id).css({'display':(!spin_playing)?'inline':'none'});
}

function showCurrentFrame(id){
var currentFrame = Sirv.instance(id).currentFrame();
jQuery('.ihint.' + id).html('Row: '+currentFrame.row+', column: '+currentFrame.column);
jQuery('.ihint.' + id).show();
setTimeout("jQuery('.ihint."+id+"').hide();",3000);
}
