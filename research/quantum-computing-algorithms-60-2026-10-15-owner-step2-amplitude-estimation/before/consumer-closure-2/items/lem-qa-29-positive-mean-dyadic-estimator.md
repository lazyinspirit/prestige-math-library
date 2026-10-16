---
id: lem-qa-29-positive-mean-dyadic-estimator
kind: lemma
title: "Dyadic positive-mean estimator under an L2 bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - alg-qa-29-variance-aware-monte-carlo
  - alg-qa-29-quantum-expectation-estimation
  - thm-qa-29-quantum-expectation-error-cost
  - def-qa-29-coherent-sampler
  - def-expectation-on-a-finite-probability-space
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - cor-holder-inequality-for-random-variables
  - lem-qa-13-pi-rational-bounds
  - thm-of-square-roots
  - lem-of-square-monotone
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - lem-qa-29-independent-trial-median-bound
  - def-qa-quantum-query-algorithm
  - def-natural-logarithm
  - lem-qa-29-certified-natural-logarithm-series
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the bins, samples, and median repetitions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Algorithm 2 and Lemma 4"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Theorem 12"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
verification:
  precheck: n/a
---

## Statement

Let $h$ be a nonnegative finite-valued output of a coherent sampler, $s=\|h\|_2=(\mathbb E[h^2])^{1/2}$, $0<a\le1/64$, and $0<\rho_1<1$. Let $\operatorname{PositiveMean}(h,a,\rho_1)$ be the subroutine defined in [[alg-qa-29-variance-aware-monte-carlo]]. Its output $u$ satisfies
$$|u-\mathbb E[h]|\le a(1+s)^2$$
with probability at least $1-\rho_1$. For $k=\lceil\log_2(1/a)\rceil$, its calls use
$$O\bigl(k\ln(k+1)(1+\ln(1/\rho_1))\bigr)$$
prepared output-state copies and
$$O\bigl(a^{-1}k^{3/2}\ln(k+1)(1+\ln(1/\rho_1))\bigr)$$
uses of the supplied state reflection. All input access, band comparison, value arithmetic, controlled rotation, and finite-precision costs remain separately charged.

## Facts & Assumptions

**Given:** The finite-valued nonnegative sampler output $h$, $0<a\le1/64$, $0<\rho_1<1$, and the subroutine in [[alg-qa-29-variance-aware-monte-carlo]].

[F1] [[alg-qa-29-variance-aware-monte-carlo]] defines $k$, $M$, the bands $[0,1)$ and $[2^{\ell-1},2^\ell)$, their scaled observables, and the median repetitions.

[F2] [[thm-qa-29-quantum-expectation-error-cost]]: for an observable $w\in[0,1]$ of mean $q$, a phase register $M$ gives error radius $2\pi\sqrt{q(1-q)}/M+\pi^2/M^2$ at the stated confidence, and each QAE run uses $M-1$ controlled-Grover calls.

[F3] [[alg-qa-29-quantum-expectation-estimation]] lets the call in [F2] select exactly the chosen $M$ by setting target $\eta_M=88/(7M)$.

[F4] [[lem-qa-29-independent-trial-median-bound]]: a median of $R$ independent trials with failure probability at most $p<1/2$ fails with probability at most $e^{-2R(1/2-p)^2}$; [[def-qa-quantum-query-algorithm]] specifies fresh independent executions.

[F5] [[def-qa-29-coherent-sampler]] requires the sampler and inverse, value, comparator, rotation, and reflection implementations to be supplied and charged separately.

[F6] [[cor-holder-inequality-for-random-variables]] with exponents $2,2$ gives $\mathbb E[|XY|]\le(\mathbb E[X^2])^{1/2}(\mathbb E[Y^2])^{1/2}$.

[F7] [[def-expectation-on-a-finite-probability-space]]: expectation is the finite weighted sum for the sampler law; in particular $\mathbb E[\mathbf1_E]=\Pr(E)$.

[F8] [[def-natural-logarithm]] fixes the natural logarithm used to choose the finite repetition count.

[F9] [[lem-qa-13-pi-rational-bounds]] gives $\pi<22/7$; [[thm-of-square-roots]] and [[lem-of-square-monotone]] give $\sqrt2<3$ from $2<9$, and for nonnegative $r,s$, $r^2\ge s^2$ implies $r\ge s$.

[F10] [[lem-qa-29-certified-natural-logarithm-series]] returns an interval of width at most $1/4$ containing $\ln x$ for every positive rational $x$; its upper endpoint $U$ satisfies $\ln x\le U\le\ln x+1/4$, and its loop terminates.

[F11] [[cor-expectation-agrees-with-the-finite-weighted-sum]] identifies the general expectations used in [F6] with the finite weighted sums in [F7].

