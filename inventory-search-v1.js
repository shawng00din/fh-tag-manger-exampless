<script>
var urlParams = new URLSearchParams(window.location.search);
var eventData = {};

var index = 6; 
    urlParams.forEach((value, key) => {
        if (!eventData.hasOwnProperty(`dimension${index}`)) {
            eventData[`dimension${index}`] = key+":"+value;
            index++;
        }
    });

 _paq.push(['trackEvent', 'OnClick', 'ButtonClick', 'Search', '1', eventData]);


</script>
