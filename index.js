(function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-all-clear');
    const equal = document.querySelector('.btn-equal');

    // let answer = eval(screen.value);

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value; 
        })
    });


    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = '';
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
    })


}) ();