github_widget('olls', document.getElementById('github'));

// Tag line in Welcome section.
makeRequest('http://node.dvbris.com/twitter?api_url=' +
  encodeURIComponent('https://api.twitter.com/1.1/users/show.json?screen_name=olls96'),
  function (data) {
    var bio = document.getElementById('bio');
    var p = document.createElement('p');
    p.innerText = JSON.parse(data).description;
    bio.innerHTML = bio.innerHTML + (JSON.parse(data).description);
});

function twitter_widget(id) {
  var id = 'twitter-wjs';
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

twitter_widget();