import {AxiosResponse} from 'axios';

import {BaseApi} from './base';
import {IWinLossDepositRepository} from '../../domain/repository/win_loss_deposit';
import {WinLossDepositModel} from '../../domain/model/win_loss_deposit';


export class WinLossDepositApi extends BaseApi implements IWinLossDepositRepository {

    async find(league_kbn: number, term: number): Promise<AxiosResponse<WinLossDepositModel>> {
        try {
            return await this._axios.get<WinLossDepositModel, AxiosResponse<WinLossDepositModel>>(
                '/deposits',
                {
                    params: {
                        league_kbn: league_kbn,
                        term: term
                    }
                }
            );
        } catch (e) {
            throw e;
        }
    }
}
