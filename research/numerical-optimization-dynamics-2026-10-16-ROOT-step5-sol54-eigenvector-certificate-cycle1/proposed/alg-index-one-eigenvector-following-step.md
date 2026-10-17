---
id: alg-index-one-eigenvector-following-step
kind: algorithm
title: "Finite-budget index-one eigenvector-following Newton step"
status: draft
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
justified_by:
  - prop-index-one-eigenvector-step-is-the-local-newton-correction
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

Let $U,V$ be as in [[def-regular-minimum-energy-path-in-a-collision-free-tube]]. **Inputs:** an initial point $x_0\in U$, a unit initial mode reference $v_{\rm ref}\in\mathbb R^d$, a local-ball center $x_{\rm ref}\in U$, radius $r_{\rm loc}>0$, gradient tolerance $\tau_g\ge0$, eigenvalue margin $\gamma>0$, eigenpair residual tolerance $\tau_{\rm eig}\ge0$, mode-overlap threshold $0\le\tau_{\rm mode}<1$, update budget $N\in\mathbb N_0$, and a supplied spectral-data routine $E$. On input $(x,H(x))$, $E$ must return in finite time either `failure` or an orthogonal matrix $Q$, ordered approximate eigenvalues $\widehat\lambda_j$, and validated ordered intervals $I_j$ with their checked certificates as specified below. This input routine supplies spectral data; the enclosure definition does not compute them. Return the last point, the most recently accepted mode reference, its mode-certificate record (initially `none`), and a termination status from `geometry-failure`, `outside-local-basin`, `gradient-residual-tolerance`, `budget-exhausted`, `eigensolve-tolerance-failure`, `index-one-branch-failure`, `mode-tracking-failure`, or `singular-jacobian`. The stored unit reference starts at $v_{\rm ref}$, with stored radius $\delta_{\rm ref}=0$ and no mode-certificate record. A successful check in step 2 replaces the reference and radius and records $(x_k,v,s,\delta)$; this record belongs to its recorded point $x_k$, which need not equal the last returned point. The initial reference has no asserted eigenvector property. The quantitative meaning of the record and the orientation test is proved in [[prop-index-one-eigenvector-step-is-the-local-newton-correction]]; a stored approximate direction is not asserted to be an exact eigenvector. When called at $x_k$ in step 2, the input routine $E$ supplies an orthogonal matrix $Q=[q_1,\ldots,q_d]$, ordered approximate eigenvalues $\widehat\lambda_1\le\cdots\le\widehat\lambda_d$, and validated intervals $I_j=[\ell_j,u_j]$ in the sense of [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]. Require every residual $\|H(x_k)q_j-\widehat\lambda_jq_j\|_2\le\tau_{\rm eig}$, $\sqrt d\,\tau_{\rm eig}\le\gamma/2$, and $\widehat\lambda_j\in I_j$. The Hessian $H=\nabla^2V$ is symmetric by [[cor-hessian-is-symmetric]].

For $k=0,\ldots,N$, in order:

1. If $x_k\notin U$, return `geometry-failure`. If $x_k\notin B_2(x_{\rm ref},r_{\rm loc})$, return `outside-local-basin`. Compute $g_k=\nabla V(x_k)$. If $\|g_k\|_2\le\tau_g$, return `gradient-residual-tolerance`; if $k=N$, return `budget-exhausted`.
2. Evaluate $H(x_k)$ and call $E(x_k,H(x_k))$. If it returns `failure`, return `eigensolve-tolerance-failure`; otherwise use its returned $Q$, $\widehat\lambda_j$, and $I_j$. If an eigenpair residual exceeds $\tau_{\rm eig}$, $\sqrt d\tau_{\rm eig}>\gamma/2$, or some $\widehat\lambda_j\notin I_j$, return `eigensolve-tolerance-failure`. If the validated intervals do not satisfy $u_1\le-\gamma$ and $\ell_j\ge\gamma$ for all $j\ge2$ (with the dimension-one convention in the definition), return `index-one-branch-failure`. Put $\eta=\|H(x_k)q_1-\widehat\lambda_1q_1\|_2$, $s=\eta/(\gamma-\widehat\lambda_1)$, and $\delta=\sqrt{2-2\sqrt{1-s^2}}$. These expressions are evaluated only after the preceding checks. Let $r$ be the stored unit reference and let $\delta_{\rm old}=\delta_{\rm ref}$. If $|q_1^Tr|\le\tau_{\rm mode}+\delta+\delta_{\rm old}$, return `mode-tracking-failure`; otherwise set $v=q_1$ when $q_1^Tr>0$ and $v=-q_1$ when $q_1^Tr<0$. Replace the stored reference by $v$, set $\delta_{\rm ref}=\delta$, and store the mode-certificate record $(x_k,v,s,\delta)$. This test does not alter the Newton correction; failure means that this sufficient orientation test did not certify the requested overlap, not that a physical or mathematical branch change has been proved.
3. Call [[alg-newton-correction-for-vector-residuals]] with $A=H(x_k)$ and $r=g_k$. If it returns `singular-jacobian`, return that status. Its correction $p_k$ is the exact Newton solution of $H(x_k)p_k=-g_k$ in the mathematical model; the eigenpair data certifies the index-one branch but does not replace this linear solve.
4. If $x_k+p_k\notin U$ or lies outside $B_2(x_{\rm ref},r_{\rm loc})$, return `outside-local-basin`. Otherwise set $x_{k+1}=x_k+p_k$ and continue.

An approximate eigensolve has a finite residual-tolerance branch and an explicit failure status. The definition makes no global-convergence claim. Local quadratic behavior is stated separately and requires the hypotheses of [[thm-updated-jacobian-newton-local-quadratic-convergence]].
