import React from 'react'
import './Admin_home.css';

function Admin_home() {
    return (
        <div className='page'>
            <div>
                <head>
                    <meta charset="utf-8" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Habiness Plus</title>
                </head>
                <body>
                    <div class="container">
                        <div class="t1">
                            <img class="t1"
                                src="https://raw.githubusercontent.com/Apizz789/CE_PROJECT_2022_36_WEBSITE/main/test001/public/picture/LOGO2_PNG%201-2.png"
                                alt="logo" />
                        </div>
                        <div class="t3">
                            <button class="b1 btn">Announcement</button>
                            <button class="b2 btn">Challage</button>
                            <button class="b3 btn">Users</button>
                            <button class="b4 btn">Comunity</button>
                            <button class="b5 btn">Overviews</button>
                            <button class="b6 btn">Profile</button>
                            <button class="b7 btn2">Logout</button>
                        </div>
                    </div>

                    <div class="t2">
                        <img src="https://raw.githubusercontent.com/Apizz789/CE_PROJECT_2022_36_WEBSITE/main/test001/public/picture/background.png" alt="bg" />
                    </div>
                </body>
            </div>
        </div>
    )
}

export default Admin_home