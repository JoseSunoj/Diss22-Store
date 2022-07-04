import productOrder from 'app/entities/product/product-order/product-order.reducer';
import customer from 'app/entities/customer/customer.reducer';
import notification from 'app/entities/notification/notification/notification.reducer';
import product from 'app/entities/product/product/product.reducer';
import shipment from 'app/entities/invoice/shipment/shipment.reducer';
import invoice from 'app/entities/invoice/invoice/invoice.reducer';
import productCategory from 'app/entities/product/product-category/product-category.reducer';
import orderItem from 'app/entities/product/order-item/order-item.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  productOrder,
  customer,
  notification,
  product,
  shipment,
  invoice,
  productCategory,
  orderItem,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
