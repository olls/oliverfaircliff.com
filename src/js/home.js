// github_widget('olls', document.getElementById('github'));
twitter('olls96', function (data) {
  var p = document.createElement('p');
  p.innerText = data.description;
  document.getElementById('bio').appendChild(p);
});
// twitter_widget('twitter-wjs');