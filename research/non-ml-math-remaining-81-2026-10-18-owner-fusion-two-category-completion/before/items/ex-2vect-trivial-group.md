---
id: ex-2vect-trivial-group
kind: example
title: The trivial group gives ordinary 2Vect
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - thm-four-cocycle-2vect-g-is-fusion-two-category
  - def-four-cocycle-twisted-monoidal-structure-on-2vect-g
  - def-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §2.1.3
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, Extension Theory and Fermionic Strongly Fusion 2-Categories, Example 2.2
      url: https://www.maths.tcd.ie/EMIS/journals/SIGMA/2024/092/sigma24-092.pdf
---

## Example

Take $G=\{e\}$. A $G$-graded finite semisimple category is just a finite semisimple $\mathbb C$-linear category. There is only one normalized 4-cochain, hence only one normalized 4-cocycle, and its pentagonator is the identity.

## Facts & Assumptions


**Given:** $G=\{e\}$ and the definition of $2\mathrm{Vect}_G^\omega$.

[F1] [[def-four-cocycle-twisted-monoidal-structure-on-2vect-g]]: The pentagonator is multiplication by the normalized 4-cocycle on homogeneous degree tuples, and the unit is concentrated in the identity degree.

[F2] [[thm-four-cocycle-2vect-g-is-fusion-two-category]]: For finite $G$, simple object classes of $2\mathrm{Vect}^{\omega}_G$ are exactly $\delta_g$, and the unit $\delta_e$ is simple.

[F3] [[def-group]]: A group has associative multiplication, identity, and inverses.

## Verification

1.1 Since $G$ has one element, every tuple in $G^4$ is $(e,e,e,e)$. Normalization forces $\omega(e,e,e,e)=1$, so the convolution grading has one summand and the pentagonator is the identity. Thus the underlying monoidal 2-category is the usual 2-category of finite semisimple $\mathbb C$-linear categories, linear functors, and natural transformations with Deligne tensor product. [F1, F3, given, algebra]

2.1 The simple-object list in [F1] becomes the singleton $\{\delta_e\}$, which is also the monoidal unit. A finite semisimple category with $n$ simple labels is the direct sum of $n$ copies of $\mathrm{Vect}_{\mathbb C}$, so this is exactly the ordinary 2-vector-space example and its unique simple-object class. [F2, given, algebra] ∎
