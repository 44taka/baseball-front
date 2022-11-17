import {IDepositChartUseCase} from '../domain/usecase/deposit_chart';
import {IWinLossDepositRepository} from '../domain/repository/win_loss_deposit';


export class DepositChartUseCase implements IDepositChartUseCase {
    private _wld_api: IWinLossDepositRepository;

    constructor(wld_api: IWinLossDepositRepository) {
        this._wld_api = wld_api;
    }

    async getCentralLeagueChart(term: number) {
        const result = await this._wld_api.find(1, term);
        return {
            data: {
                labels: result.data.labels,
                datasets: result.data.data.map((datum) => {
                    return {
                        label: datum.team_name,
                        data: datum.result,
                        borderColor: datum.team_color_cd,
                        backgroundColor: datum.team_color_cd,
                        borderWidth: 1,
                        fill: false,
                        tension: 0
                    }
                })
            },
            options: {
                plugins: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                    title: {
                        display: true,
                        text: '2022年 セ・リーグ 貯金推移',
                        font: {
                            size: 24,
                        }
                    },
                },
            }
        };
    }

    async getPacificLeagueChart(term: number) {
        const result = await this._wld_api.find(2, term);
        return {
            data: {
                labels: result.data.labels,
                datasets: result.data.data.map((datum) => {
                    return {
                        label: datum.team_name,
                        data: datum.result,
                        borderColor: datum.team_color_cd,
                        backgroundColor: datum.team_color_cd,
                        borderWidth: 1,
                        fill: false,
                        tension: 0
                    }
                })
            },
            options: {
                plugins: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                    title: {
                        display: true,
                        text: '2022年 パ・リーグ 貯金推移',
                        font: {
                            size: 24,
                        }
                    },
                },
            }
        };
    }
}



