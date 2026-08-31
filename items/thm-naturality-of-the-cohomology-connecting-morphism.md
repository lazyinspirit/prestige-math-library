---
id: thm-naturality-of-the-cohomology-connecting-morphism
kind: theorem
title: "Naturality of the cohomology connecting morphism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-naturality-of-the-homology-connecting-morphism,
       thm-long-exact-sequence-in-cohomology,
       def-cochain-complex-in-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Statement

A morphism of short exact sequences of cochain complexes induces a commutative
square
$$ \begin{matrix} H^n(C)&\xrightarrow{\partial^n}&H^{n+1}(A)\\ \downarrow&&\downarrow\\ H^n(C')&\xrightarrow{\partial'^n}&H^{n+1}(A') \end{matrix} $$
for every $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of cochain complexes.

[L1] A cochain complex is read as a chain complex by the grading-reversal convention $(C^\sharp)_n=C^{-n}$ ([[def-cochain-complex-in-an-abelian-category]]).

[L2] The homology connecting morphism is natural under morphisms of short exact sequences ([[thm-naturality-of-the-homology-connecting-morphism]]).

[L3] The cohomology connecting maps are the reindexed homology connecting maps ([[thm-long-exact-sequence-in-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to both rows of the given morphism. This turns the cochain ladder into a morphism of short exact sequences of chain complexes. [L1, given, construct]

2.1 The resulting lower-index connecting square commutes by [L2]. Translating back with [L3] gives the upper-index square in the statement. [L2, L3, step 1.1, algebra] ∎

