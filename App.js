











// To Scroll the songs and artists by clicking on left and right arrows for Popular songs-

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

// To scroll right-
pop_song_right.addEventListener('click', ()=> {
    pop_song.scrollLeft += 230;
})

// To scroll left-
pop_song_left.addEventListener('click', ()=> {
    pop_song.scrollLeft -= 230;
})


// To Scroll the songs and artists by clicking on left and right arrows for Popular artists-

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let pop_artist = document.getElementsByClassName('pop_artist')[0];

// To scroll right-
pop_artist_right.addEventListener('click', ()=> {
    pop_artist.scrollLeft += 300;
})

// To scroll left-
pop_artist_left.addEventListener('click', ()=> {
    pop_artist.scrollLeft -= 300;
})





