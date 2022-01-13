import { Table } from 'antd'
import { format } from 'date-fns'
import { ColumnsType } from 'antd/lib/table'
import { Typography } from '@/components'
import { IFundData } from '@/interfaces'
import { twoDecimalsFormat } from '@/utillity'

interface Props {
  handlePageChange?: (page: number, pageSize: number) => void
  page: number
  pageTotal: number
  pageSize: number
  fundList: IFundData[]
}

const FundTable: React.FC<Props> = ({
  page,
  pageTotal,
  pageSize,
  fundList,
  handlePageChange,
}) => {
  const columns: ColumnsType<IFundData> = [
    {
      title: 'ชื่อกองทุน',
      render: (_, fund) => {
        return <Typography>{fund?.thailand_fund_code}</Typography>
      },
    },
    {
      title: 'บลจ',
      render: (_, fund) => {
        return <Typography>{fund?.amc_name}</Typography>
      },
    },
    {
      title: 'อัพเดตล่าสุด',
      render: (_, fund) => {
        return (
          <Typography>
            {format(new Date(fund?.nav_date), 'dd/MM/yyyy')}
          </Typography>
        )
      },
    },
    {
      title: 'ผลตอบแทน',
      render: (_, fund) => {
        return <Typography>{twoDecimalsFormat(fund?.return_perf)}</Typography>
      },
    },
    {
      title: 'ราคา',
      align: 'center',
      render: (_, fund) => {
        return <Typography>{twoDecimalsFormat(fund?.nav)}</Typography>
      },
    },
  ]

  return (
    <Table
      pagination={{
        pageSize: pageSize,
        total: pageTotal * pageSize,
        current: page,
        onChange: handlePageChange,
      }}
      loading={false}
      columns={columns}
      dataSource={fundList}
      rowKey={'mstar_id'}
      scroll={{
        x: 'max-content',
      }}
    />
  )
}

export default FundTable
