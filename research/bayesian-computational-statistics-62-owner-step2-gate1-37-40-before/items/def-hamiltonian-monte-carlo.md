---
id: def-hamiltonian-monte-carlo
kind: definition
title: Hamiltonian Monte Carlo
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-gradient-descent
  - alg-metropolis-hastings-kernel
  - def-axiom-of-choice
  - def-cholesky-factorisation-with-positive-diagonal
  - def-jacobian-matrix-and-gradient
  - def-leapfrog-step-map
  - def-multivariate-normal-law
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-exact-hamiltonian-flow-preserves-energy-and-volume
justified_by: []
forward_refs: []
aliases: []
landmark: false
axiom_use: "AC is used through the library's multivariate-normal construction and the general RN-based Metropolis-Hastings procedure; it also supplies Countable Choice for the exact-flow volume theorem."
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

Assume AC. Let $d\ge1$, let $U:\mathbb R^d\to\mathbb R$ be continuously differentiable, and suppose
$$Z_U:=\int_{\mathbb R^d}e^{-U(q)}\,dq\in(0,\infty).$$
The **position target** is the Borel probability with density
$$\pi(q)=Z_U^{-1}e^{-U(q)}.$$
Let $M$ be a real symmetric positive-definite $d\times d$ mass matrix. Define the kinetic energy and Hamiltonian by
$$K(p)=\tfrac12p^TM^{-1}p,\qquad H(q,p)=U(q)+K(p).$$
At each iteration, refresh the momentum independently from $p\sim N_d(0,M)$, the multivariate normal law of mean zero and covariance $M$ ([[def-multivariate-normal-law]]). The corresponding Hamilton equations are
$$\dot q=M^{-1}p,\qquad \dot p=-\nabla U(q),$$
where $\nabla U$ is the Euclidean gradient of the objective under the convention of [[def-jacobian-matrix-and-gradient]] and the BCS-20 gradient-descent input contract [[alg-gradient-descent]].

For finite leapfrog integration, choose $\epsilon>0$ and an integer $L\ge1$, use the map from [[def-leapfrog-step-map]] for $L$ steps, and flip the final momentum. If $z=(q,p)$, write $(\widetilde q,\widetilde p)=\Phi_\epsilon^L(z)$ and define the flipped proposal $z^*=(\widetilde q,-\widetilde p)$. The Metropolis acceptance probability is
$$\alpha(z,z^*)=\min\{1,\exp(-H(z^*)+H(z))\}.$$
The general accepted-flow and rejected-self-transition convention is the Metropolis-Hastings procedure [[alg-metropolis-hastings-kernel]].

## Remarks

The finite leapfrog procedure is defined by finitely many evaluations of $\nabla U$ and does not require the Hamilton ODE to be complete. An exact-flow version requires $U\in C^2$ and a complete Hamiltonian vector field; under AC, which supplies Countable Choice by [[lem-ac-supplies-sequential-choices-for-probability-constructions]], [[thm-exact-hamiltonian-flow-preserves-energy-and-volume]] proves its energy and volume properties.

Neal's high-dimensional scaling analysis uses a replicated independent-coordinate target of the form $U(q)=\sum_i u_i(q_i)$ (with the coordinate contributions independently replicated). This definition makes no scaling claim outside that regime.
