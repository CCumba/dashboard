import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface IndicatorUIProps {
  title?: string;
  description?: string;
}

export default function IndicatorUI({ title, description }: IndicatorUIProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{description}</Typography>
        <Typography variant="body2">{title}</Typography>
      </CardContent>
    </Card>
  );
}
