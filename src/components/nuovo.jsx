import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from "@mui/material";

import { useNavigate } from 'react-router-dom';

import AppAppBarAdmin from '../template/modules/views/AppAppBarAdmin'

import { LocalizationProvider } from '@mui/x-date-pickers';

import dayjs from 'dayjs';
import { itIT } from '@mui/x-date-pickers/locales';
import "dayjs/locale/it"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers';






export default function Nuovo() {

  const navigate = useNavigate();

  const [dati, setDati] = useState({
    titolo: "",
    sottotitolo: "",
    descrizione: "",
    dataInizio: dayjs(),
    dataFine: dayjs(),
    emailCreatore: "admin@telematicainformatica.it",
    stato: "bozza"
  });
 


  const cambiaTitolo = (e) => {
    setDati((params) => {
      return {
        ...params,
        titolo: e.target.value,
      }
    })
  };
  const cambiaSottotitolo = (e) => {
    setDati((params) => {
      return {
        ...params,
        sottotitolo: e.target.value,
      }
    })
  };
  const cambiaDescrizione = (e) => {
    setDati((params) => {
      return {
        ...params,
        descrizione: e.target.value,
      }
    })
  };


  const setDataInizio = (e) => {
    console.log(e.$d)

    if((dati.dataFine)< (dayjs(e.$d))){
      console.log("if")
      setDataFine(e)
    }

    setDati((params) => {
      return {
        ...params,
        dataInizio: (e.$d)
      }
    })

  };
  const setDataFine = (e) => {
    console.log(e.$d)
    setDati((params) => {
      return {
        ...params,
        dataFine: (e.$d),
      }
    })
  };
  const cambiaEmailCreatore = (e) => {
    setDati((params) => {
      return {
        ...params,
        emailCreatore: e.target.value,
      }
    })
  };
  const cambiaStato = (e) => {
    setDati((params) => {
      console.log(e)
      return {
        ...params,
        stato: e.target.value,
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dati);
    navigate("/inserisciDomande", { state: dati })

    // Fetch che passa i parametri da passare al db
    // fetch("http://localhost:3000/API/postSondaggio1", {
    //   method: "POST", headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     "titolo": dati.titolo,
    //     "sottotitolo": dati.sottotitolo,
    //     "descrizione": dati.descrizione,
    //     "dataInizio": dati.dataInizio,
    //     "dataFine": dati.dataFine,
    //     "emailCreatore": dati.emailCreatore,
    //     "stato": dati.stato
    //   })
    // })
    //   .then(function (response) {
    //     //il DB risponde con un json (il sondaggio appena trovato)
    //     return response.json()
    //   })
    //   .then(function (json) {
    //     //prendo l'ID del sondaggio da questo json
    //     let idNuovoSondaggio = json._id
    //     console.log(idNuovoSondaggio)
    //     return idNuovoSondaggio
    //   })
    //   //Funzione a cui navigare
    //   .then((idNuovoSondaggio) =>
    //     //passo questo ID alla pagina successiva
    //     navigate("/inserisciDomande/"+ idNuovoSondaggio)
    //   )
    //   .catch(function (err) {
    //     console.log("errore fetch: " + err.message);
    //   })

  };

  return (



    <Box
      sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >

      <form onSubmit={handleSubmit}>
        <div>

          <TextField
            id="campo-titolo"
            name='titolo'
            value={dati.titolo}
            label="Titolo"
            multiline
            maxRows={4}
            variant="outlined"
            type={"text"}
            onChange={cambiaTitolo}

          />

          <TextField
            id="campo-sottotitolo"
            name='sottotitolo'
            value={dati.sottotitolo}
            label="Sottotitolo"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={cambiaSottotitolo}
          />
        </div>

        <div>
          <TextField
            id="campo-descrizione"
            name='descrizione'
            value={dati.descrizione}
            label="Descrizione"
            multiline
            maxRows={4}
            variant="outlined"
            onChange={cambiaDescrizione}
          />
        </div>

        <div>




          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='it'
            localeText={itIT.components.MuiLocalizationProvider.defaultProps.localeText}>
            <MobileDatePicker
              label="Data Inizio"
              minDate={dayjs()}
              maxDate={dayjs('2030-01-01')}
              value={dayjs(dati.dataInizio)}
              // defaultValue={dayjs()}
              format="DD/MM/YYYY"
              onChange={(e) => { setDataInizio(e); }}
            // renderInput={(params) => <TextField {...params} />}
            />

            <MobileDatePicker
              label="Data Fine"
              minDate={dayjs(dati.dataInizio)}
              maxDate={dayjs('2030-01-01')}
              value={dayjs(dati.dataFine)}
              // defaultValue={dayjs()}
              format="DD/MM/YYYY"

              onChange={(e) => setDataFine(e)}
            // renderInput={(params) => <TextField {...params} />}
            />

          </LocalizationProvider>

        </div>

        <div>

          <AppAppBarAdmin />
          {/* AppAppBarAdmin per richiamare la tab nuovo */}
        </div>

        <TextField
          id="campo-email-creatore"
          name='emailCreatore'
          value={dati.emailCreatore}
          label="Email"
          multiline
          maxRows={4}
          variant="outlined"
          onChange={cambiaEmailCreatore}
        />

        {/* Selettore dello stato */}
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Stato</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="simple-select"
                name="stato"
                label="Stato"
                defaultValue={"bozza"}
                onChange={cambiaStato}
              >
                <MenuItem value={"aperto"}>Aperto</MenuItem>
                <MenuItem value={"chiuso"}>Concluso</MenuItem>
                <MenuItem value={"bozza"}>Bozza</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            type='submit'
            variant="outlined"
            size="medium"
            sx={{ marginTop: "20px", float: "right" }}
          >
            Continua
          </Button>

        </div>

      </form>
      <br></br>

    </Box>
  );
}
