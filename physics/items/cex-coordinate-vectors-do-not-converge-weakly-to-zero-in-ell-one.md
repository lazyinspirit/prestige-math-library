---
id: "cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one"
kind: "counterexample"
title: "Coordinate vectors do not converge weakly to zero in ell one"
deps: ["rem-ell-p-is-l-p-of-counting-measure", "def-weak-convergence-of-nets-and-sequences"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

The coordinate vectors of real or complex $\ell^1$ converge weakly to zero. In fact they have no weak limit.

## Facts & Assumptions

[F1] The $\ell^1$ norm is the sum of absolute values ([[rem-ell-p-is-l-p-of-counting-measure]]), applied to real moduli in the complex case.

[F2] Weak convergence requires convergence of every bounded scalar-linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

## Counterexample

**Given:** $e_n$ with value one at coordinate $n$ and zero elsewhere in $\ell^1$.

1.1 Define $F(x)=\sum_{k=0}^\infty x_k$. Absolute convergence gives a scalar sum, linearity by limits of finite sums, and $|F(x)|\le\sum_k|x_k|=\|x\|_1$. Thus $F\in(\ell^1)^*$, but $F(e_n)=1$ for every $n$, whereas $F(0)=0$. Therefore $e_n$ cannot converge weakly to zero. [given, F1, F2]

2.1 More generally coordinate evaluation $P_k(x)=x_k$ is bounded since $|x_k|\le\|x\|_1$. If $e_n\rightharpoonup x$, then $x_k=\lim_n P_k(e_n)=0$ for each fixed $k$, so $x=0$, already excluded by step 1.1. Thus there is no weak limit. $\square$ [step 1.1, F1, F2]
