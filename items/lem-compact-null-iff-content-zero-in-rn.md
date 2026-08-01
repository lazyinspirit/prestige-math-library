---
id: lem-compact-null-iff-content-zero-in-rn
kind: lemma
title: "For compact subsets of $\\mathbb{R}^m$, measure zero and content zero coincide"
status: published
origin: session
deps: [def-null-and-content-zero-in-rn, thm-heine-borel-rn, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-topology, def-multidimensional-rectangle-and-volume, thm-geometric-series, def-finite-sum, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A compact subset of $\mathbb R^m$ is null if and only if it has content zero.

## Facts & Assumptions

**Given:** A compact $K\subseteq\mathbb R^m$.

[L1] Content zero implies nullity by finite-cover padding ([[def-null-and-content-zero-in-rn]]).

[L2] Compactness is intrinsic, so every ambient-open cover of a compact subset has a finite subcover ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 One implication is [L1]. For the other, fix $\varepsilon>0$ and choose a countable closed-cube cover of $K$ with total volume below $\varepsilon/2$.  [L1, given]

2.1 Enlarge the $j$-th cube to a larger closed cube whose interior contains it, choosing the added volume below $\varepsilon2^{-j-2}$. The interiors form an open cover and the total volumes of their closed containing cubes are below $\varepsilon$.   [step 1.1, given, choose]

3.1 Compactness selects finitely many of those interiors. The corresponding finite family of closed enlarged cubes still covers $K$, and its volume sum is at most the entire nonnegative series, hence below $\varepsilon$.   [step 2.1, L2, given]

4.1 Thus $K$ has content zero.  [step 3.1] ∎
