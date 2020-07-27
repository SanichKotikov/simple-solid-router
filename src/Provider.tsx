import { createContext, createState, useContext } from 'solid-js';

export interface IRouteHistory<S = any> {
  location: string;
  state?: S;
}

export interface IRouterStore<S = any> {
  history: Readonly<IRouteHistory<S>>;
  navigate: (location: string, state?: S) => void;
}

const RouterContext = createContext<Readonly<IRouterStore>>();

interface IProps {
  children: JSX.Element;
}

export function RouterProvider(props: IProps) {
  const navigate = (location: string, state?: any) => {
    window.history.pushState(state, '', location);
    setHistory({ location, state });
  };

  const [history, setHistory] = createState<IRouteHistory>({
    location: window.location.pathname,
    state: window.history.state,
  });

  const context = { history, navigate };

  return (
    <RouterContext.Provider value={context}>
      {props.children}
    </RouterContext.Provider>
  );
}

export function useRouter<S = any>() {
  return useContext<IRouterStore<S>>(RouterContext);
}
