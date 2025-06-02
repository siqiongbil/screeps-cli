module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                server: {
                    host: 'screeps.siqiongbiluo.love',
                    port: 21025,
                    http: true
                },
                email: '<your email>',
                password: '<your password>',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });

    grunt.registerTask('deploy', ['screeps']);
};