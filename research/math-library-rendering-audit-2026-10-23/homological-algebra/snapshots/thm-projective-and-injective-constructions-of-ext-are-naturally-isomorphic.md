---
id: thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic
kind: theorem
title: "Projective and injective constructions of Ext agree for supplied resolutions"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, def-ext-via-a-projective-resolution-of-the-first-variable, def-direct-sum-total-complex-on-finite-diagonals, lem-acyclic-assembly-by-exact-columns, lem-acyclic-assembly-by-exact-rows, lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact, lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact]
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

For supplied resolutions of $M,N$, the canonical maps from $\operatorname{Hom}(P_\bullet,N)$ and $\operatorname{Hom}(M,I^\bullet)$ to $\operatorname{Tot}\operatorname{Hom}(P_\bullet,I^\bullet)$ are quasi-isomorphisms.  Consequently $\operatorname{Ext}^q_P(M,N)\cong\operatorname{Ext}^q_I(M,N)$ for all $q\ge0$.

## Facts & Assumptions

**Given:** A projective resolution $P_\bullet\to M$ and an injective resolution $N\to I^\bullet$.

## Proof

**Proof technique:** direct.

1.1 The augmented columns are exact after applying $\operatorname{Hom}(P_p,-)$, and the augmented rows are exact after applying $\operatorname{Hom}(-,I^q)$.  Both augmentations commute with the other differential. [given]

2.1 Finite-diagonal acyclic assembly applied first to columns and then to rows makes both edge-to-total maps quasi-isomorphisms.  Taking cohomology yields the displayed isomorphism; the maps themselves are retained for the later naturality proof. [step 1.1] ∎
