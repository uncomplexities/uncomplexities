import { Group, Stack, useMatches } from "@mantine/core";

export default function Home() {
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
				className={"h-[calc(100dvh-96px)] w-full md:w-9/12 lg:w-7/12 xl:w-5/12"}
				justify="center"
			>
				<Stack gap={screen}>
					<div className="border-l-2 p-2 flex flex-col gap-2">
						<div className="text-left text-xl font-semibold">
							Uncomplexities, Inc.
						</div>
						<div className="text-left text-base font-normal text-slate-700">
							We are a small team of developers.
						</div>
						<div className="text-left text-base font-normal text-slate-700">
							Our first product is Monolithic, which lets you integrate and
							manage your cloud resources in projects and environments that span
							across different cloud vendors.
						</div>
						<div className="text-left text-base font-normal text-slate-700">
							Launching soon this Q4 2024.
						</div>
						<div className="text-left text-base font-normal text-slate-700">
							— Uncomplexities Team &lt;uncomplexity@proton.me&gt;
						</div>
					</div>
				</Stack>
			</Stack>
		</Group>
	);
}
