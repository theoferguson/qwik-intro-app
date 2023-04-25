import { component$, Slot, useSignal, useTask$ } from '@builder.io/qwik';
import { Projector } from './projector';

export default component$(() => {
  const inputValueSignal = useSignal('');
  const inputColorSignal = useSignal('');

  useTask$(({track}) => {
    track(() => inputValueSignal.value);

    if (inputValueSignal.value.indexOf('llama') !== -1) {
      inputColorSignal.value = 'red';
    } else {
      inputColorSignal.value = '';
    }
  })

  return <div>
    This is Page 1

    <hr />
    
    <input 
    type="text" placeholder="Type your search"
    onInput$={(e) => {
      inputValueSignal.value = (e.target as HTMLInputElement).value;
    }}
    />
    
    <hr />
    
    <Projector message={inputValueSignal.value} color={inputColorSignal.value} />
  </div>
});