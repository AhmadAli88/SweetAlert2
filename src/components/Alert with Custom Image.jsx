import swal from 'sweetalert';

const ImageAlert = () => {
  const showImageAlert = () => {
    swal({
      title: 'Custom Image',
      text: 'This alert has a custom image!',
      icon: 'https://via.placeholder.com/150',
    });
  };

  return <button onClick={showImageAlert}>Show Image Alert</button>;
};

export default ImageAlert;
