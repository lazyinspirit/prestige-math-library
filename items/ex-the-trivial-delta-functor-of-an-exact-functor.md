---
id: ex-the-trivial-delta-functor-of-an-exact-functor
kind: example
title: "The trivial delta functor of an exact functor"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-an-exact-base-functor-has-the-trivial-universal-delta-functor]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Assume the Axiom of Dependent Choice.

If $\mathcal A$ and $\mathcal B$ are abelian categories and
$F:\mathcal A\to\mathcal B$ is exact, then the delta functor concentrated in
degree $0$,
$$T_0=F,\qquad T_n=0\text{ for }n>0,$$
with zero connecting maps, is a universal homological delta functor; likewise
the cohomological family
$$T^0=F,\qquad T^n=0\text{ for }n>0$$
with zero connecting maps is universal.
## Facts & Assumptions

**Given:** An exact functor $F$ between abelian categories.

[L1] An exact base functor has precisely these trivial universal delta functors
([[prop-an-exact-base-functor-has-the-trivial-universal-delta-functor]]).

## Verification

**Proof technique:** direct.

1.1 The displayed homological and cohomological families are exactly the two families identified in [L1]. [L1, given]

2.1 Therefore both are universal delta functors. [L1, step 1.1] ∎
