---
id: lem-fixed-scale-truncated-covariance-deviation
kind: lemma
title: Fixed-scale matrix-truncated covariance deviation under finite matrix variance
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - alg-adaptive-truncated-covariance-estimator
  - def-matrix-variance-of-a-random-vector
  - lem-oracle-truncated-covariance-and-vector-concentration
  - lem-covariance-median-pilot-exact-block-budget
  - lem-matrix-variance-intrinsic-dimension-at-least-one
  - def-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Countable Choice is inherited only by the geometric-median pilot; the
  finite matrix concentration and uniform perturbation arguments require no new
  choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure
        of Heavy-Tailed Distributions, Lemma 2.1 and §§4.1–4.2
      url: https://arxiv.org/pdf/1708.00502
dependency_level: 3
forward_refs:
  - cex-intrinsic-variance-alone-does-not-control-covariance-pilot
---

## Statement

Assume Countable Choice for the specified geometric-median pilot. Let
$X_i\in\mathbb R^p$, $1\le i\le m$, be iid with mean $\mu$, nonzero
covariance $\Sigma$, finite fourth central moment and matrix variance
$\sigma_0^2$ as in [[def-matrix-variance-of-a-random-vector]]. Put
$$L=\|\Sigma\|_{\rm op},\quad T=\operatorname{tr}\Sigma,\quad d=\sigma_0^2/L^2,\quad D=\max\{d,(T/\sigma_0)^2\}.$$
For $\sigma\ge\sigma_0$, $\beta>1$ set $t=\beta/m$,
$\theta=\sqrt t/\sigma$ and
$$\widehat\Sigma_\theta=\frac1{m\theta}\sum_i\psi\!\left(\theta(X_i-\widehat\mu)(X_i-\widehat\mu)^{\mathsf T}\right).$$
For any measurable pilot, any $B\ge0$ and any event $E$ on which
$\|\widehat\mu-\mu\|\le B$, there is an event $G$ with
$P(G^c)\le h_p e^{-\beta}$, $h_p=(3p+1)/2$, such that on $E\cap G$,
$$\|\widehat\Sigma_\theta-\Sigma\|_{\rm op}\le a_0\sigma\sqrt t+qM+2B(W+q\sqrt M)+B^2,$$
where $a_0=27/10$, $q=2B\sqrt\theta+B^2\theta$,
$M=L+a_0\sigma\sqrt t$ and
$W=\sigma_0\sqrt\theta+2\sqrt{Tt}+8t/(3\sqrt\theta)$.
The concentration event is constructed from the true centered observations
and the inequality is uniform over the pilot ball; no independence of the
pilot and sample is assumed.

For the exact pilot of [[alg-adaptive-truncated-covariance-estimator]], the
explicit sufficient sample condition
$$m\ge10^{16}D\beta$$
therefore gives
$$P\!\left(\|\widehat\Sigma_\theta-\Sigma\|_{\rm op}>3\sigma\sqrt{\beta/m}\right)\le(h_p+1)e^{-\beta}\le5p e^{-\beta}.$$
Every finite-fourth-moment law is retained under this trace-aware sample
condition; no coordinate independence or bounded-kurtosis assumption is
added. If the mean is supplied exactly, the stronger bound
$2.7\sigma\sqrt{\beta/m}$ holds with failure at most $p e^{-\beta}$ for
every $m\ge1$, without the $D$ sample condition.

## Facts & Assumptions

**Given:** The iid sample, matrix moments, scales, confidence and stated pilot/event conventions. The probability factor $p$ denotes ambient dimension, whereas $d$ is an intrinsic moment ratio.

[F1] With $Z_i=X_i-\mu$, $w(z)=\min\{1,1/(\theta\|z\|^2)\}$, $w(0)=1$, the oracle matrices $S=m^{-1}\sum_iw(Z_i)Z_iZ_i^{\mathsf T}$ and vectors $V=m^{-1}\sum_iw(Z_i)Z_i$ obey $\|S-\Sigma\|\le a_0\sigma\sqrt t$ and $\|V\|\le W$, except on events of probability $p e^{-\beta}$ and $(p+1)e^{-\beta}/2$, respectively. [[lem-oracle-truncated-covariance-and-vector-concentration]].

[F2] The specified balanced-block geometric-median pilot has radius $11\sqrt{2T\beta/m}$ with failure at most $e^{-\beta}$ whenever $k=\lfloor3.5\beta\rfloor+1\le m/2$. [[lem-covariance-median-pilot-exact-block-budget]].

[F3] For nonzero covariance the intrinsic ratio $d\ge1$. [[lem-matrix-variance-intrinsic-dimension-at-least-one]].

## Proof

