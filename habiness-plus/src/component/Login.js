import React from 'react'
import './Login.css';
function Login() {
    return (
        <div>

            <img class="BG"
                src="https://raw.githubusercontent.com/Apizz789/CE_PROJECT_2022_36_WEBSITE/main/test001/public/picture/background.png" alt="bg" />

            <div class="login_grid">

                <img class="Pic_box"
                    src="https://raw.githubusercontent.com/Apizz789/CE_PROJECT_2022_36_WEBSITE/main/test001/public/picture/LOGO2_PNG%201.png"
                    alt="logo" />

                <form>
                    <div class="Un_box">
                        <label class="label1">Username</label><br />
                        <input class="username" type="text" id="Ausername" name="Ausername">
                        </input><br />
                    </div>
                    <div class="Pw_box">
                        <label class="label2">Password</label><br />
                        <input class="password" type="password" id="Apassword" name="Apassword">
                        </input><br />
                    </div>
                    <input class="b1" type="submit" value="Submit" />
                </form>
            </div>


        </div>


    )
}

export default Login