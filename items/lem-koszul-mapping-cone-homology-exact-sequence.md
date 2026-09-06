---
id: lem-koszul-mapping-cone-homology-exact-sequence
kind: lemma
title: "Koszul Mapping Cone Homology Exact Sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-append-one-element-mapping-cone-identification, thm-the-cone-long-exact-sequence]
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

Appending $y$ yields the exact sequence $\cdots\to H_i(K(\mathbf x;M))\xrightarrow yH_i(K(\mathbf x;M))\to H_i(K(\mathbf x,y;M))\to H_{i-1}(K(\mathbf x;M))\to\cdots$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-append-one-element-mapping-cone-identification]], [[thm-the-cone-long-exact-sequence]].

## Proof

**Proof technique:** direct.

1.1 The cone identification gives the degreewise split short exact sequence $0\to K(\mathbf x;M)\to K(\mathbf x,y;M)\to K(\mathbf x;M)[-1]\to0$. [given, algebra]

2.1 Its connecting map is multiplication by $y$ (check it on a cycle in the shifted summand), so the long exact homology sequence is the displayed one. [step 1.1, algebra] ∎

