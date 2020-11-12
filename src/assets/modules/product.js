import axios from 'axios';
import toastr from 'toastr';
import Swal from 'sweetalert2';

const aggregeForm  = document.querySelector('#aggrege-product-form');
const aggregeBtn = document.querySelector('#aggrege-product-btn');


console.log(aggregeForm);

if( aggregeForm ) {
  
  
  // aggregeBtn.disabled = 'true';
  aggregeForm.addEventListener('submit', e => {

    e.preventDefault();

    const images = e.target.Prod_Images.value.split(';')
    

    axios({
      method: 'post',
      url: 'http://localhost:3000/api/v1/product',
      data: {
        Prod_Title: e.target.Prod_Title.value,
        Prod_Price: e.target.Prod_Price.value,
        Prod_Images: images,
        Prod_Description: e.target.Prod_Description.value,
        Prod_Videos: []
      }
    })
      .then(response => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Se ha guardado el producto!`,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          aggregeForm.reset();
          window.location.href = '/shop';
        });

      }).catch(error => {
        
        let errors = error.response.data.errors;
        errors.map( err => {
          // Display an error toast, with a title
          toastr.error(`${err.msg}`, 'Error!')
        })

      });

  });

}