import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import coin1yen from '../../../assets/img/osaisen/coins/coin-1yen.png';
import coin5yen from '../../../assets/img/osaisen/coins/coin-5yen.png';
import coin10yen from '../../../assets/img/osaisen/coins/coin-10yen.png';
import coin50yen from '../../../assets/img/osaisen/coins/coin-50yen.png';
import coin100yen from '../../../assets/img/osaisen/coins/coin-100yen.png';
import coin500yen from '../../../assets/img/osaisen/coins/coin-500yen.png';
import offertoryBox from '../../../assets/img/osaisen/offertory-box.png';
import resetCoin from '../../../assets/img/osaisen/reset-coins.png';
import { Container, Col, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import paypay from '../../../assets/img/osaisen/payments/paypay.jpg';
import linepay from '../../../assets/img/osaisen/payments/linepay.png';
import rakutenpay from '../../../assets/img/osaisen/payments/rakutenpay.jpg';
import resetButton from '../../../assets/img/resetButton.jpg';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Bell from './bell';
import backImage from '../../../assets/img/back.png';


class Shrine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1yen: 0,
      count5yen: 0,
      count10yen: 0,
      count50yen: 0,
      count100yen: 0,
      count500yen: 0,
      clickCount: 0,
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  handleClickBack=() => {
    this.props.history.push('/')
  };

  componentDidUpdate() {
  }

  calcSumMoney = () => {
    return (
      this.state.count1yen + this.state.count5yen 
      + this.state.count10yen + this.state.count50yen 
      + this.state.count100yen + this.state.count500yen
      );
  }
  displaySumMoney = () => {
    var sumMoney = this.state.count1yen + this.state.count5yen + this.state.count10yen + this.state.count50yen + this.state.count100yen + this.state.count500yen
    var element = null;
    if (sumMoney < 10000) {
      element = <h1 className="sum-money"> ???????????????{sumMoney}??? </h1>;
    }
    else {
      this.resetState()
      sumMoney = 0;
      element = <React.Fragment>
        <h1 className="sum-money">
          ???????????????{sumMoney}???
          </h1>
      </React.Fragment>;
      window.alert("????????????????????????????????????????????????????????????\n ????????????????????????????????????????????????");
    }
    return (element)
  }

  handleClick1yen() {
    this.setState({
      count1yen: this.state.count1yen + 1
    });
  }

  handleClick5yen() {
    this.setState({
      count5yen: this.state.count5yen + 5
    });
  }

  handleClick10yen() {
    this.setState({
      count10yen: this.state.count10yen + 10
    });
  }

  handleClick50yen() {
    this.setState({
      count50yen: this.state.count50yen + 50
    });
  }

  handleClick100yen() {
    this.setState({
      count100yen: this.state.count100yen + 100
    });
  }

  handleClick500yen() {
    this.setState({
      count500yen: this.state.count500yen + 500
    });
  }
  resetState() {
    this.setState({
      count1yen: 0, count5yen: 0, count10yen: 0, count50yen: 0, count100yen: 0, count500yen: 0
    });
  }
  handleClick = () => {
    this.createPaymentElement();
  }

  createPaymentElement = () => {
    ReactDOM.render(<Bell />, document.getElementById('page-box'))
  }

  render() {
    return (
      <React.Fragment>
      <div id='page-box'>
        <Container className="centering">
          {this.displaySumMoney()}
          <img src={offertoryBox} alt="offertory-box" className="offertory-box centering" />
        </Container>
        <Container className="coins-button centering">
          <Row>
            <Col md={2}>
              <img src={coin1yen} alt="1yen" onClick={() => this.handleClick1yen()} className="coin-img" />
            </Col>
            <Col md={2}>
              <img src={coin5yen} alt="5yen" onClick={() => this.handleClick5yen()} className="coin-img" />
            </Col>
            <Col md={2}>
              <img src={coin10yen} alt="10yen" onClick={() => this.handleClick10yen()} className="coin-img" />
            </Col>
            <Col md={2}>
              <img src={coin50yen} alt="50yen" onClick={() => this.handleClick50yen()} className="coin-img" />
            </Col>
            <Col md={2}>
              <img src={coin100yen} alt="100yen" onClick={() => this.handleClick100yen()} className="coin-img" />
            </Col>
            <Col md={2}>
              <img src={coin500yen} alt="500yen" onClick={() => this.handleClick500yen()} className="coin-img" />
            </Col>
          </Row>
          <Row className='centering'>
            <Col md={3} className='centering reset-button'>
              <img src={resetCoin} alt="reset" onClick={() => this.resetState()} className="reset-button" />
            </Col>
            <Col md={2}>
              <img src={paypay} alt="paypay" className="payment" onClick={this.handleClick} />
            </Col>
            <Col md={2}>
              <img src={rakutenpay} alt="rakutenpay" className="payment" onClick={this.handleClick} />
            </Col>
            <Col md={2}>
              <img src={linepay} alt="linepay" className="payment" onClick={this.handleClick} />
            </Col>
          </Row>
          </Container>
          </div>
          <Container className="coins-button centering">
            <Row className='centering'>
              <Col md={12}>
                <img src={backImage} alt="back" onClick={this.handleClickBack}???className="back-button"/>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
    )
  }
}
  export default withRouter(Shrine);