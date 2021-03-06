//  jQuery no conflict mode for no prototype issues
 jQuery.noConflict();

var Keys = {
	// MAJOR KEYS
	// C major
	'C Major': ['C', 'Cmaj7', 'Dm', 'Dm7', 'Em', 'Em7', 'F', 'Fmaj7', 'G', 'G7', 'Am', 'Am7', 'Bdim'],

	// C# major	
	'C# Major': ['C#', 'C#maj7', 'D#m', 'D#m7', 'E#m', 'E#m7', 'F#', 'F#maj7', 'G#', 'G#7', 'A#m', 'A#m7', 'B#dim'],

	//Db major
	'Db Major': ['Db', 'Dbmaj7', 'Ebm', 'Ebm7', 'Fm', 'Fm7', 'Gb', 'Gbmaj7', 'Ab', 'Ab7', 'Bbm', 'Bbm7', 'Cdim'],

	//D major
	'D Major': ['D', 'Dmaj7', 'Em', 'Em7', 'F#m', 'F#m7', 'G', 'Gmaj7', 'A', 'A7', 'Bm', 'Bm7', 'C#dim'],

	//D# major
	'D# Major': ['D#', 'D#maj7', 'E#m', 'E#m7', 'F##m', 'F##m7', 'G#', 'G#maj7', 'A#', 'A#7', 'B#m', 'B#m7', 'C##dim'],

	//Eb major
	'Eb Major': ['Eb', 'Ebmaj7', 'Fm', 'Fm7', 'Gm', 'Gm7', 'Ab', 'Abmaj7', 'Bb', 'Bb7', 'Cm', 'Cm7', 'Ddim'],

	//E major
	'E Major': ['E', 'Emaj7', 'F#m', 'F#m7', 'G#m', 'G#m7', 'A', 'Amaj7', 'B', 'B7', 'C#m', 'C#m7', 'D#dim'],

	//F major
	'F Major': ['F', 'Fmaj7', 'Gm', 'Gm7', 'Am', 'Am7', 'Bb', 'Bbmaj7', 'C', 'C7', 'Dm', 'Dm7', 'Edim'],

	//F# major
	'F# Major': ['F#', 'F#maj7', 'G#m', 'G#m7', 'A#m', 'A#m7', 'B', 'Bmaj7', 'C#', 'C#7', 'D#m', 'D#m7', 'E#dim'],

	//Gb major
	'Gb Major': ['Gb', 'Gbmaj7', 'Abm', 'Abm7', 'Bbm', 'Bbm7', 'Cb', 'Cbmaj7', 'Db', 'Db7', 'Ebm', 'Ebm7', 'Fdim'],

	//G major
	'G Major': ['G', 'Gmaj7', 'Am', 'Am7', 'Bm', 'Bm7', 'C', 'Cmaj7', 'D', 'D7', 'Em', 'Em7', 'F#dim'],

	//G# major
	'G# Major': ['G#', 'G#maj7', 'A#m', 'A#m7', 'B#m', 'B#m7', 'C#', 'C#maj7', 'D#', 'D#7', 'E#m', 'E#m7', 'F##dim'],

	//Ab major
	'Ab Major': ['Ab', 'Abmaj7', 'Bbm', 'Bbm7', 'Cm', 'Cm7', 'Db', 'Dbmaj7', 'Eb', 'Eb7', 'Fm', 'Fm7', 'Gdim'],

	//A major
	'A Major': ['A', 'Amaj7', 'Bm', 'Bm7', 'C#m', 'C#m7', 'D', 'Dmaj7', 'E', 'E7', 'F#m', 'F#m7', 'G#dim'],

	//A# major
	'A# Major': ['A#', 'A#maj7', 'B#m', 'B#m7', 'C##m', 'C##m7', 'D#', 'D#maj7', 'E#', 'E#7', 'F##m', 'F##m7', 'G##dim'],

	//Bb major
	'Bb Major': ['Bb', 'Bbmaj7', 'Cm', 'Cm7', 'Dm', 'Dm7', 'Eb', 'Ebmaj7', 'F', 'F7', 'Gm', 'Gm7', 'Adim'],

	//B major
	'B Major': ['B', 'Bmaj7', 'C#m', 'C#m7', 'D#m', 'D#m7', 'E', 'Emaj7', 'F#', 'F#7', 'G#m', 'G#m7', 'A#dim'],
	
	//Minor Keys - circle of fifths order
	//C minor
	'C Minor': ['Eb', 'Ebmaj7', 'Fm', 'Fm7', 'Gm', 'Gm7', 'G', 'G7', 'Ab', 'Abmaj7', 'Bb', 'Bb7', 'Cm', 'Cm7', 'Ddim'],
	
	//G minor
	'G Minor': ['Bb', 'Bbmaj7', 'Cm', 'Cm7', 'Dm', 'Dm7', 'D', 'D7', 'Eb', 'Ebmaj7', 'F', 'F7', 'Gm', 'Gm7', 'Adim'],
	
	//D minor
	'D Minor': ['F', 'Fmaj7', 'Gm', 'Gm7', 'Am', 'Am7', 'A', 'A7', 'Bb', 'Bbmaj7', 'C', 'C7', 'Dm', 'Dm7', 'Edim'],
	
	//A minor
	'A Minor': ['C', 'Cmaj7', 'Dm', 'Dm7', 'Em', 'Em7', 'E', 'E7', 'F', 'Fmaj7', 'G', 'G7', 'Am', 'Am7', 'Bdim'],
	
	//E minor
	'E Minor': ['G', 'Gmaj7', 'Am', 'Am7', 'Bm', 'Bm7', 'B', 'B7', 'C', 'Cmaj7', 'D', 'D7', 'Em', 'Em7', 'F#dim'],
	
	//B minor
	'B Minor': ['D', 'Dmaj7', 'Em', 'Em7', 'F#m', 'F#m7', 'F#', 'F#7', 'G', 'Gmaj7', 'A', 'A7', 'Bm', 'Bm7', 'C#dim'],
	
	//F# minor
	'F# Minor': ['A', 'Amaj7', 'Bm', 'Bm7', 'C#m', 'C#m7', 'C#', 'C#7', 'D', 'Dmaj7', 'E', 'E7', 'F#m', 'F#m7', 'G#dim'],
	
	//C# minor
	'C# Minor': ['E', 'Emaj7', 'F#m', 'F#m7', 'G#m', 'G#m7', 'G#', 'G#7', 'A', 'Amaj7', 'B', 'B7', 'C#m', 'C#m7', 'D#dim'],
	
	//Db minor
	'Db Minor': ['E', 'Emaj7', 'F#m', 'F#m7', 'G#m', 'G#m7', 'G#', 'G#7', 'A', 'Amaj7', 'B', 'B7', 'C#m', 'C#m7', 'D#dim'],
	
	//Ab minor
	'Ab Minor': ['B', 'Bmaj7', 'C#m', 'C#m7', 'D#m', 'D#m7', 'D#', 'D#7', 'E', 'Emaj7', 'F#', 'F#7', 'G#m', 'G#m7', 'A#dim'],
	
	//Eb minor
	'Eb Minor': ['Gb', 'Gbmaj7', 'Abm', 'Abm7', 'Bbm', 'Bbm7', 'Bb', 'Bb7', 'Cb', 'Cbmaj7', 'Db', 'Db7', 'Ebm', 'Ebm7', 'Fdim'],
	
	//Bb minor
	'Bb Minor': ['Db', 'Dbmaj7', 'Ebm', 'Ebm7', 'Fm', 'Fm7', 'F', 'F7', 'Gb', 'Gbmaj7', 'Ab', 'Ab7', 'Bbm', 'Bbm7', 'Cdim'],
	
	//F minor
	'F Minor': ['Ab', 'Abmaj7', 'Bbm', 'Bbm7', 'Cm', 'Cm7', 'C', 'C7', 'Db', 'Dbmaj7', 'Eb', 'Eb7', 'Fm', 'Fm7', 'Gdim']
};

