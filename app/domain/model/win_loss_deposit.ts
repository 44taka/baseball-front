export interface WinLossDepositModel {
    labels: Date[];
    data: DepositModel[];
}

interface DepositModel {
    team_id: number;
    team_name: string;
    team_color_cd: string;
    result: number[];
}
