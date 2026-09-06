---
id: lem-five-term-homology-sequence-for-a-free-presentation
kind: lemma
title: "Low-degree sequence of a free presentation"
status: draft
origin: pipeline
deps: [def-free-presentation-kernel-data, def-group-homology-as-a-derived-functor]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For an exact sequence $1\to R\to F\to G\to1$ with $F$ free, there is an
exact sequence

$$0\to H_2(G;\mathbb Z)\to R/[F,R]\to F_{\mathrm{ab}}\to G_{\mathrm{ab}}\to0.$$

## Facts & Assumptions

**Given:** Let $1\to R\to F\to G\to1$ be a free presentation.

[L1] The Lyndon--Hochschild--Serre low-degree homology sequence for this extension is $H_2(F;\mathbb Z)\to H_2(G;\mathbb Z)\to R/[F,R]\to F_{\mathrm{ab}} \to G_{\mathrm{ab}}\to0$.

## Proof

**Proof technique:** direct.

1.1 The Lyndon--Hochschild--Serre low-degree homology sequence for this extension is $H_2(F;\mathbb Z)\to H_2(G;\mathbb Z)\to R/[F,R]\to F_{\mathrm{ab}} \to G_{\mathrm{ab}}\to0$.  This is the five-term sequence recorded in the cited source. [L1, given]

2.1 A free group has zero second integral homology, so the first map has zero source and exactness gives the displayed sequence beginning with $0$. [step 1.1, algebra] ∎
