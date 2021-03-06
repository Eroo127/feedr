var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    stylus=require('stylus'),
    passport = require('passport')

    ;



module.exports= function (app,config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

	// For the feedr Dashboard
 /**   app.set('views', config.rootPath + '/server/views');
    
     app.set('view engine', 'ejs');
	 
	 **/

    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({secret: 'feedr Test'}));
    app.use(passport.initialize());
    app.use(passport.session());
	
		// For the feedr Dashboard
 /**   app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));**/


}