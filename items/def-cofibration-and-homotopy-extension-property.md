---
id: def-cofibration-and-homotopy-extension-property
kind: definition
title: Cofibration and homotopy extension property
deps: ["def-homotopy-relative-and-path-homotopy"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 6 §1 p.43; Chapter 8 §3 p.58
status: draft
origin: pipeline
---

## Definition

A continuous map $i:A\to X$ has the **homotopy extension property** (HEP), or is an **unbased cofibration**, if for every target $Z$, continuous $f:X\to Z$, and continuous $h:A\times I\to Z$ satisfying $h(a,0)=f(i(a))$, there is a continuous $H:X\times I\to Z$ with $H(x,0)=f(x)$ and $H(i(a),t)=h(a,t)$. No uniqueness is required. Homotopy and relative homotopy have the meaning in [[def-homotopy-relative-and-path-homotopy]].

For based spaces and a based map i, **based HEP** imposes the same condition for based f and h with $h(a_0,t)=z_0$, and requires $H(x_0,t)=z_0$. A based space is **well-pointed** when $\{x_0\}\hookrightarrow X$ is an unbased cofibration. Based HEP and unbased HEP are distinct quantified properties; neither is silently substituted for the other. The categorical constructions on this page use CGWH spaces and k-products; products with I have their ordinary topology. The unbased test above can also be used for arbitrary topological spaces.
