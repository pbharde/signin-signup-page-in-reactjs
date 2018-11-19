import React, { Component } from 'react';
import App from '../App';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  redirectToSignIn(event){
    this.setState({ redirectToSignIn: true })
  }

  render() {
    const{redirectToSignIn}=this.state
if(redirectToSignIn){
  return (
    <App/>
  )
}
    return (

<div className="App">
	<div className="limiter">
		<div className="container-login100" style={{backgroundImage: 'url('+'styles/images/bg-01.jpg'+')'}}>
			<div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
				<form className="login100-form validate-form flex-sb flex-w">
        <span className="login100-form-title p-b-53">
          New User Sign Up
        </span>

        	<div className="p-t-31 p-b-9">
						<span className="txt1">
							Username
						</span>
					</div>
          <div className="wrap-input100 validate-input" data-validate = "Username is required">
            <input className="input100" type="text" name="username" />
            <span className="focus-input100"></span>
          </div>

              <div className="p-t-31 p-b-9">
						<span className="txt1">
							First Name
						</span>
					</div>
          <div className="wrap-input100 validate-input" data-validate = "Username is required">
            <input className="input100" type="text" name="username" />
            <span className="focus-input100"></span>
          </div>

          <div className="p-t-31 p-b-9">
						<span className="txt1">
							Last Name
						</span>
					</div>
          <div className="wrap-input100 validate-input" data-validate = "Username is required">
            <input className="input100" type="text" name="username" />
            <span className="focus-input100"></span>
          </div>


          <div className="p-t-31 p-b-9">
						<span className="txt1">
							Email Id
						</span>
					</div>
          <div className="wrap-input100 validate-input" data-validate = "Username is required">
            <input className="input100" type="text" name="username" />
            <span className="focus-input100"></span>
          </div>

					<div className="p-t-13 p-b-9">
						<span className="txt1">
							Password
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" />
						<span className="focus-input100"></span>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button className="login100-form-btn">
							Sign UP
						</button>
					</div>

					<div className="w-full text-center p-t-55">
						<a onClick={(e)=>this.redirectToSignIn(e)} className="txt2 bo1">
							Sign In
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
  </div>

    );
  }
}

export default SignUpForm;
