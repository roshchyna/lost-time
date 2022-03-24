import logo from './logo.svg';
import './App.css';
import moment from "moment";

const styles = {
    label: {
        fontWeight: 700,
        fontSize: 30
    },
    numbers: {
        fontWeight: 700,
        fontSize: 90
    }
}

const App = () => {

    const givenWar = moment("2022-02-24", "YYYY-MM-DD");
    const currentWar = moment().startOf('day');
    const daysWar = moment.duration(givenWar.diff(currentWar)).asDays()


    const startMartialLaw = moment("2022-03-24", "YYYY-MM-DD");
    const endMartialLaw = moment("2022-04-25", "YYYY-MM-DD");
    const daysEndMartialLaw= moment.duration(startMartialLaw.diff(endMartialLaw)).asDays().toFixed();

    const startMobilization = moment("2022-03-24", "YYYY-MM-DD");
    const endMobilization = moment("2022-05-24", "YYYY-MM-DD");
    const daysMobilizations = moment.duration(startMobilization.diff(endMobilization)).asDays().toFixed();


    return (
        <div className="App">
            <div style={styles.label}>Дней выпало из жизни/идет война</div>
            <div style={styles.numbers}> {Math.abs(daysWar)}</div>
            <div style={styles.label}>До конца мобилизации</div>
            <div style={styles.numbers}> {Math.abs(daysEndMartialLaw)}</div>
            <div style={styles.label}>До конца военного положения</div>
            <div style={styles.numbers}> {Math.abs(daysMobilizations)}</div>
        </div>
    );
}

export default App;
