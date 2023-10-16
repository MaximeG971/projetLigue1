import ClubCard from './ClubCard';

const NavBar = ({clubsList}) => {
    return (
        <div>
            {clubsList.map((items, index) => (
                <ClubCard key={index} {...items}/>
            ))}
        </div>
    )
};

export default NavBar;