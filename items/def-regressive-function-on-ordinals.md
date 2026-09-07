---
id: def-regressive-function-on-ordinals
kind: definition
title: "Regressive functions on ordinals"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definition 5.10, p.41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Definition 15.1, p.82"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Definition

For $S\subseteq\kappa\setminus\{0\}$, a map $f:S\to\kappa$ is **regressive** if $f(\alpha)<\alpha$ for every $\alpha\in S$. If an original domain contains zero, regression is asserted only after explicitly restricting to its complement: no ordinal is less than zero.
