import React from 'react';
// import candi from './image/candi.png';
import './Tugas.css';
import OnlineShop from './OnlineShop';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch,
//     Redirect,
//     useHistory,
//     useLocation
// } from 'react-router-dom';

function App() {
  return (
    <div className="Tugas">
      
        <OnlineShop />
    </div>
  );
}

// export default function Nesting() {
//     return (
//         <Router>
//             <div>
//                 <AuthButton />

//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/profil">Profil Saya</Link>
//                     </li>
//                     <li>
//                         <Link to="/tas">Contoh Tas</Link>
//                     </li>
//                     <li>
//                         <Link to="/private">private</Link>
//                     </li>
//                 </ul>
//                 <hr />

//                 <Switch>
//                     <Route exact path="/">
//                         <Home />
//                     </Route>
//                     <Route path="/profil">
//                         <Profil />
//                     </Route>
//                     <Route path="/tas">
//                         <Tas />
//                     </Route>
//                     {/* Untuk link private */}
//                     <PrivateRoute path="/private">
//                         <ProtectedPage />
//                     </PrivateRoute>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// // UNTUK HALAMAN PRIVATE
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100); // FAKE ASYNC
//   },
//   signOut(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100); 
//   }
// };

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signOut(() => history.push("/"));
//         }}>
//         Sign Out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }


// function PrivateRoute({ children,...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Private</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: { pathname: "/"} };
//   let login = () => {
//     fakeAuth.authenticate(() =>  {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }

// function Home() {
//     return (
//         <div>
//             <center>
//                 <h1>Selamat Datang di Toko Saya !</h1>
//             </center>
//             {/* <img src={candi} alt='candi'></img> */}
//         </div>
//     );
// }

// function Profil () {
//     return (
//         <div>
//         <p>
//             Toko ini dibuat oleh Raihan Rachmadani <br/>
//             Dari kelas Ti - 3H, Jurusan Teknologi Informasi Politeknik Negeri Malang <br/>
//             Dalam Rangka memenuhi tugas membuat Online Shop sederhana.
//         </p>
//         </div>
//     )
// }


// function Tas() {
//   // `path` untuk membuat jalur <Route> yang terhadap rute induk,
//   //sedangkan `URL` untuk membuat link
//     let { path, url } = useRouteMatch();
//     return (
//         <div>
//             <h2>Beberapa tas yang ada di toko kami</h2>
//             <ul>
//                 <li>
//                     <Link to={`${url}/Sate Alam, Museum`}>Tas Xiaomi</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/Wisata Alam, Museum`}>Tas ROG</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/Ibis, JW Marriot`}>Tas Asus</Link>
//                 </li>
//             </ul>

//             <Switch>
//                 <Route exact path={path}>
//                     <h3>Pilih tas yang anda inginkan.</h3>
//                 </Route>
//                 <Route path={`${path}/:tasId`}>
//                     <Tass />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// function Tass() {
//     let { tasId } = useParams();

//     return (
//         <div>
//             <h3>{tasId}</h3>
//         </div>
//     );
//     }

export default App;