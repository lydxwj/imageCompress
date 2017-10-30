const path = require('path');
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');

imagemin(['images/*.{png,jpg,gif}'], 'build/images', {
	plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '50'}),
        imageminJpegtran(),
        imageminGifsicle({quality: '50'})
    ]}).then(() => {
  console.log('Images optimized');
});
    //use: [imageminPngquant({quality: 50}),imageminGifsicle(),imageminJpegtran()]}