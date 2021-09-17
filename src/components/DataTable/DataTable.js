import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DataTable(props) {
  console.dir(props);
  
  const [openDialogue, setOpenDialogue] = React.useState(false);

  const handleClickOpenDialogue = () => {
    setOpenDialogue(true);
  };

  const handleCloseDialogue = () => {
    setOpenDialogue(false);
  };

  let { setClickedProduct } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%",
    },
    container: {
      maxHeight: 500,
    },
    fab: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  }));

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    console.log(id);
    setOpenDialogue(false);
  };

  const columns = [
    { id: "title", label: "Title", align: "center" },
    { id: "price", label: "Price", align: "center" },
    { id: "salePrice", label: "Sale Price", align: "center" },
    { id: "description", label: "Description", align: "center" },
    { id: "category", label: "Category", align: "center" },
  ];

  function createData(title, price, salePrice, description, category) {
    return {
      title,
      price,
      salePrice,
      description,
      category,
    };
  }
  const rows = [];

  props.products.forEach((product) => {
    rows.push(
      createData(
        product.title,
        product.price,
        product.salePrice,
        product.description,
        product.category
      )
    );
  });

  return (
    <div className="container-fluid">
      <br />
      <br />
      <container className="row">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              {props.loading === "block" ? (
                <div className="load">{/* <Loading /> */}</div>
              ) : (
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      // console.log(row)
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                          
                          <TableCell align="center">
                            <Link to="/edit-product">
                              <IconButton
                                aria-label="edit"
                                onClick={() => {
                                  props.setClickedProduct(row);
                                }}
                                className={classes.margin}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Link>
                            <IconButton
                              aria-label="delete"
                              onClick={() => {
                                handleClickOpenDialogue();
                              }}
                              className={classes.margin}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                            <Dialog
                              open={openDialogue}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={handleCloseDialogue}
                              aria-labelledby="alert-dialog-slide-title"
                              aria-describedby="alert-dialog-slide-description"
                            >
                              <DialogTitle id="alert-dialog-slide-title">
                                {"Delete Product"}
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                  Do you really want to delete this product?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  onClick={handleCloseDialogue}
                                  color="primary"
                                >
                                  No
                                </Button>
                                <Button
                                  onClick={() => {
                                    handleDelete(row.id);
                                  }}
                                  color="primary"
                                >
                                  Yes
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </container>
    </div>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default DataTable