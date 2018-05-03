import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';


const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,
  category:   state.Ranking.category,
  ranking:    state.Ranking.raning,
  error:      state.Ranking.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onMountとonUpdateをfetchRankingを接続
  onMount(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  },
  onUpdate(categoryId) {
    dispatch(actions.fetchRanking(categoryId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
