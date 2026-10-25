---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-zero-surgery-on-a-knot.json
  precheck: n/a
id: def-zero-surgery-on-a-knot
kind: definition
title: Zero-framed surgery on a knot
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of
        satellite operators in knot concordance”
      url: https://arxiv.org/pdf/1205.5058v3
      locator: §3, definition of zero-framed surgery
    - title: Tim D. Cochran, Bridget D. Franklin, Matthew Hedden, and Peter D. Horn,
        “Knot concordance and homology cobordism”
      url: https://arxiv.org/pdf/1102.5730
      locator: Theorem 2.1 and proof, printed pp. 5–7

---

## Definition

Assume countable choice as required by the chosen tubular-neighborhood and peripheral-system data. Let $K$ be a smooth oriented knot with compact exterior $E_K$, positive meridian $\mu_K$, and preferred longitude $\lambda_K$ on the boundary torus. The zero-framed surgery manifold $M(K)$ is the closed oriented 3-manifold obtained by gluing $D^2\times S^1$ to $E_K$ so that the meridian boundary circle of $D^2\times\{1\}$ is identified with $\lambda_K$ and a boundary longitude $\{z_0\}\times S^1$, with $z_0\in\partial D^2$, is identified with $\mu_K$. This boundary longitude is parallel inside the filling solid torus to its core $\{0\}\times S^1$. The orientation extends the orientation of $E_K$ across the filling. Thus the filling slope is the preferred zero-linking longitude; the definition asserts no 4-manifold bounded by $M(K)$.

## Definition references

[[def-knot-exterior|Compact oriented knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and preferred longitude conventions]]

[CFHH, Theorem 2.1 and proof, printed pp. 5–7](https://arxiv.org/pdf/1102.5730)
