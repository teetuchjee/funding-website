import type { NextPage, GetServerSideProps } from 'next'
import { BaseLayout } from '@/components'
import { ViewHome } from '@/views'
import { FundServices } from '@/services'
import { IFund } from '@/interfaces'
import { Path } from '@/constants'

interface Props {
  fundData: IFund
}

const breadcrumb = [
  { path: Path.HOME, name: 'หน้าแรก' },
  { path: Path.HOME, name: 'กองทุน' },
]
const Home: NextPage<Props> = ({ fundData }) => {
  return (
    <BaseLayout breadcrumb={breadcrumb} defaultSelectedKey="home">
      <ViewHome fundData={fundData} />
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await FundServices.getFunds(query)
  return {
    props: {
      fundData: response,
    },
  }
}

export default Home
