---
id: thm-full-level-eigenform-coefficients-are-in-a-number-field
kind: theorem
title: Full-level normalized eigenform coefficients lie in one number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-level-one-modular-form-and-cusp-form
  - def-hecke-operator-on-congruence-forms
  - thm-ring-of-level-one-modular-forms
  - thm-eisenstein-series-are-modular-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
proof_strategy: direct
axiom_use: Only the given complex eigenform and finite-dimensional rational linear algebra are used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Modular Functions and Modular Forms
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: Listed by the local graded-ring supplier for its Proposition 4.16; that supplier is used exactly as stated. The finite Hecke-algebra argument below is locally supplied; this note is not independently treated as a proof input.
---

## Statement

Let $k\ge2$ be even and let $f=\sum_{n\ge1}a_nq^n$ be a normalized simultaneous Hecke eigenform in $S_k(\operatorname{SL}_2(\mathbb Z))$. There exists a single number field $E\subset\mathbb C$ containing every coefficient $a_n$. This theorem is specifically for level one; it does not assert coefficient algebraicity at arbitrary level or nebentypus.

## Statement references

[[def-level-one-modular-form-and-cusp-form]]

[[def-hecke-operator-on-congruence-forms]]

[[thm-ring-of-level-one-modular-forms]]

## Facts & Assumptions

**Given:** The even weight and specified normalized simultaneous eigenform.

[F1] The cusp space $S_k$ has complex basis $\Delta E_4^aE_6^b$ with $4a+6b=k-12$ and nonnegative integers $a,b$. [[thm-ring-of-level-one-modular-forms]]

[F2] The $q$-coefficients of $E_4,E_6$ are rational, and $\Delta=(E_4^3-E_6^2)/1728$. [[thm-eisenstein-series-are-modular-forms]] [[thm-ring-of-level-one-modular-forms]]

[F3] The Hecke operators preserve $S_k$ and their level-one coefficient formula is $a_r(T_n g)=\sum_{d\mid(r,n)}d^{k-1}a_{rn/d^2}(g)$. [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]

[F4] The given normalization and simultaneous-eigenvector hypothesis give $T_n f=a_n f$ and $a_1=1$.

## Proof

**Proof technique:** preserve a finite rational Fourier basis and use the finite-dimensional Hecke algebra.

1.1 The basis in [F1] has rational Fourier coefficients by [F2]. Its $d$ series are linearly independent over $\mathbb C$, hence finitely many coefficient functionals give an invertible $d\times d$ matrix with rational entries: otherwise the span of all coefficient row vectors would have rank less than $d$ and some nonzero linear combination would have every coefficient zero. Thus a cusp form has rational Fourier coefficients exactly when its coordinates in this basis are rational. [F1, F2, given, construct, algebra]

2.1 By [F3], each $T_n$ maps a rational-coefficient cusp form to a rational-coefficient cusp form. Therefore it has a rational matrix on the $d$-dimensional rational vector space from step 1.1. The eigenvalue $a_n$ of that matrix is algebraic, since it is a root of the nonzero characteristic polynomial in $\mathbb Q[X]$. [F3, F4, step 1.1, algebra]

3.1 The $\mathbb Q$-linear span of all matrices $T_n$ is a subspace of the $d^2$-dimensional rational matrix space, so choose a finite basis $T_{n_1},\ldots,T_{n_m}$ from that family. For each $n$, there are rational coefficients $c_{n,j}$ with $T_n=\sum_jc_{n,j}T_{n_j}$. Apply both sides to the nonzero simultaneous eigenvector $f$: $a_n=\sum_jc_{n,j}a_{n_j}$. The finitely many algebraic generators $a_{n_j}$ generate a finite extension $E/\mathbb Q$, and every $a_n$ belongs to $E$. [F4, step 2.1, construct, algebra] ∎
