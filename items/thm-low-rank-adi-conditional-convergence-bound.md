---
id: thm-low-rank-adi-conditional-convergence-bound
kind: theorem
title: "A proved rational shift bound implies low-rank ADI convergence"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-low-rank-alternating-direction-implicit-lyapunov
  - thm-low-rank-adi-exact-residual-factor-identity
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-sylvester-residual-to-forward-error-bound
  - thm-continuous-lyapunov-integral-and-positivity
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-matrix-of-the-adjoint-is-the-conjugate-transpose
  - thm-determinant-of-transpose
  - lem-complex-conjugation-and-modulus-laws
  - def-determinant-of-a-square-matrix
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $A$ be Hurwitz, let $B\in F^{n\times r}$, and let $p_1,p_2,\ldots$ be admissible shifts for [[alg-low-rank-alternating-direction-implicit-lyapunov]]. Define

$$
\rho_j(z)=\prod_{i=1}^{j}\frac{z-\overline{p_i}}{z+p_i}.
$$

Suppose a proved rational shift estimate gives $\|\rho_j(A)\|_2\le\eta_j$ for a sequence $\eta_j\to0$. Then the ADI iterates converge in Frobenius norm to the unique integral solution $X=\int_0^\infty e^{tA}BB^*e^{tA^*}\,dt$, with

$$
\|X-X_j\|_F\le\frac{\eta_j^2\|B\|_F^2}{\operatorname{sep}(A,-A^*)}.
$$

No convergence assertion is made without this rational operator bound.

## Facts & Assumptions

**Given:** A Hurwitz matrix, a forcing factor $B$, admissible shifts, and the stated proved rational estimate.

[F1] [[alg-low-rank-alternating-direction-implicit-lyapunov]]: $R_0=B$, $R_j=R_{j-1}-2\operatorname{Re}(p_j)(A+p_jI)^{-1}R_{j-1}$.

[F2] [[thm-low-rank-adi-exact-residual-factor-identity]]: $AX_j+X_jA^*+BB^*=R_jR_j^*$.

[F3] [[thm-sylvester-unique-solvability-spectral-separation]]: The operator $X\mapsto AX+XB$ is invertible exactly when $\sigma(A)\cap(-\sigma(B))=\varnothing$, equivalently when $\operatorname{sep}(A,-B)>0$.

[F4] [[thm-sylvester-residual-to-forward-error-bound]]: For a unique Sylvester solution, the Frobenius forward error is at most the Frobenius equation residual divided by separation.

[F5] [[thm-continuous-lyapunov-integral-and-positivity]]: For Hurwitz $A$, the integral $X$ exists uniquely and satisfies $AX+XA^*+BB^*=0$.

[F6] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: The Frobenius norm is unitarily invariant and its square is the sum of squared singular values.

[F7] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: In the standard orthonormal basis, the matrix of the adjoint is the conjugate transpose.

[F8] [[thm-determinant-of-transpose]]: Transposition preserves the determinant.

[F9] [[lem-complex-conjugation-and-modulus-laws]]: Complex conjugation is a field automorphism.

[F10] [[def-determinant-of-a-square-matrix]]: The determinant is given by the signed Leibniz formula.

[A1] For every $j$, the chosen shifts satisfy the operator rational estimate $\|\rho_j(A)\|_2\le\eta_j$, with $\eta_j\to0$.

## Proof


1.1 From [F1], $R_j=\left(I-2\operatorname{Re}(p_j)(A+p_jI)^{-1}\right)R_{j-1}=(A-\overline{p_j}I)(A+p_jI)^{-1}R_{j-1}$, since $-2\operatorname{Re}(p_j)=-(p_j+\overline{p_j})$. All factors are rational functions of $A$ and commute, so iterating gives $R_j=\rho_j(A)B$. [F1, algebra]

1.2 In the standard orthonormal basis, [F7] represents $A^*$ by $\overline A^{\mathsf T}$. For $z\in\mathbb C$, [F8] and [F10] give $\det(zI-A^*)=\det((zI-\overline A)^{\mathsf T})=\det(zI-\overline A)$, and [F9] applied to the Leibniz formula gives $\det(zI-\overline A)=\overline{\det(\overline z I-A)}$. Hence $\sigma(A^*)=\overline{\sigma(A)}$, so both $A$ and $A^*$ have spectrum in the open left half-plane; therefore $\sigma(A)\cap(-\sigma(A^*))=\varnothing$. By [F3], $\operatorname{sep}(A,-A^*)>0$. Subtracting the equation for $X_j$ in [F2] from the exact equation in [F5] gives $\mathcal S_{A,A^*}(X-X_j)=-R_jR_j^*$. [F2, F3, F5, F7, F8, F9, F10, algebra]

2.1 Applying the operator bound in [A1] to each column of $B$ and summing squared column norms gives $\|R_j\|_F\le\eta_j\|B\|_F$. [A1, step 1.1, algebra]

3.1 Apply [F4] to step 1.2. If $R_j=U\Sigma V^*$ is an SVD, then $R_jR_j^*=U\Sigma\Sigma^*U^*$, so unitary invariance and [F6] give $\|R_jR_j^*\|_F^2=\sum_i s_i(R_j)^4\le(\sum_i s_i(R_j)^2)^2=\|R_j\|_F^4$. Therefore $\|X-X_j\|_F\le\|R_jR_j^*\|_F/\operatorname{sep}(A,-A^*)\le\eta_j^2\|B\|_F^2/\operatorname{sep}(A,-A^*)$. Since $\eta_j\to0$ and the separation is positive, the right side tends to zero. [F4, F5, F6, step 2.1, step 1.2, algebra] ∎
