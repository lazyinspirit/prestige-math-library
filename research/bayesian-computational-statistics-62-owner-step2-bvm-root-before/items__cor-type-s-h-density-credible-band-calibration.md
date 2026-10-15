---
id: cor-type-s-h-density-credible-band-calibration
kind: corollary
title: Type-S and Type-H density credible bands have asymptotically exact coverage
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-type-s-and-h-multiscale-density-priors
  - thm-type-s-density-weak-bvm-on-m0w
  - thm-type-h-histogram-posterior-weak-bvm-in-m0w
  - lem-compact-wavelet-projection-kernel-and-commutator
  - lem-density-bridge-norm-cdfs-are-continuous-and-strict
  - thm-projected-empirical-process-clt-in-m0w
  - thm-cdf-and-multiscale-credible-band-calibration-from-bvm
  - thm-multiscale-credible-band-holder-diameter
proof_strategy: direct
axiom_use: Full AC is inherited from the density posterior BvM, Gaussian bridge, sampling CLT and norm-quantile suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorems 3–5
      url: https://arxiv.org/pdf/1310.2484
---

## Statement

Assume AC. Use either Type-S1, Type-S2 or Type-H with all the truth, basis, prior-scale, Dirichlet-parameter and cutoff conditions of [[def-type-s-and-h-multiscale-density-priors]]. Let $w_l\ge1$ be nondecreasing, $w_l/\sqrt{l+1}\to\infty$, and $\sum_lw_l2^{-l/2}<\infty$. In Type S take $T_n=P_n(L_n)$, the empirical wavelet projection through level $L_n$. In Type H take the empirical histogram $T_n=h_n$ at mesh $2^{-L_n}$, equivalently the Haar projection with scaling coordinate and details $l<L_n$.

For each $0<\eta<1$, the posterior multiscale and CDF balls of [[thm-cdf-and-multiscale-credible-band-calibration-from-bvm]], at posterior level $1-\eta$ and centered at these $T_n$, have posterior mass at least $1-\eta$ and frequentist coverage tending to $1-\eta$. Their scaled radii converge in probability to the positive finite $1-\eta$ quantiles of the corresponding Gaussian bridge norms. In particular the CDF posterior converges in bounded-Lipschitz distance to the $P_0$-Brownian bridge law.

If additionally the coefficient smoothness and undersmoothing hypotheses of [[thm-multiscale-credible-band-holder-diameter]] hold, its intersection with the stated coefficient smoothness ball has the same limiting coverage and the diameter bound asserted there. No unverified entropy, prior-mass, posterior contraction or quantile-regularity premise is required in this corollary.

## Facts & Assumptions

**Given:** AC, one of the three source-specific prior regimes, the specified empirical center, admissible summable weights, and $0<\eta<1$.

[A1] [[def-axiom-of-choice]] is inherited from the following suppliers.

[F1] [[thm-type-s-density-weak-bvm-on-m0w]] and [[thm-type-h-histogram-posterior-weak-bvm-in-m0w]] prove posterior bounded-Lipschitz convergence about the respective empirical projections, to the Borel Gaussian bridge with covariance $P_0[(\psi-P_0\psi)(\psi'-P_0\psi')]$.

[F2] [[lem-compact-wavelet-projection-kernel-and-commutator]] preserves coefficient regularity of $e^g$ at every positive order, including integers. [[thm-projected-empirical-process-clt-in-m0w]] proves the sampling CLT for bounded truths with coefficient smoothness $\gamma>1/2$ and either cutoff regime.

[F3] [[lem-density-bridge-norm-cdfs-are-continuous-and-strict]] proves that both bridge norm CDFs are continuous and strictly increasing on positive arguments and have unique positive finite interior quantiles, under the given positive bounded truth and primitive-map summability conditions.

[F4] [[thm-cdf-and-multiscale-credible-band-calibration-from-bvm]] gives measurable credible balls, CDF pushforward convergence, radius limits and exact asymptotic coverage from posterior BvM, the sampling-center CLT and the stated norm-quantile conditions.

[F5] [[thm-multiscale-credible-band-holder-diameter]] gives the additional smoothness-ball coverage and diameter conclusion under its explicit coefficient smoothness and undersmoothing assumptions.

## Proof

1.1 In Type S, [F1] proves posterior BvM about $T_n=P_n(L_n)$ with the original S1 range $\alpha>1$ and original Gaussian S2 range $\alpha>1/2$, $0<r<\alpha-1/4$. The truth $g_0=\log f_0$ has $\alpha$ coefficient regularity, so [F2] gives that regularity for $f_0=e^{g_0}$ as well. The retained basis has the support, overlap and supremum bounds required by the empirical-process theorem in [F2]. Taking $\gamma=\alpha>1/2$ and the given cutoff therefore proves its sampling-center CLT with the same Gaussian bridge. [A1, F1, F2, given, algebra]

1.2 In Type H, [F1] proves posterior BvM about the empirical histogram $h_n$. Haar wavelets have the same support, overlap and supremum bounds. The ordinary $\alpha$-Hölder truth, $1/2<\alpha\le1$, has Haar coefficients bounded by $C2^{-l(\alpha+1/2)}$: subtract its value at one point of the support in the coefficient integral, use the zero mean, support diameter $2^{-l}$ and $L^1$ norm $2^{-l/2}$. The histogram projection retains details through $J_n=L_n-1$. Both given cutoff regimes remain true with this $J_n$, since multiplying $2^{L_n}$ by $1/2$ changes only their comparison constants. Thus [F2] with $\gamma=\alpha$ gives the sampling CLT about this exact histogram center. The finite scaling coordinate is included and its centered fluctuation is zero. [F1, F2, given, algebra]

2.1 In all three cases, positivity and boundedness of $f_0$, admissibility, and the displayed summability verify [F3]. Hence every norm-quantile assumption of [F4] holds at $u=1-\eta$. Steps 1.1–1.2 verify its posterior and sampling premises, with the same coefficient covariance law. Applying [F4] proves all asserted CDF limits, measurable credibility, radius limits and frequentist coverage, for the exact empirical centers and every $0<\eta<1$. [F1, F3, F4, step 1.1, step 1.2, given]

2.2 When the additional hypotheses in the last paragraph of the Statement hold, the multiscale credible ball just obtained is precisely the input to [F5]. Applying that theorem yields its smoothness-intersection coverage and stated diameter rate. These are additional hypotheses only for this diameter conclusion; the coverage and CDF conclusions in step 2.1 required no such extra conditions. [F5, step 2.1, given] ∎
