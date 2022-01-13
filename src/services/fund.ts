import Axios, { AxiosPromise } from 'axios'
import * as Endpoint from '@/constants'
import { IFund, IQuery } from '@/interfaces'

class FundServices {
  async getFunds(query: IQuery) {
    const { data } = await (<AxiosPromise<IFund>>Axios({
      url: Endpoint.FUND_LIST_ENDPOINT(query),
      method: 'GET',
    }))
    return data
  }
}

const funds = new FundServices()
export default funds
