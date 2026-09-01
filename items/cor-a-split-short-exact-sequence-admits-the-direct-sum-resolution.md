---
id: cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution
kind: corollary
title: "A split short exact sequence admits the direct-sum resolution"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-horseshoe-lemma-for-projective-resolutions, def-split-short-exact-sequence-in-an-abelian-category]
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

Let
$$
0\to A'\to A\to A''\to0
$$
be a split short exact sequence, and let projective resolutions of $A'$ and
$A''$ be given. Then the sequence admits a projective resolution of $A$ whose
degree-$n$ term is the direct sum $P'_n\oplus P''_n$ of the chosen side terms.
## Facts & Assumptions

**Given:** A split short exact sequence $$0\to A'\to A\to A''\to0$$ and chosen projective resolutions of $A'$ and $A''$.

[L1] The horseshoe lemma produces a middle projective resolution ([[thm-horseshoe-lemma-for-projective-resolutions]]).

[L2] A split short exact sequence identifies the middle object with the direct sum of the two ends ([[def-split-short-exact-sequence-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 By [L2], identify $A$ with $A'\oplus A''$. Applying [L1] to the chosen projective resolutions and the chosen splitting maps gives a middle resolution whose degree-$n$ term is $P'_n\oplus P''_n$ and whose augmentation is the direct-sum augmentation. [L1, L2, construct]

2.1 Under that identification, the differentials are exactly the direct-sum differentials of the two side resolutions. Hence the split short exact sequence admits the direct-sum resolution. [step 1.1] ∎
