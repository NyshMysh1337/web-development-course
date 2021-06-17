var MusicPlayer = {
    trackList: [
      'song1.mp3',
      'song2.mp3',
      'song3.mp3',
    ],
    currentTrack: 'song1.mp3',
    status: 'pause',
    display: function () {
      return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
    },
    play: function () {
      this.status = 'play';
    },
    pause: function () {
      this.status = 'pause';
    },
    next: function () {
      let current = this.currentTrack;
      let lengthMusic = this.trackList.length - 1;
      let nextIndex;
      this.trackList.forEach(function (track, index) {
        if (track === current) {
          nextIndex = (index === lengthMusic) ? 0 : index + 1;
          return;
        }
      });
      this.currentTrack = this.trackList[nextIndex];
    },
    prev: function () {
      let current = this.currentTrack;
      let lengthMusic = this.trackList.length - 1;
      let prevIndex;
      this.trackList.forEach(function (track, index) {
        if (track === current) {
          prevIndex = (index === 0) ? lengthMusic : index - 1;
          return;
        }
      });
      this.currentTrack = this.trackList[prevIndex];
    },
    showTracks: function () {
      let current = this.currentTrack;
      this.trackList.forEach(function (track, index) {
        if (track === current) {
          console.log((index + 1) + '. ' + track + ' - играет сейчас');
          return;
        }
        console.log((index + 1) + '. ' + track);
      });
    }
  };