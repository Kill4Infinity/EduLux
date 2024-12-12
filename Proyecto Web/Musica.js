document.addEventListener('DOMContentLoaded', function() {
        var music = document.getElementById('background-music');
        var playButton = document.getElementById('play-button');
        var pauseButton = document.getElementById('pause-button');

        playButton.addEventListener('click', function() {
            music.play();
            playButton.style.display = 'none';
            pauseButton.style.display = 'inline-block';
        });

        pauseButton.addEventListener('click', function() {
            music.pause();
            playButton.style.display = 'inline-block';
            pauseButton.style.display = 'none';
        });
    });
