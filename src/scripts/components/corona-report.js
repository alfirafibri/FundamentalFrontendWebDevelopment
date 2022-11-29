import css from 'bootstrap/dist/css/bootstrap.min.css';
import customCss from '../../style/style.css';

class CoronaReportItem extends HTMLElement{
  set coronaDunia(item){
    this._coronaDunia = item;
    this.render();
  }
  
  render(){
    console.log(css);
    const dateUpdated = new Date(this._coronaDunia.lastUpdate);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'Nopember', 'December'];
    this.innerHTML = '';
    this.innerHTML = `
    <style>
    ${css}
    ${customCss}
    </style>
    <br><br>
    
    <div class="table-responsive">
    <table class="table table-borderless">
    <h3><left><span class="text-blue-data">Data statistik Covid-19 di seluruh dunia</span></left></h3>
    <caption>Last Updated : ${dateUpdated.getDate()} ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}</caption>
    <thead>
    <tr text-align="center">
    <th scope="col">Confirmed</th>
    <th scope="col">Deaths</th>
    <th scope="col">Recovered</th>
    </tr>
    </thead>
    
    <tbody>
    <tr text-align="center">
    <td class="table-warning"><b>${this._coronaDunia.confirmed.value}</b></td>
    <td class="table-danger"><b>${this._coronaDunia.deaths.value}</b></td>
    <td class="table-success"><b>${this._coronaDunia.recovered.value}</b></td>
    </tr>
    </tbody>
    </table>
    </div>`;
  }
}

customElements.define('corona-report', CoronaReportItem);