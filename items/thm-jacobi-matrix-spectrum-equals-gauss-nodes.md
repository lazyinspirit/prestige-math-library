---
id: thm-jacobi-matrix-spectrum-equals-gauss-nodes
kind: theorem
title: The Jacobi matrix spectrum is the set of Gauss nodes
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - lem-gauss-monic-three-term-recurrence
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-euclidean-inner-product
  - prop-standard-coordinate-inner-products
  - prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - lem-nonnegative-square-root-exists-and-unique
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let $(a,b,m,r,\mu)$ be moment data from [[def-gauss-moment-data]] with
$r\ge2m-1$. For $0\le j<m$, let $h_j,\alpha_j$ be as in
[[lem-gauss-monic-three-term-recurrence]], and for $1\le j<m$ let
$\beta_j=h_j/h_{j-1}$. Put $\beta_0=0$ and define the real symmetric
tridiagonal **Jacobi matrix**
$$ J_m= \begin{pmatrix} \alpha_0&\sqrt{\beta_1}\\ \sqrt{\beta_1}&\alpha_1&\ddots\\ &\ddots&\ddots&\sqrt{\beta_{m-1}}\\ &&\sqrt{\beta_{m-1}}&\alpha_{m-1} \end{pmatrix}, $$
with the evident one-by-one interpretation for $m=1$. If
$a<x_1<\cdots<x_m<b$ are the roots of $p_m$, then
$\operatorname{spec}(J_m)=\{x_1,\ldots,x_m\}$, where spectrum denotes the set
of eigenvalues as in [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]];
every eigenvalue is simple. If $q_j:=p_j/\sqrt{h_j}$ for $0\le j<m$, then
$(q_0(x_i),\ldots,q_{m-1}(x_i))^{\mathsf T}$ is a nonzero eigenvector of $J_m$
for $x_i$.

## Facts & Assumptions

**Given:** Moment data and the monic orthogonal polynomials through degree $m$.

[F1] [[lem-gauss-monic-three-term-recurrence]]: $xp_j=p_{j+1}+\alpha_jp_j+\beta_jp_{j-1}$ for $1\le j<m$, and $xp_0=p_1+\alpha_0p_0$.

[F2] [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]]: the degree-$m$ polynomial $p_m$ has exactly $m$ distinct roots $x_i\in(a,b)$.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis.

[F4] [[prop-standard-coordinate-inner-products]] and [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]: a real symmetric matrix is self-adjoint for the standard Euclidean inner product on $\mathbb R^m$.

[F5] [[lem-nonnegative-square-root-exists-and-unique]]: every positive real $\beta_j$ has a unique positive square root.

[F6] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: the spectrum of a finite-dimensional endomorphism is its set of eigenvalues.

## Proof

1.1 By [F1] and [F5], the normalized polynomials $q_j:=p_j/\sqrt{h_j}$ satisfy $xq_j=\sqrt{\beta_{j+1}}q_{j+1}+\alpha_jq_j+\sqrt{\beta_j}q_{j-1}$ for $0\le j<m-1$, with $q_{-1}=0$. For the final index, the monic recurrence gives $xp_{m-1}=p_m+\alpha_{m-1}p_{m-1}+\beta_{m-1}p_{m-2}$; at a root $x_i$ the $p_m$ term vanishes. After dividing by $\sqrt{h_{m-1}}$, this is the final row of $J_m z_i=x_i z_i$ for $z_i=(q_0(x_i),\ldots,q_{m-1}(x_i))^{\mathsf T}$. When $m=1$, the identity $xp_0=p_1+\alpha_0p_0$ gives the same conclusion at the sole root. [F1, F2, F5, algebra]

2.1 The vector $z_i$ is nonzero because $q_0=1/\sqrt{h_0}$ and $h_0=\mu([a,b])>0$. Thus each of the $m$ distinct roots in [F2] is an eigenvalue of $J_m$. [F2, step 1.1, F5, algebra]

3.1 The matrix $J_m$ is real symmetric by its definition, so [F4] makes its endomorphism self-adjoint on $\mathbb R^m$. By [F3], it has an orthonormal eigenbasis of $m$ vectors; hence it has exactly $m$ eigenvalues counted with multiplicity. The $m$ distinct eigenvalues already exhibited in step 2.1 exhaust this list, so each is simple and there are no others. By [F6], this eigenvalue set is $\operatorname{spec}(J_m)$. [F2, F3, F4, F6, step 2.1] ∎
