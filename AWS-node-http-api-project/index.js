module.exports.handler = async (event) => {
    // write hello world to the logs
    console.log("Hello World and andyliew");
    // assign a value to a variable
    let message = "Go andyliew Serverless v4.0! Your function executed successfully!";

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: message,
                input: event,
            },
            null,
            2
        ),
    };
};