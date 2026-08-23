---
id: thm-cayley-hamilton-from-pid-module-structure
kind: theorem
title: "Cayley-Hamilton by the PID-module structure theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-largest-invariant-factor-is-the-minimal-polynomial, cor-product-of-invariant-factors-is-the-characteristic-polynomial, def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Corollary 35"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

For every endomorphism $T$ of a finite-dimensional vector space, its characteristic polynomial annihilates it:

$$\chi_T(T)=0.$$

## Facts & Assumptions

**Given:** The minimal polynomial satisfies $\mu_T(T)=0$ by [[def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism]].

[L1] On a nonzero finite-dimensional space, the largest invariant factor is the minimal polynomial ([[cor-largest-invariant-factor-is-the-minimal-polynomial]]).

[L2] The product of the invariant factors is the characteristic polynomial ([[cor-product-of-invariant-factors-is-the-characteristic-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 On a nonzero space, [L1] and [L2] show that $\mu_T$, the largest factor, divides the product $\chi_T$; write $\chi_T=q\mu_T$. On the zero space, $\chi_T=1$ and the identity endomorphism equals the zero endomorphism because there is only one map from the zero space to itself. [L1, L2]

2.1 Evaluating the factorization from step 1.1 gives $\chi_T(T)=q(T)\mu_T(T)=0$. The zero endomorphism and one-dimensional spaces are included. [step 1.1, given, algebra] ∎

## Remarks

This is the module-theoretic route to Cayley-Hamilton. The published proof [[thm-cayley-hamilton]] instead uses the adjugate identity for the polynomial matrix $xI-A$.
