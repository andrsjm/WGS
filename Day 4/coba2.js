const rli = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = (question) => {
    return new Promise((cb, err) => {
        rli.question(question, data=> {
            cb(data);
        }, () => {
            err()
        });
    });
}

const output = (answer, data) => {
    console.log(answer, data)
}

const main = async () => {
    data = await input("Siapa nama kamu: ");
    output("Nama kamu adalah ", data)

    data = await input("Bearap no telp kamu: ");
    output("No Telp kamu adalah ", data)
    
    data = await input("Apa email kamu: ");
    output("Email kamu adalah ", data)

    rli.close();
};

main();


// const print = async (question1, question2, answer1, answer2) => {
//     const readline = require('readline').createInterface(
//         process.stdin, process.stdout
//     )
      
//     readline.question(question1, temp1 => {
//         console.log(answer1, temp1);
        
//         readline.question(question2, temp2 => {
//             console.log(answer2, temp2)
//             readline.close()
//         })
//     });
    
// }

// print('Siapa Nama Kamu? ', 'Berapa No Telp Kamu Shayyy? ', 'Nama Kamu Adalah ', 'Jalan kuy, aku kontak kamu di no telp ')



