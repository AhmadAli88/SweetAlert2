import swal from 'sweetalert';

const LoadingAlert = () => {
  const showLoading = () => {
    swal('Loading...', {
      buttons: false,
      closeOnClickOutside: false,
    });

    setTimeout(() => {
      swal('Done!', 'Data has been loaded.', 'success');
    }, 3000);
  };

  return <button onClick={showLoading}>Show Loading</button>;
};

export default LoadingAlert;
