---
id: prop-chain-rule-for-smooth-half-space-maps
kind: proposition
title: "Chain rule for smooth half-space maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-function-on-a-relatively-open-subset-of-a-half-space, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
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
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

If $f:U\to V$ and $g:V\to W$ are smooth maps between relatively open half-space sets, then $g\circ f$ is smooth and $D(g\circ f)_p=Dg_{f(p)}\circ Df_p$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Choose Euclidean extensions near $p$ and $f(p)$. Their ordinary composite is an extension of the coordinate composite. [given]

2.1 The Euclidean chain rule gives the displayed formula, and extension-independence makes both sides intrinsic on the half-space. [step 1.1] ∎
