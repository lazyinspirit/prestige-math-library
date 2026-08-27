---
id: cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero
kind: corollary
title: "In an abelian category, monic means zero kernel and epic means zero cokernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category, thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero, cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.4"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

For a morphism $f$ in an abelian category:

1. $f$ is monic if and only if its kernel is zero;
2. $f$ is epic if and only if its cokernel is zero.

## Facts & Assumptions

**Given:** An abelian category and a morphism $f$ in it.

[L1] An abelian category is additive, hence preadditive and equipped with a
zero object ([[def-abelian-category]]).

[L2] In a preadditive category with a zero object, a morphism is monic exactly
when its kernel is zero
([[thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero]]).

[L3] In a preadditive category with a zero object, a morphism is epic exactly
when its cokernel is zero
([[cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero]]).

## Proof

**Proof technique:** direct corollary.

1.1 The monomorphism claim is exactly [L2], because [L1] supplies the preadditive and zero-object hypotheses that [L2] needs. [L1, L2]

2.1 The epimorphism claim is exactly [L3], for the same reason. [L1, L3] ∎
