const Sequelize=require('sequelize');

//사용자 모델 생성
//이메일, 닉네임 , 비밀번호 구성
module.exports=class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            email:{
                type:Sequelize.STRING(40),
                allowNull:false,
                unique:true,
            },
            nick:{
                type:Sequelize.STRING(100),
                allowNull:false,
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull:true.valueOf,
            },

        },{
            sequelize,
            timestamps:true,
            modelName:'User',
            tableName:'users',
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){
        db.User.hasMany(db.Todo);
    }
};