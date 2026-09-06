---
id: prop-chain-rule-for-smooth-half-space-maps
kind: proposition
title: "Chain rule for smooth half-space maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-function-on-a-relatively-open-subset-of-a-half-space, lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
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

**Given:** Relatively open half-space sets $U,V,W$, smooth maps $f:U\to V$ and $g:V\to W$, and a point $p\in U$.

[L1] Half-space smoothness supplies smooth Euclidean extensions near every point ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

[L2] The derivatives of two Euclidean extensions agreeing on a relatively open half-space set agree on that set ([[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]]).

[L3] Total derivatives satisfy the Euclidean chain rule ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose Euclidean extensions near $p$ and $f(p)$ and shrink the first neighbourhood so that its image lies in the domain of the second extension. Their ordinary composite then extends $g\circ f$ near $p$. [given, L1, choose]

2.1 Applying [L3] to the extensions from step 1.1 gives the displayed formula, and [L2] makes the resulting derivatives independent of both extension choices. Hence $g\circ f$ is smooth and the formula is intrinsic. [L2, L3, step 1.1] ∎
