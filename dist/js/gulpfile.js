//1、引入gulp对象
var gulp = require("gulp");

/*
	gulp.task()
	第一个参数   任务的名字
	第二个参数   回调函数
*/
gulp.task("hello", function(){
	console.log("hello world");
})


gulp.task("copy-index", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

gulp.task("scripts", function(){
	return gulp.src(["jquery-1.11.3.js", "jquery.cookie.js", "parabola.js", "index.js"])
	.pipe(concat("index.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//处理scss
const sass = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");

gulp.task("sass", function(){
	return gulp.src("index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
// css
gulp.task("css1", function(){
	return gulp.src("haixin.css")
	.pipe(rename("haixin.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//处理图片
gulp.task("images", function(){
	return gulp.src("*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

//数据
gulp.task("data", function(){
	return gulp.src("data.json")
	.pipe(gulp.dest("dist/json"))
	.pipe(connect.reload());
})

//一次性执行多个任务
gulp.task("build", ["data", "images", "sass", "scripts", "copy-index","css1"], function(){
	console.log("项目建立成功");
})

//添加监听
gulp.task("watch", function(){
	gulp.watch(["data.json"], ["data"]);
	gulp.watch(["*.{jpg,png}"], ['images']);
	gulp.watch(["index.scss"], ['sass']);
	gulp.watch([["jquery-1.11.3.js", "jquery.cookie.js", "parabola.js", "index.js"]], ["scripts"]);
	gulp.watch(['index.html'], ['copy-index']);
	gulp.watch(['haixin.css'], ['css1']);
})



const connect = require("gulp-connect");

gulp.task("server", function(){
	connect.server({
		root: "dist",
		livereload: true
	})
})


//设置默认任务
gulp.task("default", ['watch', "server"]);