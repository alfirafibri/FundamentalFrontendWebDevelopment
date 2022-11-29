import '../scripts/components/header-content.js';
import '../scripts/components/footer-content.js';
import '../scripts/components/corona-report.js';
import './components/indo-report';


const main = () => {
    const getDunia = () => {
        fetch('https://covid19.mathdro.id/api')
            .then(response => response.json())
            .then(results => {
                const coronaReportElement = document.querySelector('corona-report');
                coronaReportElement.coronaDunia = results;
            })
            .catch(() => showMessage());
    };

    const showMessage = (message = 'Check Your Internet Connection, Please!!!') =>{
        alert(message);
    };

    getDunia();
    
    const getIndonesia = () => {
        fetch('https://covid19.mathdro.id/api/countries/Indonesia')
            .then(response => response.json())
            .then(results => {
                const coronaReportElement = document.querySelector('indo-report');
                coronaReportElement.coronaIndonesia = results;
            })
            .catch(() => showMessage());
    }

    getIndonesia();
};

export default main;