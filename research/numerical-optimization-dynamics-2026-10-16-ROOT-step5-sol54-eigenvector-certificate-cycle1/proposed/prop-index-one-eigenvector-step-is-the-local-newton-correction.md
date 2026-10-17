---
id: prop-index-one-eigenvector-step-is-the-local-newton-correction
kind: proposition
title: "Certified index-one mode enclosures and the exact Newton correction at a saddle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - alg-index-one-eigenvector-following-step
  - alg-newton-correction-for-vector-residuals
  - thm-updated-jacobian-newton-local-quadratic-convergence
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-total-derivative-computes-directional-and-partial-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3: local quadratic error estimate for a nonsingular vector root"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equations (90)–(93): exact Jacobian correction for a square system"
---

## Statement

Let $V\in C^4(U,\mathbb R)$ on an open $U\subseteq\mathbb R^d$, and put $F=\nabla V$. At any accepted update of [[alg-index-one-eigenvector-following-step]], the step is the unique vector $p$ solving

$$DF(x)p=-F(x),\qquad DF(x)=\nabla^2V(x).$$

At every successful mode check of [[alg-index-one-eigenvector-following-step]], the validated intervals certify exactly one negative eigenvalue, and its recorded values satisfy $0\le s\le1/(4\sqrt d)<1$. There is a unique unit lowest-eigenvalue eigenvector $w$ with $v^Tw>0$, and

$$\sqrt{1-|v^Tw|^2}\le s,\qquad \|v-w\|_2\le\delta.$$

If $r$ and $\delta_{\rm old}$ denote the reference and radius immediately before that check, then $w^Tr>\tau_{\rm mode}+\delta_{\rm old}$. At the first successful check, $r$ is the supplied initial unit reference and $\delta_{\rm old}=0$. At successive successful checks, let $w_{\rm old}$ denote the exact oriented lowest eigenvector enclosed by the previous record; then $w^Tw_{\rm old}>\tau_{\rm mode}$. Thus the records enclose the lowest-mode lines and certify their orientations and successive overlaps, without identifying $v$ with $w$. Each record applies at its recorded point, not automatically at a later returned point.

Suppose $x_*$ is a critical point, its Hessian is nonsingular with exactly one negative eigenvalue, and the Hessian is Lipschitz on a neighborhood of $x_*$. Then for all initial points in a sufficiently small ball about $x_*$, every update that the algorithm attempts before it stops is the ordinary exact-Jacobian Newton update and satisfies the local quadratic estimate supplied by [[thm-updated-jacobian-newton-local-quadratic-convergence]]. A gradient or eigensolve stopping status creates no later update, and no global-start guarantee is asserted.

## Facts & Assumptions

**Given:** The smooth potential, square gradient residual, accepted branch checks, nonsingular index-one critical point, and local Hessian-Lipschitz hypothesis in the Statement.

[F1] [[alg-index-one-eigenvector-following-step]]: after its eigenpair and enclosure checks, it calls the square vector Newton correction with Jacobian $H(x)=\nabla^2V(x)$ and residual $\nabla V(x)$.

[F2] [[alg-newton-correction-for-vector-residuals]]: if the Jacobian is invertible, its correction is the unique $p$ solving $J(x)p=-F(x)$.

[F3] [[thm-updated-jacobian-newton-local-quadratic-convergence]]: for a $C^2$ square residual with a simple zero and locally Lipschitz Jacobian that is invertible at the zero, exact-Jacobian Newton updates from a sufficiently small ball remain local and satisfy a quadratic error bound; the finite method may stop first.

