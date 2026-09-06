---
id: lem-pullback-and-pushout-descend-to-extension-classes
kind: lemma
title: "Pullback and pushout descend to extension classes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-and-pushout-of-an-extension, prop-a-morphism-of-extensions-is-an-isomorphism]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Pullback along a morphism of quotient objects and pushout along a morphism of subobjects send equivalent short extensions to equivalent short extensions.

## Facts & Assumptions

**Given:** Equivalent extensions of $M$ by $N$, and a morphism into $M$ or out of $N$.

## Proof

**Proof technique:** direct.

1.1 Apply the pullback or pushout universal property from [[def-pullback-and-pushout-of-an-extension]] to the middle-object map of the equivalence. It produces a morphism between the induced short exact sequences that is the identity on their new endpoints. [given, construct]

2.1 This induced morphism is an isomorphism by [[prop-a-morphism-of-extensions-is-an-isomorphism]], hence it is an equivalence of the induced extensions. [step 1.1, algebra] ∎
