---
id: prop-ip-bounded-posterior-functional-error
kind: proposition
title: Bounded posterior functionals and stationary sample error
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-ip-posterior-computation-error-budget
  - def-moments-variance-and-covariance
  - def-probability-measure
  - def-stationary-process-and-canonical-shift
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-pathwise-error-ledger-decomposition
  - thm-total-variation-bounds-for-expectations
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  The expectation comparison and covariance algebra are choice-free. AC is
  assumed only through the library's time-homogeneous Markov-chain interface;
  the proposition assumes a stationary chain rather than constructing one.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alison L. Gibbs and Francis Edward Su, On Choosing and Bounding Probability Metrics, International Statistical Review 70(3) (2002)"
      url: https://math.hmc.edu/su/wp-content/uploads/sites/10/2019/06/ON-CHOOSING-AND-BOUNDING-PROBABILITY.pdf
      locator: "§2, total-variation definition and bounded-function dual form (equation (2)); §5 discussion of bounded expected-loss error."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "§4.1, Proposition 4.5 and full proof (PDF pp. 48–49): finite-state bounded-function dual form and total-variation normalization."
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes"
      url: https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf
      locator: "§1.6.2, equation (1.9) and the following caution (printed pp. 8–11; PDF pp. 12–15): exact stationary sample-mean variance and limits on CLT conclusions."
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization: An improved R-hat for assessing convergence of MCMC"
      url: https://arxiv.org/pdf/1903.08008v5
      locator: "§3.2, equations (7)–(9) (PDF pp. 6–7): autocorrelation ESS for one functional and its distinction from MCSE and other functionals."
---

## Statement

Let $(E,\mathcal E)$ be a measurable space, let $\mu,\nu$ be probability
measures on it, and let $f:E\to\mathbb R$ be measurable with
$|f|\le M$ for some $0\le M<\infty$. Use the library convention
$$\|\mu-\nu\|_{\rm TV}:=\sup_{A\in\mathcal E}|\mu(A)-\nu(A)|.$$
Then
$$|\mu(f)-\nu(f)|\le2M\|\mu-\nu\|_{\rm TV}.$$

For the complete posterior computation error budget defined above, the
pathwise total error satisfies
$$|\mu_\star(f)-\bar f_{b,N}|\le\mathcal B_f.$$
This is a telescoping bound; it does not estimate any component.

Separately, let $(X_n)_{n\ge0}$ be a stationary time-homogeneous Markov chain
with transition kernel $K$, invariant law $\pi_K$, and initial law
$X_0\sim\pi_K$, and use the same bounded functional $f$. Put
$$\gamma_k:=\operatorname{Cov}(f(X_0),f(X_k))\qquad(k\ge0).$$
If $\sum_{k=1}^\infty|\gamma_k|<\infty$, then for every burn-in $b\ge0$ and
sample size $N\ge1$,
$$\mathbb E\left[|\bar f_{b,N}-\pi_K(f)|^2\right]=\frac{1}{N^2}\left[N\gamma_0+2\sum_{k=1}^{N-1}(N-k)\gamma_k\right]\le\frac{\gamma_0+2\sum_{k=1}^\infty|\gamma_k|}{N}.$$
The sample bound assumes stationarity; for a nonstationary start, the budget
keeps $|\pi_K(f)-\mathbb E_\lambda\bar f_{b,N}|$ as a separate burn-in term.
This finite-$N$ variance bound is not a central limit theorem or a confidence
interval.

## Statement references

[[def-ip-posterior-computation-error-budget|The six adjacent posterior, solver, discretization, kernel, burn-in, and Monte Carlo error terms.]]

[[def-total-variation-distance-for-probability-laws|Total variation is the event supremum and has no factor $1/2$ in that convention.]]

[[thm-total-variation-bounds-for-expectations|With this convention, a measurable function bounded by $M$ has expectation difference at most $2M$ times total variation.]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel|An invariant law satisfies $\pi K=\pi$.]]

[[def-time-homogeneous-markov-chain-with-transition-kernel|The one-step conditional law is given by the transition kernel.]]

