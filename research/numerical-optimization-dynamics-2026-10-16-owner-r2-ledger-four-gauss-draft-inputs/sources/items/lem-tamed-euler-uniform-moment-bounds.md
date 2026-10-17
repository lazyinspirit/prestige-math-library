---
id: lem-tamed-euler-uniform-moment-bounds
kind: lemma
title: "Uniform finite-horizon moments for tamed Euler approximations"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-tamed-euler-superlinear-drift
  - lem-brownian-ito-integral-bdg-moment-bound
  - def-d-dimensional-brownian-motion
  - def-filtration-and-filtered-probability-space
  - thm-doob-lp-maximal-inequality
  - def-standard-normal-and-normal-laws
  - cor-cauchy-schwarz-for-random-variables
  - thm-holder-inequality-for-integrals
  - def-axiom-of-choice
  - cor-markov-inequality-for-random-variables
  - thm-finite-union-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Hutzenthaler, Arnulf Jentzen and Peter E. Kloeden, Strong convergence of an explicit numerical method for SDEs with nonglobally Lipschitz continuous coefficients, Lemmas 3.1–3.6 and 3.9"
      url: "https://arxiv.org/pdf/1010.3756"
    - title: "Martin Hutzenthaler and Arnulf Jentzen, Numerical approximations of stochastic differential equations with non-globally Lipschitz continuous coefficients, Chapters 2–3"
      url: "https://arxiv.org/pdf/1203.5809"
---

## Statement

Assume AC. Let $d,m\ge1$ be finite, $T>0$, and let $b,\sigma,\xi,W$ satisfy
the coefficient, Brownian, and initial-moment hypotheses of
[[thm-superlinear-sde-global-existence-and-moments]]. For each integer
$N\ge\max(1,\lceil T\rceil)$, put $h=T/N$ and define $Y_0,\ldots,Y_N$ by
[[alg-tamed-euler-superlinear-drift]]. Then for every finite $p\ge1$,
$$\sup_{N\ge\max(1,\lceil T\rceil)}\ \max_{0\le n\le N}\mathbb E|Y_n|^p<\infty.$$
The bound may depend on $p,T$, the coefficient constants, and the initial
moments, but not on $N$ or $n$.

## Facts & Assumptions

**Given:** AC; the autonomous coefficient and initial-moment hypotheses in the Statement; and the deterministic grid $t_n=nh$.

[F1] The tamed update is $Y_{n+1}=Y_n+h\,b(Y_n)/(1+h|b(Y_n)|)+\sigma(Y_n)\Delta W_n$; in particular $|h\,b(Y_n)/(1+h|b(Y_n)|)|\le1$. [[alg-tamed-euler-superlinear-drift]]

[F2] The sampled filtration $(\mathcal F_{t_n})_{n=0}^N$ is increasing. [[def-filtration-and-filtered-probability-space]]

[F3] Each increment $\Delta W_n$ is independent of $\mathcal F_{t_n}$ and has law $N_m(0,hI_m)$. [[def-d-dimensional-brownian-motion]]

[F4] For a nonnegative submartingale $Z$ and $r>1$, $\|\max_{k\le N}Z_k\|_r\le r/(r-1)\,\|Z_N\|_r$. [[thm-doob-lp-maximal-inequality]]

[F5] The coordinates of $\Delta W_n$ are independent standard normal variables scaled by $\sqrt h$; their Gaussian density gives $\mathbb E e^{a|\Delta W_n|^2}=(1-2ah)^{-m/2}$ when $2ah<1$, and all polynomial moments are finite. [[def-standard-normal-and-normal-laws]]

[F6] For predictable $G$ and $p\ge2$, $\|\sup_{t\le T}|\int_0^tG_s\,dW_s|\|_p \le C_{p,d}\| (\int_0^T\|G_s\|_F^2ds)^{1/2}\|_p$. [[lem-brownian-ito-integral-bdg-moment-bound]]

[F7] Hölder's inequality yields the $L^r$ triangle inequality for $r\ge1$ and $\mathbb E[1_A|Z|^p]\le\mathbb P(A)^{1/2}(\mathbb E|Z|^{2p})^{1/2}$. [[thm-holder-inequality-for-integrals]] [[cor-cauchy-schwarz-for-random-variables]]

