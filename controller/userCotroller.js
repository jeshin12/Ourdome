const { log } = require("console")
const { response } = require('express');

module.exports={

    homePage(req,res){
        res.render('user/homepage',{showHeaderAndFooter:true})
    },

    Tour(req,res){
        res.render('user/360Tour',{showHeaderAndFooter:false})

    },

    rooms(req,res){
        
        res.render('user/rooms',{showHeaderAndFooter:true})
    },

    about(req,res){

        res.render('user/about',{showHeaderAndFooter:true})
    },

    contact(req,res){

        res.render('user/contact',{showHeaderAndFooter:true})
    }



}