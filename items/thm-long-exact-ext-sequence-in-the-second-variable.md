---
id: thm-long-exact-ext-sequence-in-the-second-variable
kind: theorem
title: "The long exact Ext sequence in the second variable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, thm-right-derived-functors-form-a-cohomological-delta-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough
projectives and enough injectives, and fix supplied projective and injective
resolution data on all its objects.
For $0\to N'\to N\to N''\to0$ and every $M$, there is a natural exact sequence
$$0\to\operatorname{Hom}(M,N')\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M,N'')\xrightarrow{\delta^0}\operatorname{Ext}^1(M,N')\to\operatorname{Ext}^1(M,N)\to\cdots,$$
where $\delta^q:\operatorname{Ext}^q(M,N'')\to\operatorname{Ext}^{q+1}(M,N')$; it is natural in the short exact sequence and contravariantly natural in $M$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to N'\to N\to N''\to0$ and an object $M$.

## Proof

**Proof technique:** direct.

1.1 Apply [[thm-right-derived-functors-form-a-cohomological-delta-functor]] to the left exact functor $\operatorname{Hom}(M,-)$; it supplies the displayed long exact sequence for the injective construction. [given, construct]

2.1 Replace its terms by balanced Ext using [[def-balanced-ext-bifunctor]]. Delta-functor naturality gives naturality in the short exact sequence, while precomposition in $M$ gives the stated contravariant naturality. [step 1.1, algebra] ∎
