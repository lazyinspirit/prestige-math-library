---
id: def-m-out-of-n-bootstrap-and-subsampling
kind: definition
title: m-out-of-n bootstrap and subsampling
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-identically-distributed-and-iid-random-variables
  - lem-finite-empirical-measure-is-a-probability-law
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. J. Bickel, F. Götze, and W. R. van Zwet, Resampling Fewer Than n Observations: Gains, Losses, and Remedies for Losses, §3"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "Ryan Martin, Stat 451 Lecture Notes 0812: Bootstrap, pp. 27–30"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat451/Slides/451notes08.pdf"
---

## Definition

Let $n\ge1$ be an integer, let $(\mathcal Z,\mathcal C)$ be a measurable observation space, let $P$ be a probability law on it, and let $Z_1,\ldots,Z_n$ be IID $P$-distributed sampling units ([[def-identically-distributed-and-iid-random-variables]]). For each $1\le k\le n$, let $T_k$ be a measurable real-valued statistic and write $\widehat\theta_k=T_k(Z_1,\ldots,Z_k)$; the target is a scalar $\theta(P)$ and $a_k>0$ is its declared normalization at sample size $k$. The empirical law
$$P_n:=\frac1n\sum_{i=1}^n\delta_{Z_i}$$
is a probability law by [[lem-finite-empirical-measure-is-a-probability-law]].

For an integer $1\le m\le n$, the **m-out-of-n bootstrap** draws $Z_1^*,\ldots,Z_m^*$ conditionally IID from $P_n$ and computes
$$R_{m,n}^{*}:=a_m\bigl(T_m(Z_1^*,\ldots,Z_m^*)-\widehat\theta_n\bigr).$$
The conditional distribution of this root given the observed sample is the bootstrap approximation. The ordinary n-out-of-n bootstrap is the case $m=n$ and uses $a_n$.

For $1\le m<n$, **subsampling without replacement** chooses a subset $I=\{i_1<\cdots<i_m\}$ uniformly from the $\binom{n}{m}$ subsets of $\{1,\ldots,n\}$ and computes
$$R_{m,n}^{\mathrm{sub}}:=a_m\bigl(T_m(Z_{i_1},\ldots,Z_{i_m})-\widehat\theta_n\bigr).$$
Its conditional law is the uniform distribution over those subsets. With replacement and without replacement are distinct conditional laws, even though both use the same declared statistic $T_m$.

The asymptotic regime considered on this page has integer $m=m_n\to\infty$ and $m_n/n\to0$. The resampled root uses the actual size-$m$ scale $a_m$; validity does not follow merely from this regime. For inference based on a centered root, the scale ratio $a_m/a_n\to0$ is an additional root-specific centering condition when it is used. A design with dependent sampling units requires a separate design-matched resampling procedure. This definition does not identify a bootstrap law with a Bayesian posterior or a design-randomization law. Extrapolation from several resample sizes is not asserted here; it requires a separate proof of the source-specific regular expansion and remainder regime.
