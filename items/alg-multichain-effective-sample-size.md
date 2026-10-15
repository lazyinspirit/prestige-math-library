---
id: alg-multichain-effective-sample-size
kind: algorithm
title: Split multi-chain autocorrelation effective sample size
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-functional-specific-effective-sample-size
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §3.2, equations (10)–(13)"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.12"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
verification:
  precheck: n/a
axiom_use: "The procedure uses finite arithmetic only and is choice-free."
---

## Definition

**Inputs:** $M\ge2$ scalar chains $y_{m,1},\ldots,y_{m,L}$ of equal length
$L\ge4$. This estimator targets the functional-specific quantity in
[[def-functional-specific-effective-sample-size]] from finite arrays; it does
not test stationarity or a central limit theorem.

1. Split every input chain into its first and last $N=\lfloor L/2\rfloor$
   observations. If $L$ is odd, discard its middle observation. Denote the resulting
   $M'=2M$ chains by $z_{j,1},\ldots,z_{j,N}$ and set $S'=M'N$.
2. Compute their means $\bar z_j$, sample variances
   $s_j^2=(N-1)^{-1}\sum_{i=1}^N(z_{j,i}-\bar z_j)^2$, their average
   $W=M'^{-1}\sum_j s_j^2$, grand mean $\bar z_{\cdot}=M'^{-1}\sum_j\bar z_j$,
   between-chain term
   $B=N(M'-1)^{-1}\sum_j(\bar z_j-\bar z_{\cdot})^2$, and
   $\widehat V^+=(N-1)W/N+B/N$. If any $s_j^2=0$ or $\widehat V^+=0$, return
   **not estimable**.
3. For $0\le t<N$, compute the biased autocovariances
   $\widehat\gamma_{t,j}=N^{-1}\sum_{i=1}^{N-t}(z_{j,i}-\bar z_j)(z_{j,i+t}-\bar z_j)$,
   the within-chain autocorrelations
   $\widehat r_{t,j}=\widehat\gamma_{t,j}/\widehat\gamma_{0,j}$, and the
   between/within adjusted combined autocorrelation
   $$\widehat\rho_t=1-\frac{W-M'^{-1}\sum_j s_j^2\widehat r_{t,j}}{\widehat V^+}.$$
4. For $0\le k\le\lfloor(N-2)/2\rfloor$, form
   $P_k=\widehat\rho_{2k}+\widehat\rho_{2k+1}$. If $P_0\le0$, return
   **not estimable**. Let $K$ be the largest $k$ for which $P_1,\ldots,P_k$
   are all positive; $K=0$ if $P_1\le0$ or no $P_1$ is available. Put
   $\widetilde P_k=\min_{0\le j\le k}P_j$ and
   $\widehat\tau_{\rm odd}=-1+2\sum_{k=0}^K\widetilde P_k$. If the next even
   lag $2K+2<N$ is available, put
   $\widehat\tau_{\rm even}=\widehat\tau_{\rm odd}+2\widehat\rho_{2K+2}$;
   otherwise put $\widehat\tau_{\rm even}=\widehat\tau_{\rm odd}$. Set
   $\widehat\tau=(\widehat\tau_{\rm odd}+\widehat\tau_{\rm even})/2$.
5. If $\widehat\tau\le0$, return **not estimable**. Otherwise return
   $$\widehat{\operatorname{ESS}}=\min\left\{\frac{S'}{\widehat\tau},\ S'\log_{10}S'\right\}.$$
   The second term is the paper's finite software cap for very short,
   strongly antithetic chains.

Negative serial correlation can make the estimate exceed the $S'$ retained
split draws, subject to that software cap. The output is an estimator, not a
guarantee about the target law.
