---
id: lem-unramified-local-extension-has-trivial-different
kind: lemma
title: "A finite unramified local extension has trivial different"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-different-ideal-of-a-finite-local-extension
  - thm-local-trace-dual-is-a-fractional-ideal
  - lem-local-integers-of-finite-separable-local-extension-are-monogenic
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-extension-degree-and-finite-extension
  - def-countable-choice
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - def-formal-derivative-of-a-polynomial
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - thm-valuation-ring-is-integrally-closed
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field
  - def-normed-vector-space-over-an-absolutely-valued-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory, Chapter III, Section 2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
    - title: "Keith Conrad, The Different Ideal, Sections 3–4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
verification: {}
---

## Statement

Assume Countable Choice. Let $L/K$ be a finite unramified extension of
nonarchimedean local fields with finite residue fields. Then its different
ideal is the unit ideal: $\mathfrak D_{L/K}=\mathcal O_L$.

## Statement references

[[def-different-ideal-of-a-finite-local-extension]]

[[thm-local-trace-dual-is-a-fractional-ideal]]

[J. Neukirch, *Algebraic Number Theory*, Chapter III, Section 2](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

[Keith Conrad, *The Different Ideal*, Sections 3–4](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf)

## Facts & Assumptions

**Given:** Countable Choice and a finite unramified extension $L/K$ of nonarchimedean local fields with finite residue fields.

[A1] Countable Choice is used by the local degree, monogeneity, and trace-dual suppliers. ([[def-countable-choice]])

[F1] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: The valuation rings are complete discrete valuation rings with finite residue fields and normalized valuations.

[F2] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]: For a finite local extension, $[L:K]=e(L/K)[k_L:k_K]$ and $v_L|_K=e(L/K)v_K$.

[F12] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]: The pair's local convention calls $L/K$ unramified when $e(L/K)=1$ and $k_L/k_K$ is separable.

[F3] [[cor-finite-extensions-of-finite-fields-are-simple]]: The finite extension $k_L/k_K$ has a primitive element.

[F4] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: Finite residue-field extensions are separable.

[F5] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]: A simple residue root of a polynomial over a complete valued field lifts to a root in its valuation ring with the prescribed residue.

[F6] [[def-integral-element-and-algebraic-integer]]: A root of a monic polynomial over a ring is integral over that ring.

[F7] [[cor-integral-elements-form-a-subring]]: Sums and products of integral elements are integral.

[F8] [[thm-valuation-ring-is-integrally-closed]]: A valuation ring is integrally closed in its fraction field.

[F9] [[thm-evaluation-kernel-and-minimal-polynomial]]: The monic minimal polynomial generates the kernel of evaluation at an algebraic element.

[F10] [[thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field]]: On a finite-dimensional vector space over a complete valued field, coordinate maximum norms are equivalent to its given norm. Its published proof selects a sequence from countably many nonempty sets, so this use is under [A1]; the supplier Statement's omission of Countable Choice is recorded for owner review.

[F11] [[thm-local-trace-dual-is-a-fractional-ideal]]: If $\mathcal O_L=\mathcal O_K[\alpha]$ with minimal polynomial $f$, then $\mathfrak D_{L/K}=f'(\alpha)\mathcal O_L$.

## Proof

**Given:** The data in the Statement, including Countable Choice.

1.1 Choose a primitive element $\bar a$ of $k_L/k_K$ by [F3], let $\bar g$ be its monic minimal polynomial, lift $\bar g$ to a monic $g\in\mathcal O_K[T]$, and use [F5] to choose $\alpha\in\mathcal O_L$ with $g(\alpha)=0$ and residue $\bar a$. The element $\bar a$ is a simple root of $\bar g$ by [F4]. [A1, F1, F3, F4, F5, given, choose, construct]

2.1 Let $f$ be the monic minimal polynomial of $\alpha$ over $K$. By [F6], $\alpha$ is integral; every root of $f$ is a root of $g$, so its coefficients, being signed sums of products of integral roots, are integral by [F7]. They lie in $K$, hence [F8] gives $f\in\mathcal O_K[T]$. Since $f\mid g$, reduction gives $\bar f\mid\bar g$; because $\bar a$ is a root of $\bar f$ and has minimal polynomial $\bar g$, also $\bar g\mid\bar f$. Thus $\bar f=\bar g$ and $[K(\alpha):K]=[k_L:k_K]$. [F6, F7, F8, F9, step 1.1, algebra]

3.1 By [F12], $e(L/K)=1$; the residue fields are finite and hence separable by [F4]. Thus [F2] gives $[L:K]=[k_L:k_K]$, so step 2.1 yields $K(\alpha)=L$. The powers of $\alpha$ below $[L:K]$ form an $\mathcal O_K$-basis of $A=\mathcal O_K[\alpha]$: monic division gives spanning and minimal-polynomial degree gives linear independence. By [F10] and [A1], a sequence in $A$ converging in $L$ has Cauchy coordinate sequences in $K$; their limits lie in the complete closed ring $\mathcal O_K$, so $A$ is closed in $L$. [A1, F1, F2, F12, F4, F6, F9, F10, step 2.1, algebra]

4.1 Since the residue of $\alpha$ generates $k_L/k_K$ and $e(L/K)=1$, for every $x\in\mathcal O_L$ choose $c_0(T)\in\mathcal O_K[T]$ of degree below $[k_L:k_K]$ with $x-c_0(\alpha)\in\mathfrak m_L=\pi_K\mathcal O_L$. Divide the difference by $\pi_K$ and repeat. The resulting partial sums $s_N=\sum_{j=0}^{N-1}\pi_K^j c_j(\alpha)$ lie in $A$ and satisfy $v_L(x-s_N)\ge N$. They converge to $x$, so closedness from step 3.1 gives $x\in A$. Hence $\mathcal O_L=\mathcal O_K[\alpha]$. [A1, F1, F2, step 1.1, step 3.1, choose, construct, algebra]

5.1 The reduction $\bar f=\bar g$ is separable by [F4], so $\bar f'(\bar a)\ne0$. Therefore $f'(\alpha)$ has nonzero residue and is a unit of $\mathcal O_L$. Applying [F11] to the monogenic presentation in step 4.1 gives $\mathfrak D_{L/K}=f'(\alpha)\mathcal O_L=\mathcal O_L$. [A1, F4, F11, step 1.1, step 4.1, algebra] ∎
