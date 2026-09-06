---
id: cor-the-singleton-family-containing-e-has-property-star
kind: corollary
title: "The singleton family $\\{E\\}$ has property (*)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-special-vertex-local-structural-partition-criterion-implies-property-star, lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property, thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition, def-property-star-for-a-finite-family, def-e-graph-and-co-e-graph, def-h-free-and-family-free-graph, def-graph-isomorphism-and-complement]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Sections 5--6.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

The singleton finite family $\{E\}$ has property $(*)$.

## Facts & Assumptions

**Given:** An arbitrary co-$E$-free graph and a special-vertex comb required by property $(*)$.

[F1] $\{H_5,\mathrm{co}\text{-}E\}$ has the Erdős–Hajnal property ([[lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property]]).

[F2] The special-vertex comb has the required $\{H_5,\mathrm{co}\text{-}E\}$ partition ([[thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition]]).

[F3] The local criterion converts those two facts into property $(*)$ ([[thm-special-vertex-local-structural-partition-criterion-implies-property-star]]).

## Proof

**Proof technique:** direct.

1.1 For $\mathcal H=\{E\}$, its complement family is $\overline{\mathcal H}=\{\mathrm{co}\text{-}E\}$. Thus the given graph is in the setting of [F2]. [given, F2]

2.1 Take $\mathcal F_1=\mathcal F_2=\{H_5,\mathrm{co}\text{-}E\}$. Fact [F1] supplies their common Erdős–Hajnal constant, and [F2] supplies the local partition for every special-vertex comb in the graph of step 1.1. [F1, F2, step 1.1]

3.1 Applying [F3] now proves that $\{E\}$ has property $(*)$. [F3, step 2.1] ∎
