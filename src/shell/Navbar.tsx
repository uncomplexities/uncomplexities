import { AppShell, Stack, useMatches } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

import NavigationLink from "../components/NavigationLink";

/**
 * @description
 * - Network contains Networks, DNS, and CDNs.
 * - Storage contains Storages, Object Storage, and Block Storage.
 */

export default function AppShellNavbar() {
	const screen = useMatches({
		base: "xs",
		xs: "xs",
		sm: "sm",
	});

	return (
		<AppShell.Navbar p={screen}>
			<Stack gap={screen} p={screen} className="overflow-y-scroll">
				<NavigationLink
					label="Home"
					leftSection={<IconHome stroke={2} />}
					href="/"
				/>
			</Stack>
		</AppShell.Navbar>
	);
}
