import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./ParkingLotManager.css";
import ParkingLot from "../Model/ParkingLot";
import Navbar from "../Navbar/Navbar";

const parkingLot = new ParkingLot("PR123", 5, 10);

const ParkingLotManager = () => {
  const [ticket, setTicket] = useState("");
  const [vehicle, setVehicle] = useState({
    type: "",
    registration: "",
    color: "",
  });
  const [status, setStatus] = useState(parkingLot.getSlotStatus());
  const [existingRegistrations, setExistingRegistrations] = useState({
    car: [],
    bike: [],
    truck: [],
  });

  useEffect(() => {
    const registrations = { car: [], bike: [], truck: [] };
    status.flat().forEach((slot) => {
      if (slot && slot.vehicle) {
        registrations[slot.vehicle.type].push(slot.vehicle.registration);
      }
    });
    setExistingRegistrations(registrations);
  }, [status]);

  const handlePark = () => {
    if (
      vehicle.type &&
      existingRegistrations[vehicle.type].includes(vehicle.registration)
    ) {
      Swal.fire({
        title: "Registration Error",
        text: `A ${vehicle.type} with this registration number already exists.`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const newTicket = parkingLot.parkVehicle(vehicle);
    if (newTicket) {
      setTicket(newTicket);
      setStatus(parkingLot.getSlotStatus());
      Swal.fire({
        title: "Vehicle Parked!",
        text: `Your ticket number is ${newTicket}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Parking Failed",
        text: "There was an issue parking the vehicle.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleUnpark = () => {
    if (parkingLot.unparkVehicle(ticket)) {
      setTicket("");
      setStatus(parkingLot.getSlotStatus());
      Swal.fire({
        title: "Vehicle Unparked!",
        text: "The vehicle has been removed from the parking lot.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Unparking Failed",
        text: "Invalid ticket or the vehicle could not be found.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const getSlotClassName = (type) => {
    switch (type) {
      case "truck":
        return "slot truck";
      case "bike":
        return "slot bike";
      case "car":
        return "slot car";
      default:
        return "slot unknown";
    }
  };

  return (
    <>
      <Navbar />
      <div className="parking">
        <div className="park-vehicle">
          <div>
            <h2>
              Park Vehicle
              <hr />
            </h2>
            <div className="form-label">
              <label htmlFor="">Type of Vehicle: </label>
              <select
                value={vehicle.type}
                onChange={(e) =>
                  setVehicle({ ...vehicle, type: e.target.value })
                }
              >
                <option value="">Select Vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
              </select>
            </div>
            <div className="form-label">
              <label htmlFor="">Regd No:</label>
              <input
                type="text"
                placeholder="Registration"
                value={vehicle.registration}
                onChange={(e) =>
                  setVehicle({ ...vehicle, registration: e.target.value })
                }
              />
            </div>
            <div className="form-label">
              <label htmlFor="">Color:</label>
              <input
                type="text"
                placeholder="Color"
                value={vehicle.color}
                onChange={(e) =>
                  setVehicle({ ...vehicle, color: e.target.value })
                }
              />
            </div>
            <button onClick={handlePark}>Park</button>
          </div>
          <div>
            <h2>
              Unpark Vehicle
              <hr />
            </h2>
            <div className="form-label">
              <label htmlFor="">Ticket No:</label>
              <input
                type="text"
                placeholder="Ticket"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
              />
            </div>
            <button onClick={handleUnpark}>Unpark</button>
          </div>
        </div>
        <div className="parking-lot">
          <h2>Parking Lot Status</h2>
          {status.map((floor, floorIndex) => (
            <div key={floorIndex}>
              <h3>Floor {floorIndex + 1}</h3>
              <div className="floor">
                {floor.map((slot, slotIndex) => (
                  <div key={slotIndex} className={getSlotClassName(slot.type)}>
                    <div className="slot-info">
                      <div className="slot-number">Slot {slotIndex + 1}</div>
                      {slot.vehicle ? (
                        <>
                          <div>Registration: {slot.vehicle.registration}</div>
                          <div>Color: {slot.vehicle.color}</div>
                          <div>Ticket: {slot.vehicle.ticket}</div>{" "}
                        </>
                      ) : (
                        "Available"
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParkingLotManager;
