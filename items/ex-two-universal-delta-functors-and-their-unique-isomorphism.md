---
id: ex-two-universal-delta-functors-and-their-unique-isomorphism
kind: example
title: "Two universal delta functors and their unique isomorphism"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-derived-functors-are-universal-delta-functors, thm-left-derived-functors-form-a-homological-delta-functor, cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, suppose $\mathcal A$
has enough projectives, and let $F:\mathcal A\to\mathcal B$ be additive and
right exact. If $P$ and $Q$ are two supplied projective resolution data on all
objects of $\mathcal A$, then the two universal homological delta
functors
$$\bigl(L_n^PF\bigr)_{n\geq 0}\qquad\text{and}\qquad \bigl(L_n^QF\bigr)_{n\geq 0}$$
are uniquely isomorphic. After choosing the standard natural identifications
$L_0^PF\cong F\cong L_0^QF$, the isomorphism is the unique one whose degree-zero
component corresponds to $\operatorname{id}_F$.
## Facts & Assumptions

**Given:** Two supplied projective resolution data $P$ and $Q$ on all objects
of $\mathcal A$ for the same right exact functor $F$.

[L1] Each of the two derived constructions is a universal homological delta
functor
([[thm-derived-functors-are-universal-delta-functors]]).

[L2] Two universal delta functors with the same degree-zero term are uniquely
isomorphic
([[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]]).

[L3] For every supplied projective resolution datum, the zeroth left derived
functor is naturally isomorphic to the original right exact functor
([[thm-left-derived-functors-form-a-homological-delta-functor]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], both $(L_n^PF)$ and $(L_n^QF)$ are universal homological delta functors, and [L3] supplies their natural degree-zero identifications with $F$. [L1, L3, given]

2.1 Choose the natural degree-zero identifications with $F$ from step 1.1. Applying [L2] yields the unique isomorphism of delta functors whose degree-zero part corresponds under those identifications to $\operatorname{id}_F$; its higher components are then forced. [L2, step 1.1] ∎
