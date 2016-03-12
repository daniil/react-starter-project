import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bootstrapApp } from 'actions/app-actions';
import styles from './styles.scss';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(bootstrapApp());
  }

  render() {
    const { app } = this.props;

    return (
      <p className={styles.homeText}>Home Route</p>
    );
  }
}

function mapStateToProps(state) {
  const { app } = state;

  return {
    app
  };
}

export default connect(mapStateToProps)(Home);
