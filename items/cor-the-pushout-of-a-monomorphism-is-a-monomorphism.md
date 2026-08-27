---
id: cor-the-pushout-of-a-monomorphism-is-a-monomorphism
kind: corollary
title: "The pushout of a monomorphism is a monomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-opposite-of-an-abelian-category-is-abelian, thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.14"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

In an abelian category, the pushout of a monomorphism is a monomorphism.

## Facts & Assumptions

**Given:** An abelian category and a pushout square whose left leg is monic.

[L1] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L2] In an abelian category, pullbacks of epimorphisms are epimorphisms
([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

## Proof

**Proof technique:** direct corollary.

1.1 Passing to the opposite category turns the given pushout square into a pullback square, and the given monomorphism into an epimorphism. By [L1], the opposite category is still abelian. [L1]

2.1 Apply [L2] in the opposite category. The opposite of the resulting epimorphism is exactly the pushout leg in the original square, so that leg is monic. [L1, L2, step 1.1] ∎
