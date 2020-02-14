const MediaCaptureControl = (function() {
    const startRecordingVideo = function startRecordingVideo() {
        console.log("Recording Video");
    }

    const addEventListenersToEventSources = function addEventListenersToEventSources() {
        let startVideoCapture = document.getElementById('start-video-capture');
        startVideoCapture.addEventListener('click', function(ev) {
            startRecordingVideo();
        });
    };

    return {
        addEventListenersToEventSources
    };
})();