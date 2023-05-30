import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { itIT } from '@mui/x-date-pickers/locales';
import "dayjs/locale/it"

export default function ResponsiveDatePickers() {
    // const oggi=new Date().toString();
  const [value, setValue] = React.useState(dayjs());
  const [value2, setValue2] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='it'
    localeText={itIT.components.MuiLocalizationProvider.defaultProps.localeText}>
      {/* localeText per cambiare data in formato italiano */}
      <Stack spacing={3}>
      <div>
        <MobileDatePicker
          label="Data Inizio"
          minDate={dayjs()}
          maxDate={dayjs('2030-01-01')}
          value={value}
          format="DD/MM/YYYY"
          
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
       
         <MobileDatePicker
          label="Data Fine"
          minDate={dayjs()}
          maxDate={dayjs('2030-01-01')}
          value={value2}
          format="DD/MM/YYYY"
          onChange={(newValue) => {
            setValue2(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
       
        {/* <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
  );
}
