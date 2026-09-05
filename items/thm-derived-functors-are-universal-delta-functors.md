---
id: thm-derived-functors-are-universal-delta-functors
kind: theorem
title: "Derived functors are universal delta functors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-left-derived-functors-form-a-homological-delta-functor, thm-right-derived-functors-form-a-cohomological-delta-functor, prop-positive-left-derived-functors-are-effaceable-by-projectives, prop-positive-right-derived-functors-are-effaceable-by-injectives, thm-effaceable-homological-delta-functors-are-universal, thm-effaceable-cohomological-delta-functors-are-universal]
landmark: true
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
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, let $P$ be supplied
projective resolution data on all objects of $\mathcal A$, let $I$ be supplied
injective resolution data on all objects of $\mathcal A$, and let
$F:\mathcal A\to\mathcal B$ be additive.

If $F$ is right exact and the source category has enough projectives, then the
left derived delta functor $(L_n^PF)$ is universal.

If $F$ is left exact and the source category has enough injectives, then the
right derived delta functor $(R_I^nF)$ is universal.
## Facts & Assumptions

**Given:** The stated exactness and enough-projectives or enough-injectives
hypotheses.

[L1] Left and right derived functors carry homological and cohomological delta
functor structures
([[thm-left-derived-functors-form-a-homological-delta-functor]],
[[thm-right-derived-functors-form-a-cohomological-delta-functor]]).

[L2] Their positive degrees are effaceable by projectives or injectives
([[prop-positive-left-derived-functors-are-effaceable-by-projectives]],
[[prop-positive-right-derived-functors-are-effaceable-by-injectives]]).

[L3] Effaceable homological or cohomological delta functors are universal
([[thm-effaceable-homological-delta-functors-are-universal]],
[[thm-effaceable-cohomological-delta-functors-are-universal]]).

## Proof

**Proof technique:** direct.

1.1 In the right exact case, [L1] makes $(L_n^PF)$ a homological delta functor and [L2] makes it effaceable in positive degrees. Therefore [L3] shows that it is universal. [L1, L2, L3, given]

2.1 In the left exact case, [L1] makes $(R_I^nF)$ a cohomological delta functor and [L2] makes it positively effaceable. Applying [L3] again gives its universality. [L1, L2, L3, step 1.1] ∎
