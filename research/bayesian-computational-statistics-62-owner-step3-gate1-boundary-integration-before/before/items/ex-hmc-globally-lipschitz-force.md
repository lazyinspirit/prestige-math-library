---
id: ex-hmc-globally-lipschitz-force
kind: example
title: A globally Lipschitz Hamiltonian force
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - cor-globally-lipschitz-odes-have-global-solutions
  - cor-lipschitz-ode-uniqueness-and-stability-estimate
  - cor-mean-value-theorem
  - def-axiom-of-choice
  - def-hamiltonian-monte-carlo
  - def-integral-of-a-nonnegative-simple-function
  - def-integral-over-a-measurable-set
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-real-line-exponential-tail-integrable
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-exact-hamiltonian-flow-preserves-energy-and-volume
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "AC is inherited from the HMC normal-momentum interface; the target integrability and ODE estimates use no stronger choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Example

Take $d=1$, $M=1$, and $U(q)=\sqrt{1+q^2}$. This gives a proper target, a globally $1$-Lipschitz force, and a complete exact Hamiltonian flow with the Gronwall stability estimate from [[thm-exact-hamiltonian-flow-preserves-energy-and-volume]].

## Facts & Assumptions

**Given:** AC, $U(q)=\sqrt{1+q^2}$, unit mass, and the one-dimensional Euclidean metric.

[F1] The HMC target is $\pi(q)=Z_U^{-1}e^{-U(q)}$ and its Hamiltonian vector field is $F(q,p)=(p,-U'(q))$. [[def-hamiltonian-monte-carlo]]

[F2] A globally state-Lipschitz ODE vector field has a unique global solution. [[cor-globally-lipschitz-odes-have-global-solutions]]

[F3] Solutions of a state-Lipschitz ODE obey the Gronwall stability estimate. [[cor-lipschitz-ode-uniqueness-and-stability-estimate]]

[F4] Under Countable Choice, a complete $C^2$ Hamiltonian flow preserves $H$ and phase volume; a globally Lipschitz gradient gives the stated sufficient completeness and stability bound. [[thm-exact-hamiltonian-flow-preserves-energy-and-volume]]

[F5] If a function is continuous on a closed interval and differentiable on its interior, its derivative at some interior point equals the average rate of change. [[cor-mean-value-theorem]]

[F6] AC implies Countable Choice, the axiom required for the exact-flow volume result. [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F7] Under Countable Choice, the function $x\mapsto e^{-|x|}$ is nonnegative, measurable, and Lebesgue integrable. [[lem-real-line-exponential-tail-integrable]]

[F8] The exponential is positive and strictly increasing; under Countable Choice, the measure of $[-1,1]$ is its length $2$. [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F9] For nonnegative measurable functions, the nonnegative integral is monotone under pointwise domination. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F10] On a measure space, for nonnegative measurable $f$ and measurable $E$, $\int_E f\,d\lambda=\int f\mathbf1_E\,d\lambda$. If $f\ge c\ge0$ on $E$, monotonicity and the simple-function definition give $\int_E f\,d\lambda\ge c\lambda(E)$. [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]]

## Proof
**Proof technique:** direct derivative and norm estimates.

1.1 For $|q|\le1$, $U(q)\le\sqrt2$, so monotonicity of the exponential gives $e^{-U(q)}\ge e^{-\sqrt2}$; [F8]–[F10] imply $$Z_U\ge\int_{[-1,1]}e^{-U(q)}\,d\lambda_1(q)\ge e^{-\sqrt2}\lambda_1([-1,1])=2e^{-\sqrt2}>0.$$ For all $q$, $U(q)\ge|q|$, hence $e^{-U(q)}\le e^{-|q|}$; by [F6] AC supplies the Countable Choice required by [F7], and [F9] gives $Z_U<\infty$. Differentiating gives $$U'(q)=\frac{q}{\sqrt{1+q^2}},\qquad U''(q)=\frac{1}{(1+q^2)^{3/2}}\in(0,1].$$ Applying [F5] to $U'$, which is continuous on each closed interval and differentiable on its interior, the bound $0<U''\le1$ makes $U'$ globally $1$-Lipschitz. [F5, F6, F7, F8, F9, F10, given, algebra]

2.1 For $z=(q,p)$ and $w=(\widetilde q,\widetilde p)$, $$\|F(z)-F(w)\|_2^2=|p-\widetilde p|^2+|U'(q)-U'(\widetilde q)|^2\le |p-\widetilde p|^2+|q-\widetilde q|^2=\|z-w\|_2^2.$$ Thus the Hamiltonian vector field is globally $1$-Lipschitz. [F1, step 1.1, algebra]

3.1 Apply [F2] to obtain the unique global flow. Since $U\in C^2$, [F4] and its Countable Choice hypothesis supplied by [F6] give energy and volume preservation; its sufficient-condition bound has $C=\max\{1,1\}=1$. [F2, F4, F6, step 2.1]

4.1 Applying [F3] with the same constant gives $\|\Phi_t(z)-\Phi_t(w)\|_2\le e^{|t|}\|z-w\|_2$ for every pair of initial states and every real $t$. This is a flow-stability bound, not a discretization-error estimate. [F3, step 2.1] ∎
