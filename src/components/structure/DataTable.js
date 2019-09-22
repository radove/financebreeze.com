import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import TablePagination from '@material-ui/core/TablePagination'
import IconButton from '@material-ui/core/IconButton'
import 'moment-timezone'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Tooltip from '@material-ui/core/Tooltip'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Typography from '@material-ui/core/Typography'

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0)
    }

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1)
    }

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1)
    }

    handleLastPageButtonClick = event => {
        this.props.onChangePage(event, Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1))
    }

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props

        return (
            <div className={classes.root}>
                <IconButton onClick={this.handleFirstPageButtonClick} disabled={page === 0} aria-label="First Page">
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton onClick={this.handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton onClick={this.handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="Next Page">
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton onClick={this.handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="Last Page">
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        )
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
}

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

const styles = theme => ({})

class DataTable extends React.Component {
    handleChangePage = (event, page) => {
        this.setState({ page })
    }

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value })
    }

    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            rowsPerPage: 10,
            q: '',
            order: 'desc',
            categories: [],
            orderBy: '',
            page: 0,
        }
        this.handleRequestSort = this.handleRequestSort.bind(this)
    }

    componentDidMount() {
        this.setState({ rowsPerPage: this.props.rowsPerPage, order: this.props.order, orderBy: this.props.orderBy })
    }
    handleRequestSort(property) {
        const orderBy = property
        let order = 'desc'

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc'
        }
        this.setState({ order, orderBy })
    }

    render() {
        const { rowsPerPage, page, order, orderBy } = this.state
        // const { classes } = this.props;

        let dataset = this.props.data

        //let emptyRows = rowsPerPage - Math.min(rowsPerPage, 0 - page * rowsPerPage);

        if (dataset) {
            //emptyRows = rowsPerPage - Math.min(rowsPerPage, dataset.length - page * rowsPerPage);
        } else {
            dataset = [{ data: false }]
        }
        let x = 0

        return (
            <div>
                <Table style={{ margin: '0px' }}>
                    <TableBody>
                        <TableRow style={{ height: '10px', padding: '0px' }}>
                            {this.props.headers.map(header => {
                                return (
                                    <TableCell style={{ fontWeight: 'bold', fontSize: '10pt', margin: '5px' }} key={header.name + 'tabletitle'} sortDirection={orderBy === header.orderbyname ? order : false}>
                                        <Tooltip title={'Sort by ' + header.display} placement="top" mouseEnterDelay="0.3">
                                            <TableSortLabel active={orderBy === header.orderbyname} direction={order} onClick={() => this.handleRequestSort(header.orderbyname)}>
                                                {header.display}
                                            </TableSortLabel>
                                        </Tooltip>
                                    </TableCell>
                                )
                            })}
                        </TableRow>

                        {stableSort(dataset, getSorting(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(row => {
                                x++
                                let cells = []
                                this.props.columns.forEach(function(c) {
                                    let push_cell = true
                                    if (this.props.widgets) {
                                        this.props.widgets.forEach(function(w) {
                                            if (this.props.onClickColumn && this.props.onClickColumn === c) {
                                                if (w.name === c) {
                                                    if (w.widget === '') {
                                                        cells.push(
                                                            <TableCell key={c + 'DataTableCell' + x}>
                                                                {' '}
                                                                <Typography onClick={() => this.props.onClickFunction(row[c])} style={{ padding: '0px', fontSize: '10pt', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                                                                    {row[c]}
                                                                </Typography>
                                                            </TableCell>
                                                        )
                                                    } else {
                                                        cells.push(
                                                            <TableCell key={c + 'DataTableCell' + x}>
                                                                {' '}
                                                                <Typography style={{ padding: '0px', fontSize: '10pt' }}>
                                                                    <IconButton onClick={() => this.props.onClickFunction(row[c])} style={{ width: '20px', height: '20px', padding: 0, margin: 0 }}>
                                                                        {w.widget}
                                                                    </IconButton>
                                                                </Typography>
                                                            </TableCell>
                                                        )
                                                    }
                                                    push_cell = false
                                                }
                                            } else {
                                                if (w.name === c) {
                                                    cells.push(
                                                        <TableCell key={c + 'DataTableCell' + x}>
                                                            {' '}
                                                            <Typography style={{ padding: '0px', fontSize: '10pt' }}>{w.widget}</Typography>
                                                        </TableCell>
                                                    )
                                                    push_cell = false
                                                }
                                            }
                                        }, this)
                                    }
                                    if (push_cell === true) {
                                        cells.push(
                                            <TableCell key={c + 'DataTableCell' + x}>
                                                {' '}
                                                <Typography style={{ padding: '0px', fontSize: '10pt' }}>{row[c]}</Typography>
                                            </TableCell>
                                        )
                                    }
                                }, this)
                                return (
                                    <TableRow style={{ fontSize: '10pt', height: '0px', padding: '0px' }} key={'DataTable' + x}>
                                        {cells}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
                <div align="center">
                    <TablePagination colSpan={10} count={dataset.length} rowsPerPage={rowsPerPage} page={page} onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} />
                </div>
            </div>
        )
    }
}

DataTable.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DataTable)
