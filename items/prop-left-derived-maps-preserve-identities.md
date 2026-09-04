---
id: prop-left-derived-maps-preserve-identities
kind: proposition
title: "Left derived maps preserve identities"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-map-relative-to-resolution-data, prop-comparison-of-the-identity-is-homotopic-to-the-identity, prop-homology-respects-identities-and-composition]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
For every object $A\in\mathcal D$ and every $n\in\mathbb Z$,
$$L_n^PF(1_A)=1_{L_n^PF(A)}.$$
## Facts & Assumptions

**Given:** An object $A\in\mathcal D$ and an integer $n$.

[L1] The map $L_n^PF(1_A)$ is defined from any comparison lift of the identity
on the chosen resolution of $A$
([[def-left-derived-map-relative-to-resolution-data]]).

[L2] Any comparison map lifting $1_A$ is homotopic to the identity chain map
([[prop-comparison-of-the-identity-is-homotopic-to-the-identity]]).

[L3] Homology sends the identity chain map to the identity and respects
composition ([[prop-homology-respects-identities-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Let $\widetilde 1_\bullet$ be any comparison lift of $1_A$ used in [L1]. By [L2], $\widetilde 1_\bullet$ is homotopic to the identity chain map on the chosen projective resolution of $A$. [L1, L2, given]

2.1 Applying $F$ preserves that homotopy relation as in the construction of the left derived map, so the induced map on homology agrees with the map from the identity chain map. By [L3], that latter map is $1_{L_n^PF(A)}$. Therefore $L_n^PF(1_A)=1_{L_n^PF(A)}$. [L3, step 1.1, algebra] ∎
