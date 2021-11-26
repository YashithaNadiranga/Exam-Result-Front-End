import React, { useState, useEffect  } from 'react';
import EResult from './result';


function Card(props) {

    const[indexid,setId]= useState("");
    const[examget,getExam]= useState("");
    const[gradeget,getGrade]= useState("");
    const[tbll,setVisible] = useState(false);
    const[exam,setExam] = useState({
      "data": [
          {
              "eid": "E001",
              "ename": "Exam 1"
          }
      ]
  });

    const[examr,setExamr] = useState({
      "data": [
        {
            "sname": "Nodata",
            "sid": "Nodata",
            "ename": "Nodata",
            "edate": "Nodata",
            "results": "Nodata",
            "status": "Nodata",
            "grade": "Nodata"
        }
      ]
    });

 

    function submit(){
        fetchdataer();
        // setVisible(true);
    }
    function reset(){
        setVisible(false)
    }
    useEffect(() => {
        setVisible(false);
        fetchdata();
        // fetchdataer();
    },[]);

     function fetchdata(){
      fetch('http://localhost:3000/exams/getename').then((resp)=>{
        resp.json().then((result=>{
          setExam(result);
          // console.log(result.datas);
        }))
      })
    }

    function fetchdataer(){
      const queryString = "?id=1&exam=2&grade=3";
      const sp = new URLSearchParams(queryString);

      sp.set("id",String(indexid));
      sp.set("exam",String(examget));
      sp.set("grade",String(gradeget));
      sp.toString();

      fetch('http://localhost:3000/result/getresult?id='+String(indexid)).then((resp)=>{
        resp.json().then((resulte=>{
          setExamr(resulte);
          if(Object.entries(resulte.data).length === 0){
            alert("Please Enter Valid index Number");
            setVisible(false);
          }else{
            setVisible(true);
            console.log("true");
          }
        }))
      })
    }


  const colours = props.color;
  const cla = "card text-white mb-3 text-center ";
  return (
    <div>
      <div className={cla} style={{ backgroundColor: colours }}>
        <div className="card-body">
          <h3
            className="card-title"
            style={{ padding: "0px", margin: "0px", color: "#4E5155" }}
          >
            {props.cheader}
          </h3>
        </div>
        <div className="row" style={{ padding: "50px" }}>
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <select
            disabled
              value={examget}
              class="custom-select"
              id="examtype"
              onChange={e=>getExam(e.target.value)}
              style={{
                width: "100%",
                height: "35px",
                borderRadius: "4px",
                outline: "none",
              }}
            >
              <option selected>Select the Exam</option>
              {exam.data.map((result)=>(<option text={result.eid}>{result.ename}</option>))}
            </select>
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <select
            disabled
              value={gradeget}
              onChange={e=>getGrade(e.target.value)}
              class="custom-select"
              id="exam"
              style={{
                width: "100%",
                height: "35px",
                borderRadius: "4px",
                outline: "none",
              }}
            >
              <option selected>Select the Grade</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
              <option>Grade 11</option>
              <option>Grade 12</option>
              <option>Grade 13</option>
              
              {/* {exam.datas.map((result)=>(<option text={result.eid}>{result.ename}</option>))} */}
            </select>
          </div>

          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">
                  Index
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Enter Your Index"
                value={indexid}
                onChange={e => setId(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="row mt-3" style={{justifyContent:"center"}}>
            <div
              className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
              
            >
              <button type="button" class="btn btn-primary" style={{ width: "100%" }} onClick = {submit}>
                Submit
              </button>
            </div>

            <div
              className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
              onClick = {reset}
            >
              <button type="button" class="btn btn-danger" style={{ width: "100%" }}
              onClick={()=>{setId("")}}
              
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: tbll? "block":"none"}}>
      {/* <EResult id={setindex}></EResult> */}
      <table className="table">
        <thead className="table-dark th-primary">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student ID</th>
            <th scope="col">Exam Name</th>
            <th scope="col">Date</th>
            <th scope="col">Results</th>
            <th scope="col">Status</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>

            {examr.data.map((info)=>{
                return(
                <tr>
                    <td>{info.sname}</td>
                    <td>{info.sid}</td>
                    <td>{info.ename}</td>
                    <td>{info.edate}</td>
                    <td>{info.results}</td>
                    <td>{info.status}</td>
                    <td>{info.grade}</td>
                </tr>
                )
                
            })}
            
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Card;
