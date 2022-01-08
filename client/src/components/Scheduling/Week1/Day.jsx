import React,{useState} from "react";

function Day(props){

//if i put the button over here then, we will need the
//false true useState to be able to click on update button .
  //we also need the service code here to make the update.Can we update here?
  //to update we need to send over our new skeleton object props. But what happens
  //when we update it? from here will it read our on clicks?



  return(
    // col-sm-3
          <div style={props.backgroundColor} className="day-container col-lg  col-xs">

            <button onClick={()=>{props.updateClick(props.dayName)}}>update</button>
            <button onClick={()=>{props.saveClick(props.id,props.evolve)}}>save</button>

            <table>
              <tbody>
                <tr>
                  <th colSpan="5">{props.dayName}</th>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">12am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block1[0]} name="block1"> </td>
                  <td onClick={props.ourFunction} style={props.evolve.block2[0]} name="block2"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block3[0]} name="block3"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block4[0]} name="block4"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">1am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block5[0]} name="block5"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block6[0]} name="block6"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block7[0]} name="block7"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block8[0]} name="block8"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">2am</td>
                  <td onClick={props.ourFunction}  style={props.evolve.block9[0]} name="block9"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block10[0]} name="block10"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block11[0]} name="block11"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block12[0]} name="block12"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">3am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block13[0]}  name="block13"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block14[0]} name="block14"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block15[0]} name="block15"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block16[0]} name="block16"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">4am</td>
                  <td onClick={props.ourFunction}  style={props.evolve.block17[0]} name="block17"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block18[0]} name="block18"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block19[0]} name="block19"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block20[0]} name="block20"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">5am</td>
                  <td onClick={props.ourFunction}  style={props.evolve.block21[0]} name="block21"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block22[0]} name="block22"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block23[0]} name="block23"></td>
                  <td onClick={props.ourFunction}  style={props.evolve.block24[0]} name="block24"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">6am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block25[0]} name="block25"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block26[0]} name="block26"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block27[0]} name="block27"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block28[0]} name="block28"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">7am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block29[0]} name="block29"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block30[0]} name="block30"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block31[0]} name="block31"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block32[0]} name="block32"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">8am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block33[0]} name="block33"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block34[0]} name="block34"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block35[0]} name="block35"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block36[0]} name="block36"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">9am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block37[0]} name="block37"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block38[0]} name="block38"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block39[0]} name="block39"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block40[0]} name="block40"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">10am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block41[0]} name="block41"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block42[0]} name="block42"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block43[0]} name="block43"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block44[0]} name="block44"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">11am</td>
                  <td onClick={props.ourFunction} style={props.evolve.block45[0]} name="block45"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block46[0]} name="block46"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block47[0]} name="block47"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block48[0]} name="block48"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">12pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block49[0]} name="block49"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block50[0]} name="block50"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block51[0]} name="block51"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block52[0]} name="block52"></td>
                </tr>
              </tbody>


              <tbody>
                <tr>
                  <td className="small-font">2pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block53[0]} name="block53"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block54[0]} name="block54"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block55[0]} name="block55"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block56[0]} name="block56"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">2pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block57[0]} name="block57"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block58[0]} name="block58"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block59[0]} name="block59"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block60[0]} name="block60"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">3pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block61[0]} name="block61"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block62[0]} name="block62"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block63[0]} name="block63"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block64[0]} name="block64"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">4pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block65[0]} name="block65"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block66[0]} name="block66"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block67[0]} name="block67"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block68[0]} name="block68"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">5pm</td>

                  <td onClick={props.ourFunction} style={props.evolve.block69[0]} name="block69"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block70[0]} name="block70"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block71[0]} name="block71"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block72[0]} name="block72"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">6pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block73[0]} name="block73"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block74[0]} name="block74"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block75[0]} name="block75"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block76[0]} name="block76"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">7pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block77[0]} name="block77"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block78[0]} name="block78"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block79[0]} name="block79"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block80[0]} name="block80"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">8pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block81[0]} name="block81"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block82[0]} name="block82"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block83[0]} name="block83"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block84[0]} name="block84"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">9pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block85[0]} name="block85"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block86[0]} name="block86"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block87[0]} name="block87"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block88[0]} name="block88"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">10pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block89[0]} name="block89"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block90[0]} name="block90"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block91[0]} name="block91"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block92[0]} name="block92"></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="small-font">11pm</td>
                  <td onClick={props.ourFunction} style={props.evolve.block93[0]} name="block93"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block94[0]} name="block94"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block95[0]} name="block95"></td>
                  <td onClick={props.ourFunction} style={props.evolve.block96[0]} name="block96"></td>
                </tr>
              </tbody>

            </table>
            <div className="unproductive">
              <p><b>Minutes unproductive</b></p>
              <p>{props.count*15}</p>
            </div>

    </div>
  );
}

export default Day;
