const VideoJSRecorder = (function() {

    let options = {
        controls: false,
        width: 320,
        height: 240,
        fluid: false,
        controlBar: {
            volumePanel: false
        },
        plugins: {
            record: {
                audio: false,
                video: true,
                maxLength: 10,
                debug: true
            }
        }
    };

    let videoJsPlayer = videojs('myVideo', options, function() {
        console.log("Starting VideoJS");
    });

    videoJsPlayer.on('deviceReady', function() {
        videoJsPlayer.record().start();
    });

    const startCapture = function() {
        videoJsPlayer.record().getDevice();
    }

    return {
        startCapture,
    }
})();