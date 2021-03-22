import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectBetSlips, selectTotalBetSlips, selectTotalBetSlipsRisk, selectTotalBetSlipsWinnings } from 'redux/bet-slips/selectors';
import { removeBetSlip } from 'redux/bet-slips/actions';
// UI
import BetsEmpty from 'modules/bets-empty';
import BetSlip from 'modules/bet-slip';
import Typography from 'components/typography';
import Scrollbar from 'components/scrollbar';
// Styles
import './styles.sass';

const BetSlips = ({ betSlips, totalBetSlips, removeBetSlip, totalBetSlipsRisk, totalBetSlipsWinnings }) => {
  return (
    <div className="bet-slips">
      <div className="bet-slips__container">
        {betSlips.length === 0 ?
          <BetsEmpty title="Bet Slip" />
          :
          <div className="bet-slips__items">
            <Scrollbar className="bet-slips__items-scroll">
              {betSlips.map(({ id, title, game, price }) => (
                <div key={id} className="bet-slips__item">
                  <BetSlip title={title} game={game} price={price} removeBetSlip={() => removeBetSlip(id)} />
                </div>
              ))}
            </Scrollbar>
          </div>
        }
      </div>
      <div className="bet-slips__footer">
        <div className="bet-slips__totals">
          <div className="bet-slips__total">
            <Typography component="span" variant="h5" className="bet-slips__total-title">Total Bets</Typography>
            <Typography component="span" variant="h5" className="bet-slips__total-value">{totalBetSlips}</Typography>
          </div>
          <div className="bet-slips__total">
            <Typography component="span" variant="h5" className="bet-slips__total-title">Total Risk</Typography>
            <Typography component="span" variant="h5" className="bet-slips__total-value bet-slips__total-value--alt">{totalBetSlipsRisk}</Typography>
          </div>
        </div>
        <div className="bet-slips__winnings">
          <Typography component="span" variant="h5" className="bet-slips__winnings-title">Possible winnings</Typography>
          <Typography component="span" variant="h3" className="text-accent-2">{totalBetSlipsWinnings}$</Typography>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  betSlips: selectBetSlips,
  totalBetSlips: selectTotalBetSlips,
  totalBetSlipsRisk: selectTotalBetSlipsRisk,
  totalBetSlipsWinnings: selectTotalBetSlipsWinnings,
});

const mapDispatchToProps = {
  removeBetSlip
};

export default connect(mapStateToProps, mapDispatchToProps)(BetSlips);
