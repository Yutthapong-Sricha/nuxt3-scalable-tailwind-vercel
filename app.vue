<!-- <script lang="ts" setup>
 useHead({
    title: 'Home',
    meta: [
      { 
        name: 'description', 
        content: 'Home Nuxt 3, IT Genius Engineering' 
      },
      {
        name: 'keywords',
        content: 'Home, Nuxt 3, Learning Nuxt 3'
      },
    ],
  })

</script>

<template>
      <div class="flex justify-center items-center h-screen">
          <h1 class="text-3xl font-bold text-purple-600 animate-bounce">
            Hello Nuxt 3
            <Icon name="icon-park:home-two"></Icon>
            <Icon name="ic:twotone-wb-sunny"></Icon>

          </h1>
      </div>
</template> -->


<template>
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  </Head>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
