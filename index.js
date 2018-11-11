const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const MTOne = new GraphQLObjectType({
  name: 'MT1',
  fields: {
    name: {
      type: GraphQLString,
      resolve: () => {
        console.log('mt one res')
        return 'name MT1'
      }
    },
    value: {
      type: GraphQLInt,
      resolve: () => {
        console.log('mt one res int')
        return 1
      }
    }
  }
});

const MTTwo = new GraphQLObjectType({
  name: 'MT2',
  fields: {
    name: {
      type: GraphQLString,
      resolve: () => {
        console.log('mt two st')
        return 'name MT2'
      }
    },
    value: {
      type: GraphQLInt,
      resolve: () => {
        console.log('mt 2 int')
        return 2
      }
    }
  }
});

const MyThing = new GraphQLObjectType({
  name: 'thing',
  fields: {
    field1: {
      type: MTOne,
      resolve: (root, args, context) => ({ root, args, context })
    },
    field2: {
      type: MTTwo,
      resolve: (root, args, context) => ({ root, args, context })
    }
  }
})



const myType = new GraphQLObjectType({
  name: 'someQueryType',
  fields: () => ({
    Stuff: {
      type: MyThing,
      resolve: (root, args, context) => {
        return {
          root: {},
          args,
          context
        }
      }
    }
  })
})

module.exports = myType
