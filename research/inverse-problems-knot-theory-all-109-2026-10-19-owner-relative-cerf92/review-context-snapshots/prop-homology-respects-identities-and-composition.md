---
id: prop-homology-respects-identities-and-composition
kind: proposition
title: "Homology respects identities and composition"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-chain-map-induces-a-well-defined-map-on-homology,
       prop-identities-and-composites-of-chain-maps-are-chain-maps]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Statement

For every $n\in\mathbb Z$:

1. $H_n(1_C)=1_{H_n(C)}$ for every chain complex $C$.
2. If $f:C\to D$ and $g:D\to E$ are chain maps, then
   $$H_n(g\circ f)=H_n(g)\circ H_n(f).$$

## Facts & Assumptions

**Given:** Chain maps $f:C\to D$ and $g:D\to E$.

[L1] Identities and composites of chain maps are chain maps ([[prop-identities-and-composites-of-chain-maps-are-chain-maps]]).

[L2] A chain map induces a unique map on homology compatible with the quotient from cycles ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $1_C$ is a chain map. The identity on $H_n(C)$ satisfies the same compatibility with the quotient from cycles as the map $H_n(1_C)$ from [L2], so uniqueness in [L2] gives $H_n(1_C)=1_{H_n(C)}$. [L1, L2]

2.1 Again by [L1], $g\circ f$ is a chain map. Both $H_n(g\circ f)$ and $H_n(g)\circ H_n(f)$ compose with the cycle quotient to the map induced by the composite on cycles, so [L2] forces them to agree. [L1, L2, algebra] ∎
