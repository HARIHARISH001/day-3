import React from "react";

const Forget = () =>{
    return(
        <div id="forgot" class="comm">
            <h3>Forgot Password</h3>
            <div>
                <input id="fe" type="email" placeholder="Email" required/>
                <input type="submit" onclick="forgot()" value="Submit"/>
            </div>
        </div>
    )
}

export default Forget;