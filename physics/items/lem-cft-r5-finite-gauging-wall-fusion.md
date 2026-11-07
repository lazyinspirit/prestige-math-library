---
id: lem-cft-r5-finite-gauging-wall-fusion
kind: lemma
title: Fusion of a normalized finite-group gauging wall with its reverse
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
physical_scope: Conditional finite-state fusion rule for the normalized gauging interface of an anomaly-free finite abelian symmetry in a two-dimensional CFT.
deps:
  - def-cft-r5-finite-gauging-wall-conventions
  - def-fusion-and-multifusion-category
dependency_roles:
  def-cft-r5-finite-gauging-wall-conventions: operational-prerequisite
  def-fusion-and-multifusion-category: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Riccardo Argurio et al., Non-Invertible T-duality at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
      url: https://arxiv.org/pdf/2409.11822v1
      locator: §§3.1 and 4.2, discrete gauging and rational-radius fusion.
    - title: Guillermo Arias-Tamargo et al., Non-Invertible Symmetries and Boundaries for Two-Dimensional Fermions, arXiv:2605.13952v1
      url: https://arxiv.org/pdf/2605.13952v1
      locator: §3.3, especially equations (3.16)–(3.19), normalized finite-group fusion.
verification:
  precheck: pending
---

## Statement

Let a finite abelian group $G$ act without anomaly on a two-dimensional CFT $C$, and let $W_G:C\to C/G$ be the gauging interface with the standard normalization of [[def-cft-r5-finite-gauging-wall-conventions]]. Fuse $W_G$ with its orientation reverse, fixing endpoint trivializations as in that definition. Then, as a direct sum of topological lines on $C$,
$$W_G\otimes\bar W_G=\bigoplus_{g\in G}L_g.$$
Each group line occurs with multiplicity one. This is a finite-gauge counting statement and makes no assertion about continuous groups.

## Statement references

[[def-cft-r5-finite-gauging-wall-conventions]]

[[def-fusion-and-multifusion-category]]

[Argurio et al., §§3.1, 4.2](https://arxiv.org/pdf/2409.11822v1)

[Arias-Tamargo et al., §3.3](https://arxiv.org/pdf/2605.13952v1)

## Facts & Assumptions

**Given:** A finite abelian anomaly-free group $G$, its normalized symmetry lines $L_g$, and the gauging interface $W_G$ with the endpoint convention in the statement.

[F1] [[def-cft-r5-finite-gauging-wall-conventions]]: in the fused strip, gauge trivializations are fixed at both ends, and a flat bundle with no endpoint-preserving automorphisms has weight one under the standard finite-gauging normalization.

[F2] [[def-fusion-and-multifusion-category]]: direct sums of simple lines and their fusion are defined in the finite semisimple line category.

## Proof

1.1 A flat $G$ connection on the interval transverse to the fused wall is determined up to endpoint-fixed gauge equivalence by its parallel transport $g\in G$ from the first fixed trivialization to the second. Distinct $g$ remain distinct because any endpoint-fixed gauge transformation preserves this relative transport. Thus there is exactly one relative-holonomy sector for each $g\in G$. [given, F1, algebra]

2.1 In the fused wall, the relative holonomy $g$ inserts the symmetry line $L_g$ on the original-theory side. By [F1], each such sector has coefficient one; no residual endpoint-preserving automorphism divides or multiplies it. Summing the distinct sectors therefore gives one copy of each $L_g$. The direct sum is the fusion object by [F2], proving the displayed rule. [given, F1, F2, step 1.1, algebra] ∎

## Remarks

The proof uses only finite flat connections on an interval, where a fixed endpoint framing removes conjugacy ambiguity. It does not justify the analogous manipulation for an $\mathbb R$-valued gauge field or its continuous measure.

