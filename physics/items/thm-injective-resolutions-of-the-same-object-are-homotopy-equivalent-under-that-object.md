---
id: thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object
kind: theorem
title: "Injective resolutions of the same object are homotopy equivalent under that object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-injective-comparison-map-exists, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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

Any two injective resolutions of the same object are homotopy equivalent under that object.
## Facts & Assumptions

**Given:** Two injective resolutions $I^\bullet$ and $J^\bullet$ of the same object $A$.

[L1] Injective comparison maps exist ([[thm-injective-comparison-map-exists]]).

[L2] Injective comparison maps are unique up to cochain homotopy ([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).
## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the identity on $A$ in both directions. This yields maps $I^\bullet\to J^\bullet$ and $J^\bullet\to I^\bullet$ extending $1_A$. [L1, construct]

2.1 Their composites and the identity cochain maps all extend $1_A$, so [L2] makes the composites homotopic to the identities. Hence the two injective resolutions are homotopy equivalent under $A$, including when $A=0$. [L2, step 1.1] ∎
