import * as React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
import { email, required } from "./modules/form/validation";
import RFTextField from "./modules/form/RFTextField";
import FormButton from "./modules/form/FormButton";
import FormFeedback from "./modules/form/FormFeedback";
import withRoot from "./modules/withRoot";
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
// import axios from '../api/axios';
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const LOGIN_URL='/auth';

function SignIn() {
  const { setAuth } = useContext(AuthContext);
  const [sent, setSent] = React.useState(false);
  const [errMsg, setErrMg] = useState("");

  const navigate=useNavigate();

  const errRef = useRef();

  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };
  useEffect(() => {
    setErrMg("");
  },[]);

  const handleSubmit = (e) => {
    console.log(e);
    //setSent(true);

    fetch("http://localhost:3000/API/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "email": e.email,
        "password": e.password,
      }),
    })
      .then(function (response) {
        // console.log(response.json());
        if (!response) {
          console.log("Il server non risp");
          setErrMg("Il server non risp");
        } else if (response?.status === 400) {
          setErrMg("Manca email o password");
        } else if (response?.status === 401) {
          setErrMg("Non autorizzato");
        } else if (response){ //se i dati sono corretti
          setErrMg("Loggato")
        }else{
          setErrMg("Login fallito");
        }
        //errRef.current.focus();
        return response.json();
      })
       .then(function (json) {
        if(!json.admin){
          navigate("/")
        }
        else{
          navigate("/sondaggi")}
        console.log(json);
      });
  };
  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Login
          </Typography>
          {/* <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/premium-themes/onepirate/sign-up/"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link> */}
          {/* </Typography> */}
        </React.Fragment>

        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              {/* EMAIL */}
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              {/* PASSWORD */}
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth

                // href="/sondaggi"
              >
                {submitting || sent ? "In progress…" : "Login"}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link
            underline="always"
            href="/premium-themes/onepirate/forgot-password/"
          >
            Hai dimenticato la password ?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
