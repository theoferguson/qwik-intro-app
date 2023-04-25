import { component$, Signal, Slot, useContext, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { beerContextId } from './beer-context-id';


export default component$(() => {
  const isTheoVisibleSignal = useSignal(false);
  const didTheoGetBeerSignal = useSignal(false);

  useContextProvider(beerContextId, didTheoGetBeerSignal);

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
    <BeerGiver />
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

export const BeerGiver =  component$(() => {
return <div>
  <BeerButton />
</div>
});

export const BeerButton = component$(() => {
  const gotBeerSignal = useContext(beerContextId);
  return <div>
    <button onClick$={() => {
      gotBeerSignal.value = true;
    }}>
      give me a value
    </button>
  </div>
})