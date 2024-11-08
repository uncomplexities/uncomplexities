import { Group, JsonInput, Stack, useMatches } from "@mantine/core";
import useHistory from "../utils/useHistory";

export default function Forbidden() {
	const { location } = useHistory();

	const screen = useMatches({
		base: "xs",
		xs: "xs",
		sm: "sm",
	});

	return (
		<Group gap={screen} p={screen} justify="center">
			<Stack
				gap={screen}
				p={screen}
				className={
					"h-[calc(100dvh-96px)] w-full md:w-11/12 lg:w-10/12 xl:w-9/12"
				}
			>
				<Stack gap={screen}>
					<div className="text-left text-2xl font-bold">403</div>
					<div className="text-left text-base font-normal text-slate-700">
						Forbidden
					</div>
					<JsonInput
						label="Location"
						variant="filled"
						value={JSON.stringify(location, null, 2)}
						rows={12}
						readOnly
					/>
				</Stack>
			</Stack>
		</Group>
	);
}