1.1 Intersect the two oracle events [F1], at cost $h_p e^{-\beta}$. Put $R=1/\theta$ and $w_u(z)=\min\{1,R/\|z-u\|^2\}$, interpreted as one at $z=u$. For $\|u\|\le B$, the ratio $h_u(z)=w_u(z)/w(z)=\max(R,\|z\|^2)/\max(R,\|z-u\|^2)$ lies in $[(1+B/\sqrt R)^{-2},(1+B/\sqrt R)^2]$. Indeed $\max(\sqrt R,\|z\|)\le\max(\sqrt R,\|z-u\|)+B$, and the reverse follows by swapping the two vectors. Thus $|h_u-1|\le q=2B\sqrt\theta+B^2\theta$. [given, F1, algebra]

2.1 Expand $S_u=m^{-1}\sum_i w_u(Z_i)(Z_i-u)(Z_i-u)^{\mathsf T}$. The perturbation of its $Z_iZ_i^{\mathsf T}$ part has norm at most $q\|S\|$, because its scalar coefficients have absolute value at most $q$ and the summands are positive semidefinite. For the cross vector, scalar Cauchy–Schwarz and $w^2\le w$ give $\|m^{-1}\sum_i(h_u-1)w(Z_i)Z_i\|\le q\sqrt{\|S\|}$. Hence $\|S_u-\Sigma\|\le\|S-\Sigma\|+q\|S\|+2B(\|V\|+q\sqrt{\|S\|})+B^2$, since $0\le w_u\le1$. This bound is pointwise for every $u$ in the ball, so it applies to the random same-sample $u=\widehat\mu-\mu$ on $E$, without conditioning on it. The first conclusion follows using $\|S\|\le M$ and [F1]. [given, F1, step 1.1, algebra]

3.1 For the prescribed pilot take $B=11\sqrt{2Tt}<16\sqrt{Tt}$. The condition $m\ge10^{16}D\beta$ and [F3] imply $k\le4.5\beta\le m/2$, so [F2] applies. By homogeneity, replace $Z$ by $Z/\sqrt L$ and $\sigma$ by $\sigma/L$: then $T,\sigma_0,\sigma$ scale by $1/L$, $\theta$ by $L$, $S,\Sigma$ by $1/L$, and $D$ is unchanged. It therefore suffices to normalize by $L$ so $L=1$, $T=\rho$, $\sigma_0=\sqrt d$ and $\sigma\ge\sqrt d\ge1$. Put $\eta=Dt\le10^{-16}$ and $H=\sigma\sqrt t$. Using $D\ge d$, $\rho^2/d\le D$ and $t\le\eta\le1$, direct substitution gives $B^2/H\le256\sqrt\eta$, $B/\sqrt H\le16\eta^{1/4}$ and $q\le288\eta^{1/4}\sqrt t$. Therefore $qM/H\le1066\eta^{1/4}$ and $2Bq\sqrt M/H\le18432\sqrt\eta$: indeed $q\sqrt M/\sqrt H\le288\eta^{1/4}\sqrt{H(1+\frac{27}{10}H)}/\sigma$, and $H\le\sigma$, $\sigma\ge1$ give $H(1+\frac{27}{10}H)/\sigma^2\le \sigma(1+\frac{27}{10}\sigma)/\sigma^2\le\frac{37}{10}<4$, hence the square-root factor is at most $\sqrt{37/10}<2$. The three terms in $2BW/H$ are at most $32\eta^{1/4}$, $64\sqrt\eta$ and $86\eta^{1/4}$, respectively: use $B\sigma_0\sqrt\theta/H\le16\eta^{1/4}$, $\rho\sqrt t/\sigma\le\sqrt\eta$ and $Bt/(\sqrt\theta H)\le16\eta^{1/4}$. In total the perturbation beyond $\frac{27}{10}H$ is at most $1184\eta^{1/4}+18752\sqrt\eta\le\frac{118588}{10^6}<\frac3{10}$. Step 2.1 is thus strictly below $3H$. Undo the normalization and add the single pilot failure to obtain $(h_p+1)e^{-\beta}\le5p e^{-\beta}$. For known mean, $u=B=0$ and only the oracle matrix event is needed, proving the last assertion. [given, F1, F2, F3, step 2.1, algebra] ∎

## Remarks

The sufficient condition $D\beta$ replaces a false general $d\beta$ claim;
[[cex-intrinsic-variance-alone-does-not-control-covariance-pilot]] gives an
explicit counterexample to that original estimator guarantee. Under a
separately proved extra relation $\operatorname{tr}\Sigma\le dL$, one has
$D=d$, recovering that sample-size regime. The auxiliary comparison cannot
be assumed for arbitrary dependence. The uniform pilot formula above can
be sharper than this sufficient sample condition when a pilot has a
better separately established accuracy bound.
