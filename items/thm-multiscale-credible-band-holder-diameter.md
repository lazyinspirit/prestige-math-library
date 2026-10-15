---
id: thm-multiscale-credible-band-holder-diameter
kind: theorem
title: Diameter of undersmoothed multiscale credible bands
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-multiscale-coefficient-space-m0w
  - thm-cdf-and-multiscale-credible-band-calibration-from-bvm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, Theorem 5, Proposition 5, and proof of §5.4"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Corollary 7.3.24 and proof"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume all hypotheses of [[thm-cdf-and-multiscale-credible-band-calibration-from-bvm]] at a fixed credibility level $1-\alpha$, $0<\alpha<1$, and use its $M_0(w)$ credible ball $C_n^M$ and scaled radius $R_n^M$. Let $\gamma>0$, assume the compactly supported wavelets have uniformly bounded overlap and $\|\psi_{lk}\|_\infty\le C2^{l/2}$, and define
$$\|f\|_{C^\gamma_\psi}:=\sup_{l,k}2^{l(\gamma+1/2)}|\langle f,\psi_{lk}\rangle|.$$
Suppose $\|f_0\|_{C^\gamma_\psi}<\infty$. Choose integers $j_n$ with $2^{j_n}\asymp(n/\log n)^{1/(2\gamma+1)}$ and let $u_n=w_{j_n}/\sqrt{j_n}\to\infty$. Intersect the credible ball with the coefficient smoothness ball:
$$\overline C_n=C_n^M\cap\{f:\|f\|_{C^\gamma_\psi}\le u_n\}.$$
Then $P_{f_0}^{(n)}\{f_0\in\overline C_n\}\to1-\alpha$, and its $L^\infty$ diameter satisfies
$$\operatorname{diam}_{L^\infty}(\overline C_n)=O_{P_{f_0}^{(n)}}\!\left((n/\log n)^{-\gamma/(2\gamma+1)}u_n\right).$$

## Facts & Assumptions

**Given:** All hypotheses, the credible ball and radius of [[thm-cdf-and-multiscale-credible-band-calibration-from-bvm]], the coefficient smoothness norm and wavelet assumptions in the Statement, $\gamma>0$, and $u_n\to\infty$.

[F1] [[def-multiscale-coefficient-space-m0w]]: the multiscale ball bounds each level-$l$ coefficient by $w_l$ times its radius.

[F2] [[thm-cdf-and-multiscale-credible-band-calibration-from-bvm]]: $C_n^M$ has frequentist coverage tending to $1-\alpha$, and its scaled radius $R_n^M$ converges in probability to a finite quantile, hence is $O_P(1)$.

[L1] The Statement defines $C^\gamma_\psi$ by the displayed coefficient norm $\sup_{l,k}2^{l(\gamma+1/2)}|\langle f,\psi_{lk}\rangle|$.

## Proof




1.1 Since $\|f_0\|_{C^\gamma_\psi}<\infty$ and $u_n\to\infty$, [L1] implies the truth belongs to the coefficient smoothness ball for all sufficiently large $n$. For those $n$, $\{f_0\in\overline C_n\}=\{f_0\in C_n^M\}$, so the asserted coverage follows from [F2]. [F2, L1, given]

1.2 Let $f,g\in\overline C_n$. For $l\le j_n$, [F1] gives $\max_k|f_{lk}-g_{lk}|\le2R_n^Mw_l/\sqrt n$. For $l>j_n$, [L1] and membership in the coefficient smoothness ball give $\max_k|f_{lk}-g_{lk}|\le2u_n2^{-l(\gamma+1/2)}$. At each point, only a uniformly bounded number of level-$l$ wavelets are nonzero, each bounded by $C2^{l/2}$. Therefore the low-frequency contribution to $\|f-g\|_\infty$ is at most $C R_n^M n^{-1/2}\sum_{l\le j_n}2^{l/2}w_l$, and the high-frequency contribution is at most $C u_n\sum_{l>j_n}2^{-l\gamma}$. These series also give uniformly convergent representatives because $\gamma>0$. [F1, L1, given, algebra]

2.1 Since $w_l$ is nondecreasing, $\sum_{l\le j_n}2^{l/2}w_l\le C2^{j_n/2}w_{j_n}$ by summing a geometric series. Also $\sum_{l>j_n}2^{-l\gamma}\le C_\gamma2^{-j_n\gamma}$. The first bound in step 1.2 is thus at most $C R_n^M w_{j_n}2^{j_n/2}/\sqrt n=C R_n^M u_n\sqrt{j_n}2^{j_n/2}/\sqrt n$. [step 1.2, algebra]

3.1 The relation $2^{j_n}\asymp(n/\log n)^{1/(2\gamma+1)}$ implies both $2^{-j_n\gamma}\asymp(n/\log n)^{-\gamma/(2\gamma+1)}$ and $\sqrt{j_n}2^{j_n/2}/\sqrt n\le C_\gamma(n/\log n)^{-\gamma/(2\gamma+1)}$. Combining the low- and high-frequency bounds in steps 1.2 and 2.1 and using $R_n^M=O_P(1)$ from [F2] yields the stated diameter bound. [F2, step 1.2, step 2.1, algebra] ∎
