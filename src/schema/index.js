import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} from 'graphql'

// 我们要用的模拟数据
const data = require('../../data/data.json')

const Dashboard = new GraphQLObjectType({
    name: 'Dashboard',
    description: 'Dashboard对象',
    fields: {
        id: {
            type: GraphQLString
        },
        widgets: {
            type: GraphQLString
        },
    }
});

const configType = new GraphQLObjectType({
    name: 'Config',
    description: 'config obj',
    fields: {
        title: { type: GraphQLString },
        desc: { type: GraphQLString },
        content: { type: GraphQLString },
        link: { type: GraphQLString },
    }
})
const widgetType = new GraphQLObjectType({
    name: 'Widget',
    description: 'widget obj',
    fields: {
        id: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        config: {
            type: configType
        }
    }
})
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        widgets: {
            type: new GraphQLList(new GraphQLList(widgetType)),
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: function (_, args) {
                return data[args.id].widgets;
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;