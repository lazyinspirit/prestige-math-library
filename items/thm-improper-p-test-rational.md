---
id: thm-improper-p-test-rational
kind: theorem
title: "The improper $p$-test for rational exponents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-truncated-integrals-of-rational-powers,
       def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint,
       thm-comparison-test-for-improper-integrals, def-rational-power,
       lem-rational-power-monotone, lem-rational-power-laws,
       lem-geometric-sequence-null, thm-of-archimedean]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Example 8.3.1"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

For every rational $p$,
$$\int_1^\infty x^{-p}\,dx\ \text{converges exactly when }p>1,$$
and
$$\int_0^1 x^{-p}\,dx\ \text{converges exactly when }p<1.$$
When they converge, their values are respectively $1/(p-1)$ and $1/(1-p)$.

## Facts & Assumptions

**Given:** A rational exponent $p$.

[L1] The compact-truncation formula and the dyadic $p=1$ bounds are in [[lem-truncated-integrals-of-rational-powers]].

[L2] Positive rational powers are monotone and geometric sequences with ratio in $(0,1)$ tend to zero ([[lem-rational-power-monotone]], [[lem-geometric-sequence-null]]).

[L3] Nonnegative comparison transfers improper convergence ([[thm-comparison-test-for-improper-integrals]]).

## Proof

**Proof technique:** cases.

1.1 If $p>1$, then $R^{1-p}\to0$, so [L1] gives $\int_1^R x^{-p}dx\to1/(p-1)$. If $0<p<1$, the same formula grows without bound as $R\to\infty$. For $p=1$, the first dyadic bound in [L1] is unbounded. If $p\le0$, then $x^{-p}\ge1$ for $x\ge1$, so [L3] gives divergence. [L1, L3]

1.2 At zero, if $0<p<1$, [L1] and $c^{1-p}\to0$ give value $1/(1-p)$. If $p>1$, the same truncations are unbounded; if $p=1$, use the second dyadic bound. If $p\le0$, then $0\le x^{-p}\le1$ on $(0,1]$, so comparison with the constant one gives convergence, and the formula from step 1.1's power computation gives $1/(1-p)$. [L1, L2, L3]

2.1 These cases exhaust the rational exponents and establish both thresholds and values. [given] ∎
