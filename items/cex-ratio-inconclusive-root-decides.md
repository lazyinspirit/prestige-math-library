---
id: cex-ratio-inconclusive-root-decides
kind: counterexample
title: "$a_k = 2^{-k+(-1)^k}$ has ratio limsup $2$ and liminf $1/8$, so the ratio test fails, while the root test gives convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ratio-test, thm-root-test, cor-root-test-dominates-ratio-test, def-limsup-liminf, lem-limsup-exists, def-integer-power, lem-alternating-sequence, fs-ratio-and-root-limits-always-agree, def-series, def-rational-power, lem-power-monotone, lem-power-laws, lem-of-abs-value, lem-series-tail-invariance]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "CSUDH notes on the ratio and root tests"
      url: "https://math.csudh.edu/~pong/a3/Notes_01.html"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** whenever the root test decides a series, the ratio test
decides it too; equivalently, the ratio test is no weaker than the root test.

The claim is refuted by the sequence usually written $a_k = 2^{-k + (-1)^{k}}$.
Precisely, let $(s_k)$ be the alternating sequence of
[[lem-alternating-sequence]], let $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when
$s_k = -1$, and put

$$a_k \;:=\; 2^{-k}\, t_k \qquad (k \in \mathbb{N}) .$$

Its ratio and root families, in the shifted form used throughout,
$q_k = |a_{k+1}/a_k|$ and $\rho_k = |a_{k+1}|^{1/(k+1)}$, satisfy

$$\liminf_{k} q_k = \frac{1}{8}, \qquad \limsup_{k} q_k = 2, \qquad \limsup_{k} \rho_k = \frac{1}{2} ,$$

as computed in [[fs-ratio-and-root-limits-always-agree]]. So the root test gives
convergence of $\sum_{k \ge 1} |a_k|$, while neither half of the ratio test
applies: its convergence half needs $\limsup_k q_k < 1$ and $2$ is not below $1$,
and its divergence half needs $\liminf_k q_k > 1$ and $1/8$ is not above $1$.

This is the concrete form of the strict dominance recorded in
[[cor-root-test-dominates-ratio-test]].

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of [[lem-alternating-sequence]]; $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when $s_k = -1$; $a_k := 2^{-k} t_k$; and the families $q_k = |a_{k+1}/a_k|$, $\rho_k = |a_{k+1}|^{1/(k+1)}$ ([[def-limsup-liminf]], [[def-rational-power]]).

[L1] The alternating sequence satisfies $|s_k| = 1$ for every $k$, so each $s_k$ is $1$ or $-1$ and $t_k$ is well defined with $t_k > 0$ ([[lem-alternating-sequence]], [[lem-of-abs-value]]).

[L2] $2^{-k} > 0$ for every $k \in \mathbb{N}$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-power-laws]]).

[L3] For this sequence, $\liminf_k q_k = 1/8$, $\limsup_k q_k = 2$ and the root family converges to $1/2$, so $\limsup_k \rho_k = 1/2$ ([[fs-ratio-and-root-limits-always-agree]]).

[L4] The root test: $\limsup_k \rho_k < 1$ gives convergence of $\sum_{k \ge 1} |a_k|$ ([[thm-root-test]]).

[L5] The ratio test: its convergence half needs $\limsup_k q_k < 1$ and its divergence half needs $\liminf_k q_k > 1$; those are its only two criteria ([[thm-ratio-test]]).

[L6] Limit superior and inferior exist in $\overline{\mathbb{R}}$ for every sequence ([[lem-limsup-exists]], [[def-limsup-liminf]]); a series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $s_k$ is $1$ or $-1$, so $t_k$ is defined and positive, and $a_k = 2^{-k} t_k > 0$; in particular $a_k \ne 0$, so both the ratio and the root families are defined and $|a_k| = a_k$. [given, L1, L2]

2.1 For this sequence $\limsup_k q_k = 2$ and $\liminf_k q_k = 1/8$. [step 1.1, L3]

2.2 For this sequence $\limsup_k \rho_k = 1/2$. [step 1.1, L3]

3.1 Since $1/2 < 1$, the root test applies and gives convergence of $\sum_{k \ge 1}|a_k|$, hence of $\sum_{k \ge 1} a_k$, the terms being positive. [step 2.2, step 1.1, L4, L6]

3.2 The convergence half of the ratio test does not apply, since $\limsup_k q_k = 2$ and $2 < 1$ is false. [step 2.1, L5]

3.3 The divergence half does not apply either, since $\liminf_k q_k = 1/8$ and $1/8 > 1$ is false. [step 2.1, L5]

4.1 So the root test decides this series and the ratio test decides nothing about it, refuting the claim. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **The two families are computed once, on the previous page, and cited here.** The four limit quantities for this sequence are established in the refutation of [[fs-ratio-and-root-limits-always-agree]], where the same witness shows that the outer inequalities of the ratio-to-root chain are strict. Nothing is recomputed here; what is added is the reading of those numbers through the two tests.

- **Why the roots behave and the ratios do not.** The exponent of $a_k$ is $-k + (-1)^{k}$. Taking an $(k+1)$-st root divides that exponent by $k+1$, so the bounded oscillation contributes $2^{\pm 1/(k+1)}$, which tends to $1$; forming a ratio differences the exponent, and a bounded oscillation does not shrink under differencing but doubles.

- **This does not make the root test universal.** The companion counterexample with root limit exactly $1$ shows the root test has its own blind spot, and [[fs-universal-comparison-series]] shows no test on this page can avoid having one.
