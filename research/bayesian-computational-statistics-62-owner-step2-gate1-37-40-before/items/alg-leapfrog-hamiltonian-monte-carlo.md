---
id: alg-leapfrog-hamiltonian-monte-carlo
kind: algorithm
title: Leapfrog Hamiltonian Monte Carlo
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-metropolis-hastings-kernel
  - def-hamiltonian-monte-carlo
  - def-leapfrog-step-map
justified_by: []
forward_refs: []
aliases: []
landmark: false
axiom_use: "The stated momentum law and general Metropolis-Hastings accepted-flow procedure use AC as declared by their suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Definition

Assume the inputs of [[def-hamiltonian-monte-carlo]] and fix a current position $q$, a step size $\epsilon>0$, and a finite integer $L\ge1$.

1. Independently refresh $p\sim N_d(0,M)$ and set $z=(q,p)$.
2. Compute $z_L=\Phi_\epsilon^L(z)$ by the finite recursion in [[def-leapfrog-step-map]], then set $z^*=R(z_L)$, where $R(q,p)=(q,-p)$.
3. Form the deterministic proposal kernel $Q_T(z,A)=\mathbf 1_A(z^*)$ on phase space and apply [[alg-metropolis-hastings-kernel]] with target $\nu(dq,dp)=\pi(dq)N_d(0,M)(dp)$. Equivalently, accept $z^*$ with probability $\min\{1,\exp(-H(z^*)+H(z))\}$ and otherwise retain $z$.
4. Return the position coordinate of the accepted or retained phase point.

The finite recursion is defined for every $(q,p)\in\mathbb R^{2d}$. No exact ODE solution, energy conservation by the discrete map, or convergence guarantee is part of this procedure.
