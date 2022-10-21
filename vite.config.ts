import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import * as packageJson from "./package.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const peerDependencies = (packageJson as any)?.peerDependencies || {};

const config = {
    appName: "myapp",
    port:    8081
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const envs = loadEnv(mode, process.cwd(), "");

    console.log(`Running vitejs '${command}' for project '${envs.npm_package_name} in ENV_MODE '${mode}'`);

    return {
        plugins: [
            react()
        ],
        css: {
            modules: {
                generateScopedName: `_${config.appName}p_[local]_[hash:base64:5]`
            }
        },
        server: {
            port: config.port,
            host: true
        },
        preview: {
            port: config.port,
            host: true
        },
        clearScreen: false,
        publicDir:   "src/static",
        build:       {
            cssCodeSplit:      false,
            cssTarget:         "chrome61",
            emptyOutDir:       true,
            sourcemap:         "hidden",
            minify:            true,
            outDir:            path.resolve(__dirname, "dist"),
            target:            "es2020",
            assetsInlineLimit: 2048,
            rollupOptions:     {
                external: [...Object.keys(peerDependencies)],
                output:   {
                    exports:               "named",
                    compact:               true,
                    sourcemap:             false,
                    minifyInternalExports: true,
                    strict:                true,
                    globals:               {
                        ...Object.fromEntries(
                            Object.keys(peerDependencies).map(key => {
                                if(key === "react") return [key, "React"];
                                if(key === "react-dom") return [key, "ReactDOM"];

                                return [key, key];
                            })
                        )
                    }
                }
            }
        }
    };
});
