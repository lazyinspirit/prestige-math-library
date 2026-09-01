---
id: thm-horseshoe-lemma-for-projective-resolutions
kind: theorem
title: "The horseshoe lemma for projective resolutions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-inductive-horseshoe-step, def-projective-resolution-in-an-abelian-category, thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective, def-dependent-choice]
landmark: true
proof_strategy: direct
verification:
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

Let $$0\to A'\to A\to A''\to0$$ be a short exact sequence, and let projective resolutions of $A'$ and $A''$ be given. Then there exists a projective resolution of $A$ whose degree-$n$ term is $P'_n\oplus P''_n$, fitting into a degreewise split short exact sequence of augmented complexes.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ and projective resolutions of $A'$ and $A''$.

[L1] The inductive horseshoe step advances the construction by one degree ([[lem-inductive-horseshoe-step]]).

[L2] A projective resolution is an exact augmented complex of projective objects ([[def-projective-resolution-in-an-abelian-category]]).

[L3] Finite coproducts of projectives are projective ([[thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]]).

[L4] Dependent choice licenses the countable successor-by-successor selection of the horseshoe lifts and kernel sequences ([[def-dependent-choice]]).
## Proof

**Proof technique:** direct.

1.1 Start at degree zero with the original short exact sequence $$0\to A'\to A\to A''\to0.$$ Every current short exact kernel sequence extends one more degree by [L1], and the next choice depends on the previously constructed degree. Therefore [L4] produces the whole augmented complex for $A$, whose degree-$n$ term is $P'_n\oplus P''_n$ and whose kernel sequences remain short exact in every degree. [L1, L4, construct]

2.1 Each term $P'_n\oplus P''_n$ is projective by [L3], and the short exact kernel sequences from step 1.1 are exactly the data needed for exactness of the middle augmented complex. Therefore [L2] identifies the resulting complex as a projective resolution of $A$. [L2, L3, step 1.1] ∎
