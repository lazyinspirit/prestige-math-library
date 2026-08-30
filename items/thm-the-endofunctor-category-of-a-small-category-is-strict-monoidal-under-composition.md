---
id: thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition
kind: theorem
title: "The endofunctor category of a small category is strict monoidal under composition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-category, prop-size-of-functor-categories, def-strict-monoidal-category]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.3.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "E. Riehl, Category Theory in Context, Chapter 5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

If $\mathcal C$ is a small category, then the endofunctors of $\mathcal C$ and
their natural transformations form a strict monoidal category under functor
composition, with tensor unit $1_{\mathcal C}$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$.

[L1] When the source is small, functors $\mathcal C\to\mathcal C$ and natural transformations between them form the functor category $[\mathcal C,\mathcal C]$ ([[def-functor-category]]).

[L2] If both source and target are small, that functor category is itself small ([[prop-size-of-functor-categories]]).

[L3] A strict monoidal category has literal associativity and unit equalities and identity constraints ([[def-strict-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $[\mathcal C,\mathcal C]$ is a legitimate category whose objects are endofunctors of $\mathcal C$ and whose morphisms are natural transformations. [given, L1, L2]

2.1 Define the tensor product on objects by $F\otimes G:=F\circ G$, and on morphisms by whiskered horizontal composition of natural transformations. The unit object is the identity functor $1_{\mathcal C}$. [step 1.1, construct]

3.1 Composition of functors is literally associative and unital, so $((F\otimes G)\otimes H)=F\otimes(G\otimes H)$ and $1_{\mathcal C}\otimes F=F=F\otimes1_{\mathcal C}$ on the nose. The associator and unitors are therefore identity transformations. [step 2.1, L3]

3.2 Whiskering respects identities and compositions, so the tensor on morphisms is a bifunctor. [step 2.1, algebra]

4.1 Hence $[\mathcal C,\mathcal C]$ is strict monoidal under composition. [step 3.1, step 3.2, L3] ∎
