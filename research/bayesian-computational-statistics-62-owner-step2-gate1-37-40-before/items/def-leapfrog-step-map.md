---
id: def-leapfrog-step-map
kind: definition
title: One-step leapfrog map as force and drift shears
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-jacobian-matrix-and-gradient
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
forward_refs: []
aliases: []
landmark: false
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

Let $d\ge1$, let $U:\mathbb R^d\to\mathbb R$ be continuously differentiable, and let $M$ be a real symmetric positive-definite $d\times d$ matrix. Write $\nabla U$ for its Euclidean gradient, and let $\epsilon>0$.

For $a,b\in\mathbb R$, define the **force kick** and **drift shear**
$$K_a(q,p)=(q,p-a\nabla U(q)),\qquad D_b(q,p)=(q+bM^{-1}p,p).$$
The one-step leapfrog map is
$$\Phi_\epsilon=K_{\epsilon/2}\circ D_\epsilon\circ K_{\epsilon/2},$$
where composition is read right to left. For a finite integer $L\ge1$, its $L$-step map is $\Phi_\epsilon^L$. Define the momentum flip $R(q,p)=(q,-p)$ and the flipped proposal map $T_{\epsilon,L}=R\circ\Phi_\epsilon^L$.

Each kick and drift is a continuous bijection with inverse $K_{-a}$ or $D_{-b}$, respectively. These finite maps use only $\nabla U$ and do not require a solution of Hamilton's ODE. The classical derivative of a force kick is not part of this definition: for merely $U\in C^1$, $\nabla U$ need not be differentiable.
