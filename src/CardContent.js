
export default function CardContent({ spinner, cardData }) {
    return (
            <div className="content">
                {
                    (cardData==null)?(spinner?<div id="spinner" className="container">
                    <div className="loading"></div></div>:null):
                    <section>
                        {
                            cardData.map((data) => (
                                <div className="card" key={data.id}>
                                    <div className="card-content">
                                        <div className="card-picture">
                                            <img src={data.avatar} alt="card-avatar" style={{ borderRadius: "65px" }} />
                                        </div>
                                        <div className="card-details">
                                            <p>First Name: {data.first_name}</p>
                                            <p>Last Name: {data.last_name}</p>
                                            <p>Email: {data.email}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                }
            </div>
    )
}
