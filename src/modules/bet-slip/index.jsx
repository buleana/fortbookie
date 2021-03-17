import React from 'react';
// UI
import Input from 'components/input';
import Close from 'components/close';
// Styles
import './styles.sass';

const BetSlip = ({ title, game, price, risk, toWin }) => {
  return (
    <div className="bet-slip">
      <div className="bet-slip__header">
        <span className="bet-slip__header-title">{title}</span>
        <Close onClick={() => { }} />
      </div>
      <div className="bet-slip__details">
        <span className="bet-slip__details-name">{game}</span>
        <span className="bet-slip__details-price">{price}</span>
      </div>
      <div className="bet-slip__control">
        <div className="bet-slip__control-input">
          <Input type="number" placeholder="Risk" value={risk} />
        </div>
        <div className="bet-slip__control-input">
          <Input type="number" placeholder="To Win" value={toWin} />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;