---
id: lem-prime-ideal-multiplication-gives-cyclic-isogeny-sublattice
kind: lemma
title: "A degree-p prime ideal gives a cyclic CM isogeny"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-quadratic-order-of-discriminant
  - thm-proper-fractional-ideal-of-quadratic-order-is-invertible
  - lem-coprime-ideal-extension-contraction-for-quadratic-orders
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-fractional-ideal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Lemma 11.26, printed p. 237"
    - title: "A. V. Sutherland, MIT 18.783 Lecture 17"
      url: "https://ocw.mit.edu/courses/18-783-elliptic-curves-fall-2025/mit18_783_f25_lec_full.pdf"
      locator: "Lecture 17, CM ideal isogenies"
verification: {}
---

## Statement

Let $\mathcal O$ be an imaginary quadratic order, let $I$ be a proper
invertible fractional $\mathcal O$-ideal, and let $\mathfrak p$ be an
invertible prime ideal with $\mathcal O/\mathfrak p\cong\mathbb F_p$. Then
$\mathfrak p I\subset I$ and $I/\mathfrak p I$ is a one-dimensional vector
space over $\mathcal O/\mathfrak p$. In particular, it is cyclic of order
$p$, so the inclusion is a cyclic isogeny sublattice of index $p$.

## Statement references

[[def-classical-modular-equation-for-cyclic-isogenies|A cyclic index-$p$ sublattice has quotient $\mathbb Z/p\mathbb Z$.]]

[Cox, Lemma 11.26](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** An imaginary quadratic order $\mathcal O$, a proper invertible ideal $I$, and an invertible prime ideal $\mathfrak p$ with residue field $\mathbb F_p$.

[F1] [[def-fractional-ideal]]: fractional ideals are finitely generated rank-two modules after clearing a denominator.

[F2] [[thm-proper-fractional-ideal-of-quadratic-order-is-invertible]]: a proper ideal has an inverse $I^{-1}$ with $II^{-1}=\mathcal O$.

[F3] [[lem-coprime-ideal-extension-contraction-for-quadratic-orders]]: a prime ideal away from the conductor is proper and invertible.

## Proof

1.1 Localize at $\mathfrak p$. Since $I$ is invertible, choose finite sums $1=\sum_i x_i y_i$ with $x_i\in I_{\mathfrak p}$ and $y_i\in (I^{-1})_{\mathfrak p}$. The local ring $\mathcal O_{\mathfrak p}$ has a unique maximal ideal $\mathfrak p\mathcal O_{\mathfrak p}$, so at least one product $x_i y_i$ is a unit. Fix such a pair $x,y$. For every $z\in I_{\mathfrak p}$, $yz\in\mathcal O_{\mathfrak p}$ and $z=x(yz)/(xy)$; hence $I_{\mathfrak p}=x\mathcal O_{\mathfrak p}$. [F1, F2, given, choose]

2.1 Reduction modulo $\mathfrak p$ gives $I_{\mathfrak p}/\mathfrak p I_{\mathfrak p}\cong x(\mathcal O_{\mathfrak p}/\mathfrak p\mathcal O_{\mathfrak p})\cong\mathbb F_p$ by the local generator from step 1.1. [F1, F2, step 1.1, algebra]

3.1 The global module $I/\mathfrak p I$ is a vector space over $\mathcal O/\mathfrak p\cong\mathbb F_p$, and localization at $\mathfrak p$ does not change it because every element outside $\mathfrak p$ acts as a nonzero scalar. Its localization was one-dimensional by step 2.1, so $I/\mathfrak p I$ is one-dimensional and cyclic of order $p$. [F1, given, step 2.1, algebra] ∎
