const Footer = () => {

    var today= new Date();

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <h5>Team Member Allocation App - {today.getFullYear()}</h5>
                </div>
            </div>
        </div>
    );
}

export default Footer;