[[def-stationary-process-and-canonical-shift|Strict stationarity means all finite-dimensional laws are unchanged by time shifts.]]

[[def-moments-variance-and-covariance|Variance and covariance are expectations of centered products.]]

[[thm-pathwise-error-ledger-decomposition|A finite scalar reference chain telescopes into its adjacent signed errors.]]

[Gibbs and Su, §2, total-variation dual form](https://math.hmc.edu/su/wp-content/uploads/sites/10/2019/06/ON-CHOOSING-AND-BOUNDING-PROBABILITY.pdf)

[Levin, Peres, and Wilmer, §4.1, Proposition 4.5](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf)

[Geyer, §1.1, stationary sample-mean variance](https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf)

## Remarks

An ESS is functional-specific and is not a substitute for a Monte Carlo standard
error. The variance bound in this Proposition is a population statement under
its chain assumptions; it does not validate a finite-chain empirical ESS
estimate.

## Remarks references

[Vehtari et al., §3.2, functional-specific ESS and MCSE](https://arxiv.org/pdf/1903.08008v5)

## Facts & Assumptions

**Given:** The hypotheses in the Statement, the complete error budget when its pathwise bound is used, and a stationary Markov chain in the separate sample-error branch.

[F1] Total variation is the event supremum $\sup_{A\in\mathcal E}|\mu(A)-\nu(A)|$; it has no half-factor. [[def-total-variation-distance-for-probability-laws]]

[F2] If $\mu,\nu$ are probability measures and $|f|\le M$, then $|\mu(f)-\nu(f)|\le2M\|\mu-\nu\|_{\rm TV}$. [[thm-total-variation-bounds-for-expectations]]

[F3] The error budget consists of the six absolute adjacent differences from $\mu_\star(f)$ through $\bar f_{b,N}$, and its Monte Carlo component is pathwise. [[def-ip-posterior-computation-error-budget]]

[F4] A stationary chain has marginal law $\pi_K$ at every time, and the covariance of $f(X_i),f(X_j)$ depends only on the lag $|j-i|$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]] [[def-stationary-process-and-canonical-shift]]

[F5] For square-integrable real random variables, variance is the expected squared centered value and covariance is the expected product of centered values. [[def-moments-variance-and-covariance]]

[F6] For a finite scalar reference chain, the total signed error telescopes and its absolute value is bounded by the sum of absolute adjacent errors. [[thm-pathwise-error-ledger-decomposition]]

[A1] AC is assumed only for the library time-homogeneous Markov-chain interface; this proposition assumes stationarity and makes no chain-existence claim. [[def-axiom-of-choice]] [[def-time-homogeneous-markov-chain-with-transition-kernel]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Since $|f|\le M$, [F2] applies to $\mu$ and $\nu$; [F1] fixes the event-supremum convention, so it yields the stated total-variation expectation bound. [given, F1, F2]

1.2 The successive scalar references in [F3] have signed adjacent differences whose sum is $\bar f_{b,N}-\mu_\star(f)$. Apply [F6] to this finite reference chain to obtain $|\mu_\star(f)-\bar f_{b,N}|\le\mathcal B_f$. [given, F3, F6, algebra]

1.3 For the stationary branch, set $Y_j=f(X_{b+j})-\pi_K(f)$. By [F4], each $Y_j$ has mean zero and $\mathbb E[Y_iY_j]=\gamma_{|i-j|}$. Expanding the finite square gives $\mathbb E[(N^{-1}\sum_{j=1}^N Y_j)^2]=N^{-2}(N\gamma_0+2\sum_{k=1}^{N-1}(N-k)\gamma_k)$: there are $N$ diagonal terms, and for each lag $k$ there are $N-k$ off-diagonal pairs, each counted twice. [A1, F4, F5, given, algebra]

2.1 Since $0\le N-k\le N$ and $\gamma_0=\operatorname{Var}(f(X_0))\ge0$, the expression in step 1.3 is at most $N^{-1}(\gamma_0+2\sum_{k=1}^{N-1}|\gamma_k|)$, which is bounded by the claimed infinite-series expression. Absolute summability makes the bound finite. [step 1.3, F5, given, algebra] ∎

