---
id: thm-horseshoe-lemma-for-injective-resolutions
kind: theorem
title: "The horseshoe lemma for injective resolutions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-horseshoe-lemma-for-projective-resolutions, def-injective-resolution-in-an-abelian-category, thm-the-opposite-of-an-abelian-category-is-abelian]
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

Let $$0\to A'\to A\to A''\to0$$ be a short exact sequence, and let injective resolutions of $A'$ and $A''$ be given. Then there exists an injective resolution of $A$ whose degree-$n$ term is a finite product, equivalently biproduct, $I'^n\oplus I''^n$.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A'\to A\to A''\to0$ and injective resolutions of $A'$ and $A''$.

[L1] The projective horseshoe lemma holds ([[thm-horseshoe-lemma-for-projective-resolutions]]).

[L2] Injective resolutions are the cochain objects to be dualized ([[def-injective-resolution-in-an-abelian-category]]).

[L3] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).
## Proof

**Proof technique:** direct.

1.1 By [L3], pass to the opposite abelian category. The given injective resolutions from [L2] become projective resolutions there, so [L1] supplies the dual horseshoe resolution in the opposite category. [L1, L2, L3, construct]

2.1 Translating back to the original category reverses arrows again and turns the opposite-category coproducts into finite products, which in an abelian category are the same biproducts. Hence one obtains the asserted injective horseshoe resolution. [step 1.1] ∎
