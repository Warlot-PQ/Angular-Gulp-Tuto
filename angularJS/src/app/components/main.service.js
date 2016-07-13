(function () {
  'use strict';

  angular
    .module('angularJs')
    .service('RestService', RestService);

  function RestService($http) {
    var serv = 'http://localhost:8888';
    var mail = 'pqwarlot@excilys.com';
    var userName = 'pqwarlot';
    var gravatarUrl = 'https://en.gravatar.com/userimage/107512183/b60f7766ab6b2356a19ee8ec38df542b.jpeg';

    this.sendMessage = sendMessage;
    this.getMessages = getMessages;
    this.getMessage = getMessage;
    this.sendComment = sendComment;

    function sendMessage(msg) {
      console.log('restService sendMessage() called');
      console.log('sending: ' + msg)
      return $http({
        method: 'POST',
        url: serv +  '/sendMessage',
        data: {
          msg: msg,
          mail: mail,
          userName: userName
        }
      });
    }

    function getMessages() {
      console.log('restService getMessages() called');
      return $http({
        method: 'GET',
        url: serv + '/getMessages'
      });
    }

    function getMessage(id) {
      console.log('restService getMessage(id) called');
      return $http({
        method: 'GET',
        url: serv + '/getMessages/' + id
      });
    }

    function sendComment(message) {
      console.log('restService sendMessage() called');
      console.log('sending to id: ' + message._id + ' ' + message.comment)
      return $http({
        method: 'POST',
        url: serv +  '/sendMessage/' + message._id,
        data: {
          msg: message.comment,
          mail: mail,
          userName: userName
        }
      });
    }
  }
})();
