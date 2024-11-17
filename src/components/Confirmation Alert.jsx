import swal from 'sweetalert';

const ConfirmAlert = () => {
  const showConfirmation = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal('Poof! Your file has been deleted!', { icon: 'success' });
      } else {
        swal('Your file is safe!');
      }
    });
  };

  return <button onClick={showConfirmation}>Delete File</button>;
};

export default ConfirmAlert;
