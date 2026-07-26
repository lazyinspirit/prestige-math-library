---
id: cor-root-test-dominates-ratio-test
kind: corollary
title: "Whenever the ratio test decides, the root test decides the same way, and the converse fails"
status: published
origin: session
deps: [thm-ratio-root-inequality, thm-root-test, thm-ratio-test, def-limsup-liminf, def-extended-reals, lem-liminf-le-limsup, lem-of-abs-value, lem-series-tail-invariance, def-series, fs-ratio-and-root-limits-always-agree, lem-alternating-sequence, def-integer-power, lem-power-monotone]
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
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ne 0$ for every $k \in \mathbb{N}$,
and put

$$q_k := \frac{|a_{k+1}|}{|a_k|}, \qquad \rho_k := |a_{k+1}|^{1/(k+1)} \qquad (k \in \mathbb{N}) ,$$

the ratio and root families of [[thm-ratio-test]] and [[thm-root-test]]. Then, in
$\overline{\mathbb{R}}$,

$$\liminf_{k} q_k \;\le\; \liminf_{k} \rho_k \;\le\; \limsup_{k} \rho_k \;\le\; \limsup_{k} q_k ,$$

and consequently:

1. if $\limsup_k q_k < 1$, so that the ratio test gives convergence of
   $\sum |a_k|$ and hence of $\sum a_k$, then $\limsup_k \rho_k < 1$ and the root
   test gives the same;
2. if $\liminf_k q_k > 1$, so that the ratio test gives divergence of
   $\sum a_k$, then $\limsup_k \rho_k > 1$ and the root test gives it too.

**The converse fails.** Let $(s_k)$ be the alternating sequence of
[[lem-alternating-sequence]], let $t_k := 2$ when $s_k = 1$ and $t_k := 1/2$ when
$s_k = -1$, and put $a_k := 2^{-k} t_k$, the sequence usually written
$a_k = 2^{-k+(-1)^k}$. For it, $\limsup_k \rho_k = 1/2 < 1$ while
$\limsup_k q_k = 2$ and $\liminf_k q_k = 1/8$
([[fs-ratio-and-root-limits-always-agree]]), so the root test gives convergence
of $\sum |a_k|$ and neither half of the ratio test applies. So the root test
decides strictly more series than the ratio test.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ne 0$ for every $k$, the ratios $q_k = |a_{k+1}|/|a_k|$ and the roots $\rho_k = |a_{k+1}|^{1/(k+1)}$ ([[def-limsup-liminf]], [[def-extended-reals]]).

[L1] For a sequence $(b_k)$ of reals with $b_k > 0$ for every $k$, writing $q'_k = b_{k+1}/b_k$ and $r_k = b_{k+1}^{1/(k+1)}$, one has $\liminf_k q'_k \le \liminf_k r_k \le \limsup_k r_k \le \limsup_k q'_k$ in $\overline{\mathbb{R}}$ ([[thm-ratio-root-inequality]]).

[L2] $\liminf_k x_k \le \limsup_k x_k$ for every real sequence ([[lem-liminf-le-limsup]]).

[L3] Absolute value: $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$ ([[lem-of-abs-value]]).

[L4] The root test: for a family from $1$, $\limsup_k |a_{k+1}|^{1/(k+1)} < 1$ gives convergence of $\sum_{k \ge 1}|a_k|$ and hence of $\sum_{k \ge 1} a_k$, and $> 1$ gives divergence of $\sum_{k \ge 1} a_k$ ([[thm-root-test]]).

[L5] The ratio test: $\limsup_k q_k < 1$ gives convergence of $\sum |a_k|$ and hence of $\sum a_k$, and $\liminf_k q_k > 1$ gives divergence of $\sum a_k$ ([[thm-ratio-test]]).

[L6] A series converges if and only if each of its tail series converges ([[lem-series-tail-invariance]], [[def-series]]).

[L7] For the sequence $a_k = 2^{-k} t_k$ built from the alternating sequence as in the Statement: $\limsup_k |a_{k+1}|^{1/(k+1)} = 1/2$, $\limsup_k |a_{k+1}|/|a_k| = 2$ and $\liminf_k |a_{k+1}|/|a_k| = 1/8$; and $2^{-k} > 0$, $t_k > 0$, so every term is positive and in particular nonzero ([[fs-ratio-and-root-limits-always-agree]], [[lem-alternating-sequence]], [[def-integer-power]], [[lem-power-monotone]]).

## Proof

**Proof technique:** direct.

1.1 Put $b_k := |a_k|$. Since $a_k \ne 0$ we have $b_k > 0$ for every $k$, so [L1] applies to $(b_k)$. [given, L3, L1]

1.2 For the sequence $a_k = 2^{-k} t_k$ of the Statement every term is nonzero, $\limsup_k \rho_k = 1/2 < 1$, and neither $\limsup_k q_k = 2 < 1$ nor $\liminf_k q_k = 1/8 > 1$ holds. [L7]

2.1 For this $(b_k)$ the ratio family is $b_{k+1}/b_k = |a_{k+1}|/|a_k| = q_k$ and the root family is $b_{k+1}^{1/(k+1)} = |a_{k+1}|^{1/(k+1)} = \rho_k$. [step 1.1]

3.1 Therefore $\liminf_k q_k \le \liminf_k \rho_k \le \limsup_k \rho_k \le \limsup_k q_k$, which is the displayed chain. [step 1.1, step 2.1, L1]

4.1 Suppose $\limsup_k q_k < 1$. By the chain, $\limsup_k \rho_k \le \limsup_k q_k < 1$, so the root test applies to the family $(a_k)_{k \ge 1}$ and gives convergence of $\sum_{k \ge 1}|a_k|$ and of $\sum_{k \ge 1} a_k$, hence of $\sum |a_k|$ and of $\sum a_k$; the ratio test gives the same conclusions. That is claim 1. [step 3.1, L4, L5, L6]

4.2 Suppose $\liminf_k q_k > 1$. By the chain and [L2], $\limsup_k \rho_k \ge \liminf_k \rho_k \ge \liminf_k q_k > 1$, so the root test gives divergence of $\sum_{k \ge 1} a_k$, hence of $\sum a_k$; the ratio test gives the same conclusion. That is claim 2. [step 3.1, L2, L4, L5, L6]

5.1 So for that sequence the root test gives convergence of $\sum_{k \ge 1} |a_k|$ while neither half of the ratio test applies, and the converse of claims 1 and 2 fails. [step 1.2, L4, L5] ∎

## Remarks

- **The dominance is a statement about $\limsup$, not about series.** The whole content is the chain of [[thm-ratio-root-inequality]], proved on the previous page precisely because it is about limits superior and nothing else. Claims 1 and 2 are the translation of that chain through the two tests, and they carry no further mathematics.

- **Strictly more, not merely at least as much.** The witness in the Statement settles that: its roots converge to $1/2$ while its ratios oscillate between $1/8$ and $2$, so the ratio test is silent about a series the root test decides. The reason is structural rather than accidental. Taking an $n$-th root divides the exponent by $n$ and so damps a bounded oscillation, while forming a ratio differences the exponent and preserves it.

- **The ratio test survives because it is easier to compute.** Nothing here says the ratio test should be abandoned; the ratios of a series given by an explicit formula are usually elementary, and the roots usually are not.
