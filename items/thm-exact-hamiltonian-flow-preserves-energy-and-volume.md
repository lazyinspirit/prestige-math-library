---
id: thm-exact-hamiltonian-flow-preserves-energy-and-volume
kind: theorem
title: A complete Hamiltonian flow for a C2 potential preserves energy and phase volume
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-globally-lipschitz-odes-have-global-solutions
  - cor-lipschitz-ode-uniqueness-and-stability-estimate
  - def-countable-choice
  - def-cholesky-factorisation-with-positive-diagonal
  - def-jacobian-matrix-and-gradient
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-determinant-differential-and-jacobis-formula
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "Countable Choice is used through the C1 change-of-variables theorem to pass from determinant one to phase-volume preservation. The supplied Euclidean flow/ODE results do not require full AC or DC, and this item adds no full-AC/DC premise."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Statement

Let $d\ge1$, let $U\in C^2(\mathbb R^d,\mathbb R)$, and let $M$ be real symmetric positive definite. Set
$$H(q,p)=U(q)+\tfrac12p^TM^{-1}p,\qquad F(q,p)=(M^{-1}p,-\nabla U(q)).$$
Assume Countable Choice. Call this vector field **complete** when the solution through every $(q,p)$ exists for all $t\in\mathbb R$. If $F$ is complete, it has a unique global $C^1$ flow $\Phi_t$, which conserves $H$ and satisfies
$$\det D\Phi_t(q,p)=1\qquad(t\in\mathbb R).$$
Thus it preserves phase-space Lebesgue volume. Completeness is an explicit hypothesis. In particular, if $\nabla U$ is globally $L$-Lipschitz, then $F$ is globally Lipschitz with constant $C=\max\{\|M^{-1}\|_F,L\}$, so the global-existence and stability corollaries apply and
$$\|\Phi_t(z)-\Phi_t(w)\|_2\le e^{C|t|}\|z-w\|_2.$$

## Facts & Assumptions

**Given:** Countable Choice, $d$, $U$, $M$, the stated complete Hamiltonian vector field, and, for the sufficient condition, a global Lipschitz constant $L$ for $\nabla U$.

[A1] Countable Choice is the set-theoretic assumption used by the C1 change-of-variables theorem. [[def-countable-choice]]

[F1] A $C^1$ Euclidean vector field has a unique maximal flow that is jointly $C^1$; its time slices have inverse given by the negative-time flow, and its derivative in initial data solves the variational equation. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F2] The total-derivative chain rule gives $\frac d{dt}H(z(t))=DH(z(t))z'(t)$ and differentiates compositions by $D(g\circ f)=Dg(f)Df$. [[thm-chain-rule-for-total-derivatives]]

