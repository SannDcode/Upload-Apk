        (function() {
            var dl = document.getElementById('download_link');
            if (!dl) return;
            var init = false;

            function retry() {
         dl.className += ' retry';
     };

     function download() {
         dl.className += ' started';
         window.dlStarted = true;
                         setTimeout(retry, 5000);
                  };


            window.initDownload = function() {
                if (init) return;
                init = true;
                dl.className = 'download_link';
                dl.onclick = download;
            };

            initDownload();

            // Copy Link Functionality
            var copyButton = document.getElementById('copyButton');
            copyButton.addEventListener('click', function() {
                var downloadLink = document.querySelector('.download_link a').href;
                navigator.clipboard.writeText(downloadLink);
                alert('Link copied to clipboard!');
            });
        })();
