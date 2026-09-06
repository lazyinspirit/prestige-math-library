---
id: thm-functoriality-base-change-and-generator-change-for-koszul-complexes
kind: theorem
title: "Functoriality Base Change And Generator Change For Koszul Complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-complex-localises-termwise, lem-koszul-complex-flat-base-change, cor-koszul-homology-flat-base-change, lem-koszul-generator-matrix-chain-map, cor-koszul-complex-invariant-under-invertible-generator-change]
proof_strategy: direct
verification:
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

Koszul complexes commute with localization and flat base change, and an invertible change of finite generators gives a signed chain isomorphism; the corresponding homology conclusions hold.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-complex-localises-termwise]], [[lem-koszul-complex-flat-base-change]], [[cor-koszul-homology-flat-base-change]], [[lem-koszul-generator-matrix-chain-map]], [[cor-koszul-complex-invariant-under-invertible-generator-change]].

## Proof

**Proof technique:** direct.

1.1 Termwise localization and flat-base-change maps are chain isomorphisms and exactness supplies their homology conclusions. [given, algebra]

2.1 An invertible generator matrix has an inverse exterior chain map; all maps commute with coefficient-module maps by construction. [step 1.1, algebra] ∎
