import React, { useEffect } from 'react';
import { useState } from "react";
import "./queries.css";
import { API } from '../../global';

export function Queries() {


    let userDetails = localStorage.getItem("user");
    userDetails = userDetails && JSON.parse(userDetails);
    const token = userDetails && userDetails.token;

    const [headInput, setHeadInput] = useState("");
    const [desInput, setDesInput] = useState("");
    const [card, setCard] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");

    async function getAllQueries() {
        const data = await fetch(`${API}/queries/getAllqueries`, {
            headers: { "x-auth-token": token }
        }).then((data) => data.json());
        setCard(data);
    }

    useEffect(() => {
        getAllQueries();
    }, []);

    const handleCollect = async () => {
        // e.preventDefault();
        var
            newCard = [{
                heading: headInput,
                description: desInput,
                status: true,
                time: new Date().toLocaleString()
            }];

        const result = await fetch(`${API}/queries/postQuery`, {
            method: "POST",
            body: JSON.stringify(newCard),
            headers: { "content-type": "application/json" }
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log(error)
        })

        setHeadInput("");
        setDesInput("");
        getAllQueries();
    }

    const handleDelete = (id) => {
        console.log(id)
       fetch(`${API}/queries/${id}`,{
        method:"DELETE"
       }).then(()=>getAllQueries())
    };


    const handleStatusChange = (index) => {
        const newCard = [...card];
        newCard[index].status = !newCard[index].status;
        setCard(newCard);
    };

    const filterByStatus = (item) => {
        if (statusFilter === "all") {
            return true;
        } else {
            return item.status === (statusFilter === "true");
        }
    };

    return (
        <div className="queriesContainer">
            <header>
                <h3 style={{ textAlign: "center", color: "#4ba891", fontWeight: "bold" }}>Queries</h3>
                <nav style={{ position: "sticky", top: "0", zIndex: "9000", display: "flex", justifyContent: "space-around", marginTop: "5%" }}>
                    <div>
                        <input
                            style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
                            placeholder="Query Title"
                            value={headInput}
                            onChange={(e) => setHeadInput(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            style={{ width: "100%", maxWidth: "300px", margin: "0 auto" }}
                            placeholder="Query Description"
                            value={desInput}
                            onChange={(e) => setDesInput(e.target.value)}
                        />
                    </div>
                    <button
                        style={{
                            color: "white",
                            background: "#14ad89",
                            fontWeight: "bold",
                            border: "none",
                            width: "100%",
                            maxWidth: "150px",
                            borderRadius: "5px",
                        }}
                        type="button"
                        onClick={() => handleCollect()}
                    >
                        Create Query
                    </button>
                </nav>
            </header>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "5% 2% 0 2%" }}>
                <h6 style={{ textAlign: "center", color: "#4ba891", fontWeight: "bold" }}>My Queries</h6>
                <h6 style={{ textAlign: "center", fontWeight: "bold" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <label style={{ textAlign: "center", color: "#4ba891", fontWeight: "bold" }} >Status Filter : </label>
                        <select
                            style={{ textAlign: "center" }}
                            name="status"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="true">unsolved</option>
                            <option value="false">solved</option>
                        </select>
                    </div>
                </h6>
            </div>


            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">

                    {card.filter(filterByStatus).map((data, index) => (
                         
                        <div className="col mb-5" key={index}>
                            <div style={{ background: "#ccf5d3" }} className="card h-100">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{data.time.toLocaleString()}</h5>
                                            <h5 className="fw-bolder">Title : {data.heading}</h5><p>Description : {data.description}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <label>Status:</label>
                                            <select
                                                style={{ textAlign: "center" }}
                                                name="status"
                                                value={data.status.toString()}
                                                onChange={() => handleStatusChange(index)}
                                            >
                                                <option value="true">unsolved</option>
                                                <option value="false">solved</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" style={{ display: 'flex', justifyContent: "flex-end" }}>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-danger mt-auto"
                                            type="button"
                                            onClick={() => handleDelete(data._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}

                </div>
            </div>
        </div>
    )
}

