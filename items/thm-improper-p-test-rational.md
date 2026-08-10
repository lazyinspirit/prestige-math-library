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

1.1 If $p>1$, then $R^{1-p}\to0$, so [L1] gives $\int_1^R x^{-p}dx\to1/(p-1)$. [L1, L2, assume-case infinityhigh]

1.2 If $p\le1$, the integral at infinity diverges: for $0<p<1$ the formula in [L1] is unbounded, for $p=1$ use the first dyadic bound, and for $p\le0$ compare $x^{-p}\ge1$ with the constant one. [L1, L3, assume-case infinitylow]

1.3 If $p<1$, the integral at zero converges. For $0<p<1$, [L1] and $c^{1-p}\to0$ give value $1/(1-p)$; for $p\le0$, compare $0\le x^{-p}\le1$ with the constant one, and the same power formula gives that value. [L1, L2, L3, assume-case zerolow]

1.4 If $p\ge1$, the zero-endpoint integral diverges: use the unbounded formula for $p>1$ and the second dyadic bound for $p=1$. [L1, assume-case zerohigh]

2.1 The alternatives in steps 1.1–1.4 exhaust all rational exponents and establish both thresholds and values. [step 1.1, step 1.2, step 1.3, step 1.4, cases-exhaustive] ∎
