---
id: prop-equivalence-of-extensions-is-an-equivalence-relation
kind: proposition
title: "Equivalence of extensions is an equivalence relation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-of-extensions, prop-a-morphism-of-extensions-is-an-isomorphism]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Equivalence of extensions with fixed endpoints is an equivalence relation.

## Facts & Assumptions

**Given:** Extensions with the same subobject and quotient.

## Proof

**Proof technique:** direct.

1.1 Identity maps give reflexivity, and composing endpoint-identity maps of short exact sequences gives transitivity. [given, construct]

2.1 Such a map is an isomorphism on the middle term; its inverse commutes with the endpoint maps, so it witnesses symmetry. [step 1.1, algebra] ∎
