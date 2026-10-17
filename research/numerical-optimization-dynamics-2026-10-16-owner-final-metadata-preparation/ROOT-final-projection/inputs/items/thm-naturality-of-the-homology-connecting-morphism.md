---
id: thm-naturality-of-the-homology-connecting-morphism
kind: theorem
title: "Naturality of the homology connecting morphism"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-morphism-of-short-exact-sequences-of-complexes,
       def-connecting-morphism-in-homology,
       def-the-arrow-category-of-an-abelian-category,
       thm-snake-lemma-under-the-weaker-stacks-hypotheses]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

A morphism of short exact sequences of complexes induces a commutative square
$$ \begin{matrix} H_n(C)&\xrightarrow{\partial_n}&H_{n-1}(A)\\ \downarrow&&\downarrow\\ H_n(C')&\xrightarrow{\partial'_n}&H_{n-1}(A') \end{matrix} $$
for every $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of complexes.

[L1] A morphism of short exact sequences of complexes is a commutative three-column ladder of chain maps ([[def-morphism-of-short-exact-sequences-of-complexes]]).

[L2] The arrow category of an abelian category is abelian, with kernels, cokernels, and the relevant diagrams computed componentwise ([[def-the-arrow-category-of-an-abelian-category]]).

[L3] The homology connecting morphism is the connecting morphism attached to the quotient-kernel snake diagram of a short exact sequence of complexes ([[def-connecting-morphism-in-homology]]).

[L4] The weaker Stacks snake construction applies in every abelian category ([[thm-snake-lemma-under-the-weaker-stacks-hypotheses]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each degree of the given ladder is a morphism of short exact sequences. Passing to the quotient-kernel diagrams used on this page therefore gives a morphism between two weaker Stacks snake diagrams. Regard every comparison arrow as an object of the arrow category. By [L2], the resulting diagram is itself weaker Stacks snake data in that abelian category. [L1, L2, L3, given, construct]

2.1 Apply [L4] in the arrow category to the diagram from step 1.1. Its connecting morphism is an arrow object whose two components are the connecting morphisms of the original weaker snake diagrams; being a morphism in the arrow category says exactly that the square between those components commutes. Under the identifications in [L3], this is the displayed homology connecting square. [L2, L3, L4, step 1.1, construct] ∎
