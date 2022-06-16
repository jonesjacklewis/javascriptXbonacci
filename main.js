function xbonacci(signature, n) {
    const startLength = signature.length;

    if (n == 0) {
        return [];
    }

    if (n <= startLength) {
        return signature.slice(0, n)
    }

    const toReturn = signature;

    while (toReturn.length < n) {
        let nextElement = 0;
        for (let i = 1; i <= startLength; i++) {
            nextElement += toReturn[toReturn.length - i];
        }
        toReturn.push(nextElement);
    }

    return toReturn;

}

console.log(
    xbonacci([1, 1], 10)
)
