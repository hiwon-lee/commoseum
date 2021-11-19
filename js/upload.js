function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}
$(document).ready(function() {
    var cnt = 2;
    
    $('button.add').click(function() {
        if(cnt<8) {
            cnt += 1;
            $('tbody').append('<tr><th scope="row ">'+cnt+'</th><td><select class="form-select art-category" required><option selected disabled value="">Select Emotion</option><option>Joy</option><option>Sadness</option><option>Fear</option><option>Anger</option><option>Disgust</option><option>Aniticipation</option><option>Surprise</option><option>Fear</option></select></td><td ><input type="range" name="points" min="0" max="100" step="5" value="0" oninput="document.getElementById('+"'value"+cnt+"'"+').innerHTML=this.value+'+"'%'"+';"></td><td><span id="value'+cnt+'"'+'>0%</span></td></tr>');
            
        } else {
            alert('8 is max');
        }
    });

    $('button.remove').click(function() {
        if(cnt>3) {
            // alert()
            $('tbody tr').last().remove();
            cnt -= 1;
        } else {
            alert('2 is min');
        }
    });
    
   
})

/* Music 
======================================*/

var audio = new Audio("http://retro-disko.ru/6/music/016.mp3");
var x = audio.duration;

// music timeline event
audio.addEventListener('timeupdate', function(e){
	// curr timeline
	var playtime = Math.floor(audio.currentTime);
	var min = Math.floor(playtime/60);
	var sec = playtime%60;
	console.log('curr:'+playtime);
	// total timeline
	
	var total = Math.floor(audio.duration);
	var tmin = Math.floor(total/60);
	var tsec = total%60;
	// status
	$( "#caudio" ).attr( {
		value : playtime,
		max : total
	 } );

	$("#curraudio").html(min+":"+sec);
	$("#audioProgress").html(tmin + ":" + tsec);
	}, false);
	


$(document).ready(function() {
    $('div.see').click(function() {
        $('span.comment').removeClass('.text-truncate');
    })

	$('button.ado').click(function(){
		$(this).addClass('d-none').siblings().removeClass('d-none');
	})
    $('i.thumbs').click(function() {
        // if($('i.thumbs').contains('like')){
        //     $(this).removeClass('like');
        // } else {
            $(this).addClass('like');
        // }
       
    })
})