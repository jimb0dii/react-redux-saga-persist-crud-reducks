import ListPage from "../views/containers/Products/ListPage";
import AddFormPage from "../views/containers/Products/AddFormPage";
import EditFormPage from "../views/containers/Products/EditFormPage";

const routes = [
  {
    path: "/products",
    component: ListPage,
    exact: true
  },
  {
    path: "/products/add",
    component: AddFormPage,
    exact: true
  },
  {
    path: "/products/:id/edit",
    component: EditFormPage,
    exact: true
  }
];

export default routes;
