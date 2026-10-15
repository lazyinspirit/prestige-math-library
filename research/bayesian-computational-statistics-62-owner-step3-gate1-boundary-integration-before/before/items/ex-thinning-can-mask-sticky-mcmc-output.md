---
id: ex-thinning-can-mask-sticky-mcmc-output
kind: example
title: Thinning lowers observed lag correlation but discards information
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-stationary-process-and-canonical-shift
  - def-moments-variance-and-covariance
  - def-functional-specific-effective-sample-size
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.13"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, Appendix D"
      url: https://avehtari.github.io/rhat_ess/rhat_ess.html
axiom_use: "The general time-homogeneous chain definition assumes the Axiom of Choice for conditional-probability classes; the finite transition and autocorrelation calculations themselves are choice-free."
---

## Example

Let $E=\{0,1\}$, let $\pi$ be uniform, and take the transition matrix
$P(0,0)=P(1,1)=.9$ and $P(0,1)=P(1,0)=.1$. Start the chain in $\pi$. For
$Y_n=2X_n-1$, the lag-$k$ autocorrelation is $\rho(k)=.8^k$. The theoretical
functional-specific ESS per $n$ transitions is $n/9$. If only every tenth
state is retained, its lag-one correlation is $.8^{10}\approx.1074$, but its
ESS under the same transition budget is approximately $.0806n$, below the
unthinned $.1111n$.

## Facts & Assumptions

**Given:** The two-state transition matrix, initial law $\pi$, and
[[def-functional-specific-effective-sample-size]].

[A1] The Axiom of Choice assumed by the general time-homogeneous chain
definition. [[def-axiom-of-choice]]

[F1] A transition matrix has probability rows and defines its one-step
transition probabilities. [[def-transition-matrix-and-n-step-transition-probabilities]]

[F2] Invariance means $\pi P=\pi$ on every measurable set.
[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[F3] The process stationarity convention is strict invariance of all finite
dimensional laws under common time shifts.
[[def-stationary-process-and-canonical-shift]]

[F4] $\operatorname{ESS}_h(n)=n/(1+2\sum_{k\ge1}\rho_h(k))$ when the
autocorrelation sum is absolutely convergent and positive.
[[def-functional-specific-effective-sample-size]]

[F5] A time-homogeneous chain has one-step conditional transition law given by
its probability kernel relative to the stated filtration.
[[def-time-homogeneous-markov-chain-with-transition-kernel]]

[F6] Covariance and variance use centered second moments.
[[def-moments-variance-and-covariance]]

## Verification



**Given:** The Markov chain and observable in the Example.

1.1 Each row of $P$ is nonnegative and sums to one. The uniform law is invariant because each column also sums to one, so $\pi P=\pi$ by [F1] and [F2]. By [F5], the transition rule is time homogeneous. Repeated use of the Markov property gives, for times $n_1<\cdots<n_r$ and states $x_1,\ldots,x_r$, the path probability $\pi(x_1)\prod_{j=1}^{r-1}P^{n_{j+1}-n_j}(x_j,x_{j+1})$: the first marginal is $\pi$ because $\pi P=\pi$, and each later gap uses the corresponding matrix iterate. This expression depends only on the gaps, so a common time shift leaves every finite-dimensional law unchanged, which is strict stationarity by [F3]. [A1, F1, F2, F3, F5, given]

1.2 Under $\pi$, $\mathbb E[Y_n]=0$ and $\operatorname{Var}(Y_n)=1$ by [F6]. Given $Y_n=1$, the next value is $1$ with probability $.9$ and $-1$ with probability $.1$; given $Y_n=-1$, the signs reverse. Thus $\mathbb E[Y_{n+1}\mid Y_n]=.8Y_n$. Iteration gives $\mathbb E[Y_{n+k}\mid Y_n]=.8^kY_n$. Since $\mathbb E Y_n=0$ and $\operatorname{Var}(Y_n)=1$, [F6] gives $\rho(k)=\mathbb E(Y_nY_{n+k})=.8^k$. [given, F1, F5, F6, algebra]

2.1 The sum is geometric, so $\tau=1+2\sum_{k\ge1}.8^k=1+2(.8/.2)=9$. By [F4], the ESS for $n$ unthinned transitions is $n/9$. [step 1.2, F4, algebra]

3.1 Keeping every tenth state gives retained lag-$j$ correlation $.8^{10j}$. Therefore $\tau_{10}=1+2\sum_{j\ge1}.8^{10j}=(1+.8^{10})/(1-.8^{10})\approx1.240$, and there are $n/10$ retained states. Its ESS is approximately $(n/10)/1.240=.0806n$, less than $n/9=.1111n$. The displayed lag-one correlation is lower, but the total information under a fixed transition budget is also lower. [step 1.2, step 2.1, F4, algebra] ∎
## Remarks

Thinning can still be useful when storing a draw or evaluating a particular
functional is costly. Owen's discussion in §11.13 treats those storage and
computation tradeoffs; the calculation above compares effective sample size
under a fixed number of transitions when all states can be retained.
