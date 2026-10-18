---
id: thm-rational-cherednik-kz-factors-through-hecke-algebra
kind: theorem
title: "KZ monodromy on category O factors through the reflection Hecke algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 13
deps:
  - def-rational-cherednik-kz-functor-and-finite-hecke-algebra
  - thm-rational-cherednik-kz-standard-modules-factor-through-hecke
  - lem-rational-cherednik-category-o-has-finite-length
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§6.2, Theorem 6.4 and its generic-parameter/deformation/projective-generator proof, PDF pp. 45–46."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§5.3, Theorem 5.13 and its deformation/projective-object proof, PDF pp. 20–21."
---

## Statement

For every $M\in\mathcal O_c(W,\mathfrak h)$, the KZ braid-group representation $\operatorname{KZ}(M)$ factors through the parameter-specific finite reflection Hecke algebra $\mathcal H_{q(c)}(W)$ defined in [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]. No semisimplicity or genericity assumption on $c$ is imposed.

## Facts & Assumptions

**Given:** $(W,\mathfrak h,c)$ and $M\in\mathcal O_c(W,\mathfrak h)$.

[F1] [[def-rational-cherednik-kz-functor-and-finite-hecke-algebra]]: $\mathcal H_{q(c)}(W)$ is the quotient of $\mathbb C[B_W]$ by the positive-meridian polynomials with roots $\mu_{H,j}$.

[F2] [[thm-rational-cherednik-kz-standard-modules-factor-through-hecke]]: every standard module has KZ monodromy annihilated by those meridian polynomials.

[F3] [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]: KZ is exact on $\mathcal O_c$.

## Proof

**Proof technique:** direct, with an unresolved all-object generator step.

**Given:** [F1]–[F3].

1.1 The claim holds for each standard module by [F2]. This is the completed local calculation on induced modules. [F2]

1.2 Exactness alone does not extend a group-algebra relation from subquotients to an arbitrary extension. For example, let $T=I+N$ on $\mathbb C^2$ with $N\ne0$ and $N^2=0$. Both its invariant line and its one-dimensional quotient have eigenvalue $1$, but if $\mu\ne1$ then $(T-1)(T-\mu)=(1-\mu)N\ne0$ on the extension. Thus the standard-module calculation and exactness [F3] do not by themselves prove the assertion for every object. [F1, F2, F3, algebra]

2.1 **Authoring escalation.** The complete arbitrary-object proof needs the proposed local supplier `thm-rational-cherednik-category-o-projective-generator-from-generalized-standards` (prove that a suitable finite sum/direct summand of generalized standards is a projective generator, for the stated $W,\mathfrak h,c$) and `lem-rational-cherednik-kz-relation-specializes-in-flat-family` (prove flatness of the family and that annihilation of the meridian polynomials at generic parameter specializes to the given parameter). Neither is supplied by [F1]–[F3]; citing the published KZ theorem would leave the required proof absent. The affected claim is factorization for arbitrary $M\in\mathcal O_c$, which is retained, but this item is not ready. [F1, F2, F3] ∎
