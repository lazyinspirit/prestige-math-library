---
id: cor-normalized-cochains-compute-group-cohomology
kind: corollary
title: "Normalized cochains compute group cohomology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-bar-cochain-complex-computes-derived-group-cohomology, thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Appendix 6.5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Normalized inhomogeneous cochains have cohomology $H^n(G;M)$.

## Proof

**Given:** A left $G$-module $M$.

1.1 A chain-homotopy equivalence remains a cochain-homotopy equivalence after applying $\operatorname{Hom}_{\mathbb Z[G]}(-,M)$. [given]

2.1 Thus normalized and unnormalized bar cochains have isomorphic cohomology; the latter computes $H^n(G;M)$. [step 1.1] ∎
