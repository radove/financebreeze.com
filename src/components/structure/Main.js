import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import DashboardView from '../../pages/DashboardView'
import SearchView from '../../pages/SearchView'
import { Theme } from '../../theme'
import Container from '@material-ui/core/Container'

const drawerWidth = 256

const styles = {
    button: {
        margin: '5px',
        fontSize: '8pt',
    },
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [Theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        padding: '15px 15px 0',
    },
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        // Don't call this.setState() here!
        this.state = {
            mobileOpen: false,
            landing: 0,
        }
        this.handlePageLanding = this.handlePageLanding.bind(this)
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    handlePageLanding(code) {
        this.setState({ landing: code })
    }

    render() {
        const { classes } = this.props
        const landingcode = this.state.landing

        const mainpage = []
        if (landingcode === 0) {
            mainpage.push(<DashboardView key="main" />)
        } else if (landingcode === 1) {
            mainpage.push(<SearchView key="search" />)
        }

        return (
            <MuiThemeProvider theme={Theme}>
                <div className={classes.root}>
                    <div className={classes.appContent}>
                        <Container maxWidth="lg">
                            <main className={classes.mainContent}>{mainpage}</main>
                        </Container>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Main)
