import { DataTypes, Model } from 'sequelize'
import connectToDB from './db'
import util from 'util'
import bcryptjs from 'bcryptjs'

export const db = await connectToDB(`postgresql:///baby_kingdom`)

export class User extends Model {
    [util.inspect.custom()]() {
        return this.toJSON()
    }
}
User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING(500),
            allowNull: true,
        }
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                user.password = hashedPassword
            },
            beforeBulkCreate: (users, options) => {
                for (let user of users) {
                    const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                    user.password = hashedPassword
                }
            },
            beforeUpdate: (user, options) => {
                if (user.password) {
                    const hashedPassword = bcryptjs.hashSync(user.password, bcryptjs.genSaltSync(5))
                    user.password = hashedPassword
                }
            }
        },
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        },
        scopes: {
            withPassword: {
                attributes: {
                    include: ['password']
                }
            }
        },
        modelName: 'user',
        sequelize: db,
    },
)

export class Baby extends Model {
    [util.inspect.custom()]() {
        return this.toJSON()
    }
}
Baby.init(
    {
        babyId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false,
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
        },
        imageUrl: {
            type: DataTypes.STRING(500),
            allowNull: false,
            defaultValue: "https://i.etsystatic.com/29607994/r/il/209182/3065750176/il_1140xN.3065750176_k33g.jpg"
        },
        action1: {
            type: DataTypes.JSON,
            values: ['class', 'name'],
        },
        action2: {
            type: DataTypes.JSON,
            values: ['class', 'name'],
        },
        action3: {
            type: DataTypes.JSON,
            values: ['class', 'name'],
        },
    }
)

export class Match extends Model {
    [util.inspect.custom()]() {
        return this.toJSON()
    }
}
Match.init(
    {
        matchId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        winUserId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        winBabyId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }
)

