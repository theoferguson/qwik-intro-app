import { component$, Signal, Slot, useSignal, useTask$ } from '@builder.io/qwik';


export default component$(() => {
  const isTheoVisibleSignal = useSignal(false);
  const didTheoGetBeerSignal = useSignal(false);

  useTask$(({track}) => {
    track(() => didTheoGetBeerSignal.value);

    if (didTheoGetBeerSignal.value) {
      isTheoVisibleSignal.value = true;
    }
  })

  return (
    <>
    <div>
      hello world
    </div>
    <BeerGiver gotBeerSignal={didTheoGetBeerSignal} />
    {isTheoVisibleSignal.value ?
    <Theo></Theo> :
    null
  }
    </>
  );
});

export const Theo = component$(() => {
  return (
  <>
  <Slot />
  <div>hahaha</div>
  </>
  )
})


interface BeerGiverProps{
  gotBeerSignal: Signal<boolean>;
}

export const BeerGiver =  component$((props: BeerGiverProps) => {
return <div>
  <BeerButton gotBeerSignal={props.gotBeerSignal} />
</div>
});

interface BeerButtonProps{
  gotBeerSignal: Signal<boolean>;
}

export const BeerButton = component$((props: BeerButtonProps) => {
  return <div>
    <button onClick$={() => {
      props.gotBeerSignal.value = true;
    }}>
      give me a value
    </button>
  </div>
})