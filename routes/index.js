const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Good, Auction, User, Todo } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
	//모든 pug 템플릿에 사용자 정보를 변수로 집어 넣음 -> res.render 메서드에 user:req.user를 하지 않아도 중복 제거 가능
  res.locals.user = req.user;
  next();
});

//메인화면 렌더링
router.get('/', async (req, res, next) => {
  try {
    res.render('layout', {
      title: 'todolist',
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 회원가입 화면
router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', {
    title: '회원가입 - todolist',
  });
});

router.get('/main', isLoggedIn, (req, res) => {
    res.render('main', {
      title: '시작화면 - todolist',
    });
  });
  
  router.get('/register', isLoggedIn, (req, res) => {
    res.render('register', {
      title: '등록화면 - todolist',
    });
  });


  router.post('/register', isLoggedIn, async(req, res,next) => {
      try{
          const study_list=await Todo.create({
              study:req.body.todostudy,
              nick:req.user.nick,
          });

          res.render('main',{
              study_list,
              nick,
           
          });
          console.log(study_list);
        } catch (err) {
          console.error(err);
          next(err);
        }
      });


module.exports = router;