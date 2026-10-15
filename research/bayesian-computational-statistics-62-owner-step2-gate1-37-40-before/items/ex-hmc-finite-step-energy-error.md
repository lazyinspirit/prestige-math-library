---
id: ex-hmc-finite-step-energy-error
kind: example
title: Finite-step leapfrog energy error
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-leapfrog-hamiltonian-monte-carlo
  - def-axiom-of-choice
  - def-hamiltonian-monte-carlo
  - def-leapfrog-step-map
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "AC is inherited from the HMC normal-momentum and Metropolis-Hastings interfaces."
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

For the one-dimensional standard-normal potential $U(q)=q^2/2$, unit mass, $\epsilon=1$, one leapfrog step, and initial phase point $(0,1)$, the proposed energy rises by $1/8$ and the Metropolis acceptance probability is $e^{-1/8}$.

## Facts & Assumptions

**Given:** $H(q,p)=(q^2+p^2)/2$, $\epsilon=1$, $L=1$, and $(q_0,p_0)=(0,1)$.

[F1] A leapfrog step applies a half kick, full drift, then half kick, and the HMC correction uses $\min\{1,e^{-H(z^*)+H(z)}\}$. [[def-hamiltonian-monte-carlo]]

[F2] The algorithm retains the original position if the proposal is rejected. [[alg-leapfrog-hamiltonian-monte-carlo]]

## Proof
**Proof technique:** direct substitution.

1.1 The first half kick gives $p_{1/2}=1-\tfrac12U'(0)=1$. The drift gives $q_1=0+1\cdot p_{1/2}=1$. The final half kick gives $p_1=1-\tfrac12U'(1)=1/2$, so the flipped proposal is $(q^*,p^*)=(1,-1/2)$. [F1, given, algebra]

2.1 The initial energy is $H(0,1)=1/2$, while the proposed energy is $H(1,-1/2)=1/2+1/8=5/8$. The discrete step therefore does not conserve $H$ at this point. [given, step 1.1, algebra]

3.1 The acceptance probability is $\min\{1,e^{-5/8+1/2}\}=e^{-1/8}<1$; rejection retains $q=0$ by [F2]. This finite calculation distinguishes energy error from the exact target-invariance statement proved for the full Metropolized kernel. [F1, F2, step 2.1, algebra] ∎
