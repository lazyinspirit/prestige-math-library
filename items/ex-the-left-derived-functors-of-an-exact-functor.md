---
id: ex-the-left-derived-functors-of-an-exact-functor
kind: example
title: "The left derived functors of an exact functor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [prop-an-exact-functor-has-vanishing-positive-derived-functors, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]
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
## Example

Let $P$ be supplied projective resolution data on a class $\mathcal D$ and let
$F:\mathcal A\to\mathcal B$ be exact. Then for every object $A\in\mathcal D$,
$$L_0^PF(A)\cong F(A)\qquad\text{and}\qquad L_n^PF(A)=0\ \text{for }n>0.$$
So the full left-derived profile of an exact functor is concentrated in degree
$0$.
## Facts & Assumptions

**Given:** An exact functor $F$ and an object $A\in\mathcal D$.

[L1] The zero-th left derived functor of a right exact functor recovers the original functor ([[thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]]).

[L2] An exact functor has vanishing positive derived functors ([[prop-an-exact-functor-has-vanishing-positive-derived-functors]]).

## Verification

**Proof technique:** direct.

1.1 Exact functors are in particular right exact, so [L1] gives $L_0^PF(A)\cong F(A)$. [L1, given]

2.1 Since $F$ is exact, [L2] gives $L_n^PF(A)=0$ for every $n>0$. Therefore the example has exactly the displayed degree-zero profile. [L2, step 1.1] ∎
