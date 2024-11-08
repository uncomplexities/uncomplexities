import { AppShell } from "@mantine/core";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import useHistory from "../utils/useHistory";

function Pages() {
	const history = useHistory();

	switch (history.location.pathname) {
		case "/": {
			return <Home />;
		}
		default: {
			return <NotFound />;
		}
	}
}

export default function AppShellMain() {
	return (
		<AppShell.Main>
			<Pages />
		</AppShell.Main>
	);
}
