import { HeroList } from "../hero/HeroList"

export const MarvelPage = () => {
  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
      <h1>MarvelPage</h1>
      <hr />

      <HeroList  publisher={ 'Marvel Comics' } />
    </div>
  )
}
