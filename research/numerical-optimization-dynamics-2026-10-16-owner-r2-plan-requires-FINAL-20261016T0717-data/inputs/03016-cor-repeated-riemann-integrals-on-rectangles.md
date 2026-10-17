---
id: cor-repeated-riemann-integrals-on-rectangles
kind: corollary
title: "A continuous function on a closed rectangle has repeated Riemann integrals in every coordinate order, all equal to its multiple integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-riemann-fubini-on-product-rectangles, thm-continuous-on-a-rectangle-is-riemann-integrable, def-metric-continuity, thm-heine-cantor-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, corollary after Theorem 10.2.3"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, §5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $Q=\prod_{j<n}[a_j,b_j]\subseteq\mathbb R^n$, where $n\ge1$ and every $a_j<b_j$. If $f:Q\to\mathbb R$ is continuous, then for every permutation of the coordinates the corresponding repeated Riemann integral exists and equals $\int_Qf$.

## Facts & Assumptions

**Given:** A continuous real function $f$ on a nondegenerate closed rectangle $Q\subseteq\mathbb R^n$.

[L1] Riemann--Fubini identifies the multiple integral with either iterated integral whenever the ordinary sections exist away from a content-zero exceptional set ([[thm-riemann-fubini-on-product-rectangles]]).

[L2] Every continuous real function on a closed nondegenerate rectangle in positive dimension is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[L3] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 Every coordinate section is continuous, hence integrable by [L2]. Moreover $f$ is uniformly continuous on the compact rectangle by [L3]; therefore integrating in one coordinate produces a continuous function of the remaining coordinates, since the difference of two section integrals is bounded by the interval length times the uniform oscillation of $f$. [L2, L3, given]

2.1 Apply [L1] to the first coordinate in a prescribed order. Step 1.1 makes the resulting function continuous, so the same argument applies to the next coordinate. Induction through the finite coordinate list gives the repeated integral. [L1, step 1.1]

3.1 For $n=1$ the repeated integral is the original integral. At every later stage [L1] preserves its value, so every coordinate order gives $\int_Qf$. [step 2.1, algebra] ∎
