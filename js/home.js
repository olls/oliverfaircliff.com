var d = document;

makeRequest('https://api.github.com/users/olls/events/public',
  function (data) {

    var github = d.getElementById('github');
    var github_list = d.createElement('ul');

    JSON.parse(data).forEach(function (item) {
      var user = item.actor.login;
      var repo = item.repo.name
      var type;
      if (item.type == 'IssueCommentEvent') {
        type = 'commented on an issue in';
      } else if (item.type == 'PushEvent') {
        type = 'pushed to';
      } else if (item.type == 'IssuesEvent') {
        type = 'created an issue on';
      } else if (item.type == 'CommitCommentEvent') {
        type = 'commented on a commit in';
      } else {
        type = item.type;
      }
      console.log(item);

      var li = d.createElement('li')
      github_list.appendChild(li);
      li.innerText = user+' '+type+' '+repo;
    });
    github.appendChild(github_list);

});

makeRequest('http://node.dvbris.com/twitter?api_url=' +
  encodeURIComponent('https://api.twitter.com/1.1/users/show.json?screen_name=olls96'),
  function (data) {
    var bio = d.getElementById('bio');
    var p = d.createElement('p');
    p.innerText = JSON.parse(data).description;
    bio.innerHTML = bio.innerHTML + (JSON.parse(data).description);
});

function twitter_widget(id) {
  var id = 'twitter-wjs';
  var js;
  var fjs = d.getElementsByTagName('script')[0];
  var p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement('script');
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}

twitter_widget();