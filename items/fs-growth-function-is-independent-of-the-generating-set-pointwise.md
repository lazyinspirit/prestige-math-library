---
id: fs-growth-function-is-independent-of-the-generating-set-pointwise
kind: false-statement
title: "FALSE: the growth function is independent of the generating set pointwise"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-growth-function-of-a-finitely-generated-group, thm-growth-type-is-independent-of-the-finite-generating-set]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Statement

The growth function of a finitely generated group is independent of the
generating set pointwise.

## Facts & Assumptions

**Given:** The group $\mathbb Z$ with generating sets $S=\{\pm1\}$ and $T=\{\pm1,\pm2\}$.

[L1] The growth function counts elements inside a word-length ball ([[def-growth-function-of-a-finitely-generated-group]]).

[L2] Growth type is independent of the finite generating set, but only up to the comparison relation $\simeq$ ([[thm-growth-type-is-independent-of-the-finite-generating-set]]).

## Refutation

**Proof technique:** direct.

1.1 With respect to $S$, the radius-one ball is $\{-1,0,1\}$, so $\beta_{\mathbb Z,S}(1)=3$. With respect to $T$, the radius-one ball is $\{-2,-1,0,1,2\}$, so $\beta_{\mathbb Z,T}(1)=5$. [L1, algebra]

2.1 Thus the two growth functions are not equal pointwise, even though [L2] says they have the same growth type. This refutes the statement. [L2, step 1.1] ∎
