---
id: thm-bessel-inequality-for-an-arbitrary-orthonormal-family
kind: theorem
title: The Bessel inequality for an arbitrary orthonormal family
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-finite-bessel-inequality, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.48, equation (2.4)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — Theorem 2.65 area, p.87"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Let $(e_i)_{i\in I}$ be an orthonormal family in a real or complex inner-product
space $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
Then for every $x\in H$ the nonnegative family
$\bigl(|\langle x,e_i\rangle|^2\bigr)_{i\in I}$ has finite sum in the
finite-subset-supremum convention
([[def-square-summable-family-on-an-arbitrary-index-set]]) and

$$\sum_{i\in I}|\langle x,e_i\rangle|^2\le\|x\|^2 .$$

In particular the coefficient family $(\langle x,e_i\rangle)_{i\in I}$ belongs
to $\ell^2(I,\mathbb F)$, and the inequality holds with no hypothesis on the
cardinality of $I$ and with no completeness of $H$.

## Facts & Assumptions

[A1] For every finite $F\subseteq I$, $\sum_{i\in F}|\langle x,e_i\rangle|^2\le\|x\|^2$; the sum over the empty set is $0$ ([[lem-finite-bessel-inequality]]).

[A2] The arbitrary sum $\sum_{i\in I}|\langle x,e_i\rangle|^2$ is the supremum in $[0,+\infty]$ of the finite subsums, and it is a real number exactly when that set of finite subsums is bounded above ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A3] $\|x\|^2$ is a nonnegative real number, and a family belongs to $\ell^2(I,\mathbb F)$ exactly when its square sum is finite ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct.

**Given:** An orthonormal family $(e_i)_{i\in I}$ in $H$ and a vector $x\in H$.

1.1 Every finite $F\subseteq I$ satisfies $\sum_{i\in F}|\langle x,e_i\rangle|^2\le\|x\|^2$, so the set of finite subsums of the family $\bigl(|\langle x,e_i\rangle|^2\bigr)_{i\in I}$ is nonempty and bounded above by the real number $\|x\|^2$. [A1, A3]

2.1 Consequently the arbitrary sum $\sum_{i\in I}|\langle x,e_i\rangle|^2$ is a real number and is at most $\|x\|^2$, being the supremum of a nonempty set of reals bounded above by $\|x\|^2$. [step 1.1, A2, A3]

3.1 The value $\sum_{i\in I}|\langle x,e_i\rangle|^2$ is finite, so the coefficient family $(\langle x,e_i\rangle)_{i\in I}$ lies in $\ell^2(I,\mathbb F)$, and the Bessel inequality $\sum_{i\in I}|\langle x,e_i\rangle|^2\le\|x\|^2$ holds. [step 2.1, A3] ∎
