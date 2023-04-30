
// import { Navigate, useParams } from "react-router-dom";
// import axios from "axios";


function Login() {

    // const url = "http://127.0.0.1:8000/api";

    // const [user, setUser] = useState ([])

    // const {id} = useParams();

    // useEffect (()=>{
    //     const cargarDatos = async(id) =>{
    //         let res = await axios.get(`${url}/usuario/${id}`)
    //         setUser();
    //     }
    //     cargarDatos();
    // },[id])

   

  return (
    <>
      <div className="container">
        <div className="card g-5">
          <div className="card-header"> Login</div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
