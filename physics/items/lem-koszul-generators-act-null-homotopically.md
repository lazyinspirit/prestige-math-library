---
id: lem-koszul-generators-act-null-homotopically
kind: lemma
title: "Koszul Generators Act Null Homotopically"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-generator-contraction-homotopy, cor-sequence-ideal-annihilates-koszul-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

Multiplication by each generator $x_i$ on $K(\mathbf x;M)$ is chain-homotopic to zero, and consequently acts as zero on homology.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-generator-contraction-homotopy]], [[cor-sequence-ideal-annihilates-koszul-homology]].

## Proof

**Proof technique:** direct.

1.1 Exterior multiplication by $e_i$ satisfies $d(e_i\wedge-)+(e_i\wedge-)d=x_i\operatorname{id}$. [given, algebra]

2.1 This is a chain homotopy from multiplication by $x_i$ to zero, so its homology action vanishes. [step 1.1, algebra] ∎
