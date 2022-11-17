import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function LineChart({options, data}) {
    return (
        <div className="card" style={{marginBottom: '1.5rem'}}>
            <div className="card-content">
                <Line options={options} data={data}/>
            </div>
        </div>
    )
}
