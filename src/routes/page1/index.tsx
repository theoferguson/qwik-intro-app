import { component$, Slot, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { Projector } from './projector';
import { searchContextId } from './projector-context-id';

export default component$(() => {
  const messageSignal = useSignal('');
  const colorSignal = useSignal('');

  useContextProvider(searchContextId, {
    messageSignal,
    colorSignal
  });

  useTask$(({track}) => {
    track(() => messageSignal.value);

    if (messageSignal.value.indexOf('llama') !== -1) {
      colorSignal.value = 'red';
    } else {
      colorSignal.value = '';
    }
  })

  return <div>
    This is Page 1

    <hr />
    
    <input 
    type="text" placeholder="Type your search"
    onInput$={(e) => {
      messageSignal.value = (e.target as HTMLInputElement).value;
    }}
    />
    
    <hr />
    
    <Projector />
  </div>
});