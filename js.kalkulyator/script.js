


function Calculator() {
    const container = document.createElement('div');

    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.backgroundColor = 'orange';
    container.style.width = '500px';
    container.style.height = '600px';
    container.style.borderRadius = '10%';

    
    

    const value1 = document.createElement('input');
    value1.style.width= `300px`
    value1.style.height= `50px`
    value1.type = 'number';
    value1.id = 'value1';
    value1.placeholder = 'Value 1';
    container.appendChild(value1);

    const value2 = document.createElement('input');
     value2.style.width= `300px`
    value2.style.height= `50px`
    value2.type = 'number';
    value2.id = 'value2';
    value2.placeholder = 'Value 2';
    container.appendChild(value2);

    
    const result = document.createElement('div');
    result.id = 'result';
    result.style.backgroundColor = 'black';
    result.style.color = 'white';
    result.style.padding = '10px';
    result.style.marginTop = '10px';
    result.style.fontSize = '20px';
    result.style.width = '300px';
    result.innerText = 'Nəticə';
    container.appendChild(result);

    ['Addition', 'Subtract', 'Multiply', 'Division'].forEach(btn => {
        const button = document.createElement('button');
        button.innerText = btn;
        button.style.width= `300px`;
        button.style.display = 'block';
        button.style.height= `50px`;
        button.onclick = () => calculate(btn.toLowerCase());
        container.appendChild(button);
    });

    
    document.body.appendChild(container);
}


function calculate(btn) {
    const value1 = (document.getElementById('value1').value);
    const value2 = (document.getElementById('value2').value);
    let result;

    if (isNaN(value1) || isNaN(value2)) {
        result = " iki ədəd daxil et";
    } else {
        switch (btn) {
            case 'addition':
                result = value1 + value2;
                break;
            case 'subtract':
                result = value1 - value2;
                break;
            case 'multiply':
                result = value1 * value2;
                break;
            case 'division':
                result = value1 / value2 ;
        }
    }

    document.getElementById('result').innerText =  + result;
}


Calculator();