[F8] For a nonnegative random variable $Z$ and $a>0$, $\mathbb P(Z\ge a)\le\mathbb E Z/a$. [[cor-markov-inequality-for-random-variables]]

[F9] For a finite family of events, the probability of their union is at most the sum of their probabilities. [[thm-finite-union-bound]]

[A1] AC is inherited through the Brownian, normal, filtration, and Itô interfaces; the estimates below use only countable grid constructions. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses and suppliers in the Statement and Facts.

1.1 The derivative bound, integrated on the segment from $0$ to $x$, gives $|b(x)|\le B(1+|x|^{q+1})$ for a finite $B$. One-sided Lipschitzness with $y=0$ gives $\langle x,b(x)\rangle\le B(1+|x|^2)$, and global Lipschitzness of $\sigma$ gives $\|\sigma(x)\|_F\le B(1+|x|)$. Increase $B$ so these bounds hold with one constant. For $|x|\ge1$ they imply $\|\sigma(x)\|_F^2\le B_1|x|^2$, $\langle x,b(x)\rangle\le B_1|x|^2$, and $|b(x)|^2\le B_1|x|^{2q+2}$. Thus, whenever $1\le|x|\le N^{1/(2q)}$ and $h=T/N$, $h^2|b(x)|^2\le B_1T h|x|^2$. [F1, given, algebra]

1.2 On $|Y_k|\ge1$, the coefficient of the Gaussian increment in $\alpha_k$ has norm at most $\|\sigma(Y_k)\|_F/|Y_k|\le C$. By [F3], conditionally on $\mathcal F_{t_k}$, $\alpha_k$ is centered normal with variance at most $C^2h$, so $\mathbb E[e^{r\alpha_k}\mid\mathcal F_{t_k}]\le e^{C^2r^2h/2}$ for every real $r$. Thus $e^{Q S_j}$ and $e^{-Q S_j}$ are nonnegative submartingales for each $Q>0$. For $Q\ge1$, iteration gives bounded terminal second moments, uniformly in $N$, for both submartingales. Doob's $L^2$ inequality [F4] then gives $\sup_N\mathbb E e^{Q\max_{j\le N}|S_j|}<\infty$; indeed the exponential of the maximum is at most the sum of the two maxima, and each maximum has bounded expectation by its bounded $L^2$ norm. For any $r>0$, choose $Q\ge\max(1,r)$. Since $x^{r/Q}\le1+x$ for $x\ge0$, $\sup_N\mathbb E e^{r\max_{j\le N}|S_j|}<\infty$. Also, for $N\ge4r\Lambda T$, [F5] and $-\log(1-u)\le2u$ on $0\le u\le1/2$ give $$\mathbb E\exp\!\left(r\Lambda\sum_{k<N}|\Delta W_k|^2\right) =\prod_{k<N}(1-2r\Lambda h)^{-m/2} \le e^{2rm\Lambda T}.$$ Every suffix sum of $\alpha_k$ is bounded in absolute value by $2\max_j|S_j|$. Hölder's inequality [F7], the preceding bounds, and the all-moment assumption on $\xi$ therefore give $\sup_{N\ge N_0(p)}\mathbb E\max_{n\le N}D_n^p<\infty$ for each finite $p$. The finitely many smaller $N$ will be handled separately. [F2, F3, F4, F5, F7, given]

1.3 Set $a_n=(\mathbb E|Y_n|^p)^{1/p}$ for $p\ge2$. Decompose the recursion as $$Y_n=\xi+\sum_{k<n}h b_h(Y_k)+\sigma(0)W_{t_n} +\sum_{k<n}(\sigma(Y_k)-\sigma(0))\Delta W_k.$$ The drift sum has norm at most $N$ by [F1]. The last sum is a continuous Brownian Itô integral with a predictable step integrand. By [F6], global Lipschitzness of $\sigma$, and the $L^{p/2}$ triangle inequality from [F7], its $L^p$ norm is at most $$C_p\left(\sum_{k<n}h\, \|\sigma(Y_k)-\sigma(0)\|_{L^p}^2\right)^{1/2} \le C_p\left(h\sum_{k<n}a_k^2\right)^{1/2}.$$ The pointwise inequality $|u_1+\cdots+u_4|^p\le 4^{p-1}\sum_i|u_i|^p$ and the bounded $p$th moments of $W_t$ on $[0,T]$ therefore give $$a_n^2\le C_p(1+\|\xi\|_{L^p}^2+N^2) +C_ph\sum_{k<n}a_k^2.$$ Iterating this finite recurrence yields $\max_{n\le N}a_n^2\le C_p(1+\|\xi\|_{L^p}^2+N^2)e^{C_pT}$, hence $\max_{n\le N}\|Y_n\|_{L^p}\le C_p(1+N)$. [F1, F3, F6, F7, given, algebra]

