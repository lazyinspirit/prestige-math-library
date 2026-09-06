---
id: prop-finite-groups-have-torsion-annihilation-in-positive-cohomology
kind: proposition
title: "Finite groups annihilate positive cohomology by their order"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-restriction-corestriction-composite-is-multiplication-by-the-index, lem-positive-group-cohomology-of-the-trivial-group-vanishes]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Theorem 6.5.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

If $G$ is finite, $M$ is a left $G$-module, and $n>0$, then
$|G|x=0$ for every $x\in H^n(G;M)$.

## Proof

**Given:** A finite group $G$, a left $G$-module $M$, and $n>0$.

1.1 Restriction to the trivial subgroup maps $x$ to $H^n(1;M)=0$. [given]

2.1 Corestriction after restriction is multiplication by $[G:1]=|G|$, so $|G|x=0$. [step 1.1] ∎
