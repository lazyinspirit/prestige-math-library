---
id: thm-continuous-on-a-rectangle-is-riemann-integrable
kind: theorem
title: "Every continuous function on a closed nondegenerate rectangle in $\\mathbb{R}^m$ is Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-multidimensional-riemann-criterion, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, thm-heine-borel-rn, thm-heine-cantor-metric, def-metric-continuity, def-metric-compactness, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-continuous-image-of-a-compact-space-is-compact, thm-extreme-value-metric, def-bounded-set]
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

Every continuous real function on a closed nondegenerate rectangle $Q\subseteq\mathbb R^m$, $m\ge1$, is Riemann integrable.

## Facts & Assumptions

**Given:** A continuous $f:Q\to\mathbb R$.

[L1] $Q$ is compact by Heine-Borel ([[thm-heine-borel-rn]], [[def-metric-compactness]]).

[L2] A continuous function on a compact metric space is uniformly continuous and bounded ([[thm-heine-cantor-metric]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]], [[def-metric-continuity]]).

[L3] The Euclidean and sup-norm metrics are the published metrics and satisfy $d_2(x,y)\le\iota(m)d_\infty(x,y)$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 3, [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L4] Arbitrarily small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, use [L2] with oscillation target $\varepsilon/(1+\operatorname{vol}Q)$ and choose a grid whose mesh is below the resulting sup-metric radius.   [L1, L2, L3, given, choose]

2.1 Every cell then has oscillation below that target. Since cell volumes sum to $\operatorname{vol}Q$, the Darboux gap is below $\varepsilon$.   [step 1.1, given]

3.1 The multidimensional Riemann criterion proves integrability.   [step 2.1, L4] ∎
