import React from 'react'

export default function Header({ setcardData, setspinner }) {
    const getData = () => {
        setspinner(true)
        setTimeout(() => {
            fetch(' https://reqres.in/api/users?page=1')
                .then(response => response.json())
                .then((data) => {
                    setcardData(data.data)
                    setspinner(false)
                })
        }, 6000)

    }
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="https://www.eatlogos.com/all_free_logos/png/vector_jewellery_shop_logo.png" width="175px"
                        height="147px" alt="brand-logo"></img>
                </div>
                <div className="nav-button" style={{ marginRight: "17px" }}><button style={{ cursor: "pointer" }} onClick={getData}>
                    <span>List User</span>
                </button></div>
            </nav>
        </header>
    )
}
