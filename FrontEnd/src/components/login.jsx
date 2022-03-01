import React, { useState } from "react";
import axios from "../api";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const _submit = async (evento) => {

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom shadow-sm mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <b>Posterr</b>
                    </a>
                </div>
            </nav>
            <main className="flex-fill">
                <div className="container">
                    <div className="row justify-content-center ">
                        <form className="col-sm-10 col-md-8 col-lg-6" method="post" onSubmit={(evt) => _submit(evt)}>
                            <h1>Login</h1>
                            <div className="form-floating mb-3">
                                <input type="email" id="txtEmail" className="form-control" placeholder=" " autoFocus name="txtEmail"
                                    autoComplete="on"
                                    value={email}
                                    onChange={(evt) => setEmail(evt.target.value)} />
                                <label htmlFor="txtEmail">E-mail</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha"
                                    autoComplete="on"
                                    onChange={(evt) => setSenha(evt.target.value)}
                                    value={senha} />
                                <label htmlFor="txtSenha">Senha</label>
                            </div>
                            <button type="submit"
                                className="btn btn-lg btn-danger">Entrar</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
