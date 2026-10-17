---
id: alg-implicit-midpoint-hamiltonian-step
kind: algorithm
title: Local implicit midpoint step for a Hamiltonian vector field
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-local-leapfrog-domain-on-an-open-configuration-set
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

Let $U\subseteq\mathbb R^{2d}$ be open and $H\in C^2(U)$. Write $z=(q,p)$ in canonical coordinates, set $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$, and define the finite-regularity coordinate field
$$F(q,p):=\bigl(\nabla_pH(q,p),-\nabla_qH(q,p)\bigr)=J\nabla H(q,p).$$
Given $z\in U$, for a signed step $h$, the **exact local implicit midpoint step** is defined by
$$Z=z+\frac h2F(Z),\qquad z^+=2Z-z,$$
using the locally unique solution $Z$ in a declared closed ball $\overline B(z,\rho)\subset U$. The branch is admissible when certified bounds $M\ge\sup_{\overline B}\|F\|$ and $L\ge\sup_{\overline B}\|DF\|$ satisfy $|h|M/2\le\rho$ and $|h|L/2<1$. It returns `branch-not-certified` if the ball or bounds are unavailable, and `domain-failure` if the admitted ball is not contained in $U$.

For a finite iteration implementation of these exact operations, input an output tolerance $\tau>0$ and an update budget $B\in\mathbb N_0$. Use $\theta=|h|L/2$ and proceed as follows.

1. Set $Z_0=z$. If $B=0$, return `inconclusive` with current stage iterate $Z_0$, approximate output $z$, and output-error bound $2\rho$.
2. If $B\ge1$, compute $Z_1=z+(h/2)F(Z_0)$ and set $d_1=\|Z_1-Z_0\|$.
3. For $k=1,\ldots,B$, set $b_k=\theta^k d_1/(1-\theta)$ and the output radius $r_k=2b_k$. If $r_k\le\tau$, return the approximation $2Z_k-z$ with output-error certificate $r_k$. Otherwise, if $k<B$, compute $Z_{k+1}=z+(h/2)F(Z_k)$ and continue. If the check fails at $k=B$, return `inconclusive` with current stage iterate $Z_B$, approximate output $2Z_B-z$, and output-error bound $2b_B$.

When $\theta=0$, use $\theta^k=0$ for $k\ge1$; the procedure never evaluates $0^0$. These certificates concern the displayed exact recurrence and exact output operations; inexact evaluations require additional certified error accounting before a tolerance claim can be made. An approximate result is not asserted to be exactly symplectic. The exact map is the selected branch value $2Z-z$.

