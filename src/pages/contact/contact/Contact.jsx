import React from "react";
import Nav from "../../shared/nav/Nav";
import "./contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div>
      <Nav />
      <div className="contact-head">
        <h1 className="m-5">
          GET IN <span>TOUCH</span>
        </h1>

        <div className="container">
          <div className="row mx-0 px-0">
            <div className="col-md-4 contact-left">
              <h3>DON'T BE SHY !</h3>

              <h6 className="mb-4" style={{ fontWeight: 500 }}>
                Feel free to get in touch with me. I am always opento discussing
                new projects, creative ideas or opportunities to part of your
                visions.
              </h6>

              <div className="row mx-0 px-0 my-4">
                <div className="col-2">
                  <span>
                    <i className="fas fa-map"></i>
                  </span>
                </div>
                <div className="col-10">
                  <p> ADDRESS POINT </p>
                  <h6> Pabna, Bangladesh </h6>
                </div>
              </div>

              <div className="row mx-0 px-0 my-4">
                <div className="col-2">
                  <span>
                    <i className="fas fa-envelope-open"></i>
                  </span>
                </div>
                <div className="col-10">
                  <p> MAIL ME </p>
                  <h6> atikhasan801@gmail.com </h6>
                </div>
              </div>
            </div>

            <div className="col-md-8 contact-right">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="YOUR NAME"
                  {...register("name", { required: true, maxLength: 80 })}
                />
                <input
                  className="form-control"
                  type="email"
                  placeholder="YOUR EMAIL"
                  {...register("email", { required: true, maxLength: 100 })}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="YOUR SUBJECT"
                  {...register("subject", { required: true })}
                />
                <textarea
                  className="form-control"
                  placeholder="YOUR MESSAGE"
                  {...register("message", { required: true })}
                />

                <button> SEND MESSAGE </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
