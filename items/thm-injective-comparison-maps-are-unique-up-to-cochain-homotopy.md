---
id: thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy
kind: theorem
title: "Injective comparison maps are unique up to cochain homotopy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-the-opposite-of-an-abelian-category-is-abelian]
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

Any two coaugmentation-preserving maps between injective resolutions extending the same object morphism are cochain-homotopic.
## Facts & Assumptions

**Given:** Two maps between injective resolutions extending the same morphism $u:A\to B$.

[L1] Projective comparison maps are unique up to chain homotopy ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L2] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).
## Proof

**Proof technique:** direct.

1.1 By [L2], pass to the opposite abelian category. There the two given maps become comparison maps between projective resolutions lifting the same morphism, so [L1] makes them chain-homotopic. [L1, L2, construct]

2.1 Translating the resulting chain homotopy back to the original category gives the required cochain homotopy. [step 1.1] ∎
