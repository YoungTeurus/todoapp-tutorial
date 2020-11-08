import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';
import {AlertContext} from "../context/alert/AlertContext";

const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  return (
      <CSSTransition
          in={alert.visible}
          timeout={{
              enter: 500,
              exit: 350
          }}
          classNames={'alert'}
          mountOnEnter
          unmountOnExit
      >
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
          <strong>Внимание!</strong>&nbsp;{alert.text}
          <button type="button" className="close" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </CSSTransition>
  )
}

Alert.propTypes = {
  alert: PropTypes.object
}

export default Alert;