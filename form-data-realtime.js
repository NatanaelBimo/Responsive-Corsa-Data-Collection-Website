//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyBHBAp81B7TK2c4Y5cz7JvtZjmj-WWLyrI",
    authDomain: "korsafindit2022.firebaseapp.com",
    projectId: "korsafindit2022",
    storageBucket: "korsafindit2022.appspot.com",
    messagingSenderId: "399886237211",
    appId: "1:399886237211:web:472e577e24d736f07002be",
    databaseURL: "https://korsafindit2022-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
  
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  var database = firebase.database();
  
  //Variable to access database collection
  const db = database.ref("fromKorsaResponseData")
  
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
  
    //Get Form Values
    let nama = document.getElementById('nama').value
    let divisi = document.getElementById('divisi').value
    let namaKorsa = document.getElementById('nama-korsa').value
    let kontak = document.getElementById('kontak').value
    let alamat = document.getElementById('alamat').value

    if (!nama && !divisi && !namaKorsa && !kontak && !alamat){
        alert("Please fill all the form fields.")
    }
    else {
        //Save Form Data To Firebase
        db.push().set({
        nama: nama,
        divisi: divisi,
        namaKorsa: namaKorsa,
        kontak: kontak,
        alamat: alamat

        }).then( () => {
        console.log("Data saved")
        }).catch((error) => {
        console.log(error)
        })

        
        // firebase.database().ref('users/' + userId).set({
        //     nama: nama,
        //     divisi: divisi,
        //     namaKorsa: namaKorsa,
        //     kontak: kontak,
        //     alamat: alamat    
        // });
        
    
        //alert
        alert("Your Form Has Been Submitted Successfully")
    }
  })