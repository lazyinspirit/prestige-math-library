---
id: lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set
kind: lemma
title: "A compact subset of an open Euclidean set has a compact Jordan neighborhood inside that open set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-compactness, lem-compactness-is-intrinsic, def-metric-topology, def-multidimensional-grid-partition, cor-jordan-content-finite-additivity, thm-heine-borel-rn, thm-graphs-of-continuous-functions-have-content-zero, thm-jordan-boundary-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: finite-cover
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §5.5"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. If $C\subseteq U\subseteq\mathbb R^n$, where $C$ is compact and $U$ is open, then there is a compact Jordan set $K$ such that
$$C\subseteq\operatorname{int}K\subseteq K\subseteq U.$$
The set $K$ can be chosen as a finite union of closed grid rectangles.

## Facts & Assumptions

**Given:** Compact $C$ contained in open $U\subseteq\mathbb R^n$.

[L1] Compactness is intrinsic and supplies a finite subcover from every relative open cover ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]]).

[L2] Closed bounded subsets of Euclidean space are compact ([[thm-heine-borel-rn]]).

[L3] Continuous coordinate graphs have content zero, and a bounded set is Jordan measurable exactly when its boundary is null ([[thm-graphs-of-continuous-functions-have-content-zero]], [[thm-jordan-boundary-criterion]]).

## Proof

**Proof technique:** finite-cover.

1.1 For each $x\in C$, openness gives a closed grid rectangle $R_x\subseteq U$ with $x\in\operatorname{int}R_x$. The interiors cover $C$, so [L1] selects $R_1,\ldots,R_N$. Put $K=\bigcup_iR_i$. Then $C\subseteq\operatorname{int}K\subseteq K\subseteq U$. [L1, given]

2.1 The finite union $K$ is closed and bounded, hence compact by [L2]. Its boundary is contained in the union of the boundaries of the $R_i$. Each rectangular face is a continuous coordinate graph over a bounded rectangle and is null by [L3]; a finite union remains null. [L2, L3, step 1.1]

3.1 The boundary criterion in [L3] now makes $K$ Jordan measurable. Subdividing the finitely many rectangles by their common coordinate endpoints expresses the same set as a finite union of closed cells from one grid. [L3, step 2.1] ∎
