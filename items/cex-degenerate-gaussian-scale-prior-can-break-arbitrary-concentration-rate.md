---
dependency_level: 1
id: cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate
kind: counterexample
title: A spiky scale prior defeats an arbitrary degenerate-Gaussian concentration rate
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-standard-normal-and-normal-laws
  - def-measure-with-density
  - thm-nonnegative-weighted-sums-of-measures
  - thm-geometric-series
  - lem-gaussian-linear-and-quadratic-statistic-tail
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: AC is inherited from the normal-law interface. The prior and subsequences are explicitly specified; no new choice beyond these declared probability interfaces is used.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, Section 3.3
      url: https://arxiv.org/pdf/0806.3024
---

## Statement refuted

For every centered tight Gaussian prior, including $W=0$, a Gaussian concentration condition $\phi_0(\epsilon_n)\le n\epsilon_n^2$, $\epsilon_n\to0$ and $n\epsilon_n^2\to\infty$, together with an independent scale prior on a fixed positive compact interval having density bounded below, would imply expected posterior contraction at a sufficiently large fixed multiple of $\epsilon_n$ in fixed-design Gaussian regression. The following counterexample concerns that unrestricted rate claim, not the universal logarithmic-floor or sharper qualified alternatives proved on the A page.

## Facts & Assumptions

**Given:** AC; $W=w_0=0$; independent data $Y_i\sim N(0,1)$; scale parameter $\sigma\in[1/2,3/2]$; and the explicit prior below.

[F1] A normal $N(0,\sigma^2)$ has Lebesgue density $(2\pi\sigma^2)^{-1/2}e^{-y^2/(2\sigma^2)}$. [[def-standard-normal-and-normal-laws]].

[F2] A nonnegative measurable density defines a measure and nonnegative weighted sums of measures are measures. [[def-measure-with-density]], [[thm-nonnegative-weighted-sums-of-measures]].

[F3] A geometric series with ratio in $(0,1)$ converges. [[thm-geometric-series]].

[F4] The centered Gaussian residual-energy bound implies $P(|\sum_{i=1}^nY_i^2-n|>R\sqrt n)\le2e^{-cR^2}$ whenever $R/\sqrt n$ is sufficiently small, for an absolute $c>0$. [[lem-gaussian-linear-and-quadratic-statistic-tail]].

[A1] AC is assumed for the normal-law interface. [[def-axiom-of-choice]].

## Counterexample

**Given:** The model above. Fix $k_0=4$, put $\delta_k=e^{-k!}$ and $I_k=[1+\delta_k,1+\delta_k+\delta_k^4]$ for $k\ge k_0$, and let $U_J$ denote the uniform law on an interval $J$ of positive length.

1.1 The intervals $I_k$ are disjoint subsets of $[1/2,3/2]$, since $\delta_{k+1}=\delta_k^{k+1}$ and $\delta_{k+1}+\delta_{k+1}^4<\delta_k$. The series $S=\sum_{k\ge k_0}\sqrt{\delta_k}$ is positive and finite, bounded by $\sum_{k\ge k_0}e^{-k/2}$ using $k!\ge k$ and [F3]. Define $$\Pi_\sigma=\tfrac12U_{[1/2,3/2]}+\sum_{k\ge k_0}m_kU_{I_k},\qquad m_k=\frac{\sqrt{\delta_k}}{2S}.$$ By [F2] this is a probability measure with a measurable Lebesgue density bounded below by $1/2$ on the required interval. Its spike densities need not be bounded above near $1$. [F2, F3, given, construct, algebra]

1.2 The zero Gaussian law is tight and centered, with support $\{0\}$, covariance RKHS $\{0\}$ and $\phi_0(\epsilon)=0$ for every positive $\epsilon$. For all sufficiently large $n$ define $\epsilon_n=\sqrt{\log\log\log n/n}$, choosing arbitrary positive initial terms. Then $\epsilon_n\to0$, $n\epsilon_n^2\to\infty$ and the concentration condition holds. Put $n_k=\lceil k^4\delta_k^{-2}\rceil$. Since $\log n_k=2k!+O(\log k)$, $\log\log\log n_k=O(\log k)$ and tends to infinity; hence $\epsilon_{n_k}/\delta_k=O(\sqrt{\log k}/k^2)\to0$. [given, construct, algebra]

2.1 Put $S_n=\sum_iY_i^2$. By [F1] the likelihood ratio relative to true scale $1$ is $$L_n(\sigma)=\exp\{-n\log\sigma+(1-\sigma^{-2})S_n/2\}.$$ On $E_k=\{|S_{n_k}-n_k|\le k\sqrt{n_k}\}$, [F4] gives $P_0(E_k^c)\to0$. Write $q=S_{n_k}/n_k$. Maximizing the log likelihood over all positive $\sigma$ gives its maximum $n_k(q-1-\log q)/2$ at $\sigma^2=q$. Since $|q-1|\le k/\sqrt{n_k}$, Taylor's formula gives $\sup_{\sigma\in[1/2,3/2]}L_{n_k}(\sigma)\le e^{Ck^2}$ for a constant independent of $k$. [A1, F1, F4, step 1.2, given, algebra]

3.1 Uniformly on $I_k$, $|\sigma-1|\le2\delta_k$. The function $d(\sigma)=-\log\sigma+(1-\sigma^{-2})/2$ satisfies $d(1)=d'(1)=0$ and has bounded second derivative near $1$, while $|1-\sigma^{-2}|\le C|\sigma-1|$. On $E_k$ this gives $$\log L_{n_k}(\sigma)\ge-Cn_k\delta_k^2-Ck\sqrt{n_k}\delta_k\ge-C'k^4.$$ Thus the posterior denominator is at least $m_ke^{-C'k^4}$ on $E_k$. [F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 Fix $M>0$. Since $\epsilon_{n_k}/\delta_k\to0$, the set $J_k=\{|\sigma-1|\le M\epsilon_{n_k}\}$ misses $I_k$ and all earlier spikes for large $k$. Its prior mass is at most $M\epsilon_{n_k}+\sum_{j>k}m_j$. The later sum is $O(\sqrt{\delta_{k+1}})$: successive square-root terms have ratio at most $1/2$ for $k\ge k_0$, so [F3] bounds the tail by twice its first term. Steps 2.1, 3.1 therefore give $$\Pi_\sigma(J_k\mid Y^{n_k})\le e^{Ck^2+C'k^4}\frac{M\epsilon_{n_k}+O(\sqrt{\delta_{k+1}})}{m_k}.$$ Both terms tend to zero: $\epsilon_{n_k}/\sqrt{\delta_k}=O(e^{-k!/2}\sqrt{\log k}/k^2)$ and $\sqrt{\delta_{k+1}/\delta_k}=e^{-kk!/2}$ dominate the polynomial exponent. [F3, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 On events with probability tending to one, step 4.1 makes posterior mass within $M\epsilon_{n_k}$ tend to zero for every fixed $M$. Thus its expected mass outside that radius tends to one, by boundedness and $P_0(E_k^c)\to0$. The mean function is identically its truth, so this is exactly failure for the combined empirical-mean-plus-scale distance. All original scale-prior and Gaussian concentration assumptions are satisfied, refuting the unrestricted rate claim. [step 1.1, step 1.2, step 2.1, step 4.1, algebra] ∎