2.1 Write $\Delta W_k=W_{t_{k+1}}-W_{t_k}$ and define $$\alpha_k=1_{\{|Y_k|\ge1\}} \frac{\langle Y_k,\sigma(Y_k)\Delta W_k\rangle}{|Y_k|^2}.$$ Choose $\Lambda\ge1$ large enough to dominate the constants in step 1.1 and the bounded values of $b,\sigma$ on $|x|\le1$, and put $$D_n=(\Lambda+|\xi|) \exp\!\left(\Lambda T+ \max_{0\le u\le n}\sum_{k=u}^{n-1} (\Lambda h+\Lambda|\Delta W_k|^2+\alpha_k)\right),$$ $$\Omega_n=\left\{\max_{k<n}D_k\le N^{1/(2q)},\ \max_{k<n}|\Delta W_k|\le1\right\}.$$ On $|Y_k|\le1$ and $|\Delta W_k|\le1$, [F1] gives $|Y_{k+1}|\le1+h|b(Y_k)|+\|\sigma(Y_k)\|_F\le\Lambda$. On $1\le|Y_k|\le N^{1/(2q)}$, expand the squared update. The drift cross term is at most $2B_1h|Y_k|^2$; the squared taming increment is at most $B_1Th|Y_k|^2$ by step 1.1; the diffusion square is at most $B_1|Y_k|^2|\Delta W_k|^2$; and the drift-noise cross term is at most the sum of those two square terms. The remaining cross term is exactly $2|Y_k|^2\alpha_k$. Increasing $\Lambda$ if necessary, $1+u\le e^u$ therefore gives $$|Y_{k+1}|\le |Y_k| \exp(\Lambda h+\Lambda|\Delta W_k|^2+\alpha_k).$$ Induction on $n$, starting either from $Y_0=\xi$ or from the last index with $|Y_k|\le1$, now gives $1_{\Omega_n}|Y_n|\le D_n$: the first step after such an index is at most $\Lambda$, and the later factors are bounded by the suffix sum in $D_n$. [F1, step 1.1, given, algebra, construct]

2.2 Markov's inequality [F8] and step 1.2 imply, for any $r>0$, $$\mathbb P\!\left(\max_{n\le N}D_n>N^{1/(2q)}\right) \le N^{-r/(2q)}\mathbb E\max_{n\le N}D_n^r.$$ Also, by the finite union bound [F9] and the $r$th Gaussian moment, $\mathbb P(\max_{k<N}|\Delta W_k|>1) \le C_rN h^{r/2}=C_{r,T}N^{1-r/2}$. Choosing $r$ arbitrarily large in these bounds shows that for every $s>0$ there is $C_s$ with $\mathbb P(\Omega_N^c)\le C_sN^{-s}$ for all $N$. [F3, F5, F8, F9, step 1.2, given, algebra]

3.1 For $p\ge1$, on $\Omega_N$ step 2.1 bounds $\mathbb E[1_{\Omega_N}|Y_n|^p]\le\mathbb E D_n^p\le C_p$; here $\Omega_N\subseteq\Omega_n$. On the complement, [F7] and step 1.3 give $$\mathbb E[1_{\Omega_N^c}|Y_n|^p] \le\mathbb P(\Omega_N^c)^{1/2} \|Y_n\|_{L^{2p}}^p \le C_sN^{-s/2}(1+N)^p.$$ Choose $s>2p$. This is uniformly bounded. For the finitely many small $N$ excluded in step 1.2, the finite recursion and linear growth of $\sigma$ give finite moments by induction; taking their finite maximum completes the uniform bound. For $1\le p<2$, apply Hölder on the probability space to the $p=2$ result. AC is exactly [A1]. [A1, F1, F7, step 2.1, step 1.2, step 2.2, step 1.3, algebra] ∎
