import { IQuery } from '@/interfaces'

export const FUND_LIST_ENDPOINT = (query: IQuery) => {
  const page = query?.page ? query.page : 1
  const size = query?.size ? query.size : 10
  const period = query?.period ? query.period : '1Y'
  return `https://www.finnomena.com/fn3/api/fund/public/filter/overview?page=${page}&size=${size}&period=${period}`
}
