---
id: alg-sequential-importance-resampling
kind: algorithm
title: "Sequential importance resampling for Feynman–Kac path targets"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
  - alg-multinomial-and-residual-offspring-resampling
axiom_use: "AC is assumed through the path-law and kernel Radon–Nikodym suppliers. Once the model, proposal kernels, and derivative versions are supplied, the finite particle procedure makes no further choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Definition

Use the finite-horizon target and proposal setting of [[def-feynman-kac-path-targets-and-normalizers]]. For admissible inputs require $\mu_0\ll\nu_0$ and, for each $k\ge1$, $M_k(x,\cdot)\ll R_k(x,\cdot)$ for almost every $x$ under the last-coordinate marginal of the proposal path law $Q_{k-1}$. Select the joint measurable versions $\rho_0=d\mu_0/d\nu_0$ and $r_k(x,\cdot)=dM_k(x,\cdot)/dR_k(x,\cdot)$ supplied by [[thm-feynman-kac-path-radon-nikodym-weight]]. Fix $N\ge1$ and select either multinomial or residual resampling at each time. The algorithm returns a weighted empirical path measure and a normalizer estimate.

1. Draw $X_0^1,\ldots,X_0^N$ independently from $\nu_0$. Set $a_0^i=G_0(X_0^i)\rho_0(X_0^i)$ and $\widehat Z_0=N^{-1}\sum_{i=1}^Na_0^i$. If $\sum_i a_0^i>0$, put $\bar w_0^i=a_0^i/\sum_j a_0^j$; otherwise put $\bar w_0^i=1/N$. Each initial path is $X_{0:0}^i=X_0^i$.
2. For $k=1,\ldots,t$, do the following:
   1. Apply [[alg-multinomial-and-residual-offspring-resampling]] to the previous normalized weights $(\bar w_{k-1}^1,\ldots,\bar w_{k-1}^N)$, obtaining ancestor indices $A_k^1,\ldots,A_k^N$.
   2. Given the previous paths and these indices, draw $(X_k^1,\ldots,X_k^N)$ with joint conditional law $\bigotimes_{i=1}^N R_k(X_{k-1}^{A_k^i},\cdot)$ and set $X_{0:k}^i=(X_{0:k-1}^{A_k^i},X_k^i)$.
   3. Set $a_k^i=G_k(X_k^i)r_k(X_{k-1}^{A_k^i},X_k^i)$ and $\widehat Z_k=\widehat Z_{k-1}(N^{-1}\sum_{i=1}^Na_k^i)$. If $\sum_i a_k^i>0$, put $\bar w_k^i=a_k^i/\sum_j a_k^j$; otherwise put $\bar w_k^i=1/N$.
3. Return $\widehat Z_t$ and the weighted empirical path probability measure $\widehat\pi_t^N=\sum_{i=1}^N\bar w_t^i\delta_{X_{0:t}^i}$. Its last-coordinate marginal is the corresponding empirical filtering approximation.

The all-zero fallback only defines a probability measure for reporting and future sampling. Once a zero average weight occurs, $\widehat Z$ remains zero. The procedure makes no finite-particle accuracy, consistency, or long-time stability claim.

## Remarks

Resampling can add immediate sampling variance while reducing the chance that low-weight particles are carried forward. A trigger based only on current weight imbalance is a computational rule, not a certificate of target coverage or convergence.
