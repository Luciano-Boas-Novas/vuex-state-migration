<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount:
      <base-badge mode="elegant">
        ${{ cartTotal }}
      </base-badge>
    </h3>
    <ul>
      <cart-item
        v-for="item in cart.items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      />
    </ul>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useEcommerceStore } from '../store.js'
import CartItem from '../components/cart/CartItem.vue'

export default {
  components: { CartItem },
  setup() {
    const store = useEcommerceStore()

    const cart = computed(() => store.cart)

      const cartTotal = computed(() => store.cart.total.toFixed(2))

    return { cart, cartTotal }
  }
}
</script>
