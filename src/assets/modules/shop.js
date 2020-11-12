import axios from 'axios';

// DOM References
const obtenerDataBtn = document.querySelector('#obtener-data');


if (obtenerDataBtn) {
  obtenerDataBtn.onclick = () => {

    axios.get('http://localhost:3000/api/v1/product')
      .then(console.log);
  
  }
}


