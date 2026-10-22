---
id: ex-ip-exact-invariant-kernel-short-run
kind: example
title: An exact invariant kernel can be biased over a short run
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-ip-posterior-computation-error-budget
  - def-measure-kernel-and-probability-kernel
  - def-moments-variance-and-covariance
  - def-probability-measure
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - prop-ip-bounded-posterior-functional-error
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is assumed only by the library time-homogeneous Markov-chain interface.
  Invariance and the finite-state expectation calculation use no choice.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf
      locator: "§4.1, Example 4.1 and the total-variation discussion of the two-state chain."
---

## Example

Let $E=\{-1,+1\}$, and let the target posterior $\pi$ assign mass $1/2$ to
each state. For $0<\varepsilon<1/2$, define a transition kernel by
$$K_\varepsilon(x,\{x\})=1-\varepsilon,\qquad K_\varepsilon(x,\{-x\})=\varepsilon.$$
Take $\varepsilon=1/1000$, let $(X_n)_{n\ge0}$ be the time-homogeneous Markov
chain with kernel $K_\varepsilon$ relative to its natural filtration and with
$X_0=+1$, and retain the next $N=100$ draws for the bounded functional
$f(x)=x$. The target law $\pi$ is
invariant for this exact kernel, but the expected reported average is
$$\mathbb E\left[\frac1{100}\sum_{j=1}^{100}X_j\right]=\frac{499}{100}\left(1-\left(\frac{499}{500}\right)^{100}\right)>0=\pi(f).$$
For the error ledger take each deterministic posterior stage to be $\pi$;
then the invariant-kernel error is zero while the finite-run burn-in error is
positive.

## Example references

[[def-ip-posterior-computation-error-budget|The invariant-kernel, burn-in, and Monte Carlo error components.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has probability rows and measurable event evaluations.]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel|Invariance means $\pi K=\pi$ on every event.]]

[[def-time-homogeneous-markov-chain-with-transition-kernel|The transition kernel gives the conditional one-step law.]]

[[prop-ip-bounded-posterior-functional-error|The pathwise error budget is bounded by its adjacent-stage terms.]]

[Levin, Peres, and Wilmer, §4.1, two-state chain](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf)

## Facts & Assumptions

**Given:** The two-state target law, transition rule, deterministic initial state, and 100 retained draws in the Example.

[F1] A probability kernel has probability-measure rows and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

[F2] A probability law $\pi$ is invariant for $K$ when $\int K(x,A)\,\pi(dx)=\pi(A)$ for every event $A$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[A1] AC is assumed by the library time-homogeneous Markov-chain interface. [[def-axiom-of-choice]]

[F3] For a time-homogeneous Markov chain, $\mathbb P(X_{n+1}\in A\mid\mathcal F_n)=K(X_n,A)$ almost surely. [[def-time-homogeneous-markov-chain-with-transition-kernel]]

[F4] The burn-in component is $|\pi_K(f)-\mathbb E_\lambda\bar f_{b,N}|$; when the invariant target is $\pi$, this is the expected finite-run bias in the Example. [[def-ip-posterior-computation-error-budget]]

[F5] The mean and conditional expectation of a bounded real random variable are finite. [[def-moments-variance-and-covariance]]

## Verification

1.1 Each row of $K_\varepsilon$ sums to one. For either singleton $\{x\}$,
$$\pi K_\varepsilon(\{x\})=\tfrac12(1-\varepsilon)+\tfrac12\varepsilon=\tfrac12=\pi(\{x\}),$$
so additivity on the two-state space gives $\pi K_\varepsilon=\pi$ by [F2]. [F1, F2, given, algebra]

2.1 Put $\lambda_0:=1-2\varepsilon=499/500$. Summing the two conditional probabilities in [F3] against the values $+1$ and $-1$, conditional on $X_n=x$,
$$\mathbb E[X_{n+1}\mid\mathcal F_n]=(1-\varepsilon)x+\varepsilon(-x)=\lambda_0x.$$
Taking expectations and using $X_0=1$ gives $\mathbb E X_j=\lambda_0^j$ for every $j\ge1$ by induction. [A1, F3, F5, given, algebra]

2.2 Linearity gives $\mathbb E[100^{-1}\sum_{j=1}^{100}X_j]=100^{-1}\sum_{j=1}^{100}\lambda_0^j=\frac{499}{100}(1-(499/500)^{100})>0$. Since $\pi(f)=0$ and $\pi$ is invariant by step 1.1, the kernel discrepancy vanishes, while [F4] identifies this positive difference as the burn-in component. [F4, step 1.1, step 2.1, algebra] ∎
