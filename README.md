# next-goober-extract_css-repro

Refs: https://github.com/cristianbote/goober/issues/158

## About this repo

- Next.js app using goober
  - based on `npx create-next-app --example with-goober with-goober-app`
- 5 static pages
  - `/foo`, `/bar`, `/baz`, `/qux`, `/quux`
  - exported by `next build && next export`
- every page have the same content
  - import shared styled component
  - and always render this styled component
- Use `extractCss` to pre-render critical CSS

## Expectation and actual result

Expect every `export/*.html` have the same extracted CSS in `<style id="goober" />`.

But actually, extracted CSS is missing in some pages.

For example(committed in this repo), `foo.html` and `bar.html` do not have extracted CSS.
