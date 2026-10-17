---
id: ex-sor-iteration-for-a-positive-definite-matrix-with-omega-in-zero-two
kind: example
title: "SOR on a positive-definite system with relaxation parameter in (0, 2)"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-sor-stationary-iteration
  - thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two
  - def-cholesky-factorisation-with-positive-diagonal
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§4.1 and 4.2.4"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "Printed pp. 107–108 and 122: SOR recurrence and the positive-definite convergence interval."
---

## Example

Take

$$A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix},\qquad b=0,\qquad x^{(0)}=\binom10,\qquad \omega=\frac32.$$

The matrix is positive definite and $\omega\in(0,2)$. For the fixed order
$1,2$, the SOR iteration matrix is

$$G_\omega=\begin{pmatrix}-1/2&3/4\\-3/8&1/16\end{pmatrix},$$

with eigenvalues $(-7\pm i\sqrt{207})/32$, both of modulus $1/2$. Thus the
error converges to zero for every initial vector.

## Facts & Assumptions

**Given:** The displayed matrix, right-hand side, initial vector, and
relaxation parameter.

[F1] SOR uses $M_\omega=\omega^{-1}D-L$ and
$N_\omega=(\omega^{-1}-1)D+L^*$
([[alg-sor-stationary-iteration]]).

[L1] For Hermitian $A$ with positive diagonal, SOR converges for every start
if and only if $A$ is positive definite and $0<\omega<2$
([[thm-sor-converges-iff-a-is-positive-definite-and-zero-less-than-omega-less-than-two]]).

[L2] Hermitian positive definite means $A=A^*$ and $z^*Az>0$ for every
nonzero $z$ ([[def-cholesky-factorisation-with-positive-diagonal]]).

## Verification


1.1 For $z=(z_1,z_2)^T$, $z^*Az=|z_1|^2+|z_2|^2+|z_1-z_2|^2$, so [L2] shows that $A$ is positive definite; its diagonal is positive and $0<3/2<2$. [given, L2, algebra]

1.2 Here $D=2I$, $L_{21}=1$, and $U=L^*$. By [F1], $M_\omega=\begin{pmatrix}4/3&0\\-1&4/3\end{pmatrix}$ and $N_\omega=\begin{pmatrix}-2/3&1\\0&-2/3\end{pmatrix}$, hence $G_\omega=M_\omega^{-1}N_\omega= \begin{pmatrix}-1/2&3/4\\-3/8&1/16\end{pmatrix}$. Its characteristic polynomial is $\lambda^2+(7/16)\lambda+1/4$, whose roots are $(-7\pm i\sqrt{207})/32$ and have modulus $1/2$. [F1, algebra]

2.1 The hypotheses of [L1] hold by step 1.1, so SOR converges for every start; in particular the stated start converges to the solution $0$. [L1, step 1.1, step 1.2] ∎
