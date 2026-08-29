---
id: ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four
kind: example
title: "Bases and dimensions of exterior powers of $\\mathbb R^2$, $\\mathbb R^3$, and $\\mathbb R^4$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-increasing-basis-wedges-form-a-basis, cor-dimension-of-the-kth-exterior-power, cor-the-kth-exterior-power-vanishes-above-dimension]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Example

In the standard bases, the exterior powers have the following bases and dimensions. For $\mathbb R^2$: $\Lambda^0=\mathbb R$ (basis $1$), $\Lambda^1$ has basis $e_1,e_2$, $\Lambda^2$ has basis $e_1\wedge e_2$, and $\Lambda^k=0$ for $k>2$. For $\mathbb R^3$: $\Lambda^0=\mathbb R$; $\Lambda^1$ has basis $e_1,e_2,e_3$; $\Lambda^2$ has basis $e_1\wedge e_2,\ e_1\wedge e_3,\ e_2\wedge e_3$; $\Lambda^3$ has basis $e_1\wedge e_2\wedge e_3$; and $\Lambda^k=0$ for $k>3$. For $\mathbb R^4$: $\Lambda^0=\mathbb R$; $\Lambda^1$ has basis $e_1,e_2,e_3,e_4$; $\Lambda^2$ has basis $e_1\wedge e_2,\ e_1\wedge e_3,\ e_1\wedge e_4,\ e_2\wedge e_3,\ e_2\wedge e_4,\ e_3\wedge e_4$; $\Lambda^3$ has basis $e_1\wedge e_2\wedge e_3,\ e_1\wedge e_2\wedge e_4,\ e_1\wedge e_3\wedge e_4,\ e_2\wedge e_3\wedge e_4$; $\Lambda^4$ has basis $e_1\wedge e_2\wedge e_3\wedge e_4$; and $\Lambda^k=0$ for $k>4$.

## Facts & Assumptions

**Given:** The standard bases of $\mathbb R^2$, $\mathbb R^3$, and $\mathbb R^4$.

[L1] The increasing-index wedges of an ordered basis form a basis of $\Lambda^kV$ ([[thm-increasing-basis-wedges-form-a-basis]]).

[L2] $\dim\Lambda^kV=\binom{n}{k}$ ([[cor-dimension-of-the-kth-exterior-power]]).

[L3] $\Lambda^kV=0$ for $k>\dim V$ ([[cor-the-kth-exterior-power-vanishes-above-dimension]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], the listed families are exactly the increasing-index wedges of the standard bases, so they are bases of the corresponding exterior powers. [L1, given]

1.2 By [L2], the dimensions are the binomial counts: $1,2,1$ for $\mathbb R^2$; $1,3,3,1$ for $\mathbb R^3$; and $1,4,6,4,1$ for $\mathbb R^4$, matching the sizes of the listed families. [L2]

1.3 By [L3], every degree above the top vanishes, so no further nonzero pieces appear. [L3]

2.1 Steps 1.1, 1.2 and 1.3 verify all displayed bases, dimensions, and vanishing statements. [step 1.1, step 1.2, step 1.3] ∎
