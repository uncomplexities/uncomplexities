import { useEffect, useMemo, useState } from "react";

export interface Location {
	hash: string;
	host: string;
	hostname: string;
	href: string;
	origin: string;
	pathname: string;
	port: string;
	protocol: string;
	search: string;
}

export const go = window.history.go.bind(window.history);
export const back = window.history.back.bind(window.history);
export const forward = window.history.forward.bind(window.history);

export const pushURL = (url: URL) => {
	if (url.toString() === new URL(window.location.href).toString()) {
		return;
	}
	window.history.pushState(null, "", url);
	dispatchEvent(new Event("pushstate"));
};

export const replaceURL = (url: URL) => {
	if (url.toString() === new URL(window.location.href).toString()) {
		return;
	}
	window.history.replaceState(null, "", url);
	dispatchEvent(new Event("replacestate"));
};

export const push = (pathname: string) => {
	if (pathname === window.location.pathname) {
		return;
	}
	const url = new URL(window.location.href);
	url.pathname = pathname;
	url.search = "";
	url.hash = "";
	pushURL(url);
};

export const replace = (pathname: string) => {
	if (pathname === window.location.pathname) {
		return;
	}
	const url = new URL(window.location.href);
	url.pathname = pathname;
	url.search = "";
	url.hash = "";
	replaceURL(url);
};

export const useHistory = () => {
	const [location, setLocation] = useState<Location>(window.location);
	useEffect(() => {
		const listener = () => {
			setLocation({
				hash: window.location.hash,
				host: window.location.host,
				hostname: window.location.hostname,
				href: window.location.href,
				origin: window.location.origin,
				pathname: window.location.pathname,
				port: window.location.port,
				protocol: window.location.protocol,
				search: window.location.search,
			});
		};
		window.addEventListener("pushstate", listener);
		window.addEventListener("replacestate", listener);
		window.addEventListener("popstate", listener);
		return () => {
			window.removeEventListener("pushstate", listener);
			window.removeEventListener("replacestate", listener);
			window.removeEventListener("popstate", listener);
		};
	}, []);
	return useMemo(
		() => ({ location, go, back, forward, push, replace, pushURL, replaceURL }),
		[location],
	);
};

export default useHistory;
