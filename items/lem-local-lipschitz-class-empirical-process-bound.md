---
id: lem-local-lipschitz-class-empirical-process-bound
kind: lemma
title: A square-integrable Lipschitz envelope controls a local empirical process
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, Lemma 2.1 and proof
      url: https://pure.uva.nl/ws/files/1850322/114737_376240.pdf
    - title: Peter Bartlett, Theoretical Statistics, Lecture 23, QMD and local asymptotic normality
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf
---

## Statement

Let $d\ge1$ and $n\ge1$, let $X_1,\ldots,X_n$ be IID with law $P$, and let
$f_t:\mathcal X\to\mathbb R$ be measurable for $t$ in a neighbourhood of
$0\in\mathbb R^d$. Assume $f_0=0$ and that on one $P$-full set
$$|f_t(x)-f_s(x)|\le M(x)\|t-s\|_2$$
for all such $s,t$, where $M\ge0$ is measurable and $P M^2<\infty$. For
$P_nf=n^{-1}\sum_{i=1}^nf(X_i)$, both displayed sample-path suprema have measurable versions; expectations
below are taken using these versions. There is a finite constant $C_d$, depending only on $d$, such that for every
radius $r$ whose closed ball is in the parameter neighbourhood,
$$E\sup_{\|t\|_2\le r}|\sqrt n(P_n-P)f_t|\le C_d r(PM^2)^{1/2}.$$
Moreover, for $0<\varepsilon\le r$,
$$E\sup_{\substack{\|s\|_2,\|t\|_2\le r\\\|t-s\|_2\le\varepsilon}}|\sqrt n(P_n-P)(f_t-f_s)|\le C_d\varepsilon\sqrt{\log(e r/\varepsilon)}(PM^2)^{1/2}.$$

## Facts & Assumptions

**Given:** The IID sample, finite-dimensional parameter ball, measurable function class, common pointwise Lipschitz envelope, and square-integrability hypothesis in the Statement.

[F1] [[def-identically-distributed-and-iid-random-variables]]: An IID family has a common law and is mutually independent.

[F2] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: Finite products of the sample law and the two-point sign law define the joint probability space used for the ghost sample and signs.

## Proof

**Proof technique:** Symmetrize the centered process and chain its conditional Rademacher process over dyadic Euclidean nets, including pair nets for the local modulus.

1.1 Let $E$ be the common measurable $P$-full set in the hypothesis, intersected with $\{M<\infty\}$. Replace every $f_t$ and $M$ by zero off $E$. This preserves all integrals and every sample path on the measurable probability-one event $\{X_i\in E\text{ for all }i\}$, and gives the Lipschitz bound everywhere. The countable-net suprema below are therefore measurable versions of the original suprema. A radius-$r$ Euclidean ball has finite $r2^{-k}$-nets $T_k$ with $|T_k|\le(C_d2^k)^d$ for a finite dimension-dependent constant $C_d$: cover a containing cube by a grid of side at most $r2^{-k}/\sqrt d$ and use closed grid cells; from each nonempty compact intersection with the ball, take its lexicographically least point, obtained by successive coordinate minima. The union of these nets is countable and dense. For each fixed sample in the common full set, $t\mapsto f_t(X_i)$ is Lipschitz and hence continuous, so the supremum over the ball equals the supremum over that countable union and is measurable; the centered paths are continuous too because $|Pf_t-Pf_s|\le PM\|t-s\|_2$. The same grid argument on the compact pair domain makes the pairwise-modulus supremum measurable. The first supremum is integrable because $|f_t|\le rM$ and $PM<\infty$. [F1, given, construct]

1.2 Conditional on $X_1,\ldots,X_n$, write $R_n(t)=n^{-1/2}\sum_i\varepsilon_i f_t(X_i)$, with signs on the product probability space [F2]. Since $E e^{\lambda\varepsilon a}=\cosh(\lambda a)\le e^{\lambda^2a^2/2}$, its increments satisfy $E_\varepsilon e^{\lambda(R_n(t)-R_n(s))}\le e^{\lambda^2(P_nM^2)\|t-s\|_2^2/2}$. The inequality for $\cosh$ follows by integrating $(\log\cosh u)'=\tanh u\le u$ for $u\ge0$ and using evenness. Thus each increment is sub-Gaussian with scale $(P_nM^2)^{1/2}\|t-s\|_2$. [F2, given, algebra]

