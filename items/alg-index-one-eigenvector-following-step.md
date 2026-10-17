---
id: alg-index-one-eigenvector-following-step
kind: algorithm
title: "Finite-budget index-one eigenvector-following Newton step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-newton-correction-for-vector-residuals
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - thm-updated-jacobian-newton-local-quadratic-convergence
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3: exact-Jacobian Newton correction for a square nonlinear root"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (92)–(93): solve the Jacobian system for the Newton correction"
---

## Definition

Let $U,V$ be as in [[def-regular-minimum-energy-path-in-a-collision-free-tube]]. **Inputs:** an initial point $x_0\in U$, a unit initial mode reference $v_{\rm ref}\in\mathbb R^d$, a local-ball center $x_{\rm ref}\in U$, radius $r_{\rm loc}>0$, gradient tolerance $\tau_g\ge0$, eigenvalue margin $\gamma>0$, eigenpair residual tolerance $\tau_{\rm eig}\ge0$, mode-overlap threshold $0\le\tau_{\rm mode}<1$, update budget $N\in\mathbb N_0$, and a supplied spectral-data routine $E$. On input $(x,H(x))$, $E$ must return in finite time either `failure` or an orthogonal matrix $Q$, ordered approximate eigenvalues $\widehat\lambda_j$, and validated ordered intervals $I_j$ with their checked certificates as specified below. This input routine supplies spectral data; the enclosure definition does not compute them. Return the last point, the most recently accepted mode reference, and a termination status from `geometry-failure`, `outside-local-basin`, `gradient-residual-tolerance`, `budget-exhausted`, `eigensolve-tolerance-failure`, `index-one-branch-failure`, `mode-tracking-failure`, or `singular-jacobian`. The mode reference starts at $v_{\rm ref}$ and changes only after a successful eigenpair and overlap check, storing the signed $q_1$ from that check. A positive residual tolerance does not in general certify that $q_1$ is an exact lowest eigenvector, and a reference accepted at an earlier iterate carries no spectral certification at the returned point. When called at $x_k$ in step 2, the input routine $E$ supplies an orthogonal matrix $Q=[q_1,\ldots,q_d]$, ordered approximate eigenvalues $\widehat\lambda_1\le\cdots\le\widehat\lambda_d$, and validated intervals $I_j=[\ell_j,u_j]$ in the sense of [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]. Require every residual $\|H(x_k)q_j-\widehat\lambda_jq_j\|_2\le\tau_{\rm eig}$, $\sqrt d\,\tau_{\rm eig}\le\gamma/2$, and $\widehat\lambda_j\in I_j$. The Hessian $H=\nabla^2V$ is symmetric by [[cor-hessian-is-symmetric]].

For $k=0,\ldots,N$, in order:

1. If $x_k\notin U$, return `geometry-failure`. If $x_k\notin B_2(x_{\rm ref},r_{\rm loc})$, return `outside-local-basin`. Compute $g_k=\nabla V(x_k)$. If $\|g_k\|_2\le\tau_g$, return `gradient-residual-tolerance`; if $k=N$, return `budget-exhausted`.
2. Evaluate $H(x_k)$ and call $E(x_k,H(x_k))$. If it returns `failure`, return `eigensolve-tolerance-failure`; otherwise use its returned $Q$, $\widehat\lambda_j$, and $I_j$. If an eigenpair residual exceeds $\tau_{\rm eig}$, $\sqrt d\tau_{\rm eig}>\gamma/2$, or some $\widehat\lambda_j\notin I_j$, return `eigensolve-tolerance-failure`. If the validated intervals do not satisfy $u_1\le-\gamma$ and $\ell_j\ge\gamma$ for all $j\ge2$ (with the dimension-one convention in the definition), return `index-one-branch-failure`. If $|q_1^Tv_{\rm ref}|\le\tau_{\rm mode}$, return `mode-tracking-failure`; otherwise retain $q_1$ when $q_1^Tv_{\rm ref}>0$ and replace it by $-q_1$ when $q_1^Tv_{\rm ref}<0$. Use the resulting direction as the next mode reference. This overlap check screens changes of the computed reference direction; it does not certify exact mode identity or alter the Newton correction.
3. Call [[alg-newton-correction-for-vector-residuals]] with $A=H(x_k)$ and $r=g_k$. If it returns `singular-jacobian`, return that status. Its correction $p_k$ is the exact Newton solution of $H(x_k)p_k=-g_k$ in the mathematical model; the eigenpair data certifies the index-one branch but does not replace this linear solve.
4. If $x_k+p_k\notin U$ or lies outside $B_2(x_{\rm ref},r_{\rm loc})$, return `outside-local-basin`. Otherwise set $x_{k+1}=x_k+p_k$ and continue.

An approximate eigensolve has a finite residual-tolerance branch and an explicit failure status. The definition makes no global-convergence claim. Local quadratic behavior is stated separately and requires the hypotheses of [[thm-updated-jacobian-newton-local-quadratic-convergence]].
