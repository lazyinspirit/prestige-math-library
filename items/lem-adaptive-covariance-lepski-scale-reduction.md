---
id: lem-adaptive-covariance-lepski-scale-reduction
kind: lemma
title: Lepski scale selection transfers fixed-scale covariance bounds
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - alg-adaptive-truncated-covariance-estimator
  - lem-adaptive-truncated-covariance-estimator-is-total
  - lem-fixed-scale-truncated-covariance-deviation
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-matrix-variance-of-a-random-vector
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: The scale grid is finite and its least-index rule is deterministic; no choice axiom is used.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, Theorem 2.1 and §4.3"
      url: "https://arxiv.org/pdf/1708.00502"
dependency_level: 4
---

## Statement

Let $\Sigma\ne0$, $\sigma_0>0$, $m\ge1$, $\beta>1$ and
$0<\sigma_{\min}\le\sigma_0\le\sigma_{\max}$. Use the finite grid and
agreement rule of [[alg-adaptive-truncated-covariance-estimator]], with
measurable matrix estimates on that grid. Put
$$L_g=\log_2(2\sigma_{\max}/\sigma_{\min}),\quad J=\{0,\ldots,\lceil L_g\rceil-1\},\quad \bar j=\left\lceil\log_2(\sigma_0/\sigma_{\min})\right\rceil,\quad N_+=\lceil L_g\rceil-\bar j.$$
On any event on which every $j\ge\bar j$ satisfies
$\|\widehat\Sigma_j-\Sigma\|\le3\sigma_j\sqrt{\beta/m}$, the selected
estimate satisfies $\|\widehat\Sigma^*-\Sigma\|<18\sigma_0\sqrt{\beta/m}$.
If the individual failures are at most $q_j$, its success probability is at
least $1-\sum_{j\ge\bar j}q_j$. For the prescribed same-sample estimator,
when the hypotheses of [[lem-fixed-scale-truncated-covariance-deviation]]
hold at every required scale, its individual failure bounds
$q_j=5p e^{-\beta}$ give success probability at least
$1-5p\lceil L_g\rceil e^{-\beta}$. The shared-event bound below counts the
common pilot failure once.

More sharply, suppose a common event $E$ has $P(E^c)\le\delta$, and for
each $j\ge\bar j$ an event $G_j$ has $P(G_j^c)\le h e^{-\beta}$, with
the stated fixed-scale bound valid on $E\cap G_j$. Then success is at
least $1-\delta-hN_+e^{-\beta}$. No independence between scales or the
pilot and covariance estimates is required. The exact grid cardinality is
$\lceil L_g\rceil$, not the generally false unrounded bound $|J|\le L_g$.

## Facts & Assumptions

**Given:** The bracket, positive finite grid scales, matrix estimates and deterministic agreement rule in the statement, with the stated probability assumptions when invoked.

[F1] The scale grid is $\sigma_j=2^j\sigma_{\min}$; the agreement rule selects the smallest index whose estimate is within $6\sigma_k\sqrt{\beta/m}$ of every larger-scale estimate. [[alg-adaptive-truncated-covariance-estimator]].

[F2] The finite agreement rule has a valid index since its largest grid index satisfies every comparison vacuously. [[lem-adaptive-truncated-covariance-estimator-is-total]].

[F3] Under its trace-aware sample condition, the prescribed pilot in [[lem-fixed-scale-truncated-covariance-deviation]] has fixed-scale failure probability at most $5p e^{-\beta}$ for each scale $\sigma\ge\sigma_0$.

## Proof

1.1 The grid condition is $0\le j<L_g$, so it has exactly $\lceil L_g\rceil$ elements. The first scale at or above $\sigma_0$ is $\bar j$, and $\sigma_{\bar j}<2\sigma_0\le2\sigma_{\max}$ puts it in the grid. Thus exactly $N_+$ required scales are $j\ge\bar j$, with $N_+\ge1$. [given, F1, F2, algebra]

2.1 On the joint fixed-scale event, for every $k>\bar j$ the triangle inequality gives $\|\widehat\Sigma_k-\widehat\Sigma_{\bar j}\|\le3(\sigma_k+\sigma_{\bar j})\sqrt{\beta/m}\le6\sigma_k\sqrt{\beta/m}$. Hence $\bar j$ is admissible and the selected $j^*\le\bar j$. If they differ, the selection rule gives $\|\widehat\Sigma_{j^*}-\widehat\Sigma_{\bar j}\|\le6\sigma_{\bar j}\sqrt{\beta/m}$; if equal this distance is zero. Adding the error at $\bar j$ yields $\|\widehat\Sigma^*-\Sigma\|\le9\sigma_{\bar j}\sqrt{\beta/m}<18\sigma_0\sqrt{\beta/m}$. [given, F1, step 1.1, algebra]

3.1 A finite union bound costs at most $\sum_{j\ge\bar j}q_j$ for individual failure bounds; under [F3], $q_j=5p e^{-\beta}$ gives the stated $5p\lceil L_g\rceil e^{-\beta}$ bound. For a shared event $E$, the complement of $E\cap\bigcap_{j\ge\bar j}G_j$ has probability at most $\delta+hN_+e^{-\beta}$; the common failure is counted once. Applying step 2.1 proves all probability assertions. [F3, given, step 1.1, step 2.1, algebra] ∎
