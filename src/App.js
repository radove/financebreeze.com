import React from "react";
import logo from "./resources/dove_io_logo_new.png";
import "antd/dist/antd.dark.css";
import "slick-carousel/slick/slick.css";
import "video-react/dist/video-react.css"; // import css
import "slick-carousel/slick/slick-theme.css";
import "moment-timezone";
import FinanceForm from "./components/FinanceForm";
import moment from "moment";
import {
  Row,
  Col,
  Statistic,
  Affix,
  Alert,
  Table,
  Layout,
  Button,
  Card,
  BackTop,
  Typography,
} from "antd";
import { BulbOutlined } from "@ant-design/icons";
const { Link, Title, Text } = Typography;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const { Meta } = Card;
const { Header, Footer, Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      saved: 0,
      years: 0,
      yearsLeft: 0,
      amortization: [],
      interestPaid: 0,
      currentMortgagePayment: 1308.76,
      remainingBalance: 150000,
      interest: 3.75,
      additionalMortgagePayment: 500,
    };
    this.handleChange = this.handleChange.bind(this);
    this.interestSaved = this.interestSaved.bind(this);
    this.setAmortization = this.setAmortization.bind(this);
    this.onFinishCalculate = this.onFinishCalculate.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.refreshData = this.refreshData.bind(this);
  }

  onFinishCalculate(value) {
    for (var i in value) {
      this.handleChange(i, value[i]);
    }
  }

  setAmortization(data) {
    this.setState({ amortization: data });
  }

  interestSaved(interestPaidFull, interestPaidQuick) {
    this.setState({
      saved: interestPaidFull - interestPaidQuick,
      interestPaid: interestPaidQuick,
    });
  }
  yearsSaved(years, yearsLeft) {
    this.setState({ years: years, yearsLeft: yearsLeft });
  }

  handleChange(name, value) {
    value = value.replace(/\$/g, "");
    value = value.replace(/ /g, "");
    value = value.replace(/,/g, "");
    if (name === "interest") {
      if (value > 7) {
        value = 7;
      }

      if (value <= 0) {
        value = 0.1;
      }
    }
    console.log(name, value);
    this.setState({ [name]: value }, function () {
      this.refreshData();
    });
  }

  refreshData() {
    //const { classes } = this.props
    let amortization = [];
    let upsidedown = false;
    let currentDateFull = moment();
    let currentDateQuick = moment();
    let interest = this.state.interest / 100;
    let monthlyInterest = interest / 12;
    let remainingBalance = this.state.remainingBalance;
    let remainingBalanceWithAdditionalPayment = this.state.remainingBalance;

    let data = [];
    let additionaldata = [];
    let interestPaidFull = 0;
    let interestPaidQuick = 0;
    while (remainingBalance > 0) {
      let totalMonthly = remainingBalance * monthlyInterest;
      interestPaidFull = interestPaidFull + totalMonthly;
      let principle = this.state.currentMortgagePayment - totalMonthly;
      if (principle < 0) {
        upsidedown = true;
        remainingBalance = 0;
      } else {
        remainingBalance = remainingBalance - principle;
        currentDateFull = moment(currentDateFull).add(1, "months").calendar();

        data.push({
          x: moment(currentDateFull).valueOf(),
          y: remainingBalance,
        });
      }
    }

    while (remainingBalanceWithAdditionalPayment > 0) {
      let totalMonthly =
        remainingBalanceWithAdditionalPayment * monthlyInterest;
      interestPaidQuick = interestPaidQuick + totalMonthly;
      let principle = this.state.currentMortgagePayment - totalMonthly;
      if (principle < 0) {
        upsidedown = true;
        remainingBalanceWithAdditionalPayment = 0;
      } else {
        upsidedown = false;
        remainingBalanceWithAdditionalPayment =
          remainingBalanceWithAdditionalPayment - principle;
        remainingBalanceWithAdditionalPayment =
          remainingBalanceWithAdditionalPayment -
          this.state.additionalMortgagePayment;
        currentDateQuick = moment(currentDateQuick).add(1, "months").calendar();

        additionaldata.push({
          x: moment(currentDateQuick).valueOf(),
          y: remainingBalanceWithAdditionalPayment,
        });
      }
      // 'timestamp', 'interest', 'principle', 'remaining
      let amortizationPoint = {};
      amortizationPoint["timestampraw"] = moment(currentDateQuick).valueOf();
      amortizationPoint["timestamp"] =
        moment(currentDateQuick).format("MMMM Do YYYY");
      amortizationPoint["interest"] = formatter.format(totalMonthly);
      amortizationPoint["interestraw"] = totalMonthly;
      amortizationPoint["principle"] = formatter.format(principle);
      amortizationPoint["principleraw"] = principle;
      amortizationPoint["remaining"] = formatter.format(
        remainingBalanceWithAdditionalPayment
      );
      amortizationPoint["remainingraw"] = remainingBalanceWithAdditionalPayment;
      amortization.push(amortizationPoint);
    }

    var diffInYears = moment(currentDateFull).diff(
      moment(currentDateQuick),
      "years"
    );
    var yearsLeft = moment(currentDateQuick).diff(moment(), "years");

    this.setState({
      upsidedown: upsidedown,
      additionaldata: additionaldata,
      data: data,
    });

    this.interestSaved(interestPaidFull, interestPaidQuick);
    this.yearsSaved(diffInYears, yearsLeft);
    this.setAmortization(amortization);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.refreshData();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    console.log(this.state.amortization);
    return (
      <Layout>
        <BackTop />
        <Affix offsetTop={0}>
          <Header
            style={{
              paddingLeft: "2%",
              paddingRight: "2%",
              backgroundColor: "#091423",
            }}
          >
            <div style={{ float: "left" }}>
              <Link href="https://www.dove.io" target="_blank">
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "50px", verticalAlign: "center" }}
                />
              </Link>
            </div>

            <div style={{ float: "right" }}>
              <Button
                onClick={() =>
                  window.open(
                    "https://github.com/radove/financebreeze.com/",
                    "_blank"
                  )
                }
                style={{
                  marginRight: "10px",
                }}
                type="primary"
                icon={<BulbOutlined />}
                size="large"
              >
                GitHub
              </Button>
            </div>
          </Header>
        </Affix>

        <Content
          style={{
            paddingLeft: "2%",
            paddingRight: "2%",
          }}
        >
          <div align="center" style={{ margin: "25px" }}></div>
          <Alert
            style={{
              marginLeft: "25%",
              marginRight: "25%",
              marginTop: "15px",
              marginBottom: "15px",
            }}
            description={
              <span>
                <div align="center">
                  <Title level={3}>Mortgage Payoff Calculator</Title>
                </div>
                <Text>
                  Use our mortgage payoff calculator to see how fast you can pay
                  off your mortgage with additional principal payments! Just
                  enter information about your mortgage loan and how much extra
                  you plan to pay toward your principal balance. This free and
                  open source react application is available as a service to the
                  financial community. Visit our GitHub for the source code to
                  this react app.
                </Text>
              </span>
            }
            type="info"
          />
          <Row gutter={[24, 24]}>
            <Col span={24} xs={24} md={24} sm={24} lg={24}>
              <Row type="flex" justify="center" align="top">
                <FinanceForm
                  currentMortgagePayment={this.state.currentMortgagePayment}
                  remainingBalance={this.state.remainingBalance}
                  interest={this.state.interest}
                  additionalMortgagePayment={
                    this.state.additionalMortgagePayment
                  }
                  width={this.state.width}
                  height={this.state.height}
                  onFinishCalculate={this.onFinishCalculate}
                />
              </Row>
            </Col>

            <Col
              span={24}
              xs={24}
              md={24}
              sm={24}
              lg={24}
              style={{
                paddingLeft: this.state.width > 760 ? "20%" : "2%",
                paddingRight: this.state.width > 760 ? "20%" : "2%",
              }}
            >
              <Row gutter={[24, 24]}>
                <Col span={24} xs={24} md={24} sm={24} lg={24} xl={6}>
                  <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <Meta
                      description={
                        <div align="center">
                          <Statistic
                            valueStyle={{ color: "#3f8600" }}
                            title="Years Saved"
                            value={this.state.years + " Years"}
                          />
                        </div>
                      }
                    />
                  </Card>
                </Col>
                <Col span={24} xs={24} md={24} sm={24} lg={24} xl={6}>
                  <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <Meta
                      description={
                        <div align="center">
                          <Statistic
                            valueStyle={{ color: "#3f8600" }}
                            title="Interest Saved"
                            value={formatter.format(this.state.saved)}
                          />
                        </div>
                      }
                    />
                  </Card>
                </Col>
                <Col span={24} xs={24} md={24} sm={24} lg={24} xl={6}>
                  <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <Meta
                      description={
                        <div align="center">
                          <Statistic
                            valueStyle={{ color: "#cf1322" }}
                            title="Years Remaining"
                            value={this.state.yearsLeft}
                          />
                        </div>
                      }
                    />
                  </Card>
                </Col>
                <Col span={24} xs={24} md={24} sm={24} lg={24} xl={6}>
                  <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <Meta
                      description={
                        <div align="center">
                          <Statistic
                            valueStyle={{ color: "#cf1322" }}
                            title="Interest Paid"
                            value={formatter.format(this.state.interestPaid)}
                          />
                        </div>
                      }
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col span={24} xs={24} md={24} sm={24} lg={24}>
              <div align="center">
                <Table
                  rowKey="timestampraw"
                  columns={[
                    {
                      title: "Date",
                      dataIndex: "timestamp",
                      defaultSortOrder: "ascend",
                      sorter: (a, b) => a.timestampraw - b.timestampraw,
                    },
                    {
                      title: "Interest",
                      dataIndex: "interest",
                    },
                    {
                      title: "Principle",
                      dataIndex: "principle",
                    },
                    {
                      title: "Remaining",
                      dataIndex: "remaining",
                    },
                  ]}
                  dataSource={this.state.amortization}
                />
              </div>
            </Col>
          </Row>
        </Content>
        <Footer style={{ paddingLeft: "20%", paddingRight: "20%" }}>
          <div align="center">
            Powered by <a href="https://www.dove.io">Dove.IO</a> Open Source
          </div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
