---
id: prop-positive-ext-vanishes-on-an-injective-second-variable
kind: proposition
title: "Positive injective-resolution Ext vanishes on an injective second variable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, prop-positive-right-derived-functors-vanish-on-injective-objects]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice.
Let $\mathcal A$ be an abelian category and let $I$ be a supplied injective-resolution datum on a class $\mathcal D$ of its objects. If $J\in\mathcal D$ is injective, then $\operatorname{Ext}_{I}^{n}(M,J)=0$ for every $M\in\mathcal D$ and every integer $n>0$.

## Facts & Assumptions

**Given:** The supplied datum $I$ on $\mathcal D$, an object $M\in\mathcal D$, an injective object $J\in\mathcal D$, and an integer $n>0$.

## Proof

**Proof technique:** direct.

1.1 Apply [[prop-positive-right-derived-functors-vanish-on-injective-objects]] to the supplied injective-resolution datum and the additive left exact functor $\operatorname{Hom}(M,-)$. It compares the supplied resolution of $J$ with the length-zero injective resolution and gives vanishing in every positive degree. [given, construct]

2.1 By [[def-ext-via-an-injective-resolution-of-the-second-variable]], that right-derived group is precisely $\operatorname{Ext}_{I}^{n}(M,J)$, so it is zero for $n>0$. [step 1.1, algebra] ∎
