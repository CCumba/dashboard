import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

interface TableUIProps {
  labels: string[];
  values1: number[];
  values2: number[];
  header1: string;
  header2: string;
}

function combineArrays(
  labels: string[],
  values1: number[],
  values2: number[],
  header1: string,
  header2: string
) {
  return labels.map((hora, index) => ({
    id: index,
    hora,
    [header1]: values1[index],
    [header2]: values2[index],
  }));
}

export default function TableUI({
  labels,
  values1,
  values2,
  header1,
  header2,
}: TableUIProps) {
  const rows = combineArrays(labels, values1, values2, header1, header2);

  const columns: GridColDef[] = [
    { field: 'hora', headerName: 'Hora', flex: 1 },
    { field: header1, headerName: header1, flex: 1 },
    { field: header2, headerName: header2, flex: 1 },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5]}
    />
  );
}
