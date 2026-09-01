---
id: thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object
kind: theorem
title: "Projective resolutions of the same object are homotopy equivalent over that object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
proof_strategy: direct
verification:
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

Assume the Axiom of Dependent Choice.

Any two projective resolutions of the same object are homotopy equivalent over that object.
## Facts & Assumptions

**Given:** Two projective resolutions $P_\bullet\to A$ and $Q_\bullet\to A$ of the same object $A$.

[L1] Comparison maps between projective resolutions exist ([[thm-projective-comparison-map-exists]]).

[L2] Two comparison maps lifting the same object morphism are chain-homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).
## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $1_A$ in each direction. This gives comparison maps $f_\bullet:P_\bullet\to Q_\bullet$ and $g_\bullet:Q_\bullet\to P_\bullet$, both lifting the identity on $A$. [L1, construct]

2.1 The composites $g_\bullet f_\bullet$ and $f_\bullet g_\bullet$ also lift $1_A$, as do the identity chain maps on $P_\bullet$ and $Q_\bullet$. By [L2], $$g_\bullet f_\bullet\simeq 1_{P_\bullet}\qquad\text{and}\qquad f_\bullet g_\bullet\simeq 1_{Q_\bullet}.$$ Thus the two resolutions are homotopy equivalent over $A$, including when $A=0$. [L2, step 1.1] ∎
