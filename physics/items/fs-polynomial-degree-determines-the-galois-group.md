---
id: fs-polynomial-degree-determines-the-galois-group
kind: false-statement
title: "FALSE: the degree of a polynomial determines its Galois group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three, ex-cubic-x-cubed-minus-two-has-galois-group-s-three]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Statement

**False claim.** Any two separable irreducible polynomials over one field having the same degree have isomorphic Galois groups.

## Facts & Assumptions

**Given:** Two explicit irreducible cubics over $\mathbb Q$.

[L1] $x^3-3x+1$ has Galois group $A_3$ over $\mathbb Q$ ([[ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three]]).

[L2] $x^3-2$ has Galois group $S_3$ over $\mathbb Q$ ([[ex-cubic-x-cubed-minus-two-has-galois-group-s-three]]).

## Refutation

**Proof technique:** direct.

1.1 The polynomials in [L1] and [L2] both have degree three and are separable and irreducible, but their Galois groups have orders $3$ and $6$. [L1, L2]

2.1 Groups of different finite orders are not isomorphic, so the common polynomial degree does not determine the Galois group. [step 1.1] ∎
