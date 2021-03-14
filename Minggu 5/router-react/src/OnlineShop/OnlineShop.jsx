import React, { Component } from 'react';
import './OnlineShop.css'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import logo from '../assets/logo.png'
import './bootstrap-5.0.0-beta2-dist/bootstrap-5.0.0-beta2-dist/css/bootstrap.min.css';
import akuu from '../assets/akuu.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useParams,
    withRouter
} from 'react-router-dom';

function OnlineShop() {
    return (
        <Router>
            <div className="header">
                <AuthButton />

                <ul>
                    <li className="TopBar-1">
                        <Link className="Link" to="/beranda">Beranda</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link" to="/data">Beli</Link>
                    </li>
                    <li className="TopBar-1">
                        <Link className="Link" to="/profil">Profil</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path="/beranda" component={Beranda} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/data" component={Data} />
                    <Route path="/profil" component={Profil} />
                </Switch>
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <h2 id="logout">
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/beranda"));
                }}>
                <p>Log out</p>
            </button>
        </h2>
    ) : (
            <p id="warning" >
                <b>Anda belum login !</b>
            </p>
        )
);

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuth.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

function Beranda() {
    return (
        <div className="Home">
            <center> <h2>Koleksi Ikan Cupang Di Toko Kami</h2> </center>
            <div className="grid">
                <div className="row">
                    <div className="col-sm">
                        <img src={c2} alt="Gambar Thumbnail Artikel" />
                        <h3>Betta Imbelis</h3>
                        <p> Ikan cupang ini sangatlah bagus ekornya, berwarna hijau. Wow Banget! </p>
                    </div>
                    <div className="col-sm">
                        <img src={logo} alt="Gambar Thumbnail Artikel" />
                        <h3>Betta Channoides</h3>
                        <p>Jenis ikan cupang yang satu ini cukup unik ya, karena warnanya berwarna warni seperti pelangi. Wow gila!</p>
                    </div>
                    <div className="col-sm">
                        <img src={c1} alt="Gambar Thumbnail Artikel" />
                        <h3>Betta Chini</h3>
                        <p>Kalau ikan cupang yang ini, dia cukup normal seperti ikan cupang pada umumnya, hanya 2 warna saja yaitu warna biru dan putih. Cukup menarik!</p>
                    </div>
                    <div className="col-sm">
                        <img src={c3} alt="Gambar Thumbnail Artikel" />
                        <h3>Cupang Pro</h3>
                        <p>Ikan yang satu ini bisa dibilang aneh tapi bagus, dari namanya saja <b>Cupang Pro</b>. Dia pro dalam segala hal dan cukup bagus dalam tarung dengan cupang lawannya. Emejing!! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Profil () {
    return (
            <div className="Login">
                <div className="col-sm profile" >
                    <img src={akuu} alt="Gambar Thumbnail Artikel" />
                    <font size="5" className="text">
                        Halo perkenalkan nama saya <b>Raihan Rachmadani</b> <br/>
                        <padding className="text"/> Saya lahir di <b>Malang, Tanggal 08 Februari tahun 2000 </b><br/>
                        <padding className="text"/>Saya Berkuliah di <b>Politeknik Negeri Malang</b>, dengan <b>jurusan Teknologi Informasi D4</b> <br/>
                        <padding className="text"/>Saya Dari <b>kelas TI - 3H, Jurusan Teknologi Informasi Politeknik Negeri Malang</b> <br/>
                        <padding className="text"/>Saya membuat Online Shop ini untuk memenuhi tugas Mata kuliah <b>Pemrograman Berbasis Framework</b> <br/>
                        <padding className="text"/>Dan kedepannya bisa saya kembangkan lagi biar lebih menarik.<br/> <br/>
                        <center> <b>Terima Kasih</b></center>
                    </font>
                </div> 
            </div>
    )
}

function Data() {

    let { path, url } = useRouteMatch();

    return (
        <div className="header-2">
            <ul>
                <li className="TopBar-2">
                    <Link to={`${url}/BeliCupang`}>Beli</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}>

                </Route>
                <Route path={`${path}/:dataId`}>
                    <DataBody />
                </Route>
            </Switch>
        </div>
    )
}

function DataBody() {
    let { dataId } = useParams();
        return (
            <div className="Data-Cupang">
                <h1>{dataId}</h1>
                <div className="cupang">
                    <table border="5">
                        <tr>
                            <th>Jenis Cupang</th>
                            <th>Jenis Kelamin</th>
                            <th>Import</th>
                            <th>Harga</th>
                        </tr>
                        <tr>
                            <td>Betta Imbelis</td>
                            <td>Jantan</td>
                            <td>Iya</td>
                            <td>2.500.000</td>
                        </tr>
                        <tr>
                            <td>Betta Channoides</td>
                            
                            <td>Betina</td>
                            <td>Iya</td>
                            <td>500.000</td>
                        </tr>
                        <tr>
                            <td>Betta Chini</td>
                            <td>Jantan</td>
                            <td>Tidak</td>
                            <td>850.000</td>
                        </tr>
                    </table>
                </div>
            </div >
        )
    }

class Login extends Component {
    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/beranda" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }

        return (
            <div className="Login">
                <p>Silahkan login terlebih dahulu</p>
                <button btn onClick={this.login}>Login</button>
            </div>
        );
    }
}


export default OnlineShop;