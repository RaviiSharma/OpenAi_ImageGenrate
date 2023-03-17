function Form(props){
    return (
      <div className="container">
        <form className="form-box">

          <input type="text" input placeholder={props.name} />
          <input type="text" input placeholder={props.name} />
          <input type="button" value="Login" />
          <a href="">Forgot Pssword</a>
        </form>
      </div>
    );
}

export default Form