## Proof
1.1 The intervals $[0,1),[1,2),\ldots,[2^{k-1},2^k)$ are disjoint and cover $[0,2^k)$. Write $h_\ell$ for the scaled band output in [F1], $q_\ell=\mathbb E[h_\ell]$, and $T=\mathbb E[h\mathbf1_{h\ge2^k}]$. By [F7] and finite-sum additivity,
$$\mathbb E[h]=q_0+\sum_{\ell=1}^k2^\ell q_\ell+T.$$
Since $h\ge2^k$ on the tail, $0\le T\le2^{-k}\mathbb E[h^2]=s^2/2^k\le as^2$. [given, F1, F7, algebra]

1.2 By [F2]–[F3], the $\ell$th estimate has error at most $2\pi\sqrt{q_\ell(1-q_\ell)}/M+\pi^2/M^2$ except with probability $1/[10(k+1)]$. A union bound over $k+1$ bands makes all estimates satisfy these bounds with probability at least $9/10$. On that event, the deterministic estimation error is at most
$$\frac{2\pi}{M}\sum_{\ell=0}^k2^\ell\sqrt{q_\ell}+\frac{\pi^2}{M^2}\sum_{\ell=0}^k2^\ell+T.$$
[given, F2, F3, step 1.1, algebra]

1.3 Each binned call has $O(1+\ln(k+1))$ median repetitions and $M=O(\sqrt{k}/a)$ controlled-Grover calls per repetition by [F2]–[F3]. There are $k+1$ bins. The outer $R_1$ repetitions are $O(1+\ln(1/\rho_1))$ because [F10] makes $U_1\le\ln(1/\rho_1)+1/4$. Therefore the total state-copy count is $O(k\ln(k+1)(1+\ln(1/\rho_1)))$, and the total reflection count is $O(a^{-1}k^{3/2}\ln(k+1)(1+\ln(1/\rho_1)))$. [given, F1, F2, F3, F10, algebra]

2.1 By [F11], the general expectations in the Hölder application [F6] equal their finite weighted-sum values in [F7]. For the lowest band, [F6] with $X=h$ and $Y=\mathbf1_{h<1}$ gives $q_0=\mathbb E[h\mathbf1_{h<1}]\le s$, since $\mathbb E[Y^2]=\Pr(h<1)\le1$ by [F7]; hence $\sqrt{q_0}\le\sqrt{s}\le1+s$. For $\ell\ge1$, $h\ge2^{\ell-1}$ on its band, so $(2^\ell\sqrt{q_\ell})^2=2^\ell\mathbb E[h\mathbf1_{\rm band}]\le2\mathbb E[h^2\mathbf1_{\rm band}]$. Finite Cauchy–Schwarz on the $k$ band terms gives $\sum_{\ell=1}^k2^\ell\sqrt{q_\ell}\le\sqrt{2k}\,s$, because the bands are disjoint. Thus $\sum_{\ell=0}^k2^\ell\sqrt{q_\ell}\le(1+\sqrt{2k})(1+s)$. [step 1.2, F6, F7, F11, algebra]

3.1 The parameter choice in [F1] gives $M^2a^2\ge10^6k$ with $Ma\ge0$, so [F9] implies $M\ge1000\sqrt{k}/a$; also $k\ge1$ and $2^k<2/a$. Thus $1+\sqrt{2k}\le(1+\sqrt2)\sqrt{k}$. By [F9], $2\pi(1+\sqrt2)/1000<176/7000<0.026$ and $4\pi^2/(10^6k)<0.00004$. Thus the first error term in step 1.2 is less than $0.026a(1+s)$, and the second less than $0.00004a$. Together with $T\le as^2$ from step 1.1, their sum is at most $a(1+s)^2$, since $0.026(1+s)+0.00004+s^2\le(1+s)^2$ for $s\ge0$. [given, F1, F9, step 1.1, step 1.2, step 2.1, algebra]

4.1 A single binned execution succeeds with probability at least $9/10$ by step 1.2, hence at least $4/5$, and has the stated error by step 3.1. For its median over $R_1$ independent executions, a failure requires at least half the runs to fail; their failure probability is at most $1/5$, so the deviation from its mean is at least $3R_1/10$. By [F4] and the chosen $R_1\ge2\ln(1/\rho_1)/(3/10)^2$, this probability is at most $\exp(-2R_1(3/10)^2)\le\rho_1$: the algorithm uses $R_1\ge\lceil2U_1/(3/10)^2\rceil+1$ and [F10] gives $U_1\ge\ln(1/\rho_1)$. This proves the confidence claim. [given, F1, F4, F8, F10, step 1.2, step 3.1, algebra]

5.1 The reflection count is an oracle coordinate only. By [F5], sampler preparation/inverse, controlled access, data loading, band comparison, value arithmetic, and rotation compilation are additional declared costs. [F5, step 1.3] ∎
