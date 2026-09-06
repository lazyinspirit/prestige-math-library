---
id: cor-koszul-homology-flat-base-change
kind: corollary
title: "Koszul Homology Flat Base Change"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-complex-flat-base-change, def-flat-and-faithfully-flat-modules-and-ring-maps]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For flat $R\to A$, $H_q(K_R(\mathbf x;M))\otimes_RA\cong H_q(K_A(\mathbf xA;M\otimes_RA))$ for every $q$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-complex-flat-base-change]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]].

## Proof

**Proof technique:** direct.

1.1 Flat tensoring is exact and therefore commutes with homology quotients. [given, algebra]

2.1 The base-changed complex is the Koszul complex on $\mathbf xA$ with coefficient $M\otimes_RA$. [step 1.1, algebra] ∎
