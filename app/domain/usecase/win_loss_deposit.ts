import {WinLossDepositModel} from '../model/win_loss_deposit'


export interface IWinLossDepositUseCase {
    find(league_kbn: number, term: number): Promise<WinLossDepositModel>
}
