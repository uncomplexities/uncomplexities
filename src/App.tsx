import { AppShell, useMatches } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import AppShellHeader from "./shell/Header";
import AppShellMain from "./shell/Main";
import AppShellNavbar from "./shell/Navbar";

const App = () => {
	const [opened, { toggle }] = useDisclosure(false);

	const screen = useMatches({
		base: "xs",
		xs: "xs",
		sm: "sm",
	});

	return (
		<AppShell
			header={{ height: 45 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding={screen}
		>
			<AppShellHeader opened={opened} toggle={toggle} />
			<AppShellNavbar />
			<AppShellMain />
		</AppShell>
	);
};

export default App;
