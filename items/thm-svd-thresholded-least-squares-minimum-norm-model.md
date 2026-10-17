---
id: thm-svd-thresholded-least-squares-minimum-norm-model
kind: theorem
title: "The SVD threshold solver gives the unique minimum-norm fit to its truncated model"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-numerical-rank-relative-to-a-norm-scale-and-tolerance, alg-rank-thresholded-least-squares-by-svd, def-truncated-singular-value-pseudoinverse-at-a-declared-threshold, def-moore-penrose-pseudoinverse, thm-moore-penrose-pseudoinverse-exists-and-is-unique, thm-singular-value-decomposition, thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution, thm-eckart-young-best-rank-k-approximation, prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-triangle-inequality-for-inner-product-norm]
dependency_level: 7
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $A\in\mathbb F^{m\times n}$, $b\in\mathbb F^m$, and $\tau\ge0$, where $\mathbb F=\mathbb R$ or $\mathbb C$. Let $A=U\Sigma V^*$ be an exact SVD. Define $\Sigma_\tau$ by retaining $\sigma_i$ when $\sigma_i>\tau$ and replacing each $\sigma_i\le\tau$ by zero, and set $A_\tau=U\Sigma_\tau V^*$. Put $q=\#\{i:\sigma_i>\tau\}$, the spectral numerical rank of $A$ at threshold $\tau$. The vector $x_\tau=A_\tau^+b$ is the unique minimum-Euclidean-norm least-squares solution for the truncated model $A_\tau x\approx b$. An exact-arithmetic run of [[alg-rank-thresholded-least-squares-by-svd]] that converges within its supplied finite sweep budget and supplies this SVD record returns $x_\tau$; a failure or exhausted budget returns `inconclusive`. No convergence within an arbitrary budget is asserted. Moreover,
$$\|A-A_\tau\|_2=\sigma_{q+1}\le\tau,\qquad \|Ax_\tau-b\|_2\le\|A_\tau x_\tau-b\|_2+\tau\|x_\tau\|_2,$$
with $\sigma_{p+1}=0$ when $q=p=\min(m,n)$. If every discarded singular value is zero, then $A_\tau=A$ and $x_\tau$ is the unique minimum-norm least-squares solution for the original matrix. If a positive singular value is discarded, no original-matrix least-squares optimality is asserted.

## Facts & Assumptions

**Given:** An exact SVD, threshold $\tau$, right-hand side $b$, and the associated truncated matrix and pseudoinverse.

[F1] [[thm-singular-value-decomposition]]: $A=U\Sigma V^*$ with orthonormal singular vectors and nonnegative diagonal singular values.

[F2] [[def-truncated-singular-value-pseudoinverse-at-a-declared-threshold]]: $A_\tau^+=V\Sigma_\tau^+U^*$, where diagonal entries are $1/\sigma_i$ for $\sigma_i>\tau$ and zero otherwise.

[F3] [[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]: for any matrix $M$ and right-hand side $b$, $M^+b$ is the unique least-squares solution of minimum Euclidean norm.

[F4] [[thm-eckart-young-best-rank-k-approximation]]: for $0\le q<n$, the SVD truncation to rank at most $q$ has spectral residual $\sigma_{q+1}$, including the stated zero-tail convention.

[F5] [[prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex]]: for $m,n\ge1$, the spectral numerical rank at threshold $\tau$ counts precisely the singular values strictly greater than $\tau$.

[F6] [[def-moore-penrose-pseudoinverse]] and [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: the four Penrose equations define the Moore--Penrose pseudoinverse, and every finite real or complex matrix has a unique matrix satisfying them.

[F7] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the matrix operator norm is zero on a zero domain and is the maximum of $\|Mx\|_2$ over unit vectors otherwise. Thus $\|Mx\|_2\le\|M\|_2\|x\|_2$ for every vector $x$ by scaling when $x\ne0$, and directly when $x=0$.

[F8] [[cor-triangle-inequality-for-inner-product-norm]]: the Euclidean vector norm satisfies $\|u+v\|_2\le\|u\|_2+\|v\|_2$.

[F9] [[def-numerical-rank-relative-to-a-norm-scale-and-tolerance]] defines numerical rank as the least rank of a matrix within the declared norm tolerance, for all finite matrix dimensions, including zero.

[F10] [[alg-rank-thresholded-least-squares-by-svd]]: on exact-arithmetic convergence with the returned SVD record the procedure computes $x_\tau=A_\tau^+b$; a failure or exhausted sweep budget returns `inconclusive`.

## Proof

1.1 Let $I=\{i\le p:\sigma_i>\tau\}$. By [F1]–[F2], $A_\tau=\sum_{i\in I}\sigma_i u_i v_i^*$ and $A_\tau^+=\sum_{i\in I}\sigma_i^{-1}v_i u_i^*$. Orthonormality gives $A_\tau A_\tau^+=\sum_{i\in I}u_i u_i^*$ and $A_\tau^+A_\tau=\sum_{i\in I}v_i v_i^*$, which are self-adjoint. Using $u_i^*u_j=v_i^*v_j=\delta_{ij}$ in those sums verifies the two Penrose product equations. Together with self-adjointness, these are the four equations; by [F6], $A_\tau^+$ is the unique Moore--Penrose pseudoinverse of $A_\tau$. The calculation includes $I=\varnothing$, when both matrices and sums are zero. [F1, F2, F6, algebra]

1.2 If $p=0$, the matrix has no singular-value terms, so $A_\tau=A$, $q=0$, and its spectral numerical rank is zero because $A$ has rank zero and distance zero from itself by [F9]. If $p>0$, [F5] identifies $q$ with the spectral numerical rank retained by the strict threshold. When $q<p$, one has $q<p\le n$, so [F4] applies with $k=q$ and gives $\|A-A_\tau\|_2=\sigma_{q+1}\le\tau$. When $q=p$, [F1] shows directly that all positive singular terms are retained, hence $A_\tau=A$ and the residual norm is zero, equal to the stated convention $\sigma_{p+1}=0$. This last branch also covers $p=0$ without applying [F4] or [F5] outside their dimension hypotheses. [F1, F4, F5, F7, F9, algebra]

2.1 Apply [F3] to $M=A_\tau$. Its unique minimum-norm least-squares solution is $A_\tau^+b=x_\tau$, proving the truncated-model claim independently of any iteration budget. For an exact-arithmetic run converging within its supplied budget and returning the stated SVD record, [F10] identifies this vector as the returned solution; the failure branches return `inconclusive`. [step 1.1, F3, F10]

2.2 By [F7], $\|(A-A_\tau)x_\tau\|_2\le\|A-A_\tau\|_2\|x_\tau\|_2$; [F8] gives $\|Ax_\tau-b\|_2\le\|A_\tau x_\tau-b\|_2+\|(A-A_\tau)x_\tau\|_2$. Combining with step 1.2 proves the stated residual bound. [step 1.2, F7, F8, algebra]

3.1 If every discarded singular value is zero, the SVD formula gives $A=A_\tau$, so step 2.1 is the original-matrix solution. If any positive singular value is discarded, the proof has established optimality only for $A_\tau$; it supplies no normal-equation or minimum-residual claim for $A$. [step 2.1, step 1.2, algebra]

4.1 Steps 1.1, 1.2, 2.1, 2.2, and 3.1 prove all stated claims and the limitation. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎
