<script lang="ts">
	import Grid from './Grid.svelte';
    import banner from '$lib/images/banner.png'

    export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="pi grids" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
    />
</svelte:head>

<section>
    <div class="relative">
        <img src={banner} class="w-full blur-[1px]" alt='blue grid background' />
        <h1 class="w-full absolute inset-0 flex justify-center items-center py-4 text-white text-4xl lg:text-8xl title-font">PI Pieces π</h1>
    </div>
    <p class="px-8 lg:px-48 py-12 text-center elms-sans">Each grid represents the first 1,024 digits of pi (starting with '3' in the upper-left corner). They are colored in various ways to create pixel art.</p>

    <div class="w-full pb-12 lg:p-8 lg:grid lg:grid-cols-2 lg:gap-8 elms-sans">
        <Grid data={data.evenOdd} textA="Even number" textB="Odd number" />
        <Grid data={data.primeNumbers} textA="Prime number" textB="Non-prime number" />
        <Grid data={data.perfectSquares} textA="Perfect square" textB="Non-perfect square" />
        <Grid data={data.nextDigit} textA="Next digit is larger" textB="Next digit is smaller" />
        <Grid data={data.repeats} textA="Repeating digits" textB="Non-repeating digits" />
        <Grid data={data.birthday} textA="Number is in my birthday 🥳" textB="Number not in my birthday" />
    </div>

</section>

<style></style>
