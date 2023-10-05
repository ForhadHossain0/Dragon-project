import logo from '../../assets/images/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='space-y-5 mb-10'>
            <img className='mx-auto ' src={logo} alt="" />
            <p>Journalism Without Fear or Favour </p>
            <p>{moment().format('LLLL')}</p>
        </div>
    );
};

export default Header;