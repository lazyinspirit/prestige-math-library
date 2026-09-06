---
id: lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data
kind: lemma
title: "The Ext balance isomorphism is independent of resolution comparison data"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]
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

Assume the Axiom of Dependent Choice. Under the enough-projectives and
enough-injectives hypotheses used for the two supplied derived constructions,
the balance isomorphism
$\operatorname{Ext}_{P}^{n}(M,N)\cong\operatorname{Ext}_{I}^{n}(M,N)$ is
independent of the comparison lifts used after changing either supplied
resolution.

## Facts & Assumptions

**Given:** The supplied projective and injective resolution constructions of $\operatorname{Ext}$.

## Proof

**Proof technique:** direct.

1.1 For fixed resolutions, the two edge maps defining the balance zigzag are induced by the augmentations $P_\bullet\to M$ and $N\to I^\bullet$, so they involve no comparison lift. After replacing a projective or injective resolution, choose a comparison map over or under the resolved object. These maps give a morphism between the two Hom double complexes and commute with both edge augmentations. [given, construct]

2.1 Any two projective comparison maps are chain-homotopic, and any two injective comparison maps are cochain-homotopic, by the two comparison uniqueness theorems. Applying $\operatorname{Hom}$ turns either homotopy into a homotopy of the corresponding total-complex maps. Hence the induced maps on all three cohomologies in the edge-to-total zigzag are independent of the chosen lifts, and the balance isomorphism is independent of those choices. [step 1.1, algebra] ∎
