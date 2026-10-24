---
id: thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
kind: theorem
title: "Projective comparison maps are unique up to chain homotopy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-projective-comparison-map-exists, lem-extend-a-partial-comparison-homotopy-by-one-degree, def-chain-homotopy, def-augmentation-preserving-map-of-projective-resolutions, def-dependent-choice]
landmark: true
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

Assume the Axiom of Dependent Choice.

Any two augmentation-preserving maps between projective resolutions lifting the same object morphism are chain-homotopic.
## Facts & Assumptions

**Given:** Two augmentation-preserving maps $f_\bullet,g_\bullet:P_\bullet\to Q_\bullet$ between projective resolutions, lifting the same object morphism $u:A\to B$.

[L1] A partial comparison homotopy extends one degree at a time ([[lem-extend-a-partial-comparison-homotopy-by-one-degree]]).

[L2] The maps $f_\bullet$ and $g_\bullet$ are comparison maps in the sense of [[def-augmentation-preserving-map-of-projective-resolutions]].

[L3] Dependent choice licenses the countable successor-by-successor selection of compatible homotopy components ([[def-dependent-choice]]).
## Proof

**Proof technique:** direct.

1.1 Start at degree $0$. Because $f_\bullet$ and $g_\bullet$ lift the same object map, [L1] produces $h_0:P_0\to Q_1$. Every partial homotopy through degree $n-1$ extends one degree further by [L1], and the successive choices depend on the previously chosen components. Therefore [L3] produces a family $h_n:P_n\to Q_{n+1}$ in every degree. [L1, L2, L3, construct]

2.1 By construction, the family $(h_n)$ satisfies the defining chain-homotopy equation in every degree. Therefore $f_\bullet$ and $g_\bullet$ are chain-homotopic. [step 1.1] ∎
