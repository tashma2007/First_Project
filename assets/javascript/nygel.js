$(document).ready(function () {
    // var lyftApi =;

    var OPTIONS = {
        scriptSrc: 'lyftWebButton.min.js',
        namespace: '',
        clientId: 'aAaVdxfXo_8S',
        clientToken: 'aLUlI2RJOLtZaama70ThoWHV/vRC6dd6a0Uoe2t76hzpOohHApNuBRDc+R0wSn9ZwK5iIpzRUODdNcsH5LAvndqrHL/9bs+xnjc5DUTEv/z7pD6CDvH8dXs=',
        location: {
            pickup: {},
            destination: {
                latitude: '37.776503000',
                longitude: '-122.392038500',
            },
        },
        parentElement: document.getElementById('lyft-web-button-parent'),
        queryParams: {
            credits: ''
        },
        theme: 'multicolor large',
    };
    (function (t) {
        var n = this.window,
            e = this.document;
        n.lyftInstanceIndex = n.lyftInstanceIndex || 0;
        var a = t.parentElement,
            c = e.createElement("script");
        c.async = !0, c.onload = function () {
            n.lyftInstanceIndex++;
            var e = t.namespace ? "lyftWebButton" + t.namespace + n.lyftInstanceIndex : "lyftWebButton" + n.lyftInstanceIndex;
            n[e] = n.lyftWebButton, t.objectName = e, n[e].initialize(t)
        }, c.src = t.scriptSrc, a.insertBefore(c, a.childNodes[0])
    }).call(this, OPTIONS);
});


// var queryURL = "https://lyft.com/ride?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&partner=YOUR_CLIENT_ID&destination[latitude]=37.7763592&destination[longitude]=-122.4242038" + title + "&y=&plot=short&apikey=trilogy";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);


//     // curl--include - X GET - H 'Authorization: Bearer <access_token>' \
//     // 'https://api.lyft.com/v1/nearby-drivers-pickup-etas?lat=37.7763&lng=-122.3918'}
// });