import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["electron/*.ts", "src/**/*.tsx"],
  ignoreDependencies: ["postcss", "@napi-rs/cli"], // Do not remove build dependencies
  project: ["src/**/*.ts"],
};

export default config;
