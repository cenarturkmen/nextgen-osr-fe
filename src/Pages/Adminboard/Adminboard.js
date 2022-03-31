import Navbar from './../../Components/Navbar/Navbar';

export default function Adminboard() {
  if(localStorage.getItem('isLoggedIn') && localStorage.getItem('isLoggedIn') === 'true') {
  return (
    <div>
      <Navbar />
      <h1>Adminboard</h1>
    </div>
  );
  } else {
    window.location.href = '/login';
}
}
