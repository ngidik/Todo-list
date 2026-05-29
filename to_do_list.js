const to_do_list = [{
    name: 'Cook',
    due_time: '13.30',
    dueDate: '2026-05-22'
},{ name: 'Gym',
    due_time: '15.45',
    dueDate: '2026-05-23'
}];

function display_on_web(){
    let display = '';
    //Here i am traversing through task in an array
    for(let i = 0; i< to_do_list.length; i++){
        const value_at_pos_obj = to_do_list[i];//using i value--- storing the task i/m currently pointing to with i
        //const name = value_at_pos_obj.name;
        //const dueDate = value_at_pos_obj.dueDatel
        //can use the above one or the below one
        const {name,due_time, dueDate} = value_at_pos_obj;
        const html_code = `
            <div>${name}</div>
            <div>${due_time}</div>
            <div>${dueDate}</div> 
            <button onclick ="
                to_do_list.splice(${i},1);
                display_on_web();
                " class ="to-do-delete-btn">Delete
            </button>
            `;//storing the code that I'm going to need for each task
        display += html_code;
    }
    document.querySelector('.array-content-display').innerHTML = display;
}
//The below code is the code that is going to run when pressing the add button
function add_the_task(){
    const task = document.querySelector('.input-Todo-bar');//Getin the text currently typed in the bar
    const name = task.value;
    const date = document.querySelector('.date-box');
    const _time = document.querySelector('.time-box');
    const due_time = _time.value;
    const dueDate = date.value;
    to_do_list.push({
            name,
            due_time,
            dueDate
        }
    ); //Adding a task to an array
    display_on_web();//getting the values then displaying them
    task.value = ''; 
}