---
id: thm-emx-leapfrog-cfl
kind: theorem
title: "CFL energy stability and finite termination"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-emx-matrix-maxwell-system
  - alg-emx-staggered-leapfrog
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-singular-value-decomposition
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
dependency_roles:
  def-emx-matrix-maxwell-system: mathematical-premise
  alg-emx-staggered-leapfrog: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-singular-value-decomposition: mathematical-premise
  def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  thm-operator-norm-is-the-largest-singular-value: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, centered leapfrog stability, higher dimensions, first-order systems and Maxwell equations, PDF pp. 3–10."
    - title: "Marco Zank, Topics in Finite Elements, Part I: Introduction and Classical Methods for the Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, discrete energy, CFL positivity, energy conservation and stability, PDF pp. 12–17."
---

## Statement

For the matrices and algorithm of the finite compatible matrix system, set $K:=M_b^{1/2}CM_e^{-1/2}:\mathbb R^{n_e}\to\mathbb R^{n_b}$. If $n_e=0$, define $\lVert K\rVert_2:=0$; if $n_e>0$, define $\lVert K\rVert_2:=\max_{\lVert x\rVert_2=1}\lVert Kx\rVert_2$, where $\lVert x\rVert_2:=(x^Tx)^{1/2}$. For a zero-dimensional symmetric positive-definite matrix, define its square root and inverse square root to be its unique $0\times0$ matrix. For a positive-dimensional real symmetric positive-definite matrix $M$, define $M^{1/2}$ by applying the positive scalar square root to its eigenvalues in an orthonormal eigenbasis, and define $M^{-1/2}:=(M^{1/2})^{-1}$. Call $h\lVert K\rVert_2<2$ the strict CFL condition for this finite matrix system. With $x_n:=M_e^{1/2}e_n$ and $y_{n-1/2}:=M_b^{1/2}b_{n-1/2}$, define

$$E_h(x_n,y_{n-1/2}):=\tfrac12\bigl(\lVert x_n\rVert_2^2+\lVert y_{n-1/2}\rVert_2^2-hy_{n-1/2}^TKx_n\bigr).$$

For every $N\ge0$, the algorithm terminates after $N$ updates. If $h\lVert K\rVert_2<2$, then each step preserves $E_h$, and

$$\frac{1-h\lVert K\rVert_2/2}{2}\bigl(\lVert x_n\rVert_2^2+\lVert y_{n-1/2}\rVert_2^2\bigr)\le E_h(x_n,y_{n-1/2})\le\frac{1+h\lVert K\rVert_2/2}{2}\bigl(\lVert x_n\rVert_2^2+\lVert y_{n-1/2}\rVert_2^2\bigr).$$

Consequently this modified energy is positive definite under the strict CFL condition. The constraint $Db_{n-1/2}$ is preserved. If $h\lVert K\rVert_2>2$, set $\sigma:=\lVert K\rVert_2$. There are unit vectors $v\in\mathbb R^{n_e}$ and $u\in\mathbb R^{n_b}$ with $Kv=\sigma u$ and $K^Tu=\sigma v$. For a normalized state with $x_n=av$ and $y_{n-1/2}=bu$, one update sends the coefficient vector by

$$\begin{pmatrix}a\\b\end{pmatrix}\longmapsto T_\sigma\begin{pmatrix}a\\b\end{pmatrix},\qquad T_\sigma:=\begin{pmatrix}1-h^2\sigma^2&h\sigma\\-h\sigma&1\end{pmatrix}.$$

The matrix $T_\sigma$ has a real eigenvalue $\lambda$ with $|\lambda|>1$. Starting from a nonzero coefficient eigenvector, the Euclidean norm of the corresponding normalized state is multiplied by $|\lambda|$ at each update. Equality at $h\lVert K\rVert_2=2$ is excluded from both assertions; no stability claim is made there.

## Statement references

[[def-emx-matrix-maxwell-system]]

[[alg-emx-staggered-leapfrog]]

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[[thm-singular-value-decomposition]]

[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[[thm-operator-norm-is-the-largest-singular-value]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

## Facts & Assumptions

**Given:** The finite compatible matrix system with $S=0$, $j=0$, $M_e,M_b$ symmetric positive definite, $DC=0$, nonnegative state dimensions as in its definition, and a step size $h>0$ and finite horizon $N\ge0$ for the staggered leapfrog algorithm.

[F1] Every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] Every linear map $T:V\to W$ between finite-dimensional real or complex inner-product spaces has orthonormal right and left singular bases and singular values $s_1\ge\cdots\ge s_r>0$ ([[thm-singular-value-decomposition]]).

[F3] For a map between finite-dimensional inner-product spaces, its operator norm is the maximum of $\lVert Tv\rVert$ over unit vectors, with norm zero on the zero domain ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F4] On a nonzero finite-dimensional domain, the operator norm equals the largest singular value and is attained at a right singular vector ([[thm-operator-norm-is-the-largest-singular-value]]).

