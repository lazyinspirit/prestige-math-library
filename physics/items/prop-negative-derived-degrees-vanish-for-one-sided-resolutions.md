---
id: prop-negative-derived-degrees-vanish-for-one-sided-resolutions
kind: proposition
title: "Negative derived degrees vanish for one-sided resolutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Let $P$ and $I$ be supplied projective and injective resolution data, and let
$F$ be an additive functor.

If $n<0$, then for every object $A$ in the common domain,
$$L_n^PF(A)=0\qquad\text{and}\qquad R_I^nF(A)=0.$$
## Facts & Assumptions

**Given:** An object $A$ and an integer $n<0$.

[L1] The object $L_n^PF(A)$ is the homology of the deleted projective resolution $F(P(A)_{\mathrm{del}})$ in degree $n$ ([[def-left-derived-object-relative-to-projective-resolution-data]]).

[L2] The object $R_I^nF(A)$ is the cohomology of the deleted injective resolution $F(I(A)_{\mathrm{del}})$ in degree $n$ ([[def-right-derived-object-relative-to-injective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the complex computing $L_n^PF(A)$ is zero in every negative degree, because a deleted projective resolution is supported only in nonnegative homological degrees. Therefore both its degree-$n$ cycle object and its degree-$n$ boundary object are zero, so $L_n^PF(A)=0$. [L1, given, algebra]

1.2 By [L2], the cochain complex computing $R_I^nF(A)$ is zero in every negative cohomological degree, because a deleted injective resolution begins in degree $0$. Hence its degree-$n$ cocycle and coboundary objects are zero, so $R_I^nF(A)=0$. [L2, given, algebra]

2.1 Steps 1.1 and 1.2 prove the claimed vanishing for both one-sided derived constructions. [step 1.1, step 1.2] ∎
