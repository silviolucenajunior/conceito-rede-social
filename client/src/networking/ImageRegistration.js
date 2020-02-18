const ImageRegistrationNetwork = (function(VideoCaptureService) {

    function sendVideoToRegistration(videoData, videoName) {
        var serverUrl = 'http://127.0.0.1:8093/register-person';
        var formData = new FormData();
        formData.append('file', videoData, videoName);

        fetch(serverUrl, {
            method: 'POST',
            body: formData
        }).then(
            success => console.log('recording upload complete.')
        ).catch(
            error => console.error('an upload error occurred!')
        );
    }

    return {
        sendVideoToRegistration
    };

})();