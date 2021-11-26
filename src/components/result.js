// import React from "react";
// import { useState, useEffect  } from 'react';


// export default function Result(props) {

//     const subdata = props.id;

//     const[exam,setExam] = useState({
//         "data": [
//             {
//                 "sname": subdata,
//                 "ename": "Nodata",
//                 "edate": "Nodata",
//                 "results": "Nodata",
//                 "status": "Nodata",
//                 "grade": "Nodata"
//             }
//         ]
//     });

//     function fetchdata(){
//         fetch('http://localhost:3000/result/getresult?id='+"Yashitha").then((resp)=>{
//           resp.json().then((resulte=>{
//             setExam(resulte);
//           }))
//         })
//       }

//       useEffect(() => {
//         // fetchdata();
//         console.log(exam);
//       },[]);


//   return (
//     <div>
//       <table className="table">
//         <thead className="table-dark">
//           <tr>
//              <th scope="col">Student Name</th>
//             <th scope="col">Exam Name</th>
//             <th scope="col">Date</th>
//             <th scope="col">Results</th>
//             <th scope="col">Status</th>
//             <th scope="col">Grade</th>
//           </tr>
//         </thead>
//         <tbody>

//             {exam.data.map((info)=>{
//                 return(
//                 <tr>
//                     <td>{info.sname}</td>
//                     <td>{info.ename}</td>
//                     <td>{info.edate}</td>
//                     <td>{info.results}</td>
//                     <td>{info.status}</td>
//                     <td>{info.grade}</td>
//                 </tr>
//                 )
                
//             })}
            
//         </tbody>
//       </table>
//     </div>
//   );
// }
