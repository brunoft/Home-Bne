// ------------------------------------------------------------- SASS
//Chama o gulp dentro do projeto
var gulp = require('gulp');



// ------------------------------------------------------------- LIVE RELOAD

var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);

});

gulp.task('watch', function () {
gulp.watch('./styles/*.css');

});


gulp.task('default', ['watch','browser-sync']);
//pedindo pra executar meu array
