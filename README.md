# next-goober-extract_css-repro

## About this repo

- Next.js app using goober
  - based on `npx create-next-app --example with-goober with-goober-app`
- 4 static pages
  - `/foo`, `/bar`, `/baz`, `/qux`
  - exported by `next build && next export`
- `/foo` and `/baz` have the same content
  - import styled component
  - but always return not-styled `div`
- `/bar` and `/qux` have the same content
  - import styled component
  - and always return styled component
- Use `extractCss` to pre-render critical CSS

## Expectation

Check `export/*.html` have correct `<style id="goober" />` output or NOT.

Expect,

- `foo.html` and `baz.html` have the same output
  - no extracted CSS
  - because styled component does not exists at pre-rendering
- `bar.html` and `qux.html` have the same output
  - extracted CSS
  - because styled component exists at pre-rendering

## Actual results

Exported and extracted CSS are different for each build.

For example(committed in this repo),

|          | expected             | actual                    |
| -------- | -------------------- | ------------------------- |
| foo.html | has no extracted CSS | :ok: has no extracted CSS |
| bar.html | has extracted CSS    | :ng: has extracted CSS    |
| baz.html | has no extracted CSS | :ok: has extracted CSS    |
| qux.html | has extracted CSS    | :ok: has extracted CSS    |

There are also opposite pattern.
