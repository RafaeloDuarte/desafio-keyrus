const proxy = [
    {
      context: '/retrieve-product',
      target: 'http://challenge-front-end.us-east-2.elasticbeanstalk.com',
      secure: false,
      logLevel: 'debug',
      pathRewrite: {'^/retrieve-product':''},
      
    }
  ];
  module.exports = proxy;