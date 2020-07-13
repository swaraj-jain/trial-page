const firebaseConfig = {
    apiKey: "AIzaSyCWGrts0zl8YBi4CRxcPhEsW8T9jyWc3xY",
    authDomain: "roboism-website.firebaseapp.com",
    databaseURL: "https://roboism-website.firebaseio.com",
    projectId: "roboism-website",
    storageBucket: "roboism-website.appspot.com",
    appId: "1:266630576735:web:0b998d875dabaea0b7f9ea",
    measurementId: "G-0XEGWBQH7S"
};

firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
var database = firebase.database();

var membersRef = database.ref('members');

membersRef.on("value", function(snapshot) {
    // console.log(snapshot.val());
    snapshot.forEach(function(childSnapshot){
        var childData = childSnapshot.val();
        console.log(childData['name']);
        var name = childData['name'];
        var branch = childData['branch'];
        var mail = childData['mail'];
        var github = childData['github'];
        var linkedin = childData['linkedin'];
        add_new_member(name, branch, mail, github, linkedin);
    });
 }, function (error) {
    console.log("Error: " + error.code);
});



function add_new_member(name, branch, mail, github, linkedin) {
    var new_member = '<div class="col-md-4" id="oc">'
                        +'<div id="sym1">'
                            +'<div class="fornt"><img style="height:84%" src="img/members/me.png" alt="img"><h2 id="fn">'+name+'</h2></div>'
                            +'<div class="back">'
                                +'<h2 >'+ name +'</h2>'
                                +'<hr style="margin-bottom: 1%;">'
                                +'<p id="textb">'+ branch +'</p>'
                                +'<p  id="textb">- 2023</p>'
                                +'<a href="https://swaraj.19je0845@ece.iitism.ac.in" add target="_blank" class="slo" style="padding-left: 1.6rem;" ><i class="fas fa-envelope"></i></a>'
                                +'<a href="https://github.com/swaraj-jain" add target="_blank" class="slo" ><i class="fab fa-github"></i></a>'
                                +'<a href="https://www.linkedin.com/in/swaraj-jain-875b821a2/" add target="_blank" class="slo"><i class="fab fa-linkedin-in icon"></i></a>'
                            +'</div>'
                        +'</div>'
                    +'</div>';
    $('.row').append(new_member);
}