import ClubCard from './ClubCard';

const NavBar = ({data}) => {
    return (
        <div>
            {data.map((items, index) => (
                <ClubCard key={index} {...items}/>
            ))}
        </div>
    )
};

export default NavBar;