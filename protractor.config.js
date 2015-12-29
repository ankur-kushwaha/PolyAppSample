var glob = require('glob')
  , buildConfigFile = require('find-up').sync('build.config.js')
  , buildConfig = require(buildConfigFile);

exports.config = {
  framework: 'jasmine2',
  baseUrl: 'http://' + buildConfig.host + ':' + buildConfig.port,
  seleniumServerJar: glob.sync('./node_modules/protractor/selenium/selenium-server-standalone-*.jar').join(),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--test-type']
    }
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
        	var jasmineReporters = require('jasmine-reporters');
        	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            	consolidateAll: true,
            	savePath: buildConfig.junitDir,
            	filePrefix: 'e2e-test'
        	}));
    	}
};