[F4] [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]] fix the Jacobian, gradient, and Hessian conventions. Applying [[thm-continuous-partial-derivatives-imply-total-differentiability]] to the first-partial components of $V$, and then their successive partials, supplies the continuous total derivatives of $F=\nabla V$ through order two from $V\in C^4$. [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies the matrix of $D(\nabla V)$ with the gradient Jacobian, and [[cor-hessian-is-symmetric]] makes its entries agree with $\nabla^2V$. Critical points are precisely zeros of $F$.

[F5] [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]: the checked intervals establish $\lambda_1\le-\gamma$ and $\lambda_j\ge\gamma$ for $j\ge2$. Together with Hessian symmetry, [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] supplies an ordered orthonormal eigenbasis.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|a^Tb|\le\|a\|_2\|b\|_2$ and the Euclidean norm satisfies the triangle inequality.

[F7] [[alg-index-one-eigenvector-following-step]]: at a successful mode check, $\widehat\lambda_1\le-\gamma$, $\eta\le\tau_{\rm eig}$, $\sqrt d\tau_{\rm eig}\le\gamma/2$, and the unit candidate is signed to obtain $v^Tr=|q_1^Tr|>\tau_{\rm mode}+\delta+\delta_{\rm old}$. The record stores the checked point and the displayed $s,\delta$; the next check uses its $v,\delta$ as the previous reference and radius.

[A1] The Hessian at an index-one critical point is nonsingular: its one negative eigenvalue and all remaining positive eigenvalues are nonzero.

## Proof

**Given:** The hypotheses of the Statement.

1.1 At an accepted update, [F1] supplies the exact Hessian Jacobian and gradient residual to the Newton-correction procedure, and its validated ordered enclosures put every Hessian eigenvalue at distance at least $\gamma$ from zero. Thus the Hessian is invertible; [F2] makes the returned correction the unique solution of $\nabla^2V(x)p=-\nabla V(x)$, so the selected step is exactly the vector Newton step. [F1, F2, F4]

1.2 Let $x_*$ be the critical point. By [F4], $F(x_*)=0$ and $DF(x_*)=\nabla^2V(x_*)$ is invertible by [A1]. Since $V\in C^4$, $F$ is $C^2$; the assumed local Hessian-Lipschitz bound is a local Lipschitz bound on $DF$. Thus the hypotheses of [F3] hold. [A1, F3, F4, given]

2.1 At a successful mode check, [F5] gives a simple lowest eigenvalue separated from all others by at least $2\gamma$. Choose an orthonormal eigenbasis $e_1,\ldots,e_d$ in increasing eigenvalue order and expand $v=\sum_jc_je_j$. For $j\ge2$, $\lambda_j-\widehat\lambda_1\ge\gamma-\widehat\lambda_1\ge2\gamma$. Signing $q_1$ does not change its residual norm, so $\eta^2=\sum_j(\lambda_j-\widehat\lambda_1)^2c_j^2\ge(\gamma-\widehat\lambda_1)^2\sum_{j\ge2}c_j^2$. Consequently $\sum_{j\ge2}c_j^2\le s^2$, while [F7] gives $0\le s\le\tau_{\rm eig}/(2\gamma)\le1/(4\sqrt d)<1$. This also makes both square roots in the procedure real. [F5, F7, algebra]

2.2 Since $|c_1|\ge\sqrt{1-s^2}>0$, the exact eigenline has a unique unit representative $w$ with $v^Tw>0$. It satisfies $v^Tw=|c_1|$, hence $\sqrt{1-|v^Tw|^2}\le s$ and $\|v-w\|_2^2=2-2|c_1|\le2-2\sqrt{1-s^2}=\delta^2$. Cauchy--Schwarz and [F7] give $w^Tr\ge v^Tr-\|w-v\|_2\|r\|_2>\tau_{\rm mode}+\delta_{\rm old}$. For the first record this proves orientation relative to the initial reference. For later records, the preceding record's bound gives $\|r-w_{\rm old}\|_2\le\delta_{\rm old}$, so $w^Tw_{\rm old}\ge w^Tr-\|w\|_2\|w_{\rm old}-r\|_2>\tau_{\rm mode}$. Induction over successful checks proves the successive-overlap assertion; the stored point identifies the Hessian to which each bound applies. [F6, F7, step 2.1, algebra, induction]

3.1 The algorithm's update, whenever it is attempted, is the exact correction from step 1.1. Applying [F3] to this recurrence gives the asserted local quadratic bound and invariant neighborhood for every attempted update; if the algorithm stops on a residual or certification branch, there is no later point to which that update claim applies. No conclusion outside the local hypotheses follows. [F1, F3, step 1.1, step 1.2] ∎
