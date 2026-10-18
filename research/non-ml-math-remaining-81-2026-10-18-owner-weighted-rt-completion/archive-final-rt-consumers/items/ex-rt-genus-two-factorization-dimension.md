---
id: ex-rt-genus-two-factorization-dimension
kind: example
title: "A genus-two RT dimension from factorization"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps: [cor-rt-torus-and-state-dimension-formula, thm-su2-root-unity-ribbon-category-is-modular, lem-su2-hopf-link-sine-data-from-truncated-fusion, def-axiom-of-choice, def-countable-choice, thm-weighted-rt-tqft-and-factorization]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§3.3 and 5.8"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

Conditional on the $\ell=4$ sine data and RT factorization, the unmarked genus-two state space has dimension $10$.

## Facts & Assumptions

**Given:** $\ell=4$ and the conditional modular data and factorization of [[cor-rt-torus-and-state-dimension-formula]].

[F1] For $\ell=4$, the labels are $0,1,2$ and $S_{0x}=(1/2,1/\sqrt2,1/2)$ ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[F2] The unmarked genus-$g$ formula is $\dim V(\Sigma_g)=\sum_x S_{0x}^{2-2g}$ ([[cor-rt-torus-and-state-dimension-formula]]).

[A1] The unconditioned factorization theorem is not yet proved in its current carrier, so the example remains conditional ([[thm-weighted-rt-tqft-and-factorization]]).

## Proof

**Given:** The conditional data in the Statement.

1.1 At genus $g=2$ and with no marked labels, [F2] gives
$\dim V(\Sigma_2)=\sum_{x=0}^2 S_{0x}^{-2}.$
[F1, F2, A1, given, algebra]

1.2 The three terms are $(1/2)^{-2}=4$, $(1/\sqrt2)^{-2}=2$, and $(1/2)^{-2}=4$. Their sum is $10$. [F1, step 1.1, algebra] ∎

## Readiness note

The finite calculation is complete; use as an actual RT state dimension awaits proof of the conditional factorization interface.
