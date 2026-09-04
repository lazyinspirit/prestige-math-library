---
id: thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic
kind: theorem
title: "Two supplied projective resolution data define naturally isomorphic left derived functors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors, lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects, lem-the-change-of-projective-resolution-isomorphisms-are-natural]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ and $Q$ be supplied projective resolution data on the same domain, and
let $F:\mathcal A\to\mathcal B$ be an additive functor. For every
$n\in\mathbb Z$, the additive functors $L_n^PF$ and $L_n^QF$ are naturally
isomorphic.
## Facts & Assumptions

**Given:** An integer $n$.

[L1] Both constructions define additive functors
([[thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L2] For each object, objectwise comparison of the two chosen resolutions
induces an isomorphism on derived objects
([[lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects]]).

[L3] Those isomorphisms are natural in the object
([[lem-the-change-of-projective-resolution-isomorphisms-are-natural]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], each object $A$ carries an isomorphism $\theta_{P,Q}(A):L_n^PF(A)\xrightarrow{\sim}L_n^QF(A)$. [L2, given]

2.1 By [L3], the family from step 1.1 is natural. Together with [L1], this is exactly a natural isomorphism of additive functors $L_n^PF\Rightarrow L_n^QF$. [L1, L3, step 1.1] ∎
