---
id: ex-hmc-exact-flow-limit
kind: example
title: The exact-flow Hamiltonian Monte Carlo limit
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - cor-globally-lipschitz-odes-have-global-solutions
  - def-axiom-of-choice
  - def-hamiltonian-monte-carlo
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-exact-hamiltonian-flow-preserves-energy-and-volume
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "AC is inherited from the finite-dimensional normal-law definitions used for momentum refresh."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Example

For the standard-normal target $U(q)=q^2/2$ with $M=1$, exact integration for time $\pi/2$, followed by the required momentum flip, proposes an independent standard-normal position and has acceptance probability one. This is the exact-flow limit; a finite leapfrog map generally has a nonzero energy error.

## Facts & Assumptions

**Given:** AC, $U(q)=q^2/2$, $M=1$, current position $q$, refreshed momentum $p\sim N(0,1)$, and exact integration time $\tau=\pi/2$.

[F1] The HMC target is proportional to $e^{-U(q)}$, the kinetic energy is $p^2/2$, and the momentum is refreshed independently from $N(0,1)$. [[def-hamiltonian-monte-carlo]]

[F2] The standard normal law has density $(2\pi)^{-1/2}e^{-x^2/2}$. [[def-standard-normal-and-normal-laws]]

[F3] Under Countable Choice, $U\in C^2$, and completeness, the exact Hamiltonian flow preserves $H$ and phase volume. [[thm-exact-hamiltonian-flow-preserves-energy-and-volume]]

[F4] A globally state-Lipschitz vector field has a unique global solution through each initial state. [[cor-globally-lipschitz-odes-have-global-solutions]]

[F5] AC implies Countable Choice, the axiom required for the exact-flow volume result. [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

## Proof
**Proof technique:** solve the linear Hamilton equations and apply the exact-flow correction.

1.1 Here Hamilton's equations are $\dot q=p$ and $\dot p=-q$. For $z=(q,p)$ and $w=(\widetilde q,\widetilde p)$, $\|F(z)-F(w)\|_2^2=|p-\widetilde p|^2+|q-\widetilde q|^2=\|z-w\|_2^2$, so the field is globally $1$-Lipschitz. The curves $$q(t)=q\cos t+p\sin t,\qquad p(t)=p\cos t-q\sin t$$ satisfy these equations and the initial condition $(q(0),p(0))=(q,p)$. By [F4], this global solution is the unique exact flow through $(q,p)$; [F3] applies with the Countable Choice hypothesis supplied by [F5]. [F1, F3, F4, F5, given, algebra]

2.1 At $t=\pi/2$, the exact endpoint is $(p,-q)$; flipping momentum gives $z^*=(p,q)$. Since $H(q,p)=(q^2+p^2)/2$, $H(z^*)=H(q,p)$ and the Metropolis acceptance probability is $1$. [F1, step 1.1, algebra]

3.1 The returned position is the refreshed $p$, which is independent of the old $q$ and has law $N(0,1)$ by [F2]. Thus every update returns an independent draw from the target. This exact-flow argument does not apply to a finite leapfrog discretization. [F1, F2, step 2.1] ∎
