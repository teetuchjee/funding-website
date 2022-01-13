import { FilterYearsEnum } from '@/constants'

export type IFund = {
  data: IFundData[]
  pagination: IPaginate
  period: IPeriod
}

export type IFundData = {
  amc_name: string
  max_drawdown: number
  mstar_id: string
  nav: number
  nav_date: string
  return_perf: number
  sec_id: string
  sharpe_ratio: number
  thailand_fund_code: string
}

export type IPaginate = {
  first_page: boolean
  last_page: boolean
  page: number
  page_size: number
  page_total: number
}

export type IPeriod = {
  period: keyof FilterYearsEnum
}

export type IQuery = {
  page?: number
  size?: number
  period?: IPeriod
}
