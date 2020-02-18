const VideoJSRecorder = (function(videoRecordNetwork) {

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

    videoJsPlayer.on('finishRecord', function(ev) {
        videoRecordNetwork.sendVideoToRegistration(videoJsPlayer.recordedData, videoJsPlayer.recordedData.name);
    });

    const startCapture = function() {
        videoJsPlayer.record().getDevice();
    }

    return {
        startCapture,
    }
})(ImageRegistrationNetwork);