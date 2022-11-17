const AWS = require('aws-sdk');
const xyz=require('App.js');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = (event, context, callback) => {
    console.log("Processing...");
    const params = {
        Item: {
            id: Date.now(),
            Familyhead: this.state.familyhead,
            Phone: this.state.phone,
            Address:this.state.address,
            Family:this.state.nooffamily,
            vechiles:this.state.noofvechiles,
            Income:this.state.annualincome,
            city:this.state.city,
            State:this.state.state,
            zip:this.state.zip,
            Property:this.state.property
        },
        TableName: "formtable-dev"
    };
    const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify('Hegjjhj'),
  };
    
    docClient.put(params, function(err, data) {
        if(err){
            callback(err, null);
        } else {
            callback(null, data);
        }
    })
};