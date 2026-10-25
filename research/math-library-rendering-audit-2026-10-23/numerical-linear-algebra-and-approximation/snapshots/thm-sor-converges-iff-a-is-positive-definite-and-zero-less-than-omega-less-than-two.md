---
id: thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two
kind: theorem
title: "SOR converges exactly for positive-definite A and relaxation parameter in (0, 2)"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-diagonal-lower-upper-splitting-convention
  - alg-sor-stationary-iteration
  - def-stationary-iteration-from-a-matrix-splitting
  - thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - thm-determinant-is-product-of-eigenvalues
  - thm-the-complex-numbers-are-algebraically-closed
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §4.2.4"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed p. 122, Theorem 4.10: for symmetric A with positive diagonal and 0<ω<2, SOR converges for every start iff A is positive definite. The local proof below also verifies the Hermitian extension."
    - title: "Rutgers University MATH 574, Lecture Notes, §3 Matrix iterative methods"
      url: "https://sites.math.rutgers.edu/~falk/math574/lecture4.pdf"
      locator: "PDF pp. 3–4, Theorems 10–11: the necessary relaxation range and the positive-definite sufficient condition."
    - title: "David Bindel, Matrix Computations (CS 6210), Cornell University, Fall 2012, Lecture 31"
      url: "https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec31.pdf"
      locator: "PDF p. 5: SOR is defined as relaxation of the fixed-order Gauss–Seidel sweep; this source is used for the recurrence, not the iff theorem."
---

## Statement

Let $n\ge1$, $A\in M_n(\mathbb C)$ be Hermitian with strictly positive
diagonal, and let $\omega\in\mathbb R\setminus\{0\}$. Write
$A=D-L-L^*$ by [[def-diagonal-lower-upper-splitting-convention]], and define

$$M_\omega=\omega^{-1}D-L,\qquad N_\omega=(\omega^{-1}-1)D+L^*,\qquad G_\omega=M_\omega^{-1}N_\omega.$$

The SOR iteration is $x^{(k+1)}=G_\omega x^{(k)}+M_\omega^{-1}b$. It converges
to the unique solution of $Ax=b$ for every $b,x^{(0)}\in\mathbb C^n$ if and
only if $A$ is positive definite (meaning $x^*Ax>0$ for every nonzero $x$)
and $0<\omega<2$.

## Facts & Assumptions

**Given:** $n\ge1$, a Hermitian matrix $A$ with positive diagonal, a real
$\omega\ne0$, and arbitrary $b,x^{(0)}\in\mathbb C^n$.

[A1] $A=A^*$, $a_{ii}>0$, and $\omega\in\mathbb R\setminus\{0\}$.

[F1] SOR uses $M_\omega=\omega^{-1}D-L$ and
$N_\omega=(\omega^{-1}-1)D+L^*$
([[alg-sor-stationary-iteration]]).

[L1] The fixed diagonal/lower/upper convention gives $A=D-L-L^*$ for
Hermitian $A$ ([[def-diagonal-lower-upper-splitting-convention]]).

[L2] For an invertible matrix $M$ and $A=M-N$, the stationary update is
$x^{(k+1)}=M^{-1}Nx^{(k)}+M^{-1}b$
([[def-stationary-iteration-from-a-matrix-splitting]]).

[L3] This iteration converges to the unique solution for every right-hand
side and every start exactly when $\rho(M^{-1}N)<1$
([[thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]]).

[L4] Hermitian positive definite means $A=A^*$ and $x^*Ax>0$ for every
nonzero $x$ ([[def-cholesky-factorisation-with-positive-diagonal]]).

