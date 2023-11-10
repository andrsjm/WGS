//Import library
const validator = require('validator');

//Make readline
const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//Make the function for question and answer
const input = (question) => {
    return new Promise((cb, err) => {
        rli.question(question, data=> {
            cb(data);
        }, () => {
            err()
        });
    });
}


//Make function to assist the console.log()
const output = (answer, data) => {
    console.log(answer, data)
}


//Make the validator for spesific question
const tanyaLagi = async (question, answerRight, answerFalse, validator) => {
    const reply = await input(question)
    if(validator(reply)){
        output(answerRight, reply)
    }else{
        output(answerFalse, reply)
        await tanyaLagi(question, answerRight, answerFalse, validator)
    }
}

//Main
const main = async () => {
    await tanyaLagi("Email kamu apa: ", "Format email kamu benar: ", "Format email kamu salah: ", validator.isEmail)
    await tanyaLagi("Berapa nomer telefon kamu: ", "Format telepon kamu benar: ", "Format telepon kamu salah: ", validator.isMobilePhone)

    rli.close();
};

main();