import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [dname, dnamechange] = useState("");
    const [mrno, mrnochange] = useState('');
    const [bed, bedchange] = useState('');
    const [status, statuschange] = useState('Admitted');
    const [refdr, refdrchange] = useState("");
    const [refhos, refhoschange] = useState("");
    const [date, datechange] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, dname, mrno, status,bed,refdr,refhos,date };
        dispatch(FunctionAddUser(userobj));
        navigate('/user');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add Patient</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                        <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Patient Name</label>
                                    <input value={name || ''} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Doctor Name</label>
                                    <input value={dname || ''} onChange={e => dnamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Mr No</label>
                                    <input value={mrno || ''} onChange={e => mrnochange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={status || ''} onChange={e => statuschange(e.target.value)} className="form-control">
                                        <option value="Admitted">Admitted</option>
                                        <option value="Not Admitted">Not Admitted</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>bed No</label>
                                    <input value={bed || ''} onChange={e => bedchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Reffered Doctor</label>
                                    <input value={refdr || ''} onChange={e => refdrchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Reffered Hospital</label>
                                    <input value={refhos || ''} onChange={e => refhoschange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Date of Consulting</label>
                                    <input value={date || ''} onChange={e => datechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Adduser;