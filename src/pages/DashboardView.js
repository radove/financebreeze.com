import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import DataTable from '../components/structure/DataTable'
import Typography from '@material-ui/core/Typography'
import MortgagePayoffOverTime from '../components/visualization/MortgagePayoffOverTime'
import TextField from '@material-ui/core/TextField'
import Logo from '../static/logo.png'
import 'typeface-roboto'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
})

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
    paperMain: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 150,
    },
})

class DashboardView extends Component {
    constructor(props) {
        super(props)
        this.props = props
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
        }

        this.handleChange = this.handleChange.bind(this)
        this.interestSaved = this.interestSaved.bind(this)
        this.saveSession = this.saveSession.bind(this)
        this.loadSession = this.loadSession.bind(this)
        this.setAmortization = this.setAmortization.bind(this)
    }

    setAmortization(data) {
        this.setState({ amortization: data })
    }

    interestSaved(interestPaidFull, interestPaidQuick) {
        this.setState({ saved: interestPaidFull - interestPaidQuick, interestPaid: interestPaidQuick })
    }
    yearsSaved(years, yearsLeft) {
        this.setState({ years: years, yearsLeft: yearsLeft })
    }

    handleChange(event, name) {
        let value = event.target.value
        value = value.replace(/\$/g, '')
        value = value.replace(/ /g, '')
        value = value.replace(/,/g, '')
        if (name === 'interest') {
            if (event.target.value > 7) {
                value = 7
            }

            if (event.target.value <= 0) {
                value = 0.1
            }
        }
        this.setState({ [name]: value }, this.saveSession)
    }

    saveSession() {
        localStorage.setItem('financebreeze_currentMortgagePayment', this.state.currentMortgagePayment)
        localStorage.setItem('financebreeze_remainingBalance', this.state.remainingBalance)
        localStorage.setItem('financebreeze_interest', this.state.interest)
        localStorage.setItem('financebreeze_additionalMortgagePayment', this.state.additionalMortgagePayment)
    }

    loadSession() {
        let currentMortgagePayment = localStorage.getItem('financebreeze_currentMortgagePayment')
        let remainingBalance = localStorage.getItem('financebreeze_remainingBalance')
        let interest = localStorage.getItem('financebreeze_interest')
        let additionalMortgagePayment = localStorage.getItem('financebreeze_additionalMortgagePayment')

        if (currentMortgagePayment !== null && remainingBalance !== null && interest !== null && additionalMortgagePayment !== null) {
            this.setState({ currentMortgagePayment: currentMortgagePayment, remainingBalance: remainingBalance, interest: interest, additionalMortgagePayment: additionalMortgagePayment })
        }
    }

    componentDidMount() {
        this.loadSession()
    }

    render() {
        const { classes } = this.props

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper>
                            <form sclassName={classes.container} noValidate autoComplete="off">
                                <div align="center">
                                    <Grid container spacing={0}>
                                        <Grid item xl={3} lg={3} md={6} sm={6} xs={6}>
                                            <TextField
                                                id="outlined-name"
                                                label="Mortgage Payment (PI)"
                                                className={classes.textField}
                                                value={this.state.currentMortgagePayment}
                                                onChange={event => this.handleChange(event, 'currentMortgagePayment')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xl={3} lg={3} md={6} sm={6} xs={6}>
                                            <TextField id="outlined-name" label="Remaining Balance" className={classes.textField} value={this.state.remainingBalance} onChange={event => this.handleChange(event, 'remainingBalance')} margin="normal" />
                                        </Grid>
                                        <Grid item xl={3} lg={3} md={6} sm={6} xs={6}>
                                            <TextField id="outlined-name" label="Interest Rate" className={classes.textField} value={this.state.interest} onChange={event => this.handleChange(event, 'interest')} margin="normal" />
                                        </Grid>
                                        <Grid item xl={3} lg={3} md={6} sm={6} xs={6}>
                                            <TextField
                                                id="outlined-name"
                                                label="Additional Payment"
                                                className={classes.textField}
                                                value={this.state.additionalMortgagePayment}
                                                onChange={event => this.handleChange(event, 'additionalMortgagePayment')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="MortgagePayoffOverTime">
                            <Card>
                                <CardHeader title={'Mortgage Early Payoff Calculator'} subheader={'Plan for your future with FinanceBreeze.com'} action={<img alt="" src={Logo} width={50} />} />
                                <CardContent>
                                    <MortgagePayoffOverTime
                                        brushing={false}
                                        additionalMortgagePayment={this.state.additionalMortgagePayment}
                                        currentMortgagePayment={this.state.currentMortgagePayment}
                                        remainingBalance={this.state.remainingBalance}
                                        interest={this.state.interest}
                                        setInterestSaved={this.interestSaved.bind(this)}
                                        setYearsSaved={this.yearsSaved.bind(this)}
                                        setAmortizationSchedule={this.setAmortization.bind(this)}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Card>
                            <CardHeader subheader={'Years Saved'} />
                            <CardContent>
                                <div align="center">
                                    <Typography variant="h4"> {this.state.years + ' Years'} </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Card>
                            <CardHeader subheader={'Interest Saved'} />
                            <CardContent>
                                <div align="center">
                                    <Typography variant="h4"> {formatter.format(this.state.saved)} </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Card>
                            <CardHeader subheader={'Years Left'} />
                            <CardContent>
                                <div align="center">
                                    <Typography variant="h4"> {this.state.yearsLeft + ' Years'} </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Card>
                            <CardHeader subheader={'Interest Paid'} />
                            <CardContent>
                                <div align="center">
                                    <Typography variant="h4"> {formatter.format(this.state.interestPaid)} </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader subheader={'Amortization Schedule'} />
                            <CardContent>
                                <DataTable
                                    order="asc"
                                    orderBy="timestampraw"
                                    allowOrdering={false}
                                    rowsPerPage={25}
                                    headers={[
                                        { name: 'timestamp', display: 'Date', orderbyname: 'timestampraw' },
                                        { name: 'interest', display: 'Interest', orderbyname: 'interestraw' },
                                        { name: 'principle', display: 'Principle', orderbyname: 'principleraw' },
                                        { name: 'remaining', display: 'Remaining', orderbyname: 'remainingraw' },
                                    ]}
                                    data={this.state.amortization}
                                    columns={['timestamp', 'interest', 'principle', 'remaining']}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader subheader={'Developed by...'} />
                            <CardContent>
                                <div align="center">
                                    <div class="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="radove">
                                        <a class="LI-simple-link" href="https://www.linkedin.com/in/radove?trk=profile-badge">
                                            Ronnie Dove
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(DashboardView)