// Given a set of keys to search, and a set of chords to search for
// return the key with the most chords in it
// docs: http://documentcloud.github.com/underscore/
function topKey(keys, chords) {
	var counts = {};
	var result = [];

	// for each key, count how many chords of the key match the chords the user chose
	_(keys).each(function(values, key, list) {
		counts[key] = _(values).chain().intersect(this.chords).size().value();
	}, {chords: chords});

	// results is now a Hash of Key => count pairs, e.g. {'A Major': 0, 'Bb Major': 5, ...}
	// get the highest count
	var max = _(counts).max();

	// Add the name of the key if its count is = to the max
	_(counts).each(function(value, key, list) {
		if (value === this.max) {
			result.push(key);
		}
	}, {max: max});

	return result; // result is an array of keynames e.g. ['A Major', 'G Major']
}

//  the function that finds the key
function namethatkey() {
	var chords = jQuery.makeArray(jQuery('.selected').map(function() {
		return jQuery(this).html();
	}));

	var topkeys = topKey(Keys, chords);
	
	jQuery('#result').css('display', 'block');
	// jQuery('#thekey').html("A song with chords: " + chords.join(", ") + " is most likely in the key of");
	// document.getElementById('keyletter').innerHTML = topkeys.join("<br /><span class='or'>or</span><br /> ");
	
	// Circle of Fifth Highlighting
	// Remove all selected_slice/selected_slice_minor/selected_key_text classes to reset circle and ie results table.
	jQuery('.selected_slice').removeClass('selected_slice');
	jQuery('.selected_slice_minor').removeClass('selected_slice_minor');
	jQuery('.selected_key_text').removeClass('selected_key_text');

	// Give the resulting Major ids .selected_slice in the CIRCLE OF FIFTHS.
	_(topkeys).each(function(item,index) {
		var id = item.replace(" ", "_").replace("#", "sharp");
		jQuery('#'+id+' .pie').addClass('selected_slice');
	});
	
	// Give the resulting Minor ids .selected_slice_minor in the CIRCLE OF FIFTHS.
	_(topkeys).each(function(item,index) {
		var id = item.replace(" ", "_").replace("#", "sharp");
		jQuery('#'+id+' .pie_minor').addClass('selected_slice_minor');
	});
	
	// Give the resulting Major ids .selected_slice in the IE RESULTS TABLE.
	_(topkeys).each(function(item,index) {
		var id = item.replace(" ", "_").replace("#", "sharp").replace('Major', "");
		jQuery('#ie_'+id+'Major').addClass('selected_slice');
	});
	
	// Give the resulting Minor ids .selected_slice_minor in the IE RESULTS TABLE.
	_(topkeys).each(function(item,index) {
		var id = item.replace(" ", "_").replace("#", "sharp").replace('Minor', "");
		jQuery('#ie_'+id+'Minor').addClass('selected_slice_minor');
	});
	
	// Highlight circle labels by adding .selected_key_text
	_(topkeys).each(function(item,index) {
		var id = item.replace(" ", "_").replace("#", "sharp");
		id += '-label';
		jQuery('#'+id).addClass('selected_key_text');
	});
	
	// Remove all selected_slice/selected_slice_minor/selected_key_text classes if nothing is selected
	if (jQuery('#chord_selector td.selected').length == 0) {
		jQuery('.selected_slice').removeClass('selected_slice');
		jQuery('.selected_slice_minor').removeClass('selected_slice_minor');
		jQuery('.selected_key_text').removeClass('selected_key_text');
	}
}