// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   // useParams,
//   // useRouteMatch
//   Redirect,
//   useHistory,
//   useLocation
// } from 'react-router-dom';


// // Pada aplikasi ini memiliki 3 halaman: public, private, dan halaman login
// //untuk masuk ke private page, anda harus login terlebih dahulu

// //pertama, klik public page, kemudian kunjungi private page
// //karena anda belum login, jadi anda diarahkan ke halaman login
// //setalah login, anda akan diarahkan kembali ke provate page

// //perhatikan perubahan setiap url. Jika anda mengklik tombol kembali,
// //apakah anda kembali ke halaman login? Tidak, karena anda sudah login
// //cobalah, maka anda akan kembali ke halamgan yang anda kunjungi sebelum login, yaitu public page







// // export default function NestingExample() {
// //   return (
// //     <Router>
// //       <div>
// //         <ul>
// //           <li>
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li>
// //             <Link to="/topics">Topics</Link>
// //           </li>
// //         </ul>
// //         <hr />

// //         <Switch>
// //           <Route exact path="/">
// //             <Home />
// //           </Route>
// //           <Route path="/topics">
// //             <Topics />
// //           </Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public" exact component>
//             <PublicPage />
//           </Route>
//           <Route path="/login" component>
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

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

// //PEMBUNGKUS UNTUK <ROUTE> YANG MENGARAHKAN KE LOGIN
// //TAMPILAN JIKA ANDA BELUM TERKONFIRMASI

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






// // function Home() {
// //   return (
// //     <div>
// //       <h2>Home</h2>
// //     </div>
// //   );
// // }

// // function Topics() {
// //   // `path` untuk membuat jalur <Route> yang terhadap rute induk,
// //   //sedangkan `URL` untuk membuat link
// //     let { path, url } = useRouteMatch();
// //     return (
// //       <div>
// //         <h2>Topics</h2>
// //         <ul>
// //           <li>
// //             <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
// //           </li>
// //           <li>
// //             <Link to={`${url}/Wisata Alam, Museum`}>Travelling</Link>
// //           </li>
// //           <li>
// //             <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
// //           </li>
// //         </ul>

// //         <Switch>
// //           <Route exact path={path}>
// //             <h3>Please select a topic.</h3>
// //           </Route>
// //           <Route path={`${path}/:topicId`}>
// //             <Topic />
// //           </Route>
// //         </Switch>
// //       </div>
// //     );
// // }

// // function Topic() {
// //   let { topicId } = useParams();

// //   return (
// //     <div>
// //       <h3>{topicId}</h3>
// //     </div>
// //   );
// // }

