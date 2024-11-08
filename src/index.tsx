import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "@fontsource-variable/montserrat";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./index.css";

const theme = createTheme({
	fontFamily: "Ubuntu, sans-serif",
	components: {
		Modal: {
			defaultProps: {
				transitionProps: {
					duration: 0,
				},
			},
		},
	},
});

const element = document.getElementById("root");

if (element) {
	const root = ReactDOM.createRoot(element);
	root.render(
		<React.StrictMode>
			<MantineProvider theme={theme}>
				<Notifications />
				<App />
			</MantineProvider>
		</React.StrictMode>,
	);
}
