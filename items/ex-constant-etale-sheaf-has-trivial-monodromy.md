---
id: ex-constant-etale-sheaf-has-trivial-monodromy
kind: example
title: "Constant finite and l-adic sheaves have trivial monodromy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-etale-sheaf-of-finite-modules
  - lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
  - def-lisse-etale-sheaf-of-finite-modules
  - cor-lisse-etale-sheaves-and-finite-pi1-modules
  - def-lisse-zl-etale-sheaf
  - thm-lisse-zl-etale-sheaves-and-continuous-pi1-representations
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC through the finite and l-adic representation equivalences. The constant-sheaf construction itself uses no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.64"
      url: https://stacks.math.columbia.edu/tag/09Y8
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6, and Chapter II, Section 32"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Example

Assume AC. Let $X$ be a connected Noetherian scheme with algebraically closed geometric basepoint $\bar x$. For a finite commutative ring $\Lambda$ and finite $\Lambda$-module $M$, the constant étale module sheaf $\underline M$ is lisse and its associated representation on the stalk $M$ is trivial. For any prime $\ell$ and $r\ge0$, the compatible system of constant sheaves $\underline{(\mathbb Z/\ell^n\mathbb Z)^r}$ is a rank-$r$ finite-free lisse $\mathbb Z_\ell$ sheaf system and corresponds to the trivial action on $\mathbb Z_\ell^r$.

## Example references

[The Stacks Project, Section 59.64](https://stacks.math.columbia.edu/tag/09Y8)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6, and Chapter II, Section 32](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** The hypotheses in the Example and the constant-sheaf and representation conventions of the assigned A page.

[F1] [[lem-locally-constant-functions-sheafify-the-constant-etale-presheaf]]: the constant module sheaf has locally constant sections with pointwise module operations.

[F2] [[def-lisse-etale-sheaf-of-finite-modules]]: a constant finite module sheaf is lisse.

[F3] [[cor-lisse-etale-sheaves-and-finite-pi1-modules]]: its geometric stalk corresponds to a continuous left fundamental-group action.

[F4] [[def-lisse-zl-etale-sheaf]]: a compatible system of finite-level lisse sheaves of the stated rank is a finite-free lisse $\mathbb Z_\ell$ system.

[F5] [[thm-lisse-zl-etale-sheaves-and-continuous-pi1-representations]]: the inverse-limit fiber identifies such systems with continuous $\mathbb Z_\ell$ representations.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F3] and [F5].

## Verification

**Given:** $X$, $\bar x$, the finite $\Lambda$-module $M$, the prime $\ell$, and the integer $r$.

1.1 The identity cover $X\to X$ trivializes $\underline M$ with value $M$, so it is lisse by [F2]. The finite set sheaf underlying it is represented by $X\times M=\coprod_{m\in M}X$. For each $m\in M$, the component inclusion $X\to X\times M$ is a morphism of finite étale covers. Every natural automorphism of the geometric fiber functor fixes the unique point of the fiber of $X$ and commutes with this inclusion; hence it fixes the corresponding element $m$. Thus the action on the whole fiber $M$ is trivial. [F1, F2, F3, A1, construct]

2.1 At every level $n$, the constant sheaf with value $(\mathbb Z/\ell^n\mathbb Z)^r$ is lisse and its reductions are the corresponding constant sheaves, so these sheaves form a system as in [F4]. Its inverse-limit stalk is $\varprojlim_n(\mathbb Z/\ell^n\mathbb Z)^r=\mathbb Z_\ell^r$, with every group element acting trivially by step 1.1 level by level. The equivalence [F5] therefore assigns the trivial continuous action. This proves both claims. [F3, F4, F5, step 1.1] ∎
