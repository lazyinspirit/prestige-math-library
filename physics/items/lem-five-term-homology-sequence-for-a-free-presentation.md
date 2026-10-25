---
id: lem-five-term-homology-sequence-for-a-free-presentation
kind: lemma
title: "Low-degree sequence of a free presentation"
status: published
origin: pipeline
deps: [def-free-presentation-kernel-data, def-group-homology-as-a-derived-functor, thm-free-presentation-homology-five-term-sequence, def-dependent-choice]
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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Dependent Choice and supplied projective-resolution data for the group-homology construction. For an exact sequence $1\to R\to F\to G\to1$ with $F$ free, there is an
exact sequence

$$0\to H_2(G;\mathbb Z)\to R/[F,R]\to F_{\mathrm{ab}}\to G_{\mathrm{ab}}\to0.$$

## Facts & Assumptions

**Given:** Dependent choice, the supplied group-homology resolution data, and a free presentation $1\to R\to F\to G\to1$.

[L1] Under the stated conventions, the free-presentation homology five-term theorem supplies the natural exact sequence $0\to H_2(G;\mathbb Z)\to R/[F,R]\to F_{\mathrm{ab}}\to G_{\mathrm{ab}}\to0$ ([[thm-free-presentation-homology-five-term-sequence]]).

## Proof

**Proof technique:** direct.

1.1 The hypotheses and group-homology conventions are exactly those of [L1]. Its first arrow is the free-presentation transgression, and its remaining arrows come from the inclusion $R\hookrightarrow F$ and quotient $F\twoheadrightarrow G$. [L1, given]

2.1 The exactness and initial injection asserted by [L1] therefore give the displayed sequence under the retained dependent-choice and resolution hypotheses. [L1, step 1.1] ∎
