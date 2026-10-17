---
id: alg-proximal-bundle-serious-null-method
kind: algorithm
title: "Finite-memory-free proximal bundle method with serious and null steps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-max-min
  - lem-finite-set-has-max
  - def-subgradient-and-subdifferential
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
  - def-metric-interior-closure-boundary
justified_by:
  - lem-proximal-bundle-subproblem-has-unique-minimizer
  - lem-proximal-bundle-finite-budget-returns-status
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: n/a
---

## Definition
Let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex; let $f:C\to\mathbb R$ be convex; fix $t>0$, a serious-step fraction $m_s\in(0,1)$, a center $x_0\in C$, and an integer outer budget $N\ge1$. A valid oracle call at $y\in C$ returns $(f(y),g_y)$ with $g_y\in\partial f(y)$; otherwise it fails. Store every cut $m_y(z)=f(y)+\langle g_y,z-y\rangle$ from every successful call, with no memory cap, and set $M_k$ to the maximum of the stored cuts. If no cut exists, call the oracle at the current center. If this initialization call fails, return status **oracle-failure** with the current center, zero completed trials, and no candidate or model residual; otherwise store its cut. Find the unique minimizer
$$z_k=\arg\min_{z\in C}\left(M_k(z)+\frac{\|z-x_k\|_2^2}{2t}\right),\qquad P_k=f(x_k)-M_k(z_k).$$
If $P_k\le0$, return status **stationary-or-model-failure** with $x_k,z_k,P_k$. Otherwise evaluate at $z_k$. An oracle failure returns **oracle-failure**. Declare a serious step exactly when $f(x_k)-f(z_k)\ge m_sP_k$, set $x_{k+1}=z_k$ then, and otherwise take a null step and set $x_{k+1}=x_k$. Append the valid trial cut after either step. Return **budget-exhausted** after $N$ trials. This finite algorithm makes no generic convergence claim.
