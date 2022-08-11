const addBtn = document.getElementById('door');
const lightBtn = document.getElementById('light');
var numDoor = 0;
var numLight = 0;
addBtn.addEventListener('click', e => {
    e.preventDefault();
    numDoor++;
    console.log(numDoor);
    if(numDoor%2==0){
        axios({
            method: 'put',
            url: '/DoorOn',
            data: {
            }
        });
    }
    else{
        axios({
            method: 'put',
            url: '/DoorOff',
            data: {
            }
        });
    }
});
lightBtn.addEventListener('click', e => {
    e.preventDefault();
    numLight++;
    if(numLight%2==0){
        axios({
            method: 'put',
            url: '/LightOn',
            data: {
            }
        });
    }
    else{
        axios({
            method: 'put',
            url: '/LightOff',
            data: {
            }
        });
    }
});
// addBtn.addEventListener('click', e => {
//         axios({
//             method: 'put',
//             url: '/DoorOn',
//             data: {
//             }
//         });
// });


