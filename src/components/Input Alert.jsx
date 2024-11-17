import swal from 'sweetalert';

const InputAlert = () => {
  const showInputPrompt = () => {
    swal('Enter your name:', {
      content: 'input',
    }).then((value) => {
      swal(`Hello, ${value || 'Stranger'}!`);
    });
  };

  return <button onClick={showInputPrompt}>Enter Name</button>;
};

export default InputAlert;