2.1 By [F1] and [F2], adjoin an independent IID copy $X'_1,\ldots,X'_n$ and independent signs $\varepsilon_i\in\{-1,1\}$, each equally likely. For each fixed original sample, the supremum of absolute values of affine functions of the ghost sample is convex; Jensen's inequality therefore bounds $E\sup_t|\sqrt n(P_n-P)f_t|$ by $E\sup_t|n^{-1/2}\sum_i(f_t(X_i)-f_t(X'_i))|$. Each pair $(X_i,X'_i)$ is exchangeable, so independently swapping the members of each pair with sign $\varepsilon_i$ preserves the joint law. The triangle inequality then bounds the last expectation by $2E E_\varepsilon\sup_t|n^{-1/2}\sum_i\varepsilon_i f_t(X_i)|$. [F1, F2, step 1.1, given, algebra]

2.2 Set $T_0=\{0\}$ and fix an ordering of each finite net $T_k$. For each $k\ge1$, let $\pi_k(t)$ be the first nearest point in that ordering; then $\|\pi_k(t)-\pi_{k-1}(t)\|_2\le 3r2^{-k}$. For $N$ centered sub-Gaussian variables of scale at most $\sigma$, the exponential-moment bound gives $E\max_{j\le N}|Y_j|\le \log(2N)/\lambda+\lambda\sigma^2/2$ for every $\lambda>0$; the case $\sigma=0$ is immediate, and otherwise minimizing at $\lambda=\sqrt{2\log(2N)}/\sigma$ gives $\sigma\sqrt{2\log(2N)}$. Apply this to the at most $|T_k||T_{k-1}|$ links and sum the resulting bounds: $E_\varepsilon\sup_t|R_n(t)|\le C_d r(P_nM^2)^{1/2}\sum_{k\ge1}2^{-k}\sqrt{k}\le C'_d r(P_nM^2)^{1/2}$. Continuity of the sample paths passes from the nets to the full ball. [step 1.1, step 1.2, given, algebra]

3.1 Combine the symmetrization bound in step 2.1 with step 2.2 and use $E(P_nM^2)^{1/2}\le(PM^2)^{1/2}$, which is Cauchy--Schwarz. Absorbing the numerical factors into $C_d$ proves the first expectation inequality. [step 2.1, step 2.2, given, algebra]

4.1 For the modulus bound, apply the ghost-sample and independent-swap argument of step 2.1 to the class $g_{s,t}=f_t-f_s$ indexed by the compact set $D_{r,\varepsilon}=\{(s,t):\|s\|_2,\|t\|_2\le r,\ \|t-s\|_2\le\varepsilon\}$. Conditional on the data, its signed process is $U_n(s,t)=R_n(t)-R_n(s)$; its increments between $(s,t)$ and $(s',t')$ are sub-Gaussian with scale at most $(P_nM^2)^{1/2}(\|s-s'\|_2+\|t-t'\|_2)$ by step 1.2. At pair-mesh $\varepsilon2^{-k}$, grid the ambient product ball, use closed cells and their lexicographically least points in nonempty compact intersections with $D_{r,\varepsilon}$, and adjoin $(0,0)$. The resulting finite nets have at most $(C r2^k/\varepsilon)^{2d}$ points after increasing the dimension-dependent $C$. The maximum on the initial net has conditional expectation at most $(P_nM^2)^{1/2}\varepsilon\sqrt{2\log(2N_0)}$, since every pair in $D_{r,\varepsilon}$ has $\|t-s\|_2\le\varepsilon$ and $U_n(0,0)=0$. Between consecutive nets, the link lengths are at most a constant times $\varepsilon2^{-k}$ and the number of links is at most $N_kN_{k-1}$. The sub-Gaussian maximum bound from step 2.2 therefore bounds the expected maximum link at level $k$ by $C_d(P_nM^2)^{1/2}\varepsilon2^{-k}\sqrt{\log(e r/\varepsilon)+k}$. Summing over $k\ge1$ gives $C_d(P_nM^2)^{1/2}\varepsilon\sqrt{\log(e r/\varepsilon)}$; continuity extends the net bound to $D_{r,\varepsilon}$. Symmetrization and $E(P_nM^2)^{1/2}\le(PM^2)^{1/2}$ prove the second inequality, after increasing $C_d$. [F1, F2, step 2.1, step 1.2, step 2.2, given, construct, algebra] ∎
