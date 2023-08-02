import { HeroList } from "../hero/HeroList"


export const DcPage = () => {
  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
      <h1>DcPage</h1>
      <hr />

      <HeroList  publisher={'DC Comics'} />
    </div>
  )
}
