import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Task1 extends React.Component {
    constructor(props) {
        super(props);

        this.ChangeStyle = this.ChangeStyle.bind(this);
    }

    ChangeStyle(target) {
        let length = (target.value + "").length;

        if (length >= 4 && length <= 9)
            target.style.border = "5px solid green";
        else
            target.style.border = "5px solid red";
    }

    render() {
        let info = (<h1>1</h1>);
        return(
            <div>
                { info}
                <input
                    type="text"
                    onChange={ (event) => this.ChangeStyle(event.target)}
                    style={{
                        border: "5px solid red",
                    }}
                />
            </div>
        );
    }
}

function Task2(props) {
    const [employees, setEmployee] = useState([
        { id: 1, name: "Микола", surname: "Шевченко", salary: 1540, sex: "male" },
        { id: 2, name: "Василь", surname: "Чумак", salary: 1950, sex: "male" },
        { id: 3, name: "Галина", surname: "Стеценко", salary: 1130, sex: "female" },
    ]);


    const addNewEmployee = () => {
        setEmployee([...employees, {
            id: employees[employees.length - 1].id + 1,
            name: document.getElementById("inputNameId").value,
            surname: document.getElementById("inputSurnameId").value,
            salary: document.getElementById("inputSalaryId").value,
            sex: document.getElementById("selectSexId").value,
        }]);
    }


    const table = employees.map(employee =>
            <tr>
                <td>{ employee.name }</td>
                <td>{ employee.surname }</td>
                <td>{ employee.salary }</td>
                <td>{ employee.sex }</td>
            </tr>
        );

        let info = (<h1>2</h1>);
    return(
        <div>
            { info }
            <table border="1" >
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Зарплата</th>
                    <th>Стать</th>
                </tr>
                { table }
            </table>
            <div style={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                padding: "15px 10px",
                margin: "10px 0px"
            }}>
                <input id="inputNameId" type="text" placeholder="Ім'я" /><br />
                <input id="inputSurnameId" type="text" placeholder="Прізвище" /><br />
                <input id="inputSalaryId" type="number" placeholder="Зарплата" /><br />
                <select id="selectSexId">
                    <option selected disabled>Стать</option>
                    <option value="male" >Чоловіча</option>
                    <option value="female" >Жіноча</option>
                </select><br />
                <button onClick={ () => addNewEmployee() }>Додати</button>
            </div>
        </div>
    );
}

