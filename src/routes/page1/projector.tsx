import { component$, useContext } from "@builder.io/qwik"
import { searchContextId } from "./projector-context-id";

export const Projector = component$(() => {
    const { colorSignal, messageSignal} = useContext(searchContextId);

    return <div>You typed: <span style={'color:' + colorSignal.value}>{messageSignal.value}</span></div>
})