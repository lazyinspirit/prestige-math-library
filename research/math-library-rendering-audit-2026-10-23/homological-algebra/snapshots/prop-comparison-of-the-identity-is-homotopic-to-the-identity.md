---
id: prop-comparison-of-the-identity-is-homotopic-to-the-identity
kind: proposition
title: "Comparison of the identity is homotopic to the identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-comparison-maps-respect-composition-up-to-homotopy, thm-projective-comparison-map-exists]
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

Any comparison map lifting the identity of a resolved object is homotopic to the identity chain map on that resolution.
## Facts & Assumptions

**Given:** A projective resolution $P_\bullet\to A$ and a comparison map $F_\bullet:P_\bullet\to P_\bullet$ lifting $1_A$.

[L1] Comparison maps respect composition up to homotopy ([[prop-comparison-maps-respect-composition-up-to-homotopy]]).

[L2] Comparison maps lifting the identity exist, and the literal identity chain map is one of them ([[thm-projective-comparison-map-exists]]).
## Proof

**Proof technique:** direct.

1.1 By [L2], both $F_\bullet$ and $1_{P_\bullet}$ are comparison maps lifting $1_A$. [L2, given]

2.1 Apply [L1] with both factors equal to the identity morphism on $A$, taking the chosen lift of the composite to be $F_\bullet$ and the two factor lifts to be the literal identity chain maps. Then $F_\bullet$ is homotopic to $1_{P_\bullet}\circ1_{P_\bullet}=1_{P_\bullet}$. [L1, step 1.1] ∎
