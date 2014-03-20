function github_widget(user, element) {
  makeRequest('https://api.github.com/users/'+user+'/events/public',
    function (data) {
      var github_list = document.createElement('ul');

      JSON.parse(data).forEach(function (item) {
        var user = item.actor.login;
        var repo = item.repo.name;
        var type;
        if (item.type == 'IssueCommentEvent') {
          type = 'commented on an issue in';
        } else if (item.type == 'PushEvent') {
          type = 'pushed to';
        } else if (item.type == 'IssuesEvent') {
          type = 'created an issue on';
        } else if (item.type == 'CommitCommepntEvent') {
          type = 'commented on a commit in';
        } else {
          type = item.type;
        }
        console.log(item);

        var li = document.createElement('li');
        github_list.appendChild(li);
        li.innerText = user+' '+type+' '+repo;
      });
      element.appendChild(github_list);
  });
}