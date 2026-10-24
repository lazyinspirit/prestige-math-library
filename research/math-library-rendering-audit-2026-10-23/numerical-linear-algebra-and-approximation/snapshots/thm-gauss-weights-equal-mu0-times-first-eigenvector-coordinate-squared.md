---
id: thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
kind: theorem
title: Gaussian weights equal the total mass times a Jacobi eigenvector's first-coordinate square
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - lem-gauss-monic-three-term-recurrence
  - def-gauss-polynomial-moment-inner-product
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - lem-cardinal-basis-degree-and-values
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
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

Let $(a,b,m,2m-1,\mu)$ be moment data and let $Q_m$ have nodes $x_i$ and
weights $w_i$ as in [[def-gauss-quadrature-rule]]. Let $J_m$ be the Jacobi
matrix of [[thm-jacobi-matrix-spectrum-equals-gauss-nodes]], and let $v_i$ be
any unit eigenvector of $J_m$ for eigenvalue $x_i$. Then
$$ w_i=\mu([a,b])\,|v_{i,1}|^2. $$

## Facts & Assumptions

**Given:** Moment data, its Gaussian rule, its Jacobi matrix, and a unit eigenvector $v_i$ for node $x_i$.

[F1] [[def-gauss-quadrature-rule]]: $w_i=\int\ell_i\,d\mu$ and the nodes are the roots of $p_m$.

[F2] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: the rule is exact through degree $2m-1$ and $w_i>0$.

[F3] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]] and [[lem-gauss-monic-three-term-recurrence]]: $p_0=1$, the $p_j$ are pairwise orthogonal, and their squared norms $h_j$ are positive.

[F4] [[thm-jacobi-matrix-spectrum-equals-gauss-nodes]]: the vectors $(p_0(x_i)/\sqrt{h_0},\ldots,p_{m-1}(x_i)/\sqrt{h_{m-1}})^{\mathsf T}$ are nonzero eigenvectors of $J_m$ with eigenvalue $x_i$, the nodes are distinct, and every eigenvalue is simple.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real self-adjoint endomorphism has an orthonormal eigenbasis.

[F6] [[lem-cardinal-basis-degree-and-values]]: $\ell_i$ has degree at most $m-1$ and $\ell_i(x_k)=\delta_{ik}$.

[F7] [[def-gauss-polynomial-moment-inner-product]] and [[lem-gauss-monic-three-term-recurrence]] define $h_0=\int p_0^2\,d\mu$. [[def-integral-of-a-nonnegative-simple-function]] and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] give $\int1\,d\mu=\mu([a,b])$ by the one-cell simple function on the whole interval.

## Proof

1.1 Put $q_j=p_j/\sqrt{h_j}$ for $j=0,\ldots,m-1$. By [F3], they are orthonormal. Their degrees are $0,\ldots,m-1$ with nonzero leading coefficients, so successive subtraction of top terms shows they span the degree-at-most-$m-1$ polynomial space and are a basis. For a fixed node $x_i$, set $z_i=(q_0(x_i),\ldots,q_{m-1}(x_i))^{\mathsf T}$. By [F4], $z_i$ is a nonzero eigenvector of $J_m$ for $x_i$. [F3, F4, construct]

1.2 For $i\ne k$, self-adjointness gives $x_i\langle z_i,z_k\rangle=\langle J_mz_i,z_k\rangle=\langle z_i,J_mz_k\rangle=x_k\langle z_i,z_k\rangle$. Since the nodes are distinct by [F4], their difference is nonzero and the pairing is zero. Normalize these vectors to $u_i=z_i/\|z_i\|_2$; their first coordinates satisfy $|u_{i,1}|^2=\frac{q_0(x_i)^2}{\sum_{j=0}^{m-1}q_j(x_i)^2}.$ The simplicity assertion in [F4], together with the orthonormal eigenbasis [F5], makes each eigenspace one-dimensional. Therefore the arbitrary unit eigenvector $v_i$ in the Statement is $u_i$ or $-u_i$, and its first-coordinate square is the same. [F4, F5, algebra, construct]

1.3 Expand $\ell_i$ in the orthonormal basis $q_0,\ldots,q_{m-1}$. Its coefficient of $q_j$ is $\int\ell_iq_j\,d\mu =Q_m(\ell_iq_j) =w_iq_j(x_i),$ because $\deg(\ell_iq_j)\le2m-2$ and $\ell_i(x_k)=\delta_{ik}$ by [F6]. [F1, F2, F6, algebra]

2.1 By [F6], $\ell_i^2$ has degree at most $2m-2$ and $Q_m(\ell_i^2)=w_i$, so exactness [F2] gives $\int\ell_i^2\,d\mu=w_i$. Taking squared norms of the expansion in step 1.3 gives $w_i=\int\ell_i^2\,d\mu =w_i^2\sum_{j=0}^{m-1}q_j(x_i)^2.$ Since $w_i>0$ by [F2], it follows that $w_i=1/\sum_jq_j(x_i)^2$. [F2, F6, step 1.3, algebra]

3.1 Since $p_0=1$ by [F3], [F7] gives $h_0=\int p_0^2\,d\mu=\int1\,d\mu=\mu([a,b])$; thus one has $q_0(x_i)^2=1/\mu([a,b])$. Substituting this and step 2.1 into step 1.2 yields $|v_{i,1}|^2=w_i/\mu([a,b])$, which is the claimed formula. [F1, F3, F7, step 1.2, step 2.1, algebra] ∎
