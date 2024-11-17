import swal from 'sweetalert';

const CustomButtonAlert = () => {
  const showAlert = () => {
    swal({
      title: 'Custom Buttons',
      text: 'You can have custom button text!',
      icon: 'info',
      buttons: {
        cancel: 'No Way!',
        confirm: 'Yes, Do It!',
      },
    }).then((value) => {
      if (value) {
        swal('Great Choice!', 'You clicked Yes!', 'success');
      } else {
        swal('Maybe Next Time!', 'You clicked No!', 'error');
      }
    });
  };

  return <button onClick={showAlert}>Show Alert</button>;
};

export default CustomButtonAlert;
