'use strict';

var grunt = require('grunt');
var path = require('path');

exports.transform_html = {

    test_simple_development: function (test) {

        var actual = grunt.file.read(path.resolve('test/results/test_simple_development.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_simple_development.html'));
        test.equal(actual, expected, 'Test Simple Development should output file exactly the same with no options');

        test.done();
    },

    test_simple_production: function (test) {

        var actual = grunt.file.read(path.resolve('test/results/test_simple_production.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_simple_production.html'));
        test.equal(actual, expected, 'Test Simple Production should output file exactly the same with no options');

        test.done();
    },

    test_html_page_development: function (test) {

        var actual = grunt.file.read(path.resolve('test/results/test_html_page_development.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_html_page_development.html'));
        test.equal(actual, expected, 'Test HTML Page Development should output file exactly the same with no options');

        test.done();
    },

    test_html_page_production: function (test) {

        var actual = grunt.file.read(path.resolve('test/results/test_html_page_production.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_html_page_production.html'));
        test.equal(actual, expected, 'Test HTML Page Production should output file exactly the same with no options');

        test.done();
    },

    test_two_zones_development: function(test) {

        var actual = grunt.file.read(path.resolve('test/results/test_two_zones_development.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_two_zones_development.html'));
        test.equal(actual, expected, 'Test HTML Page Pevelopment should output file exactly the same with no options');

        test.done();

    },

    test_two_zones_production: function(test) {

        var actual = grunt.file.read(path.resolve('test/results/test_two_zones_production.html'));
        var expected = grunt.file.read(path.resolve('test/expected/test_two_zones_production.html'));
        test.equal(actual, expected, 'Test HTML Page Production should output file exactly the same with no options');

        test.done();

    }
};
