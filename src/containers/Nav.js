import { connect } from 'react-redux';
import Nav from '../components/Nav';


const mapStateToProps = state => ({
  categories: state.shopping.categories
});

export default connect(mapStateToProps)(Nav);