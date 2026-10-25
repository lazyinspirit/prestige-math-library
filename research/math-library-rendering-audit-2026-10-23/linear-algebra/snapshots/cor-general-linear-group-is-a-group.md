---
id: cor-general-linear-group-is-a-group
kind: corollary
title: '$\operatorname{GL}_n(F)$ is a group under matrix multiplication, including the trivial group $\operatorname{GL}_0(F)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-invertible-matrix-and-general-linear-group, cor-square-matrices-form-a-ring,
       lem-ring-units-form-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3D'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every field $F$ and natural $n$, $\operatorname{GL}_n(F)$ is a group under
matrix multiplication. For $n=0$, it is the trivial group containing the unique
empty matrix.

## Facts & Assumptions

**Given:** A field $F$ and a natural $n$.

[L1] $\operatorname{GL}_n(F)$ is the set of invertible matrices, equivalently the units of $M_n(F)$ ([[def-invertible-matrix-and-general-linear-group]]).

[L2] The units of a ring contain the identity and are closed under multiplication and inversion, and they form a group ([[lem-ring-units-form-a-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{GL}_n(F)$ is exactly the unit set of the ring $M_n(F)$. [given, L1]

2.1 Applying [L2] gives closure, associativity inherited from the ring, identity $I_n$, and inverse $A^{-1}$ for every element, so $\operatorname{GL}_n(F)$ is a group. [step 1.1, L1, L2]

3.1 If $n=0$, $M_0(F)$ has one element, the empty matrix $I_0$, which is its own inverse; hence its unit group is the trivial group. [step 2.1, L1, L2] ∎
