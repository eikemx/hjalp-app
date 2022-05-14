import Card from "./Cards";

const HospitalsWrapper = ({hospitals}) => {
    return (
<>{hospitals.map((element, index) => (
            <Card hospitals={element} key={element.id} index={index}/>
          ))}</>
    )
}

export default HospitalsWrapper