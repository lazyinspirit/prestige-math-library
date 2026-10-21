---
id: thm-positive-definite-kernel-flow-converges-for-attained-convex-cost
kind: theorem
title: A finite positive-definite kernel flow converges for an attained convex cost
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-inner-product-space
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - thm-chain-rule-for-total-derivatives
  - thm-heine-borel-rn
  - thm-picard-lindelof-local-existence-and-uniqueness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§3, printed pp. 3–4; convex kernel-gradient convergence motivation; the finite-dimensional proof is supplied here"
---

## Statement

Let $V$ be a finite-dimensional real inner product space. Let $A:V\to V$ be self-adjoint and positive definite, meaning $\langle v,Av\rangle>0$ for every $v\ne0$. Let $C:V\to\mathbb R$ be continuously differentiable, convex, and have a locally Lipschitz gradient, where $DC(z)[v]=\langle\nabla C(z),v\rangle$ and locally Lipschitz means Lipschitz on every compact subset of $V$. Assume $C$ attains its global minimum at $z_*\in V$. For every initial state $z_0\in V$, the solution of

$$\dot z(t)=-A\nabla C(z(t)),\qquad z(0)=z_0,$$

exists uniquely for all $t\ge0$ and converges to a global minimizer of $C$ as $t\to\infty$. In particular, for a finite data set of size $N\ge1$, a symmetric positive-definite Gram matrix $K$ gives this conclusion for the kernel-flow equation with $A=K/N$.

## Statement references

[Jacot, Gabriel, and Hongler, §3, finite-data kernel gradient flow](https://arxiv.org/pdf/1806.07572)

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces|A real kernel is positive semidefinite when every finite Gram quadratic form is nonnegative]]

## Facts & Assumptions

**Given:** The finite-dimensional real inner product space $V$, the self-adjoint positive-definite map $A$, the continuously differentiable convex cost $C$ with locally Lipschitz gradient, a minimizer $z_*$, and initial value $z_0$.

[F1] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] A positive-semidefinite kernel has symmetric positive-semidefinite finite Gram matrices ([[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]).

[F3] A continuous vector field locally Lipschitz in the state has a unique local solution through each initial state ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F4] A closed bounded subset of Euclidean $\mathbb{R}^n$ is compact for every $n\ge1$ ([[thm-heine-borel-rn]]).

[F5] The derivative of a finite-dimensional composition is the composition of total derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof
**Proof technique:** use the inverse-kernel metric to bound the orbit, then use convexity and integrability of the cost gap to identify its limit points.

1.1 By [F1], $A$ has an orthonormal eigenbasis; self-adjointness and positive definiteness make each eigenvalue positive. Thus $A^{-1}$ exists, is self-adjoint and positive definite, and $\|v\|_{A^{-1}}^2:=\langle v,A^{-1}v\rangle$ is a norm squared. Since $\nabla C$ is locally Lipschitz, the vector field $-A\nabla C$ is locally Lipschitz and [F3] gives a unique local solution. [F1, F3, given, algebra]

2.1 For $0<s\le1$, convexity gives $C(z+s(z_*-z))\le(1-s)C(z)+sC(z_*)$. Subtract $C(z)$, divide by $s$, and let $s\downarrow0$; differentiability and the definition of $\nabla C$ give $\langle\nabla C(z),z_*-z\rangle\le C(z_*)-C(z)$. Along any solution, expanding the squared inverse-metric norm to first order then gives $\frac{d}{dt}\|z-z_*\|_{A^{-1}}^2=-2\langle z-z_*,\nabla C(z)\rangle\le-2(C(z)-C(z_*))\le0.$ Hence the solution remains in the closed $A^{-1}$-metric ball centered at $z_*$ through $z_0$. In orthonormal coordinates its radius bounds the Euclidean norm because the smallest eigenvalue of $A^{-1}$ is positive, and continuity of that norm makes the ball closed. If $\dim V\ge1$, [F4] makes it compact; if $\dim V=0$, it is a subset of the singleton $V=\{0\}$ and is compact. [F1, F4, step 1.1, given, algebra]

3.1 The vector field is bounded and Lipschitz on a compact neighborhood of this ball. Picard–Lindelöf therefore supplies a uniform positive local existence time at every point of the ball. If the maximal forward solution had a finite endpoint, boundedness of the vector field would make $z(t)$ Cauchy as $t$ approached that endpoint; its limit lies in the ball, and the uniform local solution there extends the original solution, a contradiction. Thus the solution exists uniquely for all $t\ge0$. [F3, F4, step 2.1, algebra]

4.1 Integrating the inequality in step 2.1 over $[0,T]$ gives $\int_0^T(C(z(t))-C(z_*))\,dt\le\frac12\|z_0-z_*\|_{A^{-1}}^2$. By [F5] and the flow equation, $\frac{d}{dt}C(z(t))=-\langle\nabla C(z(t)),A\nabla C(z(t))\rangle\le0$. The gap is therefore nonnegative, nonincreasing and integrable; it tends to zero. [F5, step 2.1, step 3.1, algebra]

5.1 The trajectory lies in a compact set, so it has a convergent subsequence $z(t_j)\to\bar z$ with $t_j\to\infty$. Continuity of $C$ and step 4.1 give $C(\bar z)=C(z_*)$, so $\bar z$ is a global minimizer. Apply step 2.1 with $\bar z$ in place of $z_*$: the distance $\|z(t)-\bar z\|_{A^{-1}}$ is nonincreasing and has a subsequence tending to zero, hence tends to zero. Thus the full trajectory converges to $\bar z$. [F4, step 2.1, step 4.1]

6.1 For a finite data set, [F2] makes $K$ symmetric positive semidefinite; if it is positive definite, then $A=K/N$ is self-adjoint positive definite because $N\ge1$. The preceding argument applies. [F2, step 1.1, algebra] ∎
