---
id: prop-the-ext-balance-isomorphism-is-natural-in-both-variables
kind: proposition
title: "The Ext balance isomorphism is natural in both variables"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data, prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable, prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable]
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

Assume the Axiom of Dependent Choice and the supplied resolution hypotheses of
the balance theorem.
For every $n\geq0$, the balance maps $\beta^n_{M,N}:\operatorname{Ext}_P^n(M,N)\to\operatorname{Ext}_I^n(M,N)$ are natural in both $M$ and $N$.

## Facts & Assumptions

**Given:** Morphisms $u:M'\to M$ and $v:N\to N'$ in the resolved class.

## Proof

**Proof technique:** direct.

1.1 Choose the projective and injective comparison maps for $u$ and $v$. [[prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable]] and [[prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable]] give the two routes around the naturality square. [given, construct]

2.1 The chosen comparison maps induce a morphism of Hom double complexes. Because its squares with the projective augmentation $P_\bullet\to M$ and the injective coaugmentation $N\to I^\bullet$ commute, both edge-to-total quasi-isomorphisms commute with it. Taking cohomology makes the balance square commute. The independence lemma removes the chosen comparison maps, proving naturality in both variables. [step 1.1, algebra] ∎
