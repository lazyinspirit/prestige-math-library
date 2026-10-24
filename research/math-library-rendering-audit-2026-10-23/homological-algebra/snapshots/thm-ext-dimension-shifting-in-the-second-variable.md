---
id: thm-ext-dimension-shifting-in-the-second-variable
kind: theorem
title: "Ext dimension shifting in the second variable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-ext-sequence-in-the-second-variable, prop-positive-ext-vanishes-on-an-injective-second-variable, def-syzygy-and-cosyzygy-relative-to-a-resolution]
proof_strategy: direct
verification:
  audited: 2026-09-06
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
If $0\to N\to I\to\Sigma N\to0$ is an injective copresentation, then for $q\ge1$ there are natural isomorphisms $\operatorname{Ext}^{q+1}(M,N)\cong\operatorname{Ext}^{q}(M,\Sigma N)$; its low-degree part is $0\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M,I)\to\operatorname{Hom}(M,\Sigma N)\to\operatorname{Ext}^1(M,N)\to0$.

## Facts & Assumptions

**Given:** The displayed short exact sequence with $I$ injective.

## Proof

**Proof technique:** direct.

1.1 The long exact sequence in the second variable contains $\operatorname{Ext}^q(M,I)\to\operatorname{Ext}^q(M,\Sigma N)\to\operatorname{Ext}^{q+1}(M,N)\to\operatorname{Ext}^{q+1}(M,I)$. [given]

2.1 The outer groups vanish for $q\ge1$ because $I$ is injective, so the middle arrow is an isomorphism.  At $q=0$ the same sequence gives exactly the printed low-degree segment. [step 1.1, algebra] ∎
