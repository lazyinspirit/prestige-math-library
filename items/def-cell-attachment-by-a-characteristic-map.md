---
id: def-cell-attachment-by-a-characteristic-map
kind: definition
title: Cell attachment by a characteristic map
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  audited: 2026-09-07
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

For a space $X$, an attaching map $f:S^{n-1}\to X$, and $n\geq1$, attach an $n$-cell by the pushout $X\cup_fD^n=(X\sqcup D^n)/(z\sim f(z)$ for $z\in S^{n-1})$.  The quotient map restricted to $D^n$ is its characteristic map; its image is the closed cell and the image of $\mathring D^n$ is the open cell. For $n=0$, use $S^{-1}=\varnothing$, so $X\cup_fD^0=X\sqcup\{*\}$.
