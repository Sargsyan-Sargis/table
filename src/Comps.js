function Comps(){
    return(
        <div className="Comps">
            <select className="Education">
                <option value="Education"> Education </option>
                <option value="Engineering"> Engineering</option>
                <option value="Non-Education"> Non-Education </option>
            </select>

            <select className="experiance">
                <option value="Experiance"> Experiance </option>
                <option value="Experianced"> Experianced</option>
                <option value="Fresher"> Fresher </option>
            </select>

            <select className="availability">
                <option value="Availability"> Availability </option>
                <option value="Ready to hire"> Ready to hire</option>
                <option value="Graduating in shortly"> Graduating in shortly</option>
            </select>

            <select className="relocation">
                <option value="Relocation"> Relocation </option>
                <option value="Yes"> Yes</option>
                <option value="No"> No</option>
            </select>

            <select className="location">
                <option value="Yerevan"> Yerevan</option>
                <option value="Gyumri"> Gyumri</option>
                <option value="Vanadzor"> Vanadzor</option>
                <option value=" Hrazdan"> Hrazdan</option>
                <option value=" Kapan"> Kapan</option>
                <option value="Armavir"> Armavir</option>
                <option value=" Artashat "> Artashat </option>
                <option value="Dilijan"> Dilijan</option>
                <option value="Edjmiadzin "> Edjmiadzin </option>
            </select>
            
        </div>
    )
}

export default Comps;