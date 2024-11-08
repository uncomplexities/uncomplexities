import { AppShell, Burger, Group, Stack, useMatches } from "@mantine/core";
import Link from "../components/Link";

interface AppShellHeaderProps {
	opened: boolean;
	toggle: () => void;
}

export default function AppShellHeader(props: AppShellHeaderProps) {
	const { opened, toggle } = props;

	const screen = useMatches({
		base: "xs",
		xs: "xs",
		sm: "sm",
	});

	return (
		<AppShell.Header className="shadow">
			<Stack justify="center" gap={screen} p={screen} h="100%">
				<Group gap={screen}>
					<Burger opened={opened} onClick={toggle} size={screen} />
					<Group gap={screen}>
						<Link href="/" fw={600} className="text-slate-950">
							Uncomplexities, Inc.
						</Link>
					</Group>
				</Group>
			</Stack>
		</AppShell.Header>
	);
}
