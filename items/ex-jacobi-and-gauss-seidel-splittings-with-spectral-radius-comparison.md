---
id: ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison
kind: example
title: "Jacobi and Gauss-Seidel splittings can be compared by the spectral radii of their iteration matrices"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-stationary-iteration-from-a-matrix-splitting,
       thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gilbert Strang, 18.086 Mathematical Methods for Engineers II, Section 6.2 Iterative Methods"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/4bea2ab7b0fa37cd96f2ce442efa769d_am62.pdf"
---

## Example

For

$$A=\begin{pmatrix}4&1\\2&3\end{pmatrix},\qquad b=\binom11,\qquad x_0=\binom00,$$

compare the Jacobi splitting with

$$M_J=\begin{pmatrix}4&0\\0&3\end{pmatrix},\qquad N_J=\begin{pmatrix}0&-1\\-2&0\end{pmatrix},$$

and the Gauss-Seidel splitting with

$$M_G=\begin{pmatrix}4&0\\2&3\end{pmatrix},\qquad N_G=\begin{pmatrix}0&-1\\0&0\end{pmatrix}.$$

The Gauss-Seidel iteration matrix has the smaller spectral radius and the
faster visible error decay on this system.

## Facts & Assumptions

**Given:** The two displayed splittings of the same system.

[F1] A stationary splitting has iteration matrix $B=M^{-1}N$
([[def-stationary-iteration-from-a-matrix-splitting]]).

[L1] A stationary splitting converges for every start exactly when
$\rho(B)<1$
([[thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one]]).

## Verification
**Proof technique:** direct calculation.

1.1 By [F1], $$B_J=M_J^{-1}N_J=\begin{pmatrix}0&-1/4\\-2/3&0\end{pmatrix},\qquad B_G=M_G^{-1}N_G=\begin{pmatrix}0&-1/4\\0&1/6\end{pmatrix}.$$ The eigenvalues of $B_J$ are $\pm 1/\sqrt6$, so $\rho(B_J)=1/\sqrt6$, while the eigenvalues of $B_G$ are $0$ and $1/6$, so $\rho(B_G)=1/6$. Both are below $1$, and Gauss-Seidel has the smaller spectral radius. [F1, L1, algebra]

2.1 The exact solution is $x_*=(1/5,1/5)^T$. Jacobi gives $$x_1^{(J)}=\binom{1/4}{1/3},\qquad x_2^{(J)}=\binom{1/6}{1/6},$$ so $$\|x_1^{(J)}-x_*\|_\infty=\frac{2}{15},\qquad \|x_2^{(J)}-x_*\|_\infty=\frac{1}{30}.$$ Gauss-Seidel gives $$x_1^{(G)}=\binom{1/4}{1/6},\qquad x_2^{(G)}=\binom{5/24}{7/36},$$ so $$\|x_1^{(G)}-x_*\|_\infty=\frac1{20},\qquad \|x_2^{(G)}-x_*\|_\infty=\frac1{120}.$$ Thus the splitting with smaller spectral radius also shows faster observed error decay here, consistent with [L1]. [L1, step 1.1, algebra] ∎
