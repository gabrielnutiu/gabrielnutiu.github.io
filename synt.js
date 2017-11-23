document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.22.3";


var synt = window.speachSyntheseis;
//---------------------------------------------------------------------------------------
function get_voices()
{
	var voices = synt.get_voices();
	for(var i = 0; i < voices.length; i++)
		document.getElementById("id_voices").innerHTML = voices[i].name + ":" + voices[i].lang + "<br>";
}
//---------------------------------------------------------------------------------------

function speak()
{
	var enunt = new SpeechSynthesisUtterance();
	enunt.text = document.getElementById("id_text").value;
	synt.speak(enunt);
}
//----------------------------------------------------------------------------------------