function Task3(props) {

    const arrayEmployees = [
        { id: 1, name: "Ім'я_1-го", surname: "Прізвище_1-го", salary: 16000 },
        { id: 2, name: "Ім'я_2-го", surname: "Прізвище_2-го", salary: 18500 },
        { id: 3, name: "Ім'я_3-го", surname: "Прізвище_3-го", salary: 18000 },
        { id: 4, name: "Ім'я_4-го", surname: "Прізвище_4-го", salary: 19000 },
        { id: 5, name: "Ім'я_5-го", surname: "Прізвище_5-го", salary: 31000 },
        { id: 6, name: "Ім'я_6-го", surname: "Прізвище_6-го", salary: 21500 },
        { id: 7, name: "Ім'я_7-го", surname: "Прізвище_7-го", salary: 25000 },
        { id: 8, name: "Ім'я_8-го", surname: "Прізвище_8-го", salary: 15000 },
        { id: 9, name: "Ім'я_9-го", surname: "Прізвище_9-го", salary: 18000 },
        { id: 10, name: "Ім'я_10-го", surname: "Прізвище_10-го", salary: 50000 },
        { id: 11, name: "Ім'я_11-го", surname: "Прізвище_11-го", salary: 17000 },
        { id: 12, name: "Ім'я_12-го", surname: "Прізвище_12-го", salary: 15500 },
        { id: 13, name: "Ім'я_13-го", surname: "Прізвище_13-го", salary: 32000 },
        { id: 14, name: "Ім'я_14-го", surname: "Прізвище_14-го", salary: 24000 },
        { id: 15, name: "Ім'я_15-го", surname: "Прізвище_15-го", salary: 23500 },
        { id: 16, name: "Ім'я_16-го", surname: "Прізвище_16-го", salary: 15700 },
        { id: 17, name: "Ім'я_17-го", surname: "Прізвище_17-го", salary: 16800 },
        { id: 18, name: "Ім'я_18-го", surname: "Прізвище_18-го", salary: 19500 },
        { id: 19, name: "Ім'я_19-го", surname: "Прізвище_19-го", salary: 21500 },
        { id: 20, name: "Ім'я_20-го", surname: "Прізвище_20-го", salary: 23000 },
        { id: 21, name: "Ім'я_21-го", surname: "Прізвище_21-го", salary: 33000 },
        { id: 22, name: "Ім'я_22-го", surname: "Прізвище_22-го", salary: 35000 },
        { id: 23, name: "Ім'я_23-го", surname: "Прізвище_23-го", salary: 37500 },
        { id: 24, name: "Ім'я_24-го", surname: "Прізвище_24-го", salary: 42000 },
        { id: 25, name: "Ім'я_25-го", surname: "Прізвище_25-го", salary: 51000 },
        { id: 26, name: "Ім'я_26-го", surname: "Прізвище_26-го", salary: 36000 },
        { id: 27, name: "Ім'я_27-го", surname: "Прізвище_27-го", salary: 23700 },
        { id: 28, name: "Ім'я_28-го", surname: "Прізвище_28-го", salary: 25000 },
        { id: 29, name: "Ім'я_29-го", surname: "Прізвище_29-го", salary: 18000 },
        { id: 30, name: "Ім'я_30-го", surname: "Прізвище_30-го", salary: 16000 },
        { id: 31, name: "Ім'я_31-го", surname: "Прізвище_31-го", salary: 17500 },
        { id: 32, name: "Ім'я_32-го", surname: "Прізвище_32-го", salary: 34000 },
        { id: 33, name: "Ім'я_33-го", surname: "Прізвище_33-го", salary: 31000 },
        { id: 34, name: "Ім'я_34-го", surname: "Прізвище_34-го", salary: 28000 },
    ]


    const nextPaige = () => {
        if (paige < maxPaige) {
            setPaige(1 + paige);

            setEmployee(arrayEmployees.filter(employee =>
                employee.id <= (paige + 1) * 10 && employee.id > paige * 10));
            }
    }
    const prevPaige = () => {
        if (paige > 1) {
            setPaige(paige - 1);

            setEmployee(arrayEmployees.filter(employee =>
                employee.id <= (paige - 1) * 10 && employee.id > (paige - 2) * 10 ));
        }
    }


    const maxPaige = Math.ceil(arrayEmployees.length / 10);
    const [paige, setPaige] = useState(1);

    const [employees, setEmployee] = useState(arrayEmployees.filter(employee =>
        employee.id <= paige * 10 && employee.id >= paige));

    const table = employees.map(employee => {
            return (
                <tr>
                    <td>{ employee.name }</td>
                    <td>{ employee.surname }</td>
                    <td>{ employee.salary }</td>
                </tr>
            );
    });

    let info = (<h1>3</h1>);
    return(
        <div style={{ width: "350px" }} >
            { info }
            <div align="center" style={{ margin: "10px 0px" }} >
                <button onClick={ () => prevPaige() } >
                    Назад
                </button>

                <span style={{ margin: "0px 10px" }} >
                    { paige }
                </span>

                <button onClick={ () => nextPaige() } >
                    Далі
                </button>
            </div>

            <table border="1" style={{ width: "100%" }} >
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Зарплата</th>
                </tr>
                { table }
            </table>
        </div>
    );
}

function Task4(props) {

    const [cities, setCity] = useState(props?.city ?? "");
    const [select, setSelect] = useState(props?.select ?? "");

    const addNewCity = () => {

        let input = document.getElementById("inputId");
        
        if (input.value !== undefined || input.value.length > 0) {
            
            const newCity = <option value={ input.value }>{ input.value }</option>
            setCity([...cities, newCity]);
            input.value = "";
        }
    }
    const changeSelect = (target) => {

        setSelect(target.value);
    }

    let info = (<h1>4</h1>);
    return(
        <div>
            { info }
            <div>
                <input id="inputId" type="text"/>
                <button onClick={ () => addNewCity() }>Add this city</button>
            </div>
            <select
                style={{ margin: "10px 0px", minWidth: "175px" }}
                onChange={ (event) => changeSelect(event.target) }
            >
                <option selected disabled >Виберіть місто</option>
                { cities }
            </select>
            <p>Місто: { select }</p>
        </div>
    );
}

