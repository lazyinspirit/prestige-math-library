---
id: prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy
kind: proposition
title: "Horseshoe resolutions are compatible with morphisms of short exact sequences up to homotopy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-horseshoe-lemma-for-projective-resolutions, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, def-morphism-of-short-exact-sequences-of-complexes]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Assume the Axiom of Dependent Choice.

Fix a morphism between two short exact sequences, chosen projective resolutions
of the two left objects and the two right objects, and chosen horseshoe middle
resolutions for the two middle objects. Then any two middle comparison maps
that, together with fixed side comparison maps, form morphisms of short exact
sequences of complexes are chain-homotopic. Hence compatibility of chosen
horseshoe middle resolutions with the induced middle morphism is only defined
up to homotopy.
## Facts & Assumptions

**Given:** A morphism between two short exact sequences, fixed side comparison maps on the chosen end resolutions, and two middle comparison maps that make the corresponding ladders commute.

[L2] Comparison maps lifting the same morphism are unique up to chain homotopy ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L3] A morphism of short exact sequences of complexes is the ambient compatibility notion ([[def-morphism-of-short-exact-sequences-of-complexes]]).
## Proof

**Proof technique:** direct.

1.1 By hypothesis and [L3], the two chosen middle maps are comparison maps between the same pair of projective horseshoe resolutions, they lift the same middle-object morphism, and together with the fixed side maps they define morphisms of short exact sequences of complexes. [L3, given, algebra]

2.1 Any two such middle comparison maps lifting the same object morphism are chain-homotopic by [L2]. Therefore the horseshoe construction is compatible with morphisms only up to homotopy, not canonically on the nose. [L2, step 1.1] ∎
