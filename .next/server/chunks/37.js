exports.id=37,exports.ids=[37],exports.modules={7648:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>MyApp});var a=t(997);function MyApp({Component:e,pageProps:i}){return a.jsx(e,{...i})}t(9605)},2206:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GET_ALL_EPISODES:()=>d,GET_CHARACTER:()=>s,GET_CHARACTERS:()=>n,GET_EPISODE:()=>p,GET_LOCATIONS:()=>r});var a=t(9114);let n=a.gql`
  query GetCharacters($page: Int!, $status: String, $type: String, $gender: String, $name: String, $specie: String){
    characters(page: $page, filter: { status: $status, type: $type, gender: $gender, name: $name, species: $specie}) {
      info {
        count
        pages
      }
      results {
        id
        name
        species 
        image
        gender
        status
        type
        location {
          id
          name
        }
        episode {
          name
        }
      }
    }
  }
`,s=a.gql`
query GetDetailCharacter($id: ID!){
  character(id: $id) {
      id
      name
      species 
      image
      gender
      status
      type
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        episode
      }
    }
}
`,r=a.gql`
  query GetLocations ($page: Int!, $name: String, $type: String, $dimension: String){
    locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension }){
        info {
            count
            pages
        }
        results {
            id
            name
        }
    }
  }
`,p=a.gql`
  query GetDetailEpisode($id: ID!){
    episode(id: $id) {
        id
        name
        air_date 
        episode
        characters {
          id
          name
          image
        }
    }
  }
`,d=a.gql`
  query GetAllEpisodes($page: Int!, $name: String){
    episodes(page: $page, filter: {name: $name}) {
      info {
            count
            pages
        }
        results {
            id
            name
            episode
        }
    }
  }
`},9605:()=>{}};