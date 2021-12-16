function buah() {
    var buah = ['pisang', 'jeruk'];
    console.log(buah);

    buah.unshift('apel', 'mangga');
    return buah;
}

console.log(buah())