import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import MoneyIcon from '@material-ui/icons/AttachMoneyRounded'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, Highlight, AreaSeries, Crosshair } from 'react-vis'
import 'react-vis/dist/style.css'
import moment from 'moment'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
})

const styles = theme => ({
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
    chip: {
        margin: theme.spacing(1),
    },
})

class DashboardView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            crosshairValues: [],
            additionaldata: [],
            lastDrawLocation: null,
            crosshairDate: '',
            crosshairValue: 0,
            width: 0,
            height: 400,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    refreshData() {
        //const { classes } = this.props

        let upsidedown = false
        let currentDateFull = moment()
        let currentDateQuick = moment()
        let interest = this.props.interest / 100
        let monthlyInterest = interest / 12
        let remainingBalance = this.props.remainingBalance
        let remainingBalanceWithAdditionalPayment = this.props.remainingBalance

        let data = []
        let additionaldata = []
        let interestPaidFull = 0
        let interestPaidQuick = 0
        while (remainingBalance > 0) {
            let totalMonthly = remainingBalance * monthlyInterest
            interestPaidFull = interestPaidFull + totalMonthly
            let principle = this.props.currentMortgagePayment - totalMonthly
            if (principle < 0) {
                upsidedown = true
                remainingBalance = 0
            } else {
                remainingBalance = remainingBalance - principle
                currentDateFull = moment(currentDateFull)
                    .add(1, 'months')
                    .calendar()

                data.push({ x: moment(currentDateFull).valueOf(), y: remainingBalance })
            }
        }

        while (remainingBalanceWithAdditionalPayment > 0) {
            let totalMonthly = remainingBalanceWithAdditionalPayment * monthlyInterest
            interestPaidQuick = interestPaidQuick + totalMonthly
            let principle = this.props.currentMortgagePayment - totalMonthly
            if (principle < 0) {
                upsidedown = true
                remainingBalanceWithAdditionalPayment = 0
            } else {
                upsidedown = false
                remainingBalanceWithAdditionalPayment = remainingBalanceWithAdditionalPayment - principle
                remainingBalanceWithAdditionalPayment = remainingBalanceWithAdditionalPayment - this.props.additionalMortgagePayment
                currentDateQuick = moment(currentDateQuick)
                    .add(1, 'months')
                    .calendar()

                additionaldata.push({
                    x: moment(currentDateQuick).valueOf(),
                    y: remainingBalanceWithAdditionalPayment,
                })
            }
        }

        var diffInYears = moment(currentDateFull).diff(moment(currentDateQuick), 'years')
        var yearsLeft = moment(currentDateQuick).diff(moment(), 'years')

        this.setState({ upsidedown: upsidedown, additionaldata: additionaldata, data: data })

        this.props.setInterestSaved(interestPaidFull, interestPaidQuick)
        this.props.setYearsSaved(diffInYears, yearsLeft)
    }
    updateWindowDimensions() {
        if (document.getElementById('MortgagePayoffOverTime') !== null) {
            let widthDetect = document.getElementById('MortgagePayoffOverTime').clientWidth - 50
            if (this.state.width !== widthDetect || this.state.height !== window.innerHeight) {
                this.setState({
                    width: widthDetect,
                })
            }
        }
    }

    componentDidMount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
        window.removeEventListener('orientationchange', this.updateWindowDimensions)
        window.removeEventListener('webkitfullscreenchange', this.handleExitFullscreen, false)
        window.removeEventListener('mozfullscreenchange', this.handleExitFullscreen, false)
        window.removeEventListener('msfullscreenchange', this.handleExitFullscreen, false)
        window.removeEventListener('fullscreenchange', this.handleExitFullscreen, false)
        window.addEventListener('orientationchange', this.updateWindowDimensions)
        window.addEventListener('resize', this.updateWindowDimensions)
        window.addEventListener('webkitfullscreenchange', this.handleExitFullscreen, false)
        window.addEventListener('mozfullscreenchange', this.handleExitFullscreen, false)
        window.addEventListener('fullscreenchange', this.handleExitFullscreen, false)
        window.addEventListener('msfullscreenchange', this.handleExitFullscreen, false)
        this.updateWindowDimensions()
        this.refreshData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.additionalMortgagePayment !== prevProps.additionalMortgagePayment) {
            this.refreshData()
        }
        if (this.props.currentMortgagePayment !== prevProps.currentMortgagePayment) {
            this.refreshData()
        }
        if (this.props.remainingBalance !== prevProps.remainingBalance) {
            this.refreshData()
        }
        if (this.props.interest !== prevProps.interest) {
            this.refreshData()
        }
    }

    _onMouseLeave = () => {
        this.setState({ crosshairValues: [] })
    }

    _onNearestX = (value, { index }) => {
        let time = moment(value.x).format('MMMM Do YYYY')
        this.setState({ crosshairValue: value.y, crosshairDate: time, crosshairValues: [this.state.additionaldata[index]] })
    }

    render() {
        const { classes } = this.props
        const lastDrawLocation = this.state.lastDrawLocation
        if (this.state.upsidedown === true) {
            return <div>You will never pay off the loan in this situation</div>
        } else {
            return (
                <div>
                    <XYPlot
                        onMouseLeave={this._onMouseLeave}
                        animation
                        margin={{ right: 100, left: 100 }}
                        xType="time"
                        width={this.state.width}
                        height={this.state.height}
                        xDomain={lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]}
                        yDomain={lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]}
                    >
                        <VerticalGridLines style={{ opacity: 0.05 }} />
                        <HorizontalGridLines style={{ opacity: 0.05 }} />
                        <XAxis style={{ fill: 'white' }} tickTotal={5} />
                        <YAxis style={{ fill: 'white' }} tickTotal={5} />
                        <AreaSeries
                            animation
                            style={{
                                fill: '#ffaaaa',
                                stroke: '#992e24',
                                strokeWidth: '2px',
                                strokeDasharray: 5,
                                strokeOpacity: 1,
                                fillOpacity: 1,
                                pointerEvents: this.props.brushing ? 'none' : 'auto',
                            }}
                            curve="curveNatural"
                            data={this.state.data}
                        />
                        <AreaSeries
                            animation
                            style={{
                                fill: '#9AB9C8',
                                stroke: '#407088',
                                strokeDasharray: 5,
                                strokeWidth: '2px',
                                strokeOpacity: 1,
                                fillOpacity: 1,
                                pointerEvents: this.props.brushing ? 'none' : 'auto',
                            }}
                            curve="curveNatural"
                            data={this.state.additionaldata}
                            onNearestX={this._onNearestX}
                        />
                        <Crosshair values={this.state.crosshairValues} style={{ line: { opacity: 0.25, width: '2px', backgroundColor: '#831613' } }}>
                            <Chip
                                avatar={
                                    <Avatar style={{ backgroundColor: '#00e6ac' }}>
                                        <MoneyIcon />
                                    </Avatar>
                                }
                                label={this.state.crosshairDate + ': ' + formatter.format(this.state.crosshairValue)}
                                className={classes.chip}
                            />
                        </Crosshair>

                        <Highlight
                            onBrushEnd={area => this.setState({ lastDrawLocation: area })}
                            onDrag={area => {
                                this.setState({
                                    lastDrawLocation: {
                                        bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                                        left: lastDrawLocation.left - (area.right - area.left),
                                        right: lastDrawLocation.right - (area.right - area.left),
                                        top: lastDrawLocation.top + (area.top - area.bottom),
                                    },
                                })
                            }}
                        />
                    </XYPlot>
                </div>
            )
        }
    }
}

export default withStyles(styles)(DashboardView)
