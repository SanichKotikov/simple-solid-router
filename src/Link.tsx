import { IRouteHistory, useRouter } from './Provider';

interface IProps<S = any> {
  to: string | IRouteHistory<S>;
  class?: string;
  classActive?: string;
  children: JSX.Element;
}

export function Link<S = any>(props: IProps<S>) {
  const { history, navigate } = useRouter();

  const [href, state] = typeof props.to === 'string'
    ? [props.to]
    : [props.to.location, props.to.state];

  function onClick(event: Event) {
    event.preventDefault();
    navigate(href, state);
  }

  return (
    <a
      href={href}
      class={props.class}
      classList={{ [props.classActive || '']: history.location === href }}
      onClick={onClick}
    >
      {props.children}
    </a>
  );
}
