import { Resource, component$, useResource$ } from "@builder.io/qwik";

export interface Beer {
    name: string;
}

export const BeerSelector = component$(() => {

    const beersResource = useResource$<Beer[]>(async ({ track, cleanup }) => {
        const result = await fetch('http://localhost:5173/api/beers');
        return result.json();
    });

    return <div>
        <Resource value={beersResource}
            onPending={() => <span>Loading...</span>}
            onRejected={(error) => <span>Error: {error}</span>}
            onResolved={(beers) =>
                <select>
                    {beers.map(beer => <option>{beer.name}</option>)}
                </select>
            }
        />

    </div>
});