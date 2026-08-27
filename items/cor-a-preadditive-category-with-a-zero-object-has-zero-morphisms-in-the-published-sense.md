---
id: cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense
kind: corollary
title: "A preadditive category with a zero object has zero morphisms in the published sense"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal, prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group, prop-zero-object-induces-zero-morphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Every preadditive category with a zero object has a canonical system of zero
morphisms in the sense of the published zero-morphism definition, and those
morphisms are the zero elements of the hom-groups.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ with a zero object $0$.

[L1] A zero object supplies a unique compatible system of zero morphisms
([[prop-zero-object-induces-zero-morphisms]]).

[L2] In a preadditive category with a zero object, that system agrees with the
hom-group identities ([[prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group]]).

[L3] In a preadditive category, initial and terminal coincide
([[thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]]).

## Proof

**Proof technique:** direct.

1.1 Since $0$ is a zero object, [L1] gives a compatible zero-morphism family in the published sense. [L1]

2.1 By [L2], for every pair of objects these same morphisms are the additive identities of the hom-groups. Thus the preadditive structure and the published zero-morphism structure coincide. [L2, step 1.1]

3.1 So a preadditive category with a zero object has zero morphisms in the published sense. The role of [L3] is exactly to make the term "zero object" stable inside the preadditive setting. [L3, step 2.1] ∎
