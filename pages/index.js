import { useState } from 'react'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  const [habits, setHabits] = useState(['Go to gym'])

  if (loading) return <div />

  return (
    <Layout>
      <main>
        <div className="hero">
          <h1 className="title">Level up your life</h1>
          <div className="list">
            <HabitForm setHabits={setHabits} />
            <HabitList habits={habits} />
          </div>
        </div>
      </main>

      <style jsx>{`
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin-top: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Home)
