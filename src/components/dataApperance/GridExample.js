import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import Draggable from 'react-draggable'; // Import Draggable

const GridExample = () => {
    const [rowData] = useState([
        { id: 1, name: 'John Cena', age: 46, brand: 'RAW', championships: 16, finisher: 'Attitude Adjustment' },
        { id: 2, name: 'Roman Reigns', age: 39, brand: 'SmackDown', championships: 4, finisher: 'Spear' },
        { id: 3, name: 'Becky Lynch', age: 37, brand: 'RAW', championships: 6, finisher: 'Dis-Arm-Her' },
        { id: 4, name: 'Seth Rollins', age: 37, brand: 'RAW', championships: 7, finisher: 'Curb Stomp' },
        { id: 5, name: 'Ronda Rousey', age: 37, brand: 'SmackDown', championships: 2, finisher: 'Armbar' },
        { id: 6, name: 'Brock Lesnar', age: 46, brand: 'Free Agent', championships: 10, finisher: 'F-5' },
        { id: 7, name: 'Charlotte Flair', age: 37, brand: 'SmackDown', championships: 14, finisher: 'Figure Eight Leglock' },
        { id: 8, name: 'Randy Orton', age: 43, brand: 'RAW', championships: 14, finisher: 'RKO' },
        { id: 9, name: 'AJ Styles', age: 46, brand: 'RAW', championships: 2, finisher: 'Styles Clash' },
        { id: 10, name: 'Sasha Banks', age: 31, brand: 'SmackDown', championships: 5, finisher: 'Bank Statement' }
    ]);

    const [colDefs] = useState([
        { headerName: 'Move', field: 'move', rowDrag: true }, // Add rowDrag for dragging functionality
        { headerName: 'ID', field: 'id', sortable: true, filter: true, enablePivot: true }, // Enable Pivot for this column
        { headerName: 'Name', field: 'name', sortable: true, filter: true, enablePivot: true }, // Enable Pivot for this column
        { headerName: 'Age', field: 'age', sortable: true, filter: true, enablePivot: true }, // Enable Pivot for this column
        { headerName: 'Brand', field: 'brand', sortable: true, filter: true, enablePivot: true }, // Enable Pivot for this column
        { headerName: 'Championships', field: 'championships', sortable: true, filter: true, enablePivot: true }, // Enable Pivot for this column
        { headerName: 'Finisher', field: 'finisher', sortable: true, filter: true, enablePivot: true } // Enable Pivot for this column
    ]);


    return (

        <div style={{ position: 'relative', width: 1450, height: 550, cursor: 'move' }}>



            <div className="ag-theme-quartz"
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}

                />
            </div>
        </div>

    );
}

export default GridExample;
