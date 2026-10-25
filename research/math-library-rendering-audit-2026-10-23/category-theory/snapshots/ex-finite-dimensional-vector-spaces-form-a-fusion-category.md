---
id: ex-finite-dimensional-vector-spaces-form-a-fusion-category
kind: example
title: "Finite-dimensional vector spaces form a fusion category"
status: published
origin: pipeline
deps: [def-fusion-and-multifusion-category, thm-modules-over-a-commutative-ring-form-a-monoidal-category, thm-finite-dimensional-vector-spaces-are-rigid]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Example 4.1.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Example

For a field $k$, the category $\mathbf{Vect}_{k}^{\mathrm{fd}}$ is a fusion category.

## Facts & Assumptions

**Given:** A field $k$.

[F1] $k$-modules are monoidal under $\otimes_k$ with unit $k$ ([[thm-modules-over-a-commutative-ring-form-a-monoidal-category]]).

[F2] Every finite-dimensional $k$-vector space is rigid ([[thm-finite-dimensional-vector-spaces-are-rigid]]).

[F3] Fusion means finite semisimple tensor category ([[def-fusion-and-multifusion-category]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2], the finite-dimensional subcategory is a rigid $k$-linear monoidal category. [F1, F2, given]

2.1 Every finite-dimensional vector space is a finite direct sum of copies of $k$, so $k$ is the only simple isomorphism class and the category is finite semisimple. Its unit has endomorphism algebra $k$. [step 1.1, F3]

3.1 These clauses are exactly those of [F3], so $\mathbf{Vect}_{k}^{\mathrm{fd}}$ is fusion. [step 2.1, F3] ∎
