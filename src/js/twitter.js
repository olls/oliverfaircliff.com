function twitter_req(user, cb) {
  makeRequest('http://node.dvbris.com/twitter?api_url=' +
    encodeURIComponent(
      'https://api.twitter.com/1.1/users/show.json?screen_name=' +
      escape(user)
    ),
    function (text) {
      var data = JSON.parse(text);
      cb(data);
    });
}

function twitter_tagline (user, element) {
  twitter_req(user, function (data) {
    var p = document.createElement('p');
    p.innerText = data.description;
    element.appendChild(p);
  });
}