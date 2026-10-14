---
id: cex-correct-scale-trimming-slab-radius-four-is-false
kind: counterexample
title: "The four-Q0 trimming slab radius is false"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-multivariate-trimmed-mean, lem-finite-covariance-matrix-basic-properties]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Lugosi and Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, pp. 6-23"
      url: "https://arxiv.org/pdf/1907.11391"
---

## Statement refuted

The claim that every point of the correct-scale tail intersection $K_{i_0}$ in [[alg-multivariate-trimmed-mean]] lies within $4\varepsilon Q_0$ of the clean mean is false, even for an absolutely continuous univariate clean law and no actual replacements.

## Facts & Assumptions

**Given:** $X$ uniform on $[-1,1]$, $N=4096$, $\eta=1/10$, $\delta=1/2$, and no replacements.

[F1] [[alg-multivariate-trimmed-mean]] defines quantiles, slabs of radius $2\varepsilon Q$ and their dyadic tail intersections.

[F2] [[lem-finite-covariance-matrix-basic-properties]] supplies the covariance and trace convention; here direct integration gives $\mu=0$ and $\Sigma=1/3$.

## Counterexample

**Given:** The stated uniform clean law and parameters.

1.1 Here $N\ge2560\log4$ because $\log4<3/2$, and $\varepsilon=\max\{1,2560\log4/4096\}=1$. The proposed scale is $Q_0=\max\{256\sqrt{1/(3N)},16/\sqrt3\}=16/\sqrt3$. The unique dyadic scale in $[2Q_0,4Q_0)$ is $Q=32$, so $i_0=5$. All parameters belong to the asserted domain, and zero actual replacements is allowed when the known upper fraction is $1/10$. [F1, F2, given, algebra]

2.1 Every observed point and directional cutoff lies in $[-1,1]$. For every dyadic $R\ge32$, the expanded clipping interval contains $[-1,1]$ in each of the two unit directions. Thus $U_R(1)=\bar X$, $U_R(-1)=-\bar X$, and $\Gamma(R)=[\bar X-2R,\bar X+2R]$. These intervals are nested, so $K_5=[\bar X-64,\bar X+64]$. Since $|\bar X|\le1$, $50\in K_5$ for every realization, but $50>64/\sqrt3=4\varepsilon Q_0$. The proposed high-probability event therefore has probability zero, disproving the radius constant. [F1, step 1.1, algebra] ∎