[F3] For an invertible differentiable matrix curve $A(t)$, Jacobi's formula is $(\det A)'=\det(A)\operatorname{tr}(A^{-1}A')$. [[thm-determinant-differential-and-jacobis-formula]]

[F4] A continuous vector field on $\mathbb R\times\mathbb R^n$ with one global state-Lipschitz constant has a unique global solution for every initial condition. [[cor-globally-lipschitz-odes-have-global-solutions]]

[F5] Two solutions for a state-Lipschitz field with constant $C$ obey $\|x(t)-y(t)\|_2\le e^{C|t-t_0|}\|x(t_0)-y(t_0)\|_2$. [[cor-lipschitz-ode-uniqueness-and-stability-estimate]]

[F6] For a real matrix $A$, $\|Ax\|_2\le\|A\|_F\|x\|_2$. [[thm-cauchy-schwarz-and-the-euclidean-norm]]

[F7] SPD $M$ has a Cholesky factor $M=LL^T$ with positive diagonal ([[def-cholesky-factorisation-with-positive-diagonal]], [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]); triangular determinants multiply the diagonal entries, determinants are multiplicative, and a real square matrix with nonzero determinant is invertible ([[thm-determinant-of-a-triangular-matrix]], [[thm-determinant-multiplicative]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

[F8] Under Countable Choice, a $C^1$ diffeomorphism between open Euclidean sets satisfies the change-of-variables formula for every nonnegative Lebesgue-measurable function. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F9] The Euclidean gradient is the transpose-Jacobian convention, so $U\in C^2$ makes $F$ a $C^1$ field with $DF(q,p)=\begin{pmatrix}0&M^{-1}\\-\nabla^2U(q)&0\end{pmatrix}$. [[def-jacobian-matrix-and-gradient]]

## Proof
**Proof technique:** direct energy differentiation and the variational equation.

1.1 By [F7], $M=LL^T$ where $L$ is lower triangular with strictly positive diagonal. Thus $\det L$ is the positive product of its diagonal entries, and $\det M=\det L\det(L^T)=(\det L)^2>0$; [F7] implies that $M$ is invertible, so $M^{-1}$ is well-defined and symmetric. Since $U\in C^2$, [F9] makes $F$ a $C^1$ vector field. By [F1] it has a unique maximal $C^1$ flow, and completeness as defined in the Statement makes every time slice $\Phi_t$ global with inverse $\Phi_{-t}$. Differentiating $\Phi_{-t}\circ\Phi_t=I$ by [F2] shows $D\Phi_t(z)$ is invertible. The derivative $A(t):=D\Phi_t(z)$ satisfies $A'(t)=DF(\Phi_t(z))A(t)$ by [F1]. [given, F1, F2, F7, F9]

1.2 Along a solution $z(t)=(q(t),p(t))$, [F2] and the displayed Hamilton equations give $$\frac d{dt}H(q(t),p(t))=\nabla U(q(t))^TM^{-1}p(t)+(M^{-1}p(t))^T(-\nabla U(q(t)))=0,$$ where symmetry of $M^{-1}$ identifies the derivative of the kinetic energy. Hence $H(\Phi_t(z))=H(z)$. [given, F2, algebra]

1.3 Suppose $\nabla U$ is globally $L$-Lipschitz. For $z=(q,p)$ and $w=(q',p')$, [F6] gives $$\|F(z)-F(w)\|_2^2\le\|M^{-1}\|_F^2\|p-p'\|_2^2+L^2\|q-q'\|_2^2\le C^2\|z-w\|_2^2.$$ Thus the time-independent field on $\mathbb R\times\mathbb R^{2d}$ has global state-Lipschitz constant $C$. [F6, given, algebra]

2.1 By [F9], the variational matrix is $$DF(q,p)=\begin{pmatrix}0&M^{-1}\\-\nabla^2U(q)&0\end{pmatrix},$$ whose trace is zero. Since $A(t)$ is invertible by step 1.1, [F3] and the finite-sum trace identity $\operatorname{tr}(XY)=\sum_{i,j}X_{ij}Y_{ji}=\operatorname{tr}(YX)$ give $$\frac d{dt}\det A(t)=\det A(t)\operatorname{tr}(A(t)^{-1}DF(\Phi_t(z))A(t))=\det A(t)\operatorname{tr}(DF(\Phi_t(z)))=0.$$ Since $A(0)=I_{2d}$, $\det A(0)=1$, so $\det D\Phi_t(z)=1$ for all $t$. [F1, F3, F9, step 1.1, algebra]

2.2 Apply [F4] to obtain completeness and uniqueness in this globally Lipschitz case, and apply [F5] with the same $C$ to obtain the stated Gronwall stability estimate. This supplies a sufficient condition; no completeness is inferred from merely local Lipschitz continuity of $\nabla U$. [F4, F5, step 1.3]

3.1 For each $t\in\mathbb R$, step 1.1 makes $\Phi_t:\mathbb R^{2d}\to\mathbb R^{2d}$ a global $C^1$ diffeomorphism. For any Lebesgue-measurable $E\subseteq\mathbb R^{2d}$, apply [F8] to $\mathbf1_E$ and use step 2.1 to get $\lambda_{2d}(\Phi_t^{-1}(E))=\int_{\mathbb R^{2d}}\mathbf1_E(\Phi_t(z))|\det D\Phi_t(z)|\,dz=\lambda_{2d}(E)$. Hence the exact flow preserves phase-space Lebesgue volume. [A1, F8, step 1.1, step 2.1] ∎
## Remarks

Energy conservation and phase-volume preservation here concern the exact ODE flow. They do not assert that a finite leapfrog map conserves $H$.
