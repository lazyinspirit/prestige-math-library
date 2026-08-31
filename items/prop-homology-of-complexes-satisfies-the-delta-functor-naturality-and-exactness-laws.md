---
id: prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws
kind: proposition
title: "Homology of complexes satisfies the delta-functor naturality and exactness laws"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homological-delta-functor-carried-by-homology-of-complexes,
       thm-long-exact-sequence-in-homology,
       cor-the-long-exact-homology-sequence-is-natural]
proof_strategy: direct
verification:
  precheck: pass
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

For every abelian category, the family of homology functors together with the
connecting morphisms of this page is a homological $\delta$-functor: it sends
each short exact sequence of complexes to a long exact sequence, and it is
natural under morphisms of short exact sequences.

## Facts & Assumptions

**Given:** An abelian category and a short exact sequence of complexes in it.

[L1] This page defines the family $(H_n,\partial_n)$ as a concrete homological $\delta$-functor candidate ([[def-homological-delta-functor-carried-by-homology-of-complexes]]).

[L2] Short exact sequences of complexes carry long exact homology sequences ([[thm-long-exact-sequence-in-homology]]).

[L3] Those long exact sequences are natural under morphisms of short exact sequences ([[cor-the-long-exact-homology-sequence-is-natural]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the only axioms left to check are exactness for each short exact sequence and naturality for each morphism of such sequences. [L1, given]

2.1 Exactness is exactly [L2], and naturality is exactly [L3]. Therefore the family of homology functors with these connecting morphisms satisfies the required $\delta$-functor laws. [L2, L3, step 1.1, algebra] ∎

