import React from "react";
import errSrc from "../img/no_image.png"

const Card = ({ data, category, setId, id }) => {

          let src = `https://starwars-visualguide.com/assets/img/${category === "people" ? "characters" : category}/${id}.jpg`



          const changeId = () => {
                    setId(id => id + 1)
          }

          const gender = data.gender ? `Gender: ${data.gender}` : ""
          const climate = data.climate ? `Climate: ${data.climate}` : ""
          const birth_year = data.birth_year ? `Birth Year: ${data.birth_year}` : ""
          const diameter = data.diameter ? `Diameter: ${data.diameter}` : ""
          const eye_color = data.eye_color ? `Eye Color: ${data.eye_color}` : ""
          const population = data.population ? `Population: ${data.population}` : ""
          const model = data.model ? `Model: ${data.model}` : ""
          const length = data.length ? `Length: ${data.length}` : ""
          const passengers = data.passengers ? `Passangers: ${data.passengers}` : ""

          return <div className="wrapper">
                    {data && (
                              <div>
                                        <div> <img src={src} alt="img" onError={(e) => {
                                                  e.target.src = errSrc;
                                                  console.log(e);
                                        }}></img></div>
                                        <h3>{data.name}</h3>
                                        <ul>
                                                  <hr />
                                                  <li>{gender}{climate}{model}</li>
                                                  <hr />
                                                  <li>{birth_year}{diameter}{length}</li>
                                                  <hr />
                                                  <li>{eye_color}{population}{passengers}</li>
                                                  <hr />
                                        </ul>
                                        <button className="next_button" onClick={changeId}>Next</button>
                              </div>

                    )}

                    {!data && (
                              <div>
                                        <div> <img src={src} alt="img" onError={(e) => { e.target.src = errSrc }}></img></div>
                                        <h3>{data.name}</h3>
                                        <ul>
                                                  <hr />
                                                  <li>No data, try next</li>
                                                  <hr />
                                                  <li>No data, try next</li>
                                                  <hr />
                                                  <li>No data, try next</li>
                                                  <hr />
                                        </ul>
                                        <button className="next_button" onClick={changeId}>Next</button>
                              </div>

                    )}



          </div >
}
export default Card