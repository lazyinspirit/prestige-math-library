---
id: alg-implicit-midpoint-hamiltonian-step
kind: algorithm
title: Local implicit midpoint step for a Hamiltonian vector field
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

Let $d\ge1$, let $U\subseteq\mathbb R^{2d}$ be open, and let $H\in C^2(U)$. Write $z=(q,p)$ in canonical coordinates, set $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$, and use the Euclidean norm and its induced operator norm. Define the finite-regularity coordinate field
$$F(q,p):=\bigl(\nabla_pH(q,p),-\nabla_qH(q,p)\bigr)=J\nabla H(q,p).$$

Given $z\in U$ and a signed step $h$, supply a candidate radius $\rho\ge0$. If no radius is supplied or $\rho<0$, return `branch-not-certified`. If the closed ball $\overline B(z,\rho)$ is certified not to lie in $U$, return `domain-failure`; if its containment in $U$ cannot be certified, return `branch-not-certified`. For a ball contained in $U$, supply certified bounds $M,L\ge0$ with
$$M\ge\sup_{W\in\overline B(z,\rho)}\|F(W)\|,\qquad L\ge\sup_{W\in\overline B(z,\rho)}\|DF(W)\|.$$
If either bound or its certificate is unavailable, or if either admissibility inequality $|h|M/2\le\rho$ or $|h|L/2<1$ fails, return `branch-not-certified`. Otherwise the **exact local implicit midpoint step** selects the unique $Z\in\overline B(z,\rho)$ satisfying
$$Z=z+\frac h2F(Z)$$
and returns $z^+=2Z-z$. The returned state is in $\mathbb R^{2d}$; a further step is admitted only when that state lies in $U$ and passes a new ball check.

For a finite iteration implementation of an admitted branch, input an output tolerance $\tau>0$ and an update budget $B\in\mathbb N_0$. Use $\theta=|h|L/2$ and proceed as follows.

1. Set $Z_0=z$. If $B=0$, return `inconclusive` with current stage iterate $Z_0$, approximate output $z$, and output-error bound $2\rho$.
2. If $B\ge1$, compute $Z_1=z+(h/2)F(Z_0)$ and set $d_1=\|Z_1-Z_0\|$.
3. For $k=1,\ldots,B$, set $b_k=\theta^k d_1/(1-\theta)$ and the output radius $r_k=2b_k$. If $r_k\le\tau$, return the approximation $2Z_k-z$ with output-error certificate $r_k$. Otherwise, if $k<B$, compute $Z_{k+1}=z+(h/2)F(Z_k)$ and continue. If the check fails at $k=B$, return `inconclusive` with current stage iterate $Z_B$, approximate output $2Z_B-z$, and output-error bound $2b_B$.

When $\theta=0$, use $\theta^k=0$ for $k\ge1$; the procedure never evaluates $0^0$. If a finite implementation cannot certify an input or an exact operation needed for these instructions, return `inconclusive` without a tolerance claim. The certificates concern the displayed exact recurrence and exact output operations; inexact evaluations require additional certified error accounting. An approximate result is not asserted to be exactly symplectic. The exact map is the selected branch value $2Z-z$.

