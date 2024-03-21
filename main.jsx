const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);

let date = new Date();

let day = date.getDay();

let weekDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

let dayName = weekDay[day];

const ShowName = ({ name }) => {
    return (<h1>{name}</h1>)
}

const ShowDay = ({ day }) => {
    return (<h1>{day}</h1>)
}

const elementsToRender = (
<>
    <ShowName name = 'Diana'/>
    <ShowDay day = {dayName}/>

</>

)

root.render(elementsToRender)