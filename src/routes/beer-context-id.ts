import { Signal, createContextId } from "@builder.io/qwik";


export const beerContextId = createContextId<Signal<boolean>>('beerContext');