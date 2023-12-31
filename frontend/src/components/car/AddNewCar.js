import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../navbar";
// import { useAuthContext } from "../../hooks/useAuthContext";

export default function AddNewCar() {
  const navigate = useNavigate();
  //   const { user } = useAuthContext();
  //console.log(user);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [isFavorite, setisFavorite] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [transition, setTransition] = useState("");
  const [fuel, setFuel] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  //   const handleDropdown = (event) => {
  //     setType(event.target.value);
  //   };

  function sendTrainData(event) {
    event.preventDefault();

    const newTrain = {
      name,
      description,
      startStation,
      endStation,
      startTime,
      endTime,
      imageLink,
    };

    axios
      .post("http://localhost:8000/train/addTrain/", newTrain)
      .then((res) => {
        window.alert("New Train Is Added !");
        navigate("/allTrains");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <NavigationBar/>
      <form style={{ marginLeft: "30%", marginTop: "20px" }}>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Image URL :
            </label>
            <input
              type="text"
              onChange={(event) => {
                setImageLink(event.target.value);
              }}
            />
          </div>
        </div>
        <br />
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Train Name :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-6">
            <label className="labels" style={{ float: "left" }}>
              Enter Description :
            </label>
            <textarea
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter startStation :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setStartStation(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter end Station :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setendStation(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row md-6">
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter startTime :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setStartTime(event.target.value);
              }}
            />
          </div>
          <div className="col-md-3">
            <label className="labels" style={{ float: "left" }}>
              Enter end Time :
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(event) => {
                setEndTime(event.target.value);
              }}
            />
          </div>
        </div>
        <div
          className="row md-6"
          style={{ marginTop: "10px", marginLeft: "1px" }}
        >
          <button
            style={{ width: "80px" }}
            className="btn btn-success"
            type="button"
            onClick={sendTrainData}
          >
            Add Train
          </button>
        </div>
      </form>
    </div>
  );
}