[L5] A lower-triangular system with nonzero diagonal has a unique forward
substitution solution ([[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]).

[L6] Determinants are multiplicative for same-sized square matrices over a
commutative ring ([[thm-determinant-multiplicative]]).

[L7] The determinant of a triangular matrix is the product of its diagonal
entries ([[thm-determinant-of-a-triangular-matrix]]).

[L8] When the characteristic polynomial splits as $\prod_i(t-\lambda_i)$,
the determinant is $\prod_i\lambda_i$
([[thm-determinant-is-product-of-eigenvalues]]).

[L9] Every complex polynomial splits over $\mathbb C$
([[thm-the-complex-numbers-are-algebraically-closed]]).

## Proof


1.1 By [A1] and [F1], $M_\omega$ is lower triangular with diagonal $a_{ii}/\omega\ne0$, hence invertible by [L5]. Also $A=M_\omega-N_\omega$ by [L1], so [L2] applies with iteration matrix $G_\omega$. The matrix $N_\omega$ is upper triangular with diagonal entries $(\omega^{-1}-1)a_{ii}$. Thus [L6]–[L7] give $\det(M_\omega)=\omega^{-n}\prod_i a_{ii}$ and $\det(N_\omega)=(\omega^{-1}-1)^n\prod_i a_{ii}$. From $M_\omega G_\omega=N_\omega$ and multiplicativity, $\det(G_\omega)=\det(N_\omega)/\det(M_\omega)=(1-\omega)^n$. [A1, F1, L1, L2, L5, L6, L7, algebra]

1.2 For sufficiency, suppose $A$ is positive definite and $0<\omega<2$. Then $Q:=M_\omega+M_\omega^*-A=(2/\omega-1)D$ is positive definite. For an eigenpair $G_\omega v=\lambda v$ with $v\ne0$, one has $\lambda\ne1$ since $Av=(1-\lambda)M_\omega v$ and $A$ is invertible. Put $a=v^*Av>0$. Then $v^*M_\omega v=a/(1-\lambda)$, so $v^*Qv=a\left(2\operatorname{Re}\frac{1}{1-\lambda}-1\right) =a\frac{1-|\lambda|^2}{|1-\lambda|^2}>0$. Therefore $|\lambda|<1$ for every eigenvalue and $\rho(G_\omega)<1$. [A1, F1, L1, L2, L4, algebra]

2.1 If SOR converges for every right-hand side and start, [L3] gives $\rho(G_\omega)<1$. By [L8]–[L9], $|\det(G_\omega)|=\prod_{j=1}^n|\lambda_j|\le\rho(G_\omega)^n<1$. Step 1.1 therefore gives $|1-\omega|<1$, which for real $\omega$ is equivalent to $0<\omega<2$. [L3, L8, L9, step 1.1, algebra]

2.2 Assume now that SOR converges for every right-hand side and start. Then $\rho(G_\omega)<1$ by [L3], so $1$ is not an eigenvalue of $G_\omega$ and $I-G_\omega$ is invertible. By [L2], $A=M_\omega(I-G_\omega)$ is invertible. For $b=0$, its unique solution is $x_*=0$. For arbitrary nonzero $e^{(0)}:=x^{(0)}$, set $e^{(k)}:=x^{(k)}-x_*=x^{(k)}$ and $\delta_k=e^{(k+1)}-e^{(k)}$. The homogeneous SOR recurrence gives $M_\omega e^{(k+1)}=N_\omega e^{(k)}$, hence $Ae^{(k)}+M_\omega\delta_k=0$. Expanding the Hermitian quadratic form gives $(e^{(k)})^*Ae^{(k)}-(e^{(k+1)})^*Ae^{(k+1)} =\delta_k^*(M_\omega+M_\omega^*-A)\delta_k =(2/\omega-1)\delta_k^*D\delta_k$. The last equality follows from [L1] and [F1]. [A1, F1, L1, L2, L3, step 1.1, algebra]

3.1 By step 2.1, $c:=2/\omega-1>0$. Summing the identity in step 2.2 from $k=0$ to $N-1$ and taking $N\to\infty$ (the error tends to $0$ by the assumed convergence) gives $(e^{(0)})^*Ae^{(0)}=c\sum_{k=0}^{\infty}\delta_k^*D\delta_k$. Moreover $\delta_0\ne0$: otherwise step 2.2 implies $Ae^{(0)}=0$, contrary to invertibility of $A$. Since $D$ has positive diagonal, the first summand is strictly positive and all others are nonnegative. Thus $(e^{(0)})^*Ae^{(0)}>0$ for every nonzero $e^{(0)}$, so [L4] gives that $A$ is positive definite. [A1, L3, L4, step 2.1, step 2.2, algebra]

4.1 By [L3], $\rho(G_\omega)<1$ implies convergence to the unique solution for every right-hand side and every initial vector. Steps 2.1 and 3.1 prove the reverse implication. [L3, step 2.1, step 3.1, step 1.2] ∎

## Remarks

The conclusion is exact-arithmetic asymptotic convergence; it is not a
one-step error decrease or a finite-precision accuracy guarantee. No
optimal-$\omega$ formula is asserted.
