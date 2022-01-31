//Unique Firebase Object
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    databaseURL: ""
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
