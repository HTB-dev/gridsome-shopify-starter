<template>
  <Layout>
    <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            blog
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            ブログ一覧ページです。
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none" >
          <div
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
            v-for="{ node } in $page.allWordPressPost.edges" :key="node.id"
          >
            <Post :post="node" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>
