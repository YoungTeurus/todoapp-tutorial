import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {AlertContext} from "../context/alert/AlertContext";

const Alert = () => {
  const {alert, hide} = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }

  return(
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Внимание!</strong>&nbsp;{alert.text}
        <button type="button" className="close" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.object
}

export default Alert;