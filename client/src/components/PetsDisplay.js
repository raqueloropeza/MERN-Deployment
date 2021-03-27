import React from 'react';

const PetsDisplay =(props)=>{
    
    return(
        <div>
            <table>
                <tr>
                    <td>{props.pet.name}</td>
                    <td>{props.pet.type}</td>
                </tr>
            </table>
        </div>
    )
}

export default PetsDisplay;