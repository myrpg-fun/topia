// gulpfile.js
var path = require('path');
var gulp = require('gulp');
var spawn = require('child_process').spawn;
const webpack = require('webpack-stream');

gulp.task('build', function() {
    return gulp.src('src/app.js')
        .pipe( webpack( require('./webpack.config.js') ) )
        .pipe(gulp.dest('build'));
});

var node, develop = false;

var nodeStart = function(){
    if (!node){
        node = spawn('node', ['server'], {stdio: 'inherit', env: { 'NODE_ENV': develop?'development':'prod' }});
        node.on('close', function (code) {
            console.log('restart server!', code);
            node = null;
            if (code === 1) {
                console.log('Error detected, waiting for changes...');
            }
            
            setTimeout(nodeStart, 2000);
        });
    }
};

gulp.task('server', function(done) {
    if (node){ 
        console.log('server now killed...');
        
        node.kill('SIGINT');
    }else{
        nodeStart();
    }
    
    done();
});

gulp.task('run', 
    gulp.parallel('build', 'server', function (done) {
        gulp.watch(['server.js', 'lizzi/**/*', 'game/**/*', 'admin/**/*'], gulp.series('server'));
//            gulp.watch(['lizzi/**/*', 'pages/**/*'], gulp.series('build'));

        done();
    })
);

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default", gulp.series('build'));
