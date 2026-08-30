---
id: cor-null-homotopic-maps-induce-zero-on-homology
kind: corollary
title: "Null-homotopic maps induce zero on homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-null-homotopic-chain-map, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

If $f:C_\bullet\to D_\bullet$ is null-homotopic, then
$$H_n(f)=0:H_n(C)\to H_n(D)$$
for every $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** A null-homotopic chain map $f:C_\bullet\to D_\bullet$ and an integer $n$.

[L1] A null-homotopic map is chain homotopic to the zero chain map ([[def-null-homotopic-chain-map]]).

[L2] Chain-homotopic maps induce the same homology map ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $f$ is homotopic to $0:C_\bullet\to D_\bullet$. [L1, given]

2.1 Applying [L2] to the homotopy from step 1.1 gives $H_n(f)=H_n(0)$. The map $H_n(0)$ is the zero morphism, so $H_n(f)=0$. [L2, step 1.1, algebra] ∎