function Task5(props) {

    const [result, setResult] = useState(props?.result ?? "");

    const converting = () => {

        const selectConvertFrom = document.getElementById("selectConvertFromId").value;
        const selectConvertTo = document.getElementById("selectConvertToId").value;
        const quantity = document.getElementById("inputQuantityId").value;

        if (selectConvertFrom === "usd") {
            if (selectConvertTo === "usd") setResult((quantity * 1.0).toFixed(2));
            else if (selectConvertTo === "eur") setResult((quantity * 0.92).toFixed(2));
            else if (selectConvertTo === "uah") setResult((quantity * 36.84).toFixed(2));
        }
        else if (selectConvertFrom === "eur") {
            if (selectConvertTo === "usd") setResult((quantity * 1.08).toFixed(2));
            else if (selectConvertTo === "eur") setResult((quantity * 1.0).toFixed(2));
            else if (selectConvertTo === "uah") setResult((quantity * 39.85).toFixed(2));
        }
        else if (selectConvertFrom === "uah") {
            if (selectConvertTo === "usd") setResult((quantity * 36.84).toFixed(2));
            else if (selectConvertTo === "eur") setResult((quantity * 39.85).toFixed(2));
            else if (selectConvertTo === "uah") setResult((quantity * 1.0).toFixed(2));
        }
        }

        let info = (<h1>5</h1>);
    return(
        <div>
            { info }
            <p>
            3 -
                <select id="selectConvertFromId" style={{ margin: "0px 10px" }} >
                    <option selected disabled >Виберіть валюту</option>
                    <option value="usd">US Dollar</option>
                    <option value="eur">Euro</option>
                    <option value="uah">Ukrainian Hryvnia</option>
                </select>
                В -
                <select id="selectConvertToId" style={{ margin: "0px 10px" }} >
                    <option selected disabled >Виберіть валюту</option>
                    <option value="usd">US Dollar</option>
                    <option value="eur">Euro</option>
                    <option value="uah">Ukrainian Hryvnia</option>
                </select>
            </p>
            <div>
                <input id="inputQuantityId" type="number"/>
                <button onClick={ () => converting() }>Конвертувати</button>
                <p>Результат: { result }</p>
            </div>
        </div>
    );
}

function Task6_7(props) {
    const [test] = useState([
        {
            id: 1,
            question: "Питання 1",
            answers: [
                "Відповідь 1",
                "Відповідь 2",
                "Відповідь 3",
                "Відповідь 4",
                "Відповідь 5",
            ],
            right: 3,
        },
        {
            id: 2,
            question: "Питання 2",
            answers: [
                "Відповідь 1",
                "Відповідь 2",
                "Відповідь 3",
                "Відповідь 4",
                "Відповідь 5",
            ],
            right: 1,
        },
        {
            id: 3,
            question: "Питання 3",
            answers: [
                "Відповідь 1",
                "Відповідь 2",
                "Відповідь 3",
                "Відповідь 4",
                "Відповідь 5",
            ],
            right: 4,
        },
    ]);

    const checkAnswer = (target, right, idQuestion, answerId) => {
        let obj = document.getElementById(idQuestion);

        if (answerId+1 === right)
            obj.style.background = "green";
        else
            obj.style.background = "red";
    }

    const temp = test.map(task =>
            <div >
                <h3 id={ task.id }>{ task.question }</h3>
                <ul style={{ listStyle: "none" }}>
                    {
                        task.answers.map(answer =>
                            <li key={ task.id + answer }>
                                <label style={{ cursor: "pointer" }}>
                                    <input type="radio" name={task.question} value={ answer }
                                        onClick={ (event) => checkAnswer(
                                                event.target,
                                                task.right,
                                                task.id,
                                                task.answers.indexOf(answer)
                                            ) }
                                    />
                                    <span>{ answer }</span>
                                </label>
                            </li>
                        )
                    }
                </ul>
            </div>
        );

        let info = (<h1>6-7</h1>);
    return (
        <div>
            { info }
            { temp }
        </div>
    );
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <div>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
            <Task6_7 />
        </div>
    );