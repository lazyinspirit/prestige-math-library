---
id: thm-completely-split-primes-dirichlet-density
kind: theorem
title: "Prime ideals splitting completely have Dirichlet density the reciprocal normal-closure degree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - def-natural-and-dirichlet-density
  - def-dirichlet-density-of-prime-ideals
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - lem-prime-ideals-splitting-completely-in-extension-and-normal-closure
  - def-galois-closure-of-a-finite-separable-extension
  - thm-galois-closures-exist-and-are-minimal
  - thm-frobenius-elements-above-a-prime-are-conjugate
  - thm-frobenius-order-is-residue-degree
  - cor-complete-splitting-and-trivial-frobenius
  - cor-galois-prime-decomposition-efg
  - cor-only-finitely-many-primes-ramify
  - thm-number-field-integral-ideal-factorisation-in-zf
  - cor-norm-of-a-prime-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-derivative-of-exponential
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VI §3, Theorem 3.4 and §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed pp.192–195: density of primes splitting completely in a finite extension and the prime-ideal Dirichlet-density normalization."
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Theorem 5.9"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.465–466: completed zeta continuation and the simple pole used in the logarithmic Euler-product argument."

---

## Statement

Assume the Axiom of Choice. Let $L/K$ be a finite extension of number fields and let $M/K$ be its Galois closure. Let $S$ be the set of nonzero prime ideals $\mathfrak p$ of $\mathcal O_K$ that split completely in $L/K$, meaning that $\mathfrak p\mathcal O_L$ is a product of exactly $[L:K]$ distinct prime ideals, each with ramification index and residue degree $1$. Then $S$ has Dirichlet density relative to $K$ equal to
$$\delta_K(S)=\frac{1}{[M:K]}.$$

## Statement references

[[def-number-field]]

[[def-axiom-of-choice]]

[[def-galois-closure-of-a-finite-separable-extension]]

[[def-dirichlet-density-of-prime-ideals]]

[[def-prime-above-and-residue-degree]]

[[def-ramification-index]]

## Facts & Assumptions

**Given:** AC; finite number-field extensions $L/K$ and $M/K$ with $M$ the Galois closure of $L/K$; the set $S$ of prime ideals of $K$ splitting completely in $L/K$.

[A1] AC is assumed in the normal-closure splitting lemma, the Poisson-based analytic class-number theorem, and the finite-ramification theorem used below ([[def-axiom-of-choice]], [[lem-prime-ideals-splitting-completely-in-extension-and-normal-closure]], [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]], [[cor-only-finitely-many-primes-ramify]]).

[F1] For any number field $E$ and real $\sigma>1$, $\zeta_E(\sigma)=\prod_{\mathfrak q}(1-(N\mathfrak q)^{-\sigma})^{-1}$, and the sum of prime-ideal weights $\sum_{\mathfrak q}(N\mathfrak q)^{-\sigma}$ converges ([[def-dedekind-zeta-function]], [[thm-dedekind-zeta-euler-product]]).

[F2] In the finite Galois extension $M/K$, all primes above $\mathfrak p$ have common ramification index $e$, residue degree $f$, and count $g$ with $efg=[M:K]$; $N\mathfrak P=(N\mathfrak p)^f$ ([[cor-galois-prime-decomposition-efg]], [[def-prime-above-and-residue-degree]], [[def-ramification-index]], [[cor-norm-of-a-prime-ideal]]).

[F3] For an unramified prime, complete splitting is equivalent to identity Frobenius, and the Frobenius order equals its residue degree ([[cor-complete-splitting-and-trivial-frobenius]], [[thm-frobenius-order-is-residue-degree]], [[thm-frobenius-elements-above-a-prime-are-conjugate]]).

[F4] Only finitely many prime ideals of $K$ ramify in $M/K$ ([[cor-only-finitely-many-primes-ramify]]).

[F5] The relative Dirichlet density of a set $S$ of prime ideals is the limit of $\sum_{\mathfrak p\in S}(N\mathfrak p)^{-\sigma}/\log(1/(\sigma-1))$ as real $\sigma\downarrow1$ ([[def-natural-and-dirichlet-density]], [[def-dirichlet-density-of-prime-ideals]]).

[F6] $\zeta_M(s)$ has a simple pole at $s=1$ with positive residue ([[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]).

[F7] For $0\le x<1$, $-\log(1-x)=\sum_{m\ge1}x^m/m$ and $\log$ is continuous on $(0,\infty)$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]).

[F8] Every nonzero prime ideal of a number field has finite residue field of size at least $2$ ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

## Proof

1.1 Write $d=[M:K]$. By the normal-closure splitting lemma, a prime ideal of $K$ splits completely in $L/K$ exactly when it splits completely in $M/K$; hence $S$ is also the set of completely split primes of the Galois extension $M/K$. [A1, given]

1.2 For real $\sigma>1$, put $x_{\mathfrak p}=(N\mathfrak p)^{-\sigma}\le1/2$ by [F8]. Applying [F7] to the Euler factors of [F1] and taking limits of finite products gives the absolutely convergent expansion $\log\zeta_M(\sigma)=\sum_{\mathfrak p\subset\mathcal O_K}\sum_{\mathfrak P\mid\mathfrak p}\sum_{m\ge1}(N\mathfrak P)^{-m\sigma}/m$. Its terms are nonnegative, so regrouping them by the base prime ideal preserves the sum. [F1, F7, F8, given]

2.1 Exclude the finite set of primes ramified in $M/K$ from [F4]. For an unramified $\mathfrak p$, [F2] gives $e=1$. If $\mathfrak p\in S$, then $f=1$ and $g=d$, so its contribution to step 1.2 is $d\sum_{m\ge1}x_{\mathfrak p}^m/m=d x_{\mathfrak p}+O(d x_{\mathfrak p}^2)$, since $\sum_{m\ge2}x^m/m\le x^2/(1-x)\le2x^2$ for $0\le x\le1/2$. [F2, F3, F4, F7, step 1.2]

2.2 If an unramified $\mathfrak p\notin S$, its Frobenius is nonidentity by [F3], so $f\ge2$. Its contribution is at most $d\sum_{m\ge1}x_{\mathfrak p}^{2m}/m\le2d x_{\mathfrak p}^2$, using [F2] and the same geometric bound. Each ramified prime contributes a bounded quantity as $\sigma\downarrow1$, because it has finitely many primes above it, each with norm at least $2$; the set of these base primes is finite by [F4]. [A1, F2, F3, F4, F8, step 1.2]

3.1 The error bounds in the split and nonsplit cases sum to $O(1)$ uniformly for $\sigma>1$, since $\sum_{\mathfrak p}x_{\mathfrak p}^2\le\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}(N\mathfrak a)^{-2}=\zeta_K(2)<\infty$ by [F1]. Combining the local contributions yields $\log\zeta_M(\sigma)=d\sum_{\mathfrak p\in S}(N\mathfrak p)^{-\sigma}+O(1)$ as $\sigma\downarrow1$. [F1, step 2.1, step 2.2]

4.1 By [F6], $\zeta_M(\sigma)=c_M(\sigma-1)^{-1}(1+o(1))$ for some $c_M>0$, so [F7] gives $\log\zeta_M(\sigma)=\log(1/(\sigma-1))+O(1)$. Compare with step 3.1 and divide by $\log(1/(\sigma-1))\to\infty$; the limit in [F5] exists and equals $1/d=1/[M:K]$. [A1, F5, F6, F7, step 3.1] ∎
