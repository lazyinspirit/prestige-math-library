---
id: ex-ip-low-ess-despite-correct-invariance
kind: example
title: Correct invariance can coexist with low effective sample size
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-functional-specific-effective-sample-size
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-ip-posterior-computation-error-budget
  - def-measure-kernel-and-probability-kernel
  - def-moments-variance-and-covariance
  - def-probability-measure
  - def-stationary-process-and-canonical-shift
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - prop-ip-bounded-posterior-functional-error
  - thm-invariant-initial-law-makes-the-chain-stationary
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is assumed through the library Markov-chain and invariant-initial-law
  interfaces. The finite transition, covariance, and geometric-series
  calculations use no choice and establish no central limit theorem.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization: An improved R-hat for assessing convergence of MCMC"
      url: https://arxiv.org/pdf/1903.08008v5
      locator: "§3.2, equations (7)–(9) and the discussion that ESS is functional-specific and is not a substitute for MCSE."
---

## Example

Let the target posterior $\pi$ be uniform on $E=\{-1,+1\}$ and define
$$K_\varepsilon(x,\{x\})=1-\varepsilon,\qquad K_\varepsilon(x,\{-x\})=\varepsilon,$$
with $\varepsilon=1/100$. Let $(X_n)_{n\ge0}$ be the time-homogeneous Markov
chain with kernel $K_\varepsilon$ relative to its natural filtration, started
with $X_0\sim\pi$, and take $f(x)=x$. Define its lag-$k$ autocorrelation by
$$\rho_f(k):=\frac{\operatorname{Cov}(f(X_0),f(X_k))}{\operatorname{Var}(f(X_0))}.$$
For every $k\ge1$, $\rho_f(k)=(49/50)^k$. Its integrated autocorrelation
time $\tau_f:=1+2\sum_{k=1}^\infty\rho_f(k)$ is therefore $99$, so the
theoretical functional-specific effective sample size of $N=10{,}000$ draws is
$$\operatorname{ESS}_f(10{,}000)=\frac{10{,}000}{99}\approx101.01.$$
The invariant law is exactly the target posterior, while this functional has
only about one percent of the nominal independent-sample size. This is the
theoretical ESS from the stationary autocorrelation sequence, not an empirical
finite-run ESS estimate, and it asserts no central limit theorem.

## Example references

[[def-functional-specific-effective-sample-size|The theoretical ESS uses a stationary functional with positive finite variance, absolutely summable autocorrelations, and positive integrated autocorrelation time.]]

[[thm-invariant-initial-law-makes-the-chain-stationary|An invariant initial law makes the Markov chain strictly stationary under AC.]]

[[prop-ip-bounded-posterior-functional-error|The stationary sample-average variance bound requires its own covariance-summability assumption.]]

[Vehtari et al., §3.2, functional-specific ESS](https://arxiv.org/pdf/1903.08008v5)

## Facts & Assumptions

**Given:** The two-state probability kernel, its initial law $\pi$, and the bounded functional $f$ in the Example.

[F1] A probability kernel has probability-measure rows and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

[F2] Invariance means $\pi K(A)=\pi(A)$ for every measurable event $A$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[F3] A time-homogeneous Markov chain has one-step conditional law given by its transition kernel. [[def-time-homogeneous-markov-chain-with-transition-kernel]]

[A1] AC is assumed by the library Markov-chain and invariant-initial-law interfaces. [[def-axiom-of-choice]]

[F4] If the initial law is invariant, the chain is strictly stationary. [[thm-invariant-initial-law-makes-the-chain-stationary]]

[F5] The theoretical functional ESS is $N/(1+2\sum_{k\ge1}\rho_f(k))$ when the process is strictly stationary, has positive finite variance, absolutely summable autocorrelations, and positive integrated autocorrelation time; this definition asserts no CLT. [[def-functional-specific-effective-sample-size]]

[F6] For a stationary chain with absolutely summable lag covariances, the finite-sample mean-square error is bounded by $N^{-1}(\gamma_0+2\sum_{k\ge1}|\gamma_k|)$. [[prop-ip-bounded-posterior-functional-error]]

[F7] Variance is the expected squared centered value, and covariance is the expected product of centered values. [[def-moments-variance-and-covariance]]

## Verification

1.1 For either singleton $\{x\}$, $\pi K_\varepsilon(\{x\})=\tfrac12(1-\varepsilon)+\tfrac12\varepsilon=\tfrac12=\pi(\{x\})$; additivity gives $\pi K_\varepsilon=\pi$ by [F2]. The rows are probability measures by [F1]. [F1, F2, given, algebra]

1.2 Put $\lambda=1-2\varepsilon=49/50$. By [F3], $\mathbb E[X_{n+1}\mid\mathcal F_n]=\lambda X_n$. Hence $\mathbb E[X_0X_{k+1}]=\lambda\mathbb E[X_0X_k]$ and $\mathbb E[X_0X_0]=1$, so induction gives $\operatorname{Cov}(X_0,X_k)=\lambda^k$ and $\rho_f(k)=\lambda^k$. [F3, F5, F7, given, algebra]

2.1 Since $X_0\sim\pi$ and $\pi$ is invariant by step 1.1, [A1] permits the invariant-initial-law result [F4], which makes the chain strictly stationary. Its one-time law is symmetric, so $\mathbb E X_j=0$ and $\operatorname{Var}(X_j)=1$. [A1, F2, F4, F7, step 1.1, given]

3.1 The autocorrelations are absolutely summable because $0<\lambda<1$, with $\sum_{k\ge1}\lambda^k=\lambda/(1-\lambda)=49$. Thus $\tau_f=1+2\cdot49=99>0$, and [F5] gives $\operatorname{ESS}_f(10{,}000)=10{,}000/99$. The covariance bound [F6] applies, but neither it nor the ESS definition supplies a CLT. [F5, F6, F7, step 1.2, given, algebra] ∎

