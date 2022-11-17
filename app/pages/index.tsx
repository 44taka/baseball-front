import React, {useState} from 'react';
import LineChart from '../components/charts/line_chart';

import {WinLossDepositApi} from '../infrastructure/api/win_loss_deposit';
import {DepositChartUseCase} from '../usecase/deposit_chart';


export default function Home({central_league, pacific_league}) {
    const [centralLeagueChart, setCentralLeagueChart] = useState(central_league);
    const [pacificLeagueChart, setPacificLeagueChart] = useState(pacific_league);
    const [searchTerm, setSearchTerm] = useState(0)

    const getChartData = async (term: number) => {
        // API実行準備
        const wld_api = new WinLossDepositApi();
        const dc_uc = new DepositChartUseCase(wld_api);
        // セ・リーグ取得
        const central_league = await dc_uc.getCentralLeagueChart(term);
        setCentralLeagueChart(central_league)
        // パ・リーグ取得
        const pacific_league = await dc_uc.getPacificLeagueChart(term);
        setPacificLeagueChart(pacific_league)
    }

    return (
        <section className="section">
            <div className="field is-grouped" style={{marginBottom: '1.5rem'}}>
                <div className="control">
                    <div className="select">
                        <select id="year">
                            <option value="2022">2022年</option>
                        </select>
                    </div>
                    <div className="select">
                        <select id="term" onChange={(e) => setSearchTerm(Number(e.target.value))}>
                            <option value="0">全日程</option>
                            <option value="1">3・4月</option>
                            <option value="2">5月</option>
                            <option value="3">6月</option>
                            <option value="4">7月</option>
                            <option value="5">8月</option>
                            <option value="6">9・10月</option>
                        </select>
                    </div>
                    <a className="button is-link is-outlined" onClick={async _ => {
                        await getChartData(searchTerm)
                    }}>検索</a>
                </div>
            </div>
            <LineChart options={centralLeagueChart.options} data={centralLeagueChart.data}/>
            <LineChart options={pacificLeagueChart.options} data={pacificLeagueChart.data}/>
        </section>
    )
}

export async function getServerSideProps() {
    const wld_api = new WinLossDepositApi(true);
    const dc_uc = new DepositChartUseCase(wld_api);

    const central_league = await dc_uc.getCentralLeagueChart(0);
    const pacific_league = await dc_uc.getPacificLeagueChart(0);

    return {
        props: {
            central_league: central_league,
            pacific_league: pacific_league
        }
    }
}