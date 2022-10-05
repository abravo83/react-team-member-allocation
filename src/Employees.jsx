import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {




    return (
        <main className='container'>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className='form-select form-select-lg' name="" id="" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className='row justify-content-center mt-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                        {employees.map((item) => (
                            <div  key={item.id} id={item.id} className={(item.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                                <img src={(item.gender === 'male') ? maleProfile : femaleProfile} className="card-img-top" />
                                <div className='card-body'>
                                    <h5 className='card-title'>Full name: {item.fullName}</h5>
                                    <p className='card-text'><b>Designation:</b> {item.designation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Employees