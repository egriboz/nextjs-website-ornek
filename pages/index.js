import Layout from '../components/layout'

function HomePage() {
  return (
    <Layout>
      <h1 className="title">Welcome to Next.js!</h1>
      <div className="sass-title">Test Sass</div>
      <style jsx>{`
        .title {
          font-size: 2rem;
          color: white;
          padding: 10px;
          background: gray;
        }
      `}</style>
      {/* <style global jsx>{`
        body {
          background: yellow;
        }
      `}</style> */}
    </Layout>
  )
}

export default HomePage
