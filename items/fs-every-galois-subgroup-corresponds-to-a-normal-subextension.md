---
id: fs-every-galois-subgroup-corresponds-to-a-normal-subextension
kind: false-statement
title: "FALSE: every subgroup in the Galois correspondence gives a normal subextension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-s-three-galois-correspondence-for-x-cubed-minus-two, thm-normal-subgroups-and-quotients-in-the-galois-correspondence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.6 and Example 5.8"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every subgroup of the Galois group of a finite Galois extension corresponds to an intermediate field normal over the base.

## Facts & Assumptions

**Given:** The exact normality criterion of [[thm-normal-subgroups-and-quotients-in-the-galois-correspondence]].

[L1] The three order-two subgroups correspond to three cubic fields that are not normal over $\mathbb Q$ ([[ex-s-three-galois-correspondence-for-x-cubed-minus-two]]).

## Refutation

**Proof technique:** direct.

1.1 Choose any order-two subgroup from [L1]. It is a subgroup in the finite Galois correspondence, but it is not normal in $S_3$, and its fixed cubic field is not normal over $\mathbb Q$. [L1, given]

2.1 The strict cubic fixed field in step 1.1 is therefore a counterexample to the universal normality claim. [step 1.1] ∎
