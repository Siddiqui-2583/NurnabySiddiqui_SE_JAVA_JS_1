import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
} from "@material-ui/core";



const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  if (!values.salePrice) {
    errors.salePrice = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.category) {
    errors.category = "Required";
  }
  return errors;
};

function AddNewProduct(props) {
  console.dir(props)
const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  // window.alert(JSON.stringify(values, 0, 2));
  // console.log(values,"products: ",products);
  const newProducts = [...props.products, values]
  // console.log(newProducts)
  props.setProducts(newProducts)
  };
  
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <br />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Add New Product
      </Typography>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid
                style={{ padding: 10, margin: "auto", maxWidth: 400 }}
                container
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="title"
                    component={TextField}
                    type="text"
                    label="Title"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="price"
                    component={TextField}
                    type="text"
                    label="Price"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="salePrice"
                    component={TextField}
                    type="text"
                    label="Sale Price"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    required
                    name="category"
                    component={TextField}
                    type="text"
                    label="Category"
                  />
                </Grid>

                <Grid item xs={12} lg={12}>
                  <Field
                    fullWidth
                    name="description"
                    component={TextField}
                    type="text"
                    label="Description"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Link to={"/"}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

export default AddNewProduct;
