document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.22.1";


var synt = window.speachSyntheseis;
//---------------------------------------------------------------------------------------
function get_voices()
{
	var voices = synt.getVoices();
	for(var i = 0; i < voices.length; i++)
		document.getElementById("id_voices").innerHTML = voices[i].name + ":" + voives[i].lang + "<br>";
}
//---------------------------------------------------------------------------------------