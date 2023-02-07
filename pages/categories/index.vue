<script lang="ts" setup>
useHead({
  title: "Categories",
  meta: [
    {
      name: "description",
      content: "Categories",
    },
  ],
});

  const {data: categories} = await useWpApi().getCategories()

  import colorGenerator from '~~/utils/colorGenerator';

</script>

<template>
  <section class="py-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap gap-5">

        <NuxtLink 
          v-for="category in categories"
          :key="(category.id as any).id"
          :to="`/categories/${category.slug}`"
          class="flex items-center justify-center py-2 px-4 rounded text-white shadow-md hover:shadow-lg duration-200 text-2xl uppercase"
          :style="{backgroundColor:colorGenerator()}">
          <span class="font-semibold">#{{ (category as any).name }}</span>
        </NuxtLink>


      </div>
    </div>
  </section>
</template>