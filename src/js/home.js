function twitter_tagline(id) {
  // Tag line in Welcome section.
  makeRequest('http://node.dvbris.com/twitter?api_url=' +
    encodeURIComponent('https://api.twitter.com/1.1/users/show.json?screen_name=olls96'),
    function (data) {
      var p = document.createElement('p');
      p.innerText = JSON.parse(data).description;
      id.appendChild(p);
  });
}

function twitter_widget(id) {
  var js;
  var fjs = document.getElementsByTagName('script')[0];
  var p = /^http:/.test(document.location) ? 'http' : 'https';
  if (!document.getElementById(id)) {
    js = document.createElement('script');
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}

github_widget('olls', document.getElementById('github'));
twitter_tagline(document.getElementById('bio'))
twitter_widget('twitter-wjs');