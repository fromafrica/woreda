<script lang="ts">
  export let size: 'text-sm' | 'text-lg' | 'text-2xl';
  export let label: string = '';

  $: textsize = size;
</script>

<button
  type="button"
  class={['p-5', 'rounded', 'bg-red-300', textsize].join(' ')}
  on:click
>
  {label}
</button>
