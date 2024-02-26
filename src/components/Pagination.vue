<template>
    <ul class="paginat__list">
  
      <!-- Visible Buttons Start -->
  
      <li
        v-for="page in pages"
        class="pagination-item"
        :key="page.name"
      >
        <button class="btn-paginat"
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ activeBtn: isPageActive(page.name) }"
        >
          {{ page.name }}
        </button>
      </li>
  
      <!-- Visible Buttons End -->
  
      <li class="pagination-item">
        <button class="btn-paginat"
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
        >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
        </button>
      </li>
    </ul>
  </template>

<script>
    export default {
        props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage <= Math.floor(this.maxVisibleButtons / 2) + 1) {
    return 1;
  } else if (this.currentPage >= this.totalPages - Math.floor(this.maxVisibleButtons / 2)) {
    return this.totalPages - this.maxVisibleButtons + 1;
  } else {
    return this.currentPage - Math.floor(this.maxVisibleButtons / 2);
  }
},
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
}
</script>