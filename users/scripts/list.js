function createRow(users){
    //travel array users
    for(let i=0;i<users.length;i++){
        //get each one of the users
        let user=users[i]
        //display the user
        let userData=`<tr><td>${user.email}</td>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.age}</td></tr>`;
        //switch li to TD
        console.log(userData);
        $(".usersList").append(userData);
    }
}
function init(){
    console.log("Listing Users");
    let users=readUsers();
    createRow(users);
}
window.onload=init;