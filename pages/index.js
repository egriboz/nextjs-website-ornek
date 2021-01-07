import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
// import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

import SiteConfig from '../site.config'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>{SiteConfig.title}</title>
      </Head>

      <h1 className="title">{SiteConfig.title}</h1>

      <ul className="thlist">
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>
                {character.name}
                <figure>
                  <img src={character.image} alt={character.name} />
                </figure>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://rickandmortyapi.com/api/character/?page=2')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

export default HomePage
