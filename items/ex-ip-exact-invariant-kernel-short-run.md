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
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-ip-bounded-posterior-functional-error
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: >-
  AC is used through conditional-expectation existence for the time-homogeneous
  chain interface and through the Ionescu--Tulcea construction. Invariance and
  the finite-state calculations use no additional choice.
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

Assume AC. Let $E=\{-1,+1\}$ with the discrete sigma-algebra $2^E$, and let
the target posterior $\pi$ assign mass $1/2$ to each state. For
$0<\varepsilon<1/2$, define
$$K_\varepsilon(x,A):=(1-\varepsilon)\mathbf1_A(x)+\varepsilon\mathbf1_A(-x)\qquad(x\in E,\ A\subseteq E).$$
Take $\varepsilon=1/1000$. The Ionescu--Tulcea construction supplies a
time-homogeneous Markov chain on canonical path space with initial law
$\delta_{+1}$ and transition kernel $K_\varepsilon$. Use this chain with its
natural filtration, retain the next $N=100$ draws, and set the bounded
functional $f(x)=x$. The target law $\pi$ is
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

[[thm-ionescu-tulcea-construction-of-a-markov-chain|Under AC, an initial law and a probability kernel give a canonical path-space Markov chain.]]

[[thm-basic-algebra-and-order-properties-of-conditional-expectation|Conditional expectation is linear and preserves expectation.]]

[[thm-linearity-of-the-lebesgue-integral-on-l-one|Expectation is linear on integrable random variables.]]

[[prop-ip-bounded-posterior-functional-error|The pathwise error budget is bounded by its adjacent-stage terms.]]

[Levin, Peres, and Wilmer, §4.1, two-state chain](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf)

## Facts & Assumptions

**Given:** The two-state target law, transition rule, deterministic initial state, and 100 retained draws in the Example.

[F1] A probability kernel has probability-measure rows and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

[F2] A probability law $\pi$ is invariant for $K$ when $\int K(x,A)\,\pi(dx)=\pi(A)$ for every event $A$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[A1] AC is assumed for conditional-expectation existence and the Ionescu--Tulcea chain construction. [[def-axiom-of-choice]]

[F3] For a time-homogeneous Markov chain, $\mathbb P(X_{n+1}\in A\mid\mathcal F_n)=K(X_n,A)$ almost surely. [[def-time-homogeneous-markov-chain-with-transition-kernel]]

[F4] The burn-in component is $|\pi_K(f)-\mathbb E_\lambda\bar f_{b,N}|$; when the invariant target is $\pi$, this is the expected finite-run bias in the Example. [[def-ip-posterior-computation-error-budget]]

[F5] The mean and conditional expectation of a bounded real random variable are finite. [[def-moments-variance-and-covariance]]

[F6] Under AC, the Ionescu--Tulcea construction gives a canonical path-space chain with the specified initial law and homogeneous transition kernel. [[thm-ionescu-tulcea-construction-of-a-markov-chain]]

[F7] Conditional expectation is linear and preserves expectation for integrable variables. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F8] The expectation of a finite sum of integrable random variables is the sum of their expectations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Verification

1.1 Since $0<\varepsilon<1/2$, each row assigns the nonnegative masses $1-\varepsilon$ and $\varepsilon$ to the two states, and every subset is measurable; thus $K_\varepsilon$ is a probability kernel [F1]. Under AC [A1], apply [F6] to initial law $\delta_{+1}$ and kernel $K_\varepsilon$; this supplies the canonical chain used in the Example. [A1, F1, F6, given]

2.1 For either singleton $\{x\}$, $$\pi K_\varepsilon(\{x\})=\tfrac12(1-\varepsilon)+\tfrac12\varepsilon=\tfrac12=\pi(\{x\}),$$ so additivity on the two-state space gives $\pi K_\varepsilon=\pi$ by [F2]. [F1, F2, step 1.1, given, algebra]

2.2 Put $\lambda_0:=1-2\varepsilon=499/500$. Summing the two conditional probabilities in [F3] against the values $+1$ and $-1$, conditional on $X_n=x$, and using linearity [F7], $$\mathbb E[X_{n+1}\mid\mathcal F_n]=(1-\varepsilon)x+\varepsilon(-x)=\lambda_0x.$$ Taking expectations by [F7] and using $X_0=1$ gives $\mathbb E X_j=\lambda_0^j$ for every $j\ge1$ by induction. [A1, F3, F5, F7, step 1.1, given, algebra]

3.1 By [F8], $\mathbb E[100^{-1}\sum_{j=1}^{100}X_j]=100^{-1}\sum_{j=1}^{100}\lambda_0^j=\frac{499}{100}(1-(499/500)^{100})>0$. Since $\pi(f)=0$ and $\pi$ is invariant by step 2.1, the kernel discrepancy vanishes, while [F4] identifies this positive difference as the burn-in component. [F4, F8, step 2.1, step 2.2, algebra] ∎

