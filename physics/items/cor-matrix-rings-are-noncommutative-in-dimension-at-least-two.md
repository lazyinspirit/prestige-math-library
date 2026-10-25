---
id: cor-matrix-rings-are-noncommutative-in-dimension-at-least-two
kind: corollary
title: '$M_n(F)$ is noncommutative for every $n\ge2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-matrix-unit-multiplication, cor-square-matrices-form-a-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every field $F$ and every natural $n\ge2$, the ring $M_n(F)$ is not
commutative.

## Facts & Assumptions

**Given:** A field $F$ and a natural $n\ge2$.

[L1] Matrix units satisfy $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$ ([[lem-matrix-unit-multiplication]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $E_{01}E_{10}=E_{00}$ while $E_{10}E_{01}=E_{11}$; these products differ at entry $(0,0)$ because $1\ne0$ in a field. [given, L1]

2.1 Thus two elements of $M_n(F)$ fail to commute, so the matrix ring is noncommutative. [step 1.1, L1] ∎
