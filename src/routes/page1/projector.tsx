import { component$, Slot } from "@builder.io/qwik"

interface ProjectorProps{
    message: string;
    color: string;
}

export const Projector = component$((props: ProjectorProps) => {
    const { color = '', message='' } = props;
    return <div>You typed: <span style={'color:' + color}>{message}</span></div>
  })