[F5] In a real or complex inner-product space, $|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F6] The matrices $M_e,M_b$ are symmetric positive definite and $DC=CG=0$ ([[def-emx-matrix-maxwell-system]]).

[F7] The algorithm's exact updates are $b_{n+1/2}=b_{n-1/2}-hCe_n$ and $e_{n+1}=e_n+hM_e^{-1}C^TM_bb_{n+1/2}$ ([[alg-emx-staggered-leapfrog]]).

## Proof

1.1 For a zero-dimensional mass space, the unique square matrix is the identity, its own inverse, and its root. In positive dimension, $M_e$ and $M_b$ are symmetric and therefore self-adjoint in the standard Euclidean inner product; by [F1] each has an orthonormal eigenbasis. If $v$ is a unit eigenvector of either matrix with eigenvalue $\lambda$, positive definiteness in [F6] gives $\lambda=v^TMv>0$. Define the square root to act by $\sqrt\lambda$ on the full $\lambda$-eigenspace, and its inverse to act by $1/\sqrt\lambda$ there. These definitions are independent of a basis choice within an eigenspace, satisfy $(M^{1/2})^2=M$ and $M^{-1/2}M^{1/2}=I$, and agree with the Statement's root convention. [given, F1, F6, algebra]

2.1 Let $x_n=M_e^{1/2}e_n$ and $y_{n-1/2}=M_b^{1/2}b_{n-1/2}$. Multiplying the first update in [F7] by $M_b^{1/2}$ gives $y_{n+1/2}=y_{n-1/2}-hKx_n$. Multiplying the second update by $M_e^{1/2}$ and using the root identities from step 1.1 gives $x_{n+1}=x_n+hK^Ty_{n+1/2}$. [given, F7, step 1.1, algebra]

3.1 Write $x=x_n$, $y=y_{n-1/2}$, $y'=y_{n+1/2}$, and $x'=x_{n+1}$. From step 2.1, $x'=x+hK^Ty'$ and $y'=y-hKx$. Expanding gives $\lVert x'\rVert_2^2=\lVert x\rVert_2^2+2h(y')^TKx+h^2\lVert K^Ty'\rVert_2^2$, $\lVert y'\rVert_2^2=\lVert y\rVert_2^2-2hy^TKx+h^2\lVert Kx\rVert_2^2$, and $-h(y')^TKx'=-h(y')^TKx-h^2\lVert K^Ty'\rVert_2^2$. [step 2.1, algebra]

3.2 Suppose $h\lVert K\rVert_2>2$. By the zero-domain clause of [F3], the domain is nonzero; [F2]–[F4] then give unit vectors $v,u$ for $\sigma=\lVert K\rVert_2$, with $Kv=\sigma u$ and $K^Tu=\sigma v$. The recurrence in step 2.1 sends states $x=av$, $y=bu$ to states of the same form, with coefficient matrix $T_\sigma:=\begin{pmatrix}1-h^2\sigma^2&h\sigma\\-h\sigma&1\end{pmatrix}$. Its trace is $2-h^2\sigma^2<-2$ and determinant is $1$, so its characteristic polynomial has two distinct real negative reciprocal roots, one with modulus greater than $1$. A nonzero eigenvector for that root therefore has its coefficient norm multiplied by a factor greater than $1$ at every update, proving the supercritical growth claim. [given, F2, F3, F4, step 2.1, algebra]

4.1 Adding the identities in step 3.1 cancels the $\lVert K^Ty'\rVert_2^2$ terms; substituting $y'=y-hKx$ in the remainder gives $\lVert x'\rVert_2^2+\lVert y'\rVert_2^2-h(y')^TKx'=\lVert x\rVert_2^2+\lVert y\rVert_2^2-hy^TKx$. Therefore $E_h(x',y')=E_h(x,y)$ at each update. [step 3.1, algebra]

4.2 By [F5] and [F3]–[F4], $|y^TKx|\le\lVert y\rVert_2\lVert Kx\rVert_2\le\lVert K\rVert_2\lVert x\rVert_2\lVert y\rVert_2$. Since $2\lVert x\rVert_2\lVert y\rVert_2\le\lVert x\rVert_2^2+\lVert y\rVert_2^2$, the cross term in $E_h$ has absolute value at most $\tfrac12h\lVert K\rVert_2(\lVert x\rVert_2^2+\lVert y\rVert_2^2)$. Substitution gives both displayed energy bounds, whose lower coefficient is strictly positive when $h\lVert K\rVert_2<2$. [given, F3, F4, F5, step 3.1, algebra]

5.1 For every update, [F7] and [F6] give $Db_{n+1/2}=Db_{n-1/2}-hDCe_n=Db_{n-1/2}$, so induction preserves $Db$. The loop in [F7] has exactly the finite index set $0,\ldots,N-1$; each exact mass solve is unique by [F6] and step 1.1. It therefore terminates after $N$ updates, including the case $N=0$. [given, F6, F7, step 1.1, algebra] ∎
