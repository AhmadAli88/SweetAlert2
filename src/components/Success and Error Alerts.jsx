import swal from 'sweetalert';

const StatusAlerts = () => {
  const showSuccess = () => swal('Good Job!', 'You did it!', 'success');
  const showError = () => swal('Oops!', 'Something went wrong!', 'error');

  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
    </div>
  );
};

export default StatusAlerts;
