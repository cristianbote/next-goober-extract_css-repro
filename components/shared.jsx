import { css } from "goober";

export const Layout = ({ children }) => (
  <section className={style}>
    <div>{children}</div>
    <hr />
    <a href="/">index</a> |
    <a href="/foo">foo</a> |
    <a href="/bar">bar</a> |
    <a href="/baz">baz</a> |
    <a href="/qux">qux</a>
  </section>
);

const style = css`
  background-color: gold;
`;
