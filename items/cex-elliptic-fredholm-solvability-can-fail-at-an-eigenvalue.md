---
id: cex-elliptic-fredholm-solvability-can-fail-at-an-eigenvalue
kind: counterexample
title: "Elliptic Fredholm solvability can fail at an eigenvalue"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice, def-countable-choice, def-formal-adjoint-and-adjoint-weak-dirichlet-problem, def-ltwo-operator-associated-with-a-symmetric-elliptic-form, def-sobolev-space-wkp-and-its-norm, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, ex-dirichlet-laplacian-eigenpairs-on-an-interval, thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems, thm-ftc-second-part, def-symmetric-elliptic-weak-eigenpair, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.9, Theorem 4.24 (Fredholm alternative) and the discussion of $L-\lambda$, printed pp. 107-108 (read in full)'
    - title: 'Richard S. Laugesen, Spectral Theory of Partial Differential Equations (University of Illinois lecture notes, arXiv:1203.2344, complete 120 pages)'
      url: 'https://arxiv.org/pdf/1203.2344'
      locator: 'Chapter 5, Laplace eigenfunctions and the resonance discussion, printed pp. 33-41 (read in full)'
    - title: 'Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)'
      url: 'https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf'
      locator: 'Chapter 5, Section 5.1, Theorem 5.1 (solvability and the no-zero-eigenvalue hypothesis), printed pp. 101-104 (read in full)'
verification:
  precheck: pass
---

## Statement refuted

For the Dirichlet problem for $-\Delta$ on a bounded domain and every real datum $f\in L^2$, the equation $-\Delta u-\lambda u=f$ is uniquely solvable.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the interval $\Omega=(0,\pi)$; the Dirichlet Laplacian with form $a(u,v)=\int_0^\pi u'v'$; an integer $k\ge1$ and the eigenvalue $\lambda_k=k^2$; and $f\in L^2(0,\pi)$.

[F1] The eigenfunction: $u_k(x)=\sin(kx)$ lies in $H^1_0(0,\pi)$ and satisfies $a(u_k,v)=k^2(u_k,v)_{L^2}$ for every $v\in H^1_0(0,\pi)$ ([[ex-dirichlet-laplacian-eigenpairs-on-an-interval]], [[def-symmetric-elliptic-weak-eigenpair]]).

[F2] One-dimensional representatives: every $H^1(0,\pi)$ class has an absolutely continuous representative $w^*$ on $[0,\pi]$ satisfying $w^*(x)-w^*(y)=\int_y^x w^\prime$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]). Averaging $w^*(x)=w^*(y)+\int_y^x w^\prime$ in $y$ and applying Cauchy--Schwarz ([[thm-cauchy-schwarz-in-an-inner-product-space]]) gives $|w^*(x)|\le\pi^{-1/2}\|w\|_2+\pi^{1/2}\|w^\prime\|_2$ uniformly on $[0,\pi]$. Thus $H^1$ convergence implies uniform convergence of these representatives, and approximation by $C_c^\infty$ shows that every $H^1_0$ representative has zero endpoints. For continuously differentiable representatives the second fundamental theorem is [[thm-ftc-second-part]].

[F3] Resonant form and Fredholm alternative: put $q_k(u,v):=a(u,v)-k^2(u,v)_{L^2}=\int_0^\pi(u'v'-k^2uv)\,dx$. This is the symmetric uniformly elliptic form with principal coefficient $1$, zero drift and bounded constant potential $-k^2$, so the Fredholm alternative applies on $(0,\pi)$. Define $N:=\{u\in H^1_0(0,\pi):q_k(u,v)=0\ \forall v\in H^1_0(0,\pi)\}$ and let $N^*$ be the homogeneous space for its adjoint form. Since $q_k^*=q_k$, one has $N^*=N$; the weak problem $q_k(u,v)=(f,v)_{L^2}$ is solvable if and only if $(f,v)_{L^2}=0$ for every $v\in N$, and when $N\ne\{0\}$ uniqueness fails ([[thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems]], [[def-formal-adjoint-and-adjoint-weak-dirichlet-problem]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]).

[F4] Orthogonality: $(u_k,u_k)_{L^2}=\int_0^\pi\sin^2(kx)\,dx=\pi/2\ne0$ ([[thm-ftc-second-part]], [[ex-dirichlet-laplacian-eigenpairs-on-an-interval]]).

## Counterexample

1.1 The homogeneous space. By [F1] and the definition of $q_k$ in [F3], $u_k=\sin(kx)$ is a nonzero homogeneous solution. Conversely, if $u\in H^1_0$ is a weak homogeneous solution, compactly supported tests give $D(u^\prime)=-k^2u\in L^2$, so both $u$ and $u^\prime$ have absolutely continuous representatives by [F2]. Their integral identities imply that $u$ is $C^1$ with derivative that representative of $u^\prime$, and that derivative is $C^1$ with derivative $-k^2u$, since the latter is continuous. Hence $u$ is $C^2$ and $u^{\prime\prime}=-k^2u$ on $[0,\pi]$, with $u(0)=u(\pi)=0$ by [F2]. Set $z=u-(u^\prime(0)/k)\sin(kx)$. It satisfies $z(0)=z^\prime(0)=0$ and $z^{\prime\prime}=-k^2z$. The derivative of $|z^\prime|^2+k^2|z|^2$ is zero, so [F2] makes that energy identically zero; thus $z=0$. This proves $N=\operatorname{span}\{\sin(kx)\}$, exactly one-dimensional. [F1, F2, F3, given, algebra]

2.1 Solvability fails on a nonzero datum. Since $q_k$ is symmetric, [F3] gives $N^*=N=\operatorname{span}\{\sin(kx)\}$, so the weak problem $-u''-k^2u=f$ with $u\in H^1_0(0,\pi)$ is solvable if and only if $\int_0^\pi f(x)\sin(kx)\,dx=0$; for $f=\sin(kx)$ this integral equals $\pi/2\ne0$ by [F4], so this datum admits no weak solution. Uniqueness also fails whenever a solution exists, because adding any multiple of the nonzero homogeneous solution $\sin(kx)$ produces another solution. [F1, F3, F4, step 1.1, given, algebra]

3.1 Conclusion. On $\Omega=(0,\pi)$ with $\lambda=k^2$ the equation $-\Delta u-\lambda u=f$ is neither uniquely solvable for every $f\in L^2$ (uniqueness fails at the eigenvalue) nor solvable for the particular datum $f=\sin(kx)$; hence the refuted statement fails, and the failure is exactly the one-dimensional orthogonality condition predicted by the Fredholm alternative. [F3, step 1.1, step 2.1, given] ∎ 