let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input){
    input[1] += "Elsharawy"; 
    input[2] = "Provinsi " + input[2];
    input.splice(4,1,"Pria","SMA Internasional Metro"); //di index ke 4 terjadi penghapusan 1 data, dan penambahan 2 data
    console.log(input) // muncul output pertama

    let tanggal = input[3].split("/")
    if(tanggal[1] == "05") {
        console.log("Mei") // muncul output kedua
    }

    [tanggal[0], tanggal[2]] = [tanggal[2], tanggal[0]]; // pertukaran posisi index 0,2 ke posisi index 2,0
    [tanggal[1], tanggal[2]] = [tanggal[2], tanggal[1]]; // pertukaran posisi index 1,2 ke posisi index 2,1
    console.log(tanggal) // muncul output ketiga

    tanggal = input[3].split("/").join("-") // penghapusan "/" dan penambahan "-" ke dalam array
    console.log(tanggal) // muncul output keempat

    console.log(String.prototype.padStart(15,input[1])) // muncul output kelima
}

return dataHandling(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */