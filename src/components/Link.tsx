import {
	Anchor,
	type AnchorProps,
	type PolymorphicComponentProps,
} from "@mantine/core";

import { push } from "../utils/useHistory";

export type Props = PolymorphicComponentProps<"a", AnchorProps>;

export default function Link(props: Props) {
	const { href, children, ...rest } = props;

	const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (href) {
			if (!URL.canParse(href)) {
				e.preventDefault();
				push(href);
			}
		}
	};

	return (
		<Anchor href={href} onClick={onClick} {...rest} unstyled>
			{children}
		</Anchor>
	);
}
