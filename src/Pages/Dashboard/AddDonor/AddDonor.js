import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/UseAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import "./AddDonor.css";
import swal from "sweetalert";

const AddDonor = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/donors", data).then((res) => {
      if (res.data.insertedId) {
        swal({
          title: "Donor Successfully Added!",
          icon: "success",
        });
        reset();
      }
    });
  };
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <form className="addDonorForm" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Donor</h2>
          <input
            className="donorInput"
            placeholder="Donor Name"
            defaultValue={user.displayName}
            required
            type="text"
            {...register("Name")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Blood Group"
            required
            type="text"
            {...register("BloodGroup")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Donor Phone"
            required
            type="text"
            {...register("Phone")}
          />
          <br />
          <input
            className="donorInput"
            placeholder="Last Donate Date"
            required
            type="date"
            {...register("LastDonate")}
          />
          <br />
          <input className="button" type="submit" />
        </form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default AddDonor;
