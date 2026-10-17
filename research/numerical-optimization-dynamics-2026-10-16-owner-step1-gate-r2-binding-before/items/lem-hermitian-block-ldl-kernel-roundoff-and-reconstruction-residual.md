---
id: lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual
kind: lemma
title: Hermitian block LDL* kernels have explicit roundoff and actual-factor residual bounds
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- alg-certified-hermitian-one-and-two-by-two-ldl-kernel
- lem-rounded-linear-and-normal-residual-certificates
- def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Jennifer Scott and Miroslav Tůma, Algorithms for Sparse Linear Systems, Chapter 7, §§7.2.4 and 7.3
    url: https://library.oapen.org/bitstream/20.500.12657/62987/1/978-3-031-25820-6.pdf
  - title: Timothy A. Davis, Siva Rajamanickam, and Wissam M. Sid-Lakhdar, A survey of direct methods for sparse linear systems,
      §11
    url: https://people.engr.tamu.edu/davis/publications_files/survey_tech_report.pdf
proof_strategy: direct
dependency_level: 2
---

## Statement

For a successful [[alg-certified-hermitian-one-and-two-by-two-ldl-kernel]], let $k\in\{1,2\}$ and $t$ be its trailing dimension. Every accepted $D$ is nonsingular and satisfies the original exact componentwise threshold test. For either size put $g_j=(1+6u)/(1-(j-1)u)-1$ for $j=1,2$. For $k=1$ put $\omega_1=u$. For $k=2$ put
$$\mu=\frac{\epsilon_d}{|\widehat d|}<1,\quad \nu=\sqrt2u(1+\mu)+\mu,$$
$$\chi=u+(1+u)(\sqrt2g_2(1+u)+u),\qquad \omega_2=\nu+\chi(1+\nu).$$
For either size define
$$q_k=(1+u)(1+g_k)(1+\omega_k)-1,\quad e_M=\omega_k\|B\|_F\|D^{-1}\|_2,$$
$$\beta=\sqrt2\bigl(u\|C\|_F+q_k\|B\|_F^2\|D^{-1}\|_2\bigr),\qquad \eta_{k,t}=\sqrt2\max\{u\sqrt t,kq_k\}.$$
Then, writing $M=BD^{-1}$ and $\Delta=\widehat S-(C-BD^{-1}B^*)$,
$$\|\widehat M-M\|_F\le e_M,\qquad \|\Delta\|_2\le\beta\le\eta_{k,t}(\|C\|_2+\|B\|_2^2\|D^{-1}\|_2).$$
For $t=0$ all residuals are zero and use $e_M=\beta=\eta_{k,0}=0$. The coefficients are explicit unit-roundoff bounds, $O(u)$ at fixed nonzero normalized determinant as $u\to0$; near-singular scaled pivots have no uniform smallness guarantee.

The actual stored multipliers also have coupling residual $N=\widehat MD-B$. Set $\widehat T=\begin{pmatrix}I&0\\\widehat M&I\end{pmatrix}$. The full reconstruction residual satisfies
$$F=\begin{pmatrix}D&B^*\\B&C\end{pmatrix}-\widehat T\operatorname{diag}(D,\widehat S)\widehat T^*=\begin{pmatrix}0&-N^*\\-N&-\Delta-(\widehat M-M)B^*-\widehat MN^*\end{pmatrix},$$
$$\|F\|_2\le f:=\beta+e_M\|B\|_2+(1+\|\widehat M\|_2)e_M\|D\|_2.$$
This additional residual is necessary for actual rounded output factors; the trailing-only residual applies to conceptual exact multipliers.

## Facts & Assumptions

**Given:** The stated successful kernel, its finite pivot certificates and no-underflow operations; $0<u<1$. Norms in a certificate are exact or rigorously bounded.

[F1] [[alg-certified-hermitian-one-and-two-by-two-ldl-kernel]] fixes real-component divisions, determinant order, threshold certificates and Hermitian storage.

[F2] [[lem-rounded-linear-and-normal-residual-certificates]] proves that a successful complex length-$j$ dot has discrepancy at most $g_j$ times its absolute-product sum, including exact zeros.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] supplies the induced Euclidean norm; Cauchy-Schwarz gives submultiplicativity and $\|X\|_2\le\|X\|_F$.

## Proof

1.1 For two-by-two $D$, put $E=D/s$ and $J=\operatorname{adj}(E)$. Each real component of $E$ has magnitude at most one. Expansion of the determinant computation multiplies each of its three quadratic terms by at most five factors $1+\delta_i$, $|\delta_i|\le u$, including scaling. For $0<u<1$, the coefficient deviation is at most $(1+u)^5-1$, since the lower deviation $1-(1-u)^5$ is no greater. Also $|E_{11}E_{22}|+(\operatorname{Re}E_{12})^2+(\operatorname{Im}E_{12})^2\le3$. Thus $|\widehat d-\det E|\le\epsilon_d$. Acceptance gives $\det E\ne0$. The entrywise scaling bound $|J-\widehat J|\le u|J|$ implies $|J|\le|\widehat J|/(1-u)$ and $|J|\ge|\widehat J|/(1+u)$. The algorithm's $U,V$ therefore bound $|D^{-1}|$ above and below. The modulus guard follows by expanding its scaled sum, square root and rescaling, giving relative factors between $(1-u)^4$ and $(1+u)^4$. The resulting maximum/product interval tests prove exact acceptance or definite threshold failure; unresolved cases are explicitly inconclusive. Scalar pivots satisfy the same scalar threshold argument. [given, F1, algebra]

1.2 Define $R=\widehat J/(s\widehat d)$ for analysis only. Scaling gives $\|\widehat J-J\|_F\le u\|J\|_F\le\sqrt2u\|J\|_2$. The inverse formula gives $\|D^{-1}\|_2=\|J\|_2/(s|\det E|)$, and step 1.1 gives $|\det E|/|\widehat d|\le1+\mu$. Subtract the two inverse expressions to obtain $\|R-D^{-1}\|_2\le\nu\|D^{-1}\|_2$ and $\|R\|_2\le(1+\nu)\|D^{-1}\|_2$. This retains the actual scaled-determinant sensitivity. [F3, step 1.1, algebra]

2.1 The computed $B/s$ has Frobenius error at most $u\|B\|_F/s$. By [F2], its product with $\widehat J$ adds at most $g_2(1+u)\|B\|_F\|\widehat J\|_F/s$. Since $\|\widehat J\|_F\le\sqrt2\|\widehat J\|_2$, the product discrepancy relative to $B\widehat J/s$ is at most $(\sqrt2g_2(1+u)+u)\|B\|_F\|\widehat J\|_2/s$. Final real-component division adds the factor $1+u$ to that error and at most $u\|BR\|_F$. Thus $\|\widehat M-BR\|_F\le\chi\|B\|_F\|R\|_2$. Step 1.2 proves the stated $e_M$ and $\|\widehat M\|_F\le(1+\omega_2)\|B\|_F\|D^{-1}\|_2$. For a scalar pivot the direct real-component divisions instead give these bounds with $\omega_1=u$. [F1, F2, F3, step 1.2, algebra]

2.2 The update dot bound [F2] gives $\|\widehat Z-\widehat MB^*\|_F\le g_k\|\widehat M\|_F\|B\|_F$. Replacing $\widehat M$ by $M$ adds at most $e_M\|B\|_2$. Final subtraction adds at most $u(\|C\|_F+\|\widehat Z\|_F)$. Combining these with step 2.1 gives raw Schur error at most $u\|C\|_F+q_k\|B\|_F^2\|D^{-1}\|_2$. The exact Schur complement is Hermitian. Copying one chosen computed triangle doubles at most the squared Frobenius error; projecting the diagonal to its real part decreases error. Thus $\|\Delta\|_2\le\beta$. Finally $\|C\|_F\le\sqrt t\|C\|_2$ and $\|B\|_F^2\le k\|B\|_2^2$, proving the stated $\eta_{k,t}$ bound. Empty trailing arrays have zero residual. [F1, F2, F3, step 2.1, algebra]

3.1 Put $H=\widehat M-M$. Direct block multiplication gives the displayed full residual, because $N=HD$ and $\widehat MD\widehat M^*-MB^*=HB^*+\widehat MN^*$. The Hermitian off-diagonal matrix $\begin{pmatrix}0&N^*\\N&0\end{pmatrix}$ has norm $\|N\|_2$: its square is block diagonal with $N^*N,NN^*$, or equivalently use the defining singular-value maximum. Also $\|N\|_2\le e_M\|D\|_2$. Triangle inequality and step 2.2 therefore give $\|F\|_2\le f$. Every coefficient is an explicit finite function under successful certification, and tends to zero linearly for a fixed nonsingular normalized pivot as $u\to0$. [F3, step 2.1, step 2.2, algebra] ∎
