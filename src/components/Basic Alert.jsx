import swal from 'sweetalert';

const BasicAlert = () => {
  const showAlert = () => {
    swal('Hello!', 'This is a basic alert!', 'success');
  };

  return <button onClick={showAlert}>Show Alert</button>;
};

export default BasicAlert;
