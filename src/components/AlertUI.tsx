import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';

type AlertVariant = 'standard' | 'outlined' | 'filled';

interface AlertConfig {
  description: string;
  severity?: AlertColor;
  variant?: AlertVariant;
}

export default function AlertUI({
  description,
  severity = 'success',
  variant = 'outlined',
}: AlertConfig) {
  return (
    <Alert severity={severity} variant={variant}>
      {description}
    </Alert>
  );
}
