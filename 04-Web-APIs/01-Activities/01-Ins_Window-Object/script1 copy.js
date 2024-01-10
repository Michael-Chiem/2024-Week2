var user = {
  firtName: "Michael",
  lastname: "Chiem",
  fullName: function() {
    console.log(this)
    console.log(this.firtName + " " +this.lastname)
    
  }
}

user.fullName();

//This is a reference to an object that is execute the current running function.