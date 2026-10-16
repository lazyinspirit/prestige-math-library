---
id: ex-qc-dephasing-channel-kraus-choi
kind: example
title: "Qubit dephasing channel in Kraus and Choi forms"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, def-matrix-product-and-identity-matrix, def-non-negative-and-positive-operator, def-qc-density-operator, prop-standard-coordinate-inner-products, def-qc-choi-matrix, def-qc-kraus-representation, def-qc-partial-trace, thm-qc-partial-trace-characterization-and-basis-independence, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, thm-qc-trace-preserving-kraus-normalization, thm-qc-finite-kraus-choi-stinespring-equivalence]
justified_by: []
proof_strategy: direct
dependency_level: 9
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.4.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Example

Let $H=\mathbb C^2$ with standard basis $e_0,e_1$, let $0\le p\le1$, and
put $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$,
$K_0=\sqrt p\,I$, and $K_1=\sqrt{1-p}\,Z$, using the nonnegative real
square roots. For $\Phi(X)=K_0XK_0^\dagger+K_1XK_1^\dagger$, compute the
Kraus normalization, the action on a density matrix, and the Choi matrix in
the input-first/output-second convention. The map is a phase-flip family;
at $p=1/2$ it is the completely dephasing channel.

## Facts & Assumptions

**Given:** $p\in[0,1]$, $H=\mathbb C^2$ with its standard orthonormal basis,
$Z=\operatorname{diag}(1,-1)$, and the displayed finite Kraus family.

[F1] [[prop-standard-coordinate-inner-products]]: $(e_0,e_1)$ is
orthonormal.

[F2] [[def-qc-kraus-representation]]: $\Phi(X)=\sum_{j=0}^1K_jXK_j^\dagger$.

[F3] [[def-qc-choi-matrix]]: $J(\Phi)=\sum_{i,j=0}^1E_{ij}\otimes\Phi(E_{ij})$, with input first.

[F4] [[thm-qc-finite-kraus-choi-stinespring-equivalence]]: a map is a
channel exactly when its Choi operator is non-negative and its output partial
trace is the input identity; the finite Kraus and Stinespring conditions are
equivalent as well.

[F5] [[thm-qc-trace-preserving-kraus-normalization]]: the Kraus sum is
trace-preserving when its adjoint-square sum is the identity.

[F6] [[def-non-negative-and-positive-operator]]: non-negativity means
self-adjointness and nonnegative quadratic form.

[F7] [[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]: in the standard
orthonormal basis the adjoint matrix is the conjugate transpose.

[F8] [[def-matrix-product-and-identity-matrix]]: matrix products use finite
row-by-column sums.

[F9] [[def-qc-partial-trace]] and
[[thm-qc-partial-trace-characterization-and-basis-independence]]: for the
input-first/output-second basis, the output partial trace sums entries with
the same output index.

[F10] [[lem-qc-tensor-product-basis-and-dimension]]: the ordered product
basis of $H\otimes H$ is orthonormal and has dimension four.

[F11] [[def-qc-density-operator]]: a density operator is a non-negative
endomorphism with trace one.

## Verification


1.1 The matrix $Z$ is real and diagonal, so [F7] gives $Z^\dagger=Z$ and $Z^2=I$ by direct multiplication [F8]. Thus $K_0^\dagger K_0+K_1^\dagger K_1=pI+(1-p)I=I$, and [F5] makes $\Phi$ trace-preserving on all operators. By [F11], a density operator $\rho$ is non-negative and has trace one. Self-adjointness gives the matrix form $\rho=\begin{pmatrix}a&b\\\overline b&d\end{pmatrix}$ with real $a,d$; non-negativity applied to $e_0,e_1$ gives $a,d\ge0$, and trace one gives $a+d=1$. Direct multiplication gives $\Phi(\rho)=p\rho+(1-p)Z\rho Z= \begin{pmatrix}a&(2p-1)b\\(2p-1)\overline b&d\end{pmatrix}$. For every $x$, its quadratic form is $\langle\Phi(\rho)x,x\rangle= p\langle\rho x,x\rangle+(1-p)\langle\rho Zx,Zx\rangle\ge0$; the displayed matrix is self-adjoint, and its trace is $a+d=1$. Thus the output is a density operator. These formulas include $p=0$ and $p=1$. [given, F1, F2, F5, F6, F7, F8, F11, algebra]

1.2 Put $\lambda=2p-1$. Direct application of $Z$ to the four matrix units gives $\Phi(E_{00})=E_{00}$, $\Phi(E_{11})=E_{11}$, $\Phi(E_{01})=\lambda E_{01}$, and $\Phi(E_{10})=\lambda E_{10}$. By [F3], in the ordered basis $(e_0\otimes e_0,e_0\otimes e_1,e_1\otimes e_0,e_1\otimes e_1)$, $$J(\Phi)=\begin{pmatrix}1&0&0&\lambda\\0&0&0&0\\0&0&0&0\\\lambda&0&0&1\end{pmatrix}.$$ The vectors $(e_0\otimes e_0\pm e_1\otimes e_1)/\sqrt2$ have eigenvalues $1\pm\lambda=2p,2(1-p)$, and the other two product basis vectors have eigenvalue zero. Since $p\in[0,1]$, every eigenvalue is nonnegative; the matrix is self-adjoint, so [F6] makes $J(\Phi)$ non-negative. [given, F1, F3, F6, F8, F10, algebra]

2.1 In the product basis, the output partial-trace entry $(i,j)$ is $\sum_{\alpha=0}^1J(\Phi)_{(i,\alpha),(j,\alpha)}$ by [F9]. The displayed matrix in step 1.2 therefore gives diagonal entries $1,1$ and off-diagonal entries $0,0$, so $\operatorname{Tr}_KJ(\Phi)=I_H$. The Choi positivity from step 1.2 and this partial-trace identity imply by [F4] that $\Phi$ is a channel; step 1.1 separately verifies the Kraus normalization and density matrix action required in the Example. [given, F4, F9, F10, step 1.1, step 1.2, algebra] ∎

