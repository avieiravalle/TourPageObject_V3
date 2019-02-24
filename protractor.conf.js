exports.config = {
 // directConnect: true,
  specs: ['./e2e/todo.js'],
  highlightDelay: 2000,

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        "--headless",
        "--window-size=1024,768",
      ],
    },
  },

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    }
};
