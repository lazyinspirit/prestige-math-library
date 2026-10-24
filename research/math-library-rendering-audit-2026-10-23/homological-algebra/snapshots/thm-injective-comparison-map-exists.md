---
id: thm-injective-comparison-map-exists
kind: theorem
title: "Injective comparison maps exist"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-comparison-map-exists, def-injective-resolution-in-an-abelian-category, thm-the-opposite-of-an-abelian-category-is-abelian]
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

Let $u:A\to B$ be a morphism, and let $I^\bullet$ and $J^\bullet$ be injective resolutions of $A$ and $B$. Then there exists a coaugmentation-preserving cochain map $I^\bullet\to J^\bullet$ extending $u$.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and injective resolutions $I^\bullet$ of $A$ and $J^\bullet$ of $B$.

[L1] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L2] An injective resolution is the cochain datum to be dualized ([[def-injective-resolution-in-an-abelian-category]]).

[L3] Projective comparison maps exist ([[thm-projective-comparison-map-exists]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], pass to the opposite abelian category. Reversing arrows turns the given injective resolutions from [L2] into projective resolutions there, and $u:A\to B$ becomes a morphism in the opposite direction. Apply [L3] in the opposite category to obtain the required comparison map. [L1, L2, L3, construct]

2.1 Translating that chain map back to the original category reverses arrows again and yields a cochain map $I^\bullet\to J^\bullet$ extending $u$. [step 1.1] ∎
