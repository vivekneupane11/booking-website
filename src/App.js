import { addDoc, collection, getDocs } from "firebase/firestore";
import { CheckCheckIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { db } from "./config/configFirebase";
import { CARS } from "./constants/car";

function App() {
  const [selectedCar, setSelectedCar] = useState(CARS[0]);
  const [appointment,setAppointment] = useState()
  const notify = () => toast("Wow so easy!");


  const handleBooking = async (e)=>{
e.preventDefault();
const formData = new FormData(e.target)
try{
  const docRef = await addDoc(collection(db,'appointment'),{
    name:formData.get('name'),
    email:formData.get('email'),
    message:formData.get('message'),
    modal:selectedCar.name
  })
  notify('Your appointment has been booked')
}
catch(err){
  console.log("Cannot book your appointment",err)
}
}


useEffect(()=>{
  const getData = async()=>{
const docSnap = await getDocs(collection(db,'appointment'))
const data = docSnap.docs.map(doc=>doc.data())
  console.log("🚀 ~ getData ~ data:", data)
  setAppointment(data)
  }
  getData()
},[])

  return (
    <main>
      <img
        height={100}
        src="https://media.istockphoto.com/id/1408605259/vector/auto-sports-vehicle-silhouette.jpg?s=612x612&w=0&k=20&c=--lwIV-ayDVrjistgR22-B9xFic1xsAusMxxzu6Mjhw="
        alt="logo"
      />
      <section>
        <img
          className="left-img"
          src="https://i.pinimg.com/736x/1a/3f/d6/1a3fd6251cc09bbd6757d1463fb5521f.jpg"
          alt="car"
        />
        <div className="form-container">
          <h2>Book it now!</h2>
          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                name="email"
                required
              />
            </div>

            <label> Choose your modal</label>
            <div className="cars-container">
              {CARS.map((car, i) => (
                <div onClick={() => setSelectedCar(car)} key={i}>
                  <img
                    height={"120px"}
                    width={"120px"}
                    src={car.src}
                    alt={car.name}
                    style={{ objectFit: "contain" }}
                  />
                  {car.name === selectedCar.name && (
                    <CheckCheckIcon className="check-icon" color="green" />
                  )}
                </div>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                placeholder="Enter your message"
                id="message"
                name="message"
                required
              />
            </div>

            <input type="submit"></input>
          </form>
        </div>
      </section>
      <ToastContainer  />

      {
      appointment &&  appointment.length > 0 && <div>
{   appointment.map((data,i)=><>
        <p>{data.name}</p></>)
      }
      </div>
     
      }

    </main>
  );
}

export default App;
