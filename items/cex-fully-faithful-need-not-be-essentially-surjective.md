---
id: cex-fully-faithful-need-not-be-essentially-surjective
kind: counterexample
title: "The inclusion of one object into a discrete two-object category is fully faithful but not essentially surjective"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-full-faithful-and-essentially-surjective-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Full faithfulness alone does not imply essential surjectivity.

## Facts & Assumptions

**Given:** The one-object discrete category $C=\{0\}$ and the two-object discrete category $D=\{0,1\}$.

[L1] Full faithfulness means bijectivity on every hom-collection, while essential surjectivity requires every target object to be isomorphic to an image object ([[def-full-faithful-and-essentially-surjective-functor]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $I:C\to D$ send $0$ to $0$. The sole hom-map is the bijection $\{1_0\}\to\{1_0\}$, so $I$ is fully faithful by [L1]. [L1]

1.2 In the discrete category $D$, the only isomorphisms are identities. Therefore the object $1$ is not isomorphic to $I(0)=0$, so $I$ is not essentially surjective. [L1]

2.1 This finite inclusion is fully faithful by step 1.1 but not essentially surjective by step 1.2. [step 1.1, step 1.2] ∎
