import {
	NavLink,
	type NavLinkProps,
	type PolymorphicComponentProps,
} from "@mantine/core";

import { push } from "../utils/useHistory";

export type Props = PolymorphicComponentProps<"a", NavLinkProps>;

import useHistory from "../utils/useHistory";

export default function NavigationLink(props: Props) {
	const { href, children, ...rest } = props;

	const history = useHistory();

	const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (href) {
			if (!URL.canParse(href)) {
				e.preventDefault();
				push(href);
			}
		}
	};

	let active = false;
	if (typeof href === "string") {
		if (href === "/") {
			active = history.location.pathname === "/";
		} else {
			active = history.location.pathname.startsWith(href);
		}
	}

	return (
		<NavLink href={href} onClick={onClick} active={active} {...rest}>
			{children}
		</NavLink>
	);
}
