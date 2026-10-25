---
id: fs-every-module-has-a-composition-series
kind: false-statement
title: "False statement: every module has a composition series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-composition-series-iff-noetherian-and-artinian, ex-integers-as-a-noetherian-non-artinian-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

**False claim:** every module has a composition series. See [[thm-composition-series-iff-noetherian-and-artinian]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] A module with a composition series is both Noetherian and Artinian. The zero module has the empty composition series. ([[thm-composition-series-iff-noetherian-and-artinian]]).

[L2] The regular $\mathbb Z$-module $\mathbb Z$ is Noetherian but not Artinian. ([[ex-integers-as-a-noetherian-non-artinian-module]]).

## Refutation

**Proof technique:** direct.

1.1 The module $\mathbb Z$ over itself is Noetherian but not Artinian, so the equivalence theorem rules out a composition series. [L1, L2, given, algebra]

2.1 The failure is exhibited by an explicit chain rather than only by the equivalence: the submodules $\mathbb Z>2\mathbb Z>4\mathbb Z>\cdots>2^k\mathbb Z>\cdots$ are strictly descending and never stabilize, so $\mathbb Z$ is not Artinian. The false claim is therefore refuted by a single module, not merely restricted in scope. [step 1.1, L2, given, algebra] ∎
