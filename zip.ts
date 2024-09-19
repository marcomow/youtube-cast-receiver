import { compress } from "jsr:@fakoua/zip-ts";

const targets = {
    "x86_64-unknown-linux-gnu": "linux-x86",
    "aarch64-unknown-linux-gnu": "linux-arm64",
    "x86_64-pc-windows-msvc": "windows",
    "x86_64-apple-darwin": "macos",
    "aarch64-apple-darwin": "macos-arm64",
} as const;

const promises = Object.keys(targets)
    .map(async (target) => {
        const targetKey = target as keyof typeof targets;
        const targetLabel = targets[targetKey];
        const command = new Deno.Command("deno", {
            args: [
                "compile",
                "--allow-all",
                "--unstable-ffi",
                `--output=dist/${targetLabel}`,
                `--target=${targetKey}`,
                "main.ts",
            ],
            stdin: "inherit",
            stdout: "inherit",
        });
        const output = await command.spawn().output();
        if (output.success) {
            await compress(`dist/${targetLabel}`, `dist/${targetLabel}.zip`);
        }
        return;
    });

await Promise.allSettled(promises);
