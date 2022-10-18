import { useState } from "react";
import axios from "axios";

import control from "./../../history";
import API from "./../../global";

function Create() {
  // document.body.style.backgroundColor = "#1C2833";

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const change = (event) => {
    setUsuario(event.target.value);
  };
  const change2 = (event) => {
    setClave(event.target.value);
  };

  const verify = async () => {
    let data = await axios
      .post(API + "/api/auth/register", {
        usuario: usuario,
        clave: clave,
        rol: 1
      })
      .catch((errr) => {
        alert(errr);
      });
    control.push("/logiin");
    window.location.reload(true);
  };
  const tag = {
    backgroundColor: "#EEE",
  };
  const tag2 = {
    borderRadius: "25px",
  };
  return (
    <>
      <section class="vh-100" style={tag}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={tag2}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                             Usuario
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              value={usuario} onChange={change}
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">
                            Clave
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              value={clave} onChange={change2}
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={verify}  type="button" class="btn btn-primary btn-lg">
                            Registrar
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Create;