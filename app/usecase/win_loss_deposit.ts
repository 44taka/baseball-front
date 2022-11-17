import {IWinLossDepositUseCase} from '../domain/usecase/win_loss_deposit';
import {IWinLossDepositRepository} from '../domain/repository/win_loss_deposit';
import {WinLossDepositModel} from '../domain/model/win_loss_deposit';


export class WinLossDepositUseCase implements IWinLossDepositUseCase {
    private _wld_api: IWinLossDepositRepository;

    constructor(wld_api: IWinLossDepositRepository) {
        this._wld_api = wld_api;
    }

    async find(league_kbn: number, term: number): Promise<WinLossDepositModel> {
        const result = await this._wld_api.find(league_kbn, term);
        return result.data;
    }
}
