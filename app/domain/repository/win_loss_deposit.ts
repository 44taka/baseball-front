import {WinLossDepositModel} from '../model/win_loss_deposit'
import {AxiosResponse} from "axios";


export interface IWinLossDepositRepository {
    find(league_kbn: number, term: number): Promise<AxiosResponse<WinLossDepositModel>>
}
