import { Component } from 'solid-js';
import { Dynamic, Show } from 'solid-js/dom';
import { useRouter } from './Provider';

export interface IRouteMatch<T = string[]> {
  routeMatch: T;
}

interface IProps {
  pattern: RegExp;
  component: Component<IRouteMatch>;
}

export function Route({ pattern, component }: IProps) {
  const { history } = useRouter();

  return (
    <Show when={pattern.test(history.location)}>
      <Dynamic
        component={component}
        routeMatch={(history.location.match(pattern) || []).slice(1)}
      />
    </Show>
  );
}
