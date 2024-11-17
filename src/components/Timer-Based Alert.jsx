import swal from 'sweetalert';

const TimerAlert = () => {
  const showTimerAlert = () => {
    swal('This will close in 3 seconds!', {
      icon: 'info',
      buttons: false,
      timer: 3000,
    });
  };

  return <button onClick={showTimerAlert}>Show Timer Alert</button>;
};

export default TimerAlert;
