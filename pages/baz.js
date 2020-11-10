import React, { useState, useEffect } from "react";
import { Layout } from "../components/shared";

export default function Baz() {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    setTimeout(() => setHide(false), 1000);
  }, []);

  if (hide) return <div>Loading...</div>;
  return <Layout>BAZ</Layout>;
}
