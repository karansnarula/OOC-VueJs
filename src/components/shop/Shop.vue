<template>
  <div>
    <!-- <button type="button" class="btn"  style="float: right;">Login</button> -->

    <div>
      <!-- <b-button @click="showModal">
        Login
      </b-button>
      <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
        <div class="d-block text-center">
          <h3>Login!</h3>
        </div>
        <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
      </b-modal> -->
      <button
        class="btn green"
        @click="$modal.show('demo-login')">
        Login
      </button>
    </div>


    <button type="button" class="btn"  style="float: right;">Logout</button>
    <div class="container">
      <div class="row mt-2">
        <div class="col-sm-9">
          <ProductList />
        </div>
        <div class="col-sm-3">
          <ShoppingCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from './../shared/PageHeader'
// import Coupons from './Coupons'
import DemoLoginModal from './DemoLoginModal.vue' //This shit does not work!! Don't know why
import ProductList from './products/ProductList'
import ShoppingCart from './shopping-cart/ShoppingCart'

export default {
  name: 'Shop',
  components: {
    PageHeader,
    // Coupons,
    ProductList,
    ShoppingCart,
    DemoLoginModal
  },

}
</script>
