---
id: alg-implicit-midpoint-hamiltonian-step
kind: algorithm
title: Local implicit midpoint step for a Hamiltonian vector field
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - def-hamiltonian-vector-field-and-hamiltonian-function
justified_by: [thm-implicit-midpoint-branch-symplectic-order-and-error]
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF pp. 1–2"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Definition

Let $U\subseteq\mathbb R^{2d}$ be open, $H\in C^2(U)$, $F=J\nabla H$, and $z\in U$. For a signed step $h$, the **exact local implicit midpoint step** is defined by
$$Z=z+\frac h2F(Z),\qquad z^+=2Z-z,$$
using the locally unique solution $Z$ in a declared closed ball $\overline B(z,\rho)\subset U$. The branch is admissible when certified bounds $M\ge\sup_{\overline B}\|F\|$ and $L\ge\sup_{\overline B}\|DF\|$ satisfy $|h|M/2\le\rho$ and $|h|L/2<1$. It returns `branch-not-certified` if the ball or bounds are unavailable, and `domain-failure` if the admitted ball is not contained in $U$.

For a finite implementation, start with $Z_0=z$ and iterate $Z_{k+1}=z+(h/2)F(Z_k)$ up to the supplied budget. The contraction estimate gives a certified radius for $Z_k-Z$. Return the approximation $2Z_k-z$ with that radius if it is within the requested tolerance; otherwise return `inconclusive` with the current iterate and bound. An approximate result is not asserted to be exactly symplectic. The exact map is the selected branch value $2Z-z$.

