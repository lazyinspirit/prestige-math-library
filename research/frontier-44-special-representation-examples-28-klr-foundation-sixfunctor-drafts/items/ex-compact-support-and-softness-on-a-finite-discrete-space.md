---
id: ex-compact-support-and-softness-on-a-finite-discrete-space
kind: example
title: Compact support on a finite discrete space
status: draft
origin: pipeline
deps:
- lem-c-soft-field-sheaves-are-compact-support-acyclic
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Example

For a finite discrete $X$ and the map $a:X\to\mathrm{pt}$, a $k$-sheaf is a finite family $(V_x)$. Every such sheaf is c-soft, $R\Gamma_c(X,V)=\bigoplus_xV_x$ in degree zero, and $a^!W$ is the constant family $W$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[lem-c-soft-field-sheaves-are-compact-support-acyclic]] is used with its stated hypotheses.

## Verification

1.1 A compact subset of a finite discrete space is a finite subset. A section on it is a tuple and extends by zero, proving c-softness. Global compact-support sections are the finite direct sum of stalks, which is an exact functor. [given, construct, algebra]

2.1 The bijection Hom_k(⊕V_x,W)=∏Hom_k(V_x,W)=Hom_Sh(X)(V,a^!W) is coordinatewise transposition. Its unit and trace are respectively the coordinate maps and sum evaluation, satisfying the ordinary tensor-Hom triangle identities. Thus the derived functors have no positive cohomology and match the stated formula. [given, construct, algebra] ∎

