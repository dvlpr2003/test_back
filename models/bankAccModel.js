import mongoose from "mongoose";

const bankAccSchema = new mongoose.Schema({
    ifsc : {
        type : String,
        required : true,
    },
    bankName: {
        type: String,
        required: true,
    },
    password : {
        type : String,
        required : true
    },
    branchName : {
        type : String,
        required : true,
        unique : true
    },
    logo : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    products : {
        type : Array,
        required : true
    }
}, { minimize : false })

const bankAccModel = mongoose.models.bankAcc || mongoose.model('bankAcc', bankAccSchema)

// Function to initialize the database and insert sample data
const initializeDatabase = async () => {
    try {
        // Sample data to insert
        const sampleData = [
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1102,
                branchName: "Kalathode",
                address: "V/140/(2) Jsr Square Building, Kalathode, Ollukkara (Po). Thrissur District. Pin 680655."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1107,
                branchName: "Kattapana",
                address: "11/239-D Mani'S Complex, Village Office Road, Near New Bus Stand, Kattappana- 685508"
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1115,
                branchName: "Thiruvalla",
                address: "Xxvi 185/1 Pulimattathu Building, Ramanchira, Muthoor P.O. Thiruvalla, Pathanamthitta 689107."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1103,
                branchName: "Edapally",
                address: "38/211 A, Grace Tower, Near Edappally Bye Pass Junction, Edappally \u2013 Ernakulam 682024"
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1111,
                branchName: "Perumbavoor",
                address: "20/1170 A, Near Jacobite Church, Kottayam Road, Perumbavoor, Ernakulam 683542."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1105,
                branchName: "Palai",
                address: "Melhor Building, Room No 372, A1, Near Rto Office , Chethimattom, Palai Kottayam 686575."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1108,
                branchName: "Kozhikode",
                address: "6/140 A, G, Grand Arcade, Near Christian College, Kannur Road, Nadakkavu, Kozhikode 673011"
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1110,
                branchName: "Perinthalmanna",
                address: "14/32/6, Metro Tower, Ground Floor, Jubilee Junction, Pattambi Road, Perinthalmanna, Malappuram 679322."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1109,
                branchName: "Chandranagar",
                address: "Room No A3/3163/15, Ground Floor , Khloe Complex, Nh, Chandra Nagar, Palakkad 678007."
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: 1136,
                branchName: "Kuzhalmannam II",
                address: "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702"
            },
            {
                ifsc: "ESMF0001194",
                bankName: "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                products: [
                    "Dater",
                    "Mini Dater",
                    "Approval",
                    "Paid",
                    "Locker",
                    "Number",
                    "Fake Note",
                    "Decline"
                ],
                password: "0212",
                branchName: "Araria",
                address: "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702"
            },
            {

                "bankName": "ESAF Bank",
                "password": "1102",
                "branchName": "Kalathode",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "V/140/(2) Jsr Square Building, Kalathode, Ollukkara (Po). Thrissur District. Pin 680655.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1107",
                "branchName": "Kattapana",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "11/239-D Mani'S Complex, Village Office Road, Near New Bus Stand, Kattappana- 685508",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1115",
                "branchName": "Thiruvalla",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "Xxvi 185/1 Pulimattathu Building, Ramanchira, Muthoor P.O. Thiruvalla, Pathanamthitta 689107.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1103",
                "branchName": "Edapally",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "38/211 A, Grace Tower, Near Edappally Bye Pass Junction, Edappally – Ernakulam 682024",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1111",
                "branchName": "Perumbavoor",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "20/1170 A, Near Jacobite Church, Kottayam Road, Perumbavoor, Ernakulam 683542.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1105",
                "branchName": "Palai",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "Melhor Building, Room No 372, A1, Near Rto Office , Chethimattom, Palai Kottayam 686575.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1108",
                "branchName": "Kozhikode",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "6/140 A, G, Grand Arcade, Near Christian College, Kannur Road, Nadakkavu, Kozhikode 673011",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1110",
                "branchName": "Perinthalmanna",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "14/32/6, Metro Tower, Ground Floor, Jubilee Junction, Pattambi Road, Perinthalmanna, Malappuram 679322.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1109",
                "branchName": "Chandranagar",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "Room No A3/3163/15, Ground Floor , Khloe Complex, Nh, Chandra Nagar, Palakkad 678007.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1136",
                "branchName": "Kuzhalmannam II",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "Xv/381 Kannanur Junction,Kuzhalmannam-Ii,Kannadi,Palakkad 678702",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1104",
                "branchName": "Kollengode",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "Xiv/579, Safa Tower, Near Sai Medical Center, Payyalore, Kollengode, Palakkad 678506.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              {
              
                "bankName": "ESAF Bank",
                "password": "1106",
                "branchName": "Valkulambu",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "address": "16/825, 826,  Kodiyattil Complex, Near Mmup School, Valkulambu, Koranchira Po, Palakkad  678684.",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "__v": 0
              },
              
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": "1144",
                "branchName": "Thuneri",
                "address": "5/328 & 328A,Near Ration Shop,Thuneri,Ooty,Nilgiris District,Tamil Nadu 643002"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": "1130",
                "branchName": "Vennikulam",
                "address": "309/1-3-1, Thottathil Building, Vennikulam , Puramattom,Pathanamthitta District Pin  689544"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": "1139",
                "branchName": "Elayamuthur",
                "address": "101/2, Near Mosque,, Kallapuram Road, Elayamuthur,Tiruppur, Tamilnadu 642154"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1118,
                "branchName": "Kodungallur",
                "address": "197,198,199,200, Edison Complex, North Paravur Road, Kodungallur, Thrissur 680664"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1131,
                "branchName": "Kollam",
                "address": "A & S Towers, Kallumthazum Junction, Kallumthazum, Kilikolloor, Kollam , Kerala- 691004"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1122,
                "branchName": "Irinjalakuda",
                "address": "566A, Blaze Court Building, Tana, Irinjalakuda P O, Thrissur, Kerala 680121."
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1121,
                "branchName": "Chalakudy",
                "address": "Ground Floor, Mercherry Plaza, Near North Bus Stand, Chalakudy, Thrissur District. Pin 680307"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1117,
                "branchName": "Valappad",
                "address": "Sy No 583, Near Ioc Petrol Pump, Nh 17, Edamuttom, Thrissur-680568"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1124,
                "branchName": "Maradu",
                "address": "Ragam,Door No 10106,Maradu Village,Kanayannur Taluk,Ernakulam District – 682304"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1116,
                "branchName": "Attingal",
                "address": "No Viii/165/2 Chirayil Building, Avanavancherry P.O. Attingal, Thiruvananthapuram, 695101"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1119,
                "branchName": "Kolanchery",
                "address": "Iv/651, 652, 649, Santhi Park Apartments, Madurai Kochi Road,Kolencherry. Ernakulam 682311"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1114,
                "branchName": "Muvattupuzha",
                "address": "Ground Floor, Pearl Tower,Near Signal Junction,Velloorkunnam,Muvattupuzha,Ernakulam District. Pin 686661"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1138,
                "branchName": "Chengalam East",
                "address": "Pulthakadiyil Buildings, Sy.No 502/10, Ground Floor, Oppositite St.Antony'S School, Chengalam East, Akalakunnam Panchayath, Kottayam, 686585"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1128,
                "branchName": "Mukkam",
                "address": "1/829 A-829C, Ground Floor, K V Complex, Mukkam, Kozhikode Distrit. Pin 673602"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1120,
                "branchName": "Valanchery",
                "address": "Sy No: 338/5/6, Ground Floor,Rahath Annex, Kuttipuram Road, Valanchery, Malappuram - 676552"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1113,
                "branchName": "Alathur",
                "address": " Xv/1053, Xv/1054,Ground Floor,Thrissur Tower,Near Alathur Court,Court Road, Alathur 678541"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1123,
                "branchName": "Malappuram",
                "address": "10/89,10/90,10/91, Ground Floor ,U M K Tower, Jubilee Road, Bypass-Uphill, Malappuram. Pin- 676505"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1127,
                "branchName": "Kotakkal",
                "address": "13/832,Mas Building,Edarikode, Kottakkal,Malappuram-676501"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1132,
                "branchName": "Kottayam",
                "address": "Adithya Commercial Arcade,Ground And First Floor, No Xvi/118B,118H,Mc Road, Kottayam. Kottayam District. Pin 686001"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1154,
                "branchName": "Adoor",
                "address": "Survey No 153/16 & 148/25-1,Near Fire Station,M C Road,Adoor,Pathanamthitta - 689 693"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1137,
                "branchName": "Changaramkulam",
                "address": "16/441, 16/442 Ground Floor, Glasco Tower, Changaramkulam,  Main Road,Malappuram District. Pin 679575"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1141,
                "branchName": "Thalassery",
                "address": "Survey No 24/P, Near Alp School, Thalassery Desamangalam Road, Thalassery Thrissur 679532"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1125,
                "branchName": "Poopara",
                "address": "4/313 Kumali Munnar Road, Santhanpara, Poopara, Idukki 685619."
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1129,
                "branchName": "North Paravur",
                "address": "Vithayahil Square, Sy No: 245/2 B, Near Kmk Junction, Paravur - Cherai Road, North Paravur, Pin 683513"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1146,
                "branchName": "Vadakkumbhagom",
                "address": "No.466/A1,2,3, Sivasakthi Shopping Centre, Vadakkumbhagom Village, Ashtamichira, Thrissur District, Pin-680731"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1153,
                "branchName": "Thripunithura",
                "address": "Sy No 116/3, Srishti Building, Near Police Station, Vaikom Road, Thripunithara – 682301"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1140,
                "branchName": "Poomalaikunda",
                "address": "No.189/1B, Dharmapuri, Dharmapuri-Kottur Main Road, Theni, Tamil Nadu 625520"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1145,
                "branchName": "Uzhavoor",
                "address": "222/5, Puthiyakunnel Buildings, Near St Stephens Church, Uzhavoor, Kottayam District – Pin 686634"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1171,
                "branchName": "Vanchiyoor",
                "address": "Ground Floor, Tc-82/1779, Vignesh Tower, Opp: Holy Angels School, Convent Road, Vanchiyoor, Thiruvananthapuram Pin 695035"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1155,
                "branchName": "Thrissur-Patturaickal",
                "address": "Prasad Arcade, Ground Floor, Sy No: 1610/3P, Opposite Cmi Devamatha Provincial House, Shornur Road, Patturaikkal, Thrissur – 680022"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1168,
                "branchName": "Palakkad-Town",
                "address": "Ground Floor, 18/763-2, Ahamed Square, Near Ksrtc Stand, Ksrtc Link Road, Dpo Junction, Palakkad, Pin 678007"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1162,
                "branchName": "Koothattukulam",
                "address": "Ground Floor, Sy No 605/3-1, 604/2, Johns Tower, Near Bsnl Office, T B Junction, Mc Road, Koothattukulam, Ernakulam Dist, Pin-686662"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1164,
                "branchName": "Manarcad",
                "address": "Ground Floor, Vettikkunnel Arcade, Manarcad - Puthuppally Road, Manarcad, Kottayam District, Pin-686019"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1159,
                "branchName": "Kannur",
                "address": "No: TTN/9/794, Parkans Building, Thavakkara, Kannur, Kannur – 670002"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1169,
                "branchName": "Pozhuthana",
                "address": "Ground Floor, Room No:10/330/C/D/E, Kpm Building, Near Pozhuthana Town Bus Stop, Vythiri 6th Mile Road, Wayanad 673575"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1152,
                "branchName": "Kinalur",
                "address": "7/158 C Kinalur, Near Ezhukandi Junction, Thamarassery, Kozhikode – 673612"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1165,
                "branchName": "Manjeri",
                "address": "Ground Floor, 16/811-822, V K Building, Manjeri-Nilambur Road, Manjeri, Malappuram District, Pin-676121"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1167,
                "branchName": "Nilambur",
                "address": "Vp Plaza, Near Little Flower Higher Secondary School, Janathapadi, Nilambur, Malappuram District, Pin-679329"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1134,
                "branchName": "Ottapalam",
                "address": "D Square, Palakkad Road, Ottapalam, Palakkad, Kerala-679101"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1157,
                "branchName": "Anaviratty",
                "address": "Ground Floor, Door No:14/349, Survey No:355/4, Kambiline Junction, Anaviratty P O, Idukki District, Pin-628057"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1112,
                "branchName": "Adimaly",
                "address": "1132, 1st Floor, Valiyaparambil Complex, Nh-49, Adimaly, Idukki District, Pin-685561"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1183,
                "branchName": "Ernakulam",
                "address": "Ground Floor, 54/3854-1, St. Marys Tower, Elamkulam Junction, S A Road, Kadavanthra, Ernakulam Dist, Pin-682020"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1156,
                "branchName": "M G Road",
                "address": "Sy. No : 1422/1, Room No 25/469/6-13, Pooma Complex, Near Naduvilal Junction, M G Road, Thrissur - 680001"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1143,
                "branchName": "Thodupuzha",
                "address": "195/23, Kuruthukulam Arcade, Kanjiramattam Bypass Road, Opposite Ksrtc Bus Stand, Thodupuzha, Pin-685584"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1126,
                "branchName": "Kothamangalam",
                "address": "Ward No 2/368, Mm Towers, Aluva Munnar Bypass, Malayinkeezhu Junction, Kothamangalam, Ernakulam District, Pin-686691"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1142,
                "branchName": "Thiruvananthapuram",
                "address": "Marvallil Dr. Koshy's Buildings, Tc-29/4013(1), Ground Floor, Near Bakery Flyover, Thycaud P.O., Panavila, Thiruvananthapuram, Pin-695014"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1148,
                "branchName": "Andheri East",
                "address": "Unit No.15, Options Primo Marol, Industrial Area, Midc Cross, Road No.21, Near Vijay Nagar, Flyover Bridge, Andheri East-400093"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1174,
                "branchName": "Kuravilangad",
                "address": "Ground Floor, Nidhiry Bazar, Near Panchayath Office, Central Junction, Kuravilangad, Kottayam Dist, Pin-686633"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1135,
                "branchName": "Pattambi",
                "address": "6/657, Kopan Commercial Centre, Pattambi Palakkad Main Road, Pattambi, Palakkad District, Pin: 679306"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1147,
                "branchName": "Vattavada",
                "address": "No 33/C, Near Krishi Bhavan, Koviloor P O, Idukki District, Kerala, Pin-685615"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1173,
                "branchName": "Karol Bagh",
                "address": "House No/Plot No R/03-Block C/5, Ground Floor, Karol Bagh, New Rohtak Road, North Delhi, Delhi-110005"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1158,
                "branchName": "Kanjirappally",
                "address": "Ground Floor, 8/399 A2/A3, Trade Centre, Near Hp Petrol Pump, Myca Junction, Pin-686507"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1150,
                "branchName": "Palavayal",
                "address": "8/516 A, B, C, D, Opposite St John's Hs School, Palavayal P O, Kasargode, Pin-670511"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1184,
                "branchName": "Chemmanthatta",
                "address": "No 344A, B, Ground Floor, Near Ayyappankav Temple, P O Chemmanthatta, Thrissur, Kerala, Pin-680501"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1160,
                "branchName": "Kiralur",
                "address": "Door No 8/553 E, Sy No 203/1P, Near Mount Carmel Church, Kiralur Village, Thalappilly Thaluk, Thrissur Dist, Pin-680541"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1149,
                "branchName": "Inchamudi",
                "address": "No: 239/1, Cherpu-Thriprayar Road, Chirakkal Jn, Inchamudi, Thrissur, Pin-680564"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1151,
                "branchName": "Thayyur",
                "address": "Sariga Complex, Ground Floor 3/240, Opposite Govt High School, Thayyur, Thrissur, Pin-680584"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1192,
                "branchName": "Kuppadithara",
                "address": "Thoppil Buildings, Ground Floor, 6/160, Chiriankolly Kuppadithara Road, Cheriankolli, Kuppadithara, Wayanad, Pin-670645"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1181,
                "branchName": "Palarivattom",
                "address": "Ground Floor, Pocudyil Building, 32/2496, A, B, Near Slplaza, Palarivattom, Kochin-682025"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1185,
                "branchName": "Pilakkad",
                "address": "Svy No: 54/12, 54/13, Rabeeh Tower, Pilakkad Jn, Thali Road, Thrissur-680585"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1193,
                "branchName": "Virupakka",
                "address": "Rabiya Tower, Survey No:79/4, Virupakka, Vazhani Po, Thrissur, 680589"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1434,
                "branchName": "Hatta",
                "address": "No 261/14, Near Bus Stand, Opp Maharani Laxmibai School, Hatta P O, Hatta Dist, Madhya Pradesh - 470775"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1175,
                "branchName": "Ranni",
                "address": "Thannimoottil Building, Ground Floor, Near Sc Up School, Pazhavangadi, Punalur – Muvattupuzha Road, Ranni, Pathanamthitta Pin 689673"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1182,
                "branchName": "Ettumanoor",
                "address": "Ground Floor, Chirayil Arcade, Ettumanoor, Kottayam, 686631"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1187,
                "branchName": "Mallappally",
                "address": "Ground Floor, Vattasseril Plaza, Theatre Junction, Mallappally – Thiruvalla Road, Pathanamthitta – 689585"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1186,
                "branchName": "Changanasserry Part",
                "address": "15/139 A, Sweety Building, Laikkad Bus Stop, Perunna, Changanassery-686102"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1172,
                "branchName": "Koramangala",
                "address": "Golden House, 820, 8Th Block, Ganapati Temple Road Koramangla, Bangalore, 560095"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1161,
                "branchName": "Keezhanthoor",
                "address": "Door No- 3/239, Sv No- 449/9, Kochumalayil House, Keezhanthoor, Kanthaloor P O, Idukki Dist, Pin-685620"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1177,
                "branchName": "Dumka",
                "address": "No 11/35, Ward No 13, Plot No: 72/76, Near Teen Bazar Chowk, Bhagalpur Road, Dumka, Jharkhand, Dumka Pincode-814101"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1179,
                "branchName": "Rohini",
                "address": "No- 15, F-26, Sector-7, Rohini, New Delhi - 110085"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1176,
                "branchName": "Paschim Vihar",
                "address": "14/474 Ground Floor, Sunder Vihar, Paschim Vihar, North Delhi Pin 110087"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1188,
                "branchName": "Pathanamthitta",
                "address": "Kuzhiyil Geevs Arcade, Near Police Station, Old Police Station Road, Opp. Municipality Office, Pathanamthitta, Pin 689645"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1189,
                "branchName": "Cherthala",
                "address": "Jt Trade Centre, Near X-Ray Junction, Tsc Road, Alleppy- Cherthala Road, Alleppy Dist-688524, Kerala."
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1198,
                "branchName": "Kanhangad",
                "address": "Ground And First Floor, M K Tower, Door No: 15/9A, 15/9B, Opposite To LIC Office, Kanhangad Main Road, Kanhangad, Kerala -671315"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1199,
                "branchName": "Vadakara",
                "address": "First Floor, Crystal Building, Opposite Jyothi Petrol Pump, Karimbanapalam, Vadakara - 673101"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1201,
                "branchName": "Tirur",
                "address": "A A K Tower (Parappurath Tower), Naduvilangadi, Tirur, Malappuram- 676107"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1191,
                "branchName": "Thathamangalam",
                "address": "Thathamangalam - Krishna, Block No. 49A/48 Near Bhajana Madam, Thathamangalam Jn, Chittoor-Kozhinjampara Road, Sh-27, Palakkad - 678102"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1204,
                "branchName": "Mannarkkad",
                "address": "Kudu Building, Near Kseb Office, Kozhikode-Palakkad Main Road, Mannarkkad, Palakkad – 678582"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1203,
                "branchName": "Chavakkad",
                "address": "T.T Complex, North Bypass Road, Friendship Nagar, Chavakkad, Kerala-680506"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1211,
                "branchName": "Pattikadu",
                "address": "Alappat Building, Near Old Nh Road, Pattikkad, Thrissur, Kerala-680652"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1209,
                "branchName": "Aluva",
                "address": "Door No: 19/253 (2), Ground Floor, Dew Properties, Near BSNL Office, IMA Junction, Power House Road, Aluva - 683101"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1197,
                "branchName": "Alapuzha",
                "address": "Kainakari Building, Ground Floor & First Floor 15/492D, Bl-04/27 Gf And 1329 Sq Feet First Floor, Near To Power House, Shavakottapalam Ernakulam-Alapuzha Road, Alapuzha Pin 688007"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1200,
                "branchName": "Kayamkulam",
                "address": "Kadeesa Orthodox Cathedral Building, First Floor, Near Police Station, K.P Road, Kayamkulam, Alapuzha, Pin-690502."
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1202,
                "branchName": "Vattiyoorkavu",
                "address": "10/111 Bhaskara Towers, Opposite Saraswathy Vidhyalaya, Arappura Jn, Vattiyoorkavu, Trivandrum 695013"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1210,
                "branchName": "Vadakkencheri",
                "address": "No.1230–34, Mannarkudi Building, Thrissur Road, Vadakkenchery, Palakkad, 678683"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1212,
                "branchName": "Wadakkanchery",
                "address": "Ground Floor, Muscat Plaza, Near: Dist Hospital Ottupara, Wadakkanchery, Thrissur, Kerala, Pin-680590"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1206,
                "branchName": "Kottarakkara",
                "address": "Uthradam Building, Opp Kristuraj Hospital, QS Road, Pulamon, Kottarakkara, Kerala-691531"
              },
              {
              
                "bankName": "ESAF Bank",
                "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8R4K8CldBXma-71sNRe7zl2stWdcMJIilQ&s",
                "products": [
                  "Dater",
                  "Mini Dater",
                  "Approval",
                  "Paid",
                  "Locker",
                  "Number",
                  "Fake Note",
                  "Decline"
                ],
                "password": 1213,
                "branchName": "Kanjappally",
                "address": "No.403/B, Mohana Complex, Kanjappalli Pirivu Junction, Annur- Avinashi Road, Kanjappalli, Coimbatore Dist, Tamil Nadu-641653"
              }
        ]

        // Insert sample data into the collection
        await bankAccModel.insertMany(sampleData);


        
        console.log("Sample data inserted successfully");
        
    } catch (error) {
        //console.error("Error initializing database:", error);
    } finally {
    }
};

// Call the function to initialize the database
initializeDatabase();  


export default bankAccModel