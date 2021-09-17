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
  if (!values.writer) {
    errors.writer = "Required";
  }
  if (!values.category) {
    errors.email = "Required";
  }
  if (!values.publisher) {
    errors.publisher = "Required";
  }
  return errors;
};

function EditProduct(props) {
  
  const { title, price, salePrice, description, category } = props.clickedProduct;
// console.log(props.clickedBook);
const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
  console.log(values);
  // const newProducts = [...props.products, values];
  // console.log(newProducts)
  const newProducts = props.products.filter((product) => product.title !== values.title);
   console.log(newProducts);
  // props.products.map((product) => {
  //   if (product.title === values.title) {
  //     product = values;
  //   }
  // });

  // props.setProducts(newProducts);

  };
  
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <br />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Edit product details
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
                    defaultValue={title}
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
                    defaultValue={price}
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
                    defaultValue={salePrice}
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
                    defaultValue={description}
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
                    defaultValue={category}
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

export default EditProduct;
