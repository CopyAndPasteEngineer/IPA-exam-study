<template>
  <div>
    <p>
    <label for="shuffle">
        <input type="checkbox" id="shuffle" />シャッフル
    </label>
    <label for="repeat">
        <input type="checkbox" id="repeat" />リピート
    </label>
    <button @click.prevent="play">Play</button>
    </p>
    <p><audio controls id="playList" /></p>
  </div>
</template>

<script>
module.exports = {
  methods: {
    play() {
      var audios = document.getElementsByTagName('audio');
      var playList = [];
      for(var i = 0; i < audios.length; i++){
            if(audios[i].id == 'playList'){
                continue;
            }
            playList[playList.length] = audios[i].src;
      }

    var index = 0;
    var audio = document.getElementById('playList');

    // シャッフル
    if(document.getElementById('shuffle').checked){
      for (let i = playList.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playList[i], playList[j]] = [playList[j], playList[i]];
      }
    }

    // リピート
    var repeat = document.getElementById('repeat').checked;

    audio.src = playList[index];
    audio.play();
    audio.addEventListener('ended', function(){
    index++;
    if (index < playList.length) {
        audio.src = playList[index];
        audio.play();
    }else {
        audio.src = playList[0];
        if(repeat){
            audio.play();
        }
        index = 0;
    }
    });
    },
  },
}
</script>