---
id: thm-lattice-covariance-estimator-asymptotically-unbiased
kind: theorem
title: "Asymptotic unbiasedness of lattice covariance and variogram estimators"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-lattice-covariance-and-variogram-estimators
  - def-moments-variance-and-covariance
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-cauchy-schwarz-for-random-variables
  - def-convergence-in-lp-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Lemma 2.8 and Section 2.2"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
    - title: "Dennis Sun, Stanford Stats 253 Lecture 6: Covariance Estimation (2014), pp. 8–15"
      url: "https://web.stanford.edu/class/stats253/lectures_2014/lect6.pdf"
---

## Statement

Let $(Y_j)_{j\in\mathbb Z^d}$ be real square-integrable random variables with
constant mean $\mathbb E[Y_j]=\mu$ and lag-dependent covariance
$C(h)=\operatorname{Cov}(Y_{j+h},Y_j)$ independent of $j$. Let $(V_n)$ be nonempty finite
observation windows and assume that their sample means from
[[def-lattice-covariance-and-variogram-estimators]] satisfy
$\bar Y_n\to\mu$ in $L^2$. For each fixed $h\in\mathbb Z^d$ with
$N_n(h)>0$ eventually, the pair-count-normalized raw-product covariance
estimator satisfies
$$\mathbb E[\widehat C_n(h)]\longrightarrow C(h).$$

Separately, if the second moment of the lag-$h$ increment is independent of
$j$ and equals $2\gamma(h)<\infty$, then the empirical semivariogram from
[[def-lattice-covariance-and-variogram-estimators]] is exactly unbiased:
$$\mathbb E[\widehat\gamma_n(h)]=\gamma(h)$$
for every $n$ with $N_n(h)>0$. These are expectation statements only; they
assert no variance consistency, weak consistency, or central limit theorem.

## Facts & Assumptions

**Given:** The lattice field, windows, fixed lag, and $L^2$-consistent sample
means in the Statement.

[A1] [[def-lattice-covariance-and-variogram-estimators]]: for
$P_n(h)=\{j\in V_n:j+h\in V_n\}$ and $N_n(h)=|P_n(h)|$,
$$\widehat C_n(h)=\frac1{N_n(h)}\sum_{j\in P_n(h)}Y_jY_{j+h}-\bar Y_n^2,$$
and
$$\widehat\gamma_n(h)=\frac1{2N_n(h)}\sum_{j\in P_n(h)}(Y_{j+h}-Y_j)^2.$$

[F1] [[def-moments-variance-and-covariance]]: for square-integrable real
random variables, covariance is the expectation of the centered product.

[F2] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear on finite sums of integrable variables.

[F3] [[cor-cauchy-schwarz-for-random-variables]]: for square-integrable $U,V$,
$|\mathbb E[UV]|\le\|U\|_2\|V\|_2$.

[F4] [[def-convergence-in-lp-for-random-variables]]: $\bar Y_n\to\mu$ in
$L^2$ means $\|\bar Y_n-\mu\|_2\to0$.

## Proof

**Proof technique:** direct finite-sum expectation calculation.

1.1 Every product $Y_jY_{j+h}$ is integrable by [F3]. By the stationary covariance identity in the Given and [F1], $\mathbb E[Y_jY_{j+h}]=C(h)+\mu^2$ for every $j$. [given, F1, F3, algebra]

1.2 By [F3] and [F4], $|\mathbb E[\bar Y_n^2]-\mu^2| =|\mathbb E[(\bar Y_n-\mu)(\bar Y_n+\mu)]| \le\|\bar Y_n-\mu\|_2\,\|\bar Y_n+\mu\|_2\longrightarrow0,$ because $\|\bar Y_n+\mu\|_2^2\le2\|\bar Y_n-\mu\|_2^2+8\mu^2$ is bounded by $(a+b)^2\le2a^2+2b^2$ and [F4]. [F3, F4, algebra]

2.1 Applying [F2] to the finite average in [A1] and using step 1.1 gives $\mathbb E[\widehat C_n(h)]=C(h)+\mu^2-\mathbb E[\bar Y_n^2].$ Step 1.2 therefore proves $\mathbb E[\widehat C_n(h)]\to C(h)$. [A1, F2, step 1.1, step 1.2]

3.1 Under the increment-moment hypothesis, every summand in [A1] has expectation $2\gamma(h)$. Linearity [F2] over the $N_n(h)$ pairs and division by $2N_n(h)$ give $\mathbb E[\widehat\gamma_n(h)]=\gamma(h)$ whenever the pair count is positive. [A1, F2, given, algebra] ∎
