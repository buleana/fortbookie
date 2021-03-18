import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectBetSlips } from 'redux/bet-slips/selectors';
// Redux
import { removeBetSlip } from 'redux/bet-slips/actions';
// UI
import BetSlip from 'modules/bet-slip';
import Typography from 'components/typography';
import Scrollbar from 'components/scrollbar';
// Styles
import './styles.sass';

const BetSlips = ({ betSlips, removeBetSlip }) => {
  return (
    <div className="bet-slips">
      <div className="bet-slips__container">
        {betSlips.length === 0 ?
          <div className="bet-slips__empty">
            <Typography component="h3" className="bet-slips__empty-title">Bet Slip is Empty</Typography>
            <p className="bet-slips__empty-message">
              Learn how to place bets <a href="http://example.com" className="bet-slips__empty-link">here</a>
            </p>
          </div>
          :
          <div className="bet-slips__items">
            <Scrollbar className="bet-slips__items-scroll">
              {betSlips.map(({ id, title, game, price, risk, toWin }) => (
                <div key={id} className="bet-slips__item">
                  <BetSlip title={title} game={game} price={price} risk={risk} toWin={toWin} removeBetSlip={() => removeBetSlip(id)} />
                </div>
              ))}
            </Scrollbar>
          </div>
        }
      </div>
      <div className="bet-slips__footer">
        <div className="bet-slips__totals">
          <div className="bet-slips__total">
            <div className="bet-slips__total-title">Total Bets</div>
            <div className="bet-slips__total-value">0</div>
          </div>
          <div className="bet-slips__total">
            <div className="bet-slips__total-title">Total Risk</div>
            <div className="bet-slips__total-value bet-slips__total-value--alt">0</div>
          </div>
        </div>
        <div className="bet-slips__winnings">
          <div className="bet-slips__winnings-title">Possible winnings</div>
          <div className="bet-slips__winnings-value">0$</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  betSlips: selectBetSlips
});

const mapDispatchToProps = {
  removeBetSlip
};

export default connect(mapStateToProps, mapDispatchToProps)(BetSlips);
