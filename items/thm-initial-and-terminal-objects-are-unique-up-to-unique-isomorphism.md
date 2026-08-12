---
id: thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism
kind: theorem
title: "Initial and terminal objects are unique up to a unique isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-initial-terminal-and-zero-object,
       def-isomorphism-groupoid-and-connected-category,
       thm-category-theoretic-duality-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapters 1 and 2"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Chapter 4"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Any two initial objects in a category are joined by a unique isomorphism. Any
two terminal objects are likewise joined by a unique isomorphism.

## Facts & Assumptions

**Given:** A category $\mathcal C$ and either two initial objects $I,I'$ or two terminal objects $T,T'$.

[F1] From an initial object there is exactly one morphism to every object, and into a terminal object there is exactly one morphism from every object ([[def-initial-terminal-and-zero-object]]).

[F2] A morphism is an isomorphism when it has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]]).

[L1] A formal theorem derived from the category axioms has a dual obtained by reversing morphisms and composition ([[thm-category-theoretic-duality-principle]]).

## Proof

**Proof technique:** direct.

1.1 If $I$ and $I'$ are initial, let $f:I\to I'$ and $g:I'\to I$ be their unique morphisms in the indicated directions. [given, F1]

1.2 The identity is the unique endomorphism of an initial object, so $g\circ f=1_I$ and $f\circ g=1_{I'}$. [F1]

2.1 By steps 1.1 and 1.2, $f$ is an isomorphism with inverse $g$. [step 1.1, step 1.2, F2]

2.2 Any isomorphism $I\to I'$ is a morphism with that source and target and must equal the unique morphism $f$, so the isomorphism is unique. [step 1.1, F1]

3.1 Applying the dual argument of [L1] to terminal objects gives a unique isomorphism $T\to T'$. [step 2.1, step 2.2, L1] ∎
