const MediaCaptureControl = (function(videoCaptureService) {
    const startRecordingVideo = function startRecordingVideo() {
        videoCaptureService.startCapture();
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
})(VideoJSRecorder);