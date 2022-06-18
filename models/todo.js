const Sequelize=require('sequelize');

//todo_list 모델 생성
//todo_list 구성
module.exports=class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            study:{
                type:Sequelize.STRING(40),
                allowNull:false,
             },
            },
        {
            sequelize,
            timestamps:true,
            modelName:'Todo',
            tableName:'todos',
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){
        db.Todo.belongsTo(db.User);
    }
};