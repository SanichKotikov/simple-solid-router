import { IRouteHistory, useRouter } from './Provider';

interface IProps<S = any> extends Omit<JSX.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string | IRouteHistory<S>;
  classActive?: string;
}

export function Link<S = any>({ to, classList, classActive = '', children, ...rest }: IProps<S>) {
  const { history, navigate } = useRouter();
  const [href, state] = typeof to === 'string' ? [to] : [to.location, to.state];

  function onClick(event: Event) {
    event.preventDefault();
    navigate(href, state);
  }

  return (
    <a
      {...rest}
      href={href}
      classList={{ ...classList, [classActive]: history.location === href }}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
