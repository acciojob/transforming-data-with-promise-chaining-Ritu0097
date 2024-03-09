document.getElementById('btn').addEventListener('click', function() {
    const inputValue = document.getElementById('ip').value;
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(parseInt(inputValue));
        }, 2000);
    });
    promise1.then((result) => {
        document.getElementById('output').textContent = `Result: ${result}`;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result * 2);
            }, 1000);
        });
    }).then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result - 3);
            }, 1000);
        });
    }).then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result / 2);
            }, 1000);
        });
    }).then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result + 10);
            }, 1000);
        });
    }).then((finalResult) => {
        document.getElementById('output').textContent = `Final Result: ${finalResult}`;
    }).catch((error) => {
        console.error('An error occurred:', error);
    });
});
