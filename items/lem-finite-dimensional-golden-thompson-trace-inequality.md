---
id: lem-finite-dimensional-golden-thompson-trace-inequality
kind: lemma
title: Finite-dimensional Golden–Thompson trace inequality
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - thm-hadamard-three-lines
  - thm-singular-value-decomposition
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-trace-of-a-square-matrix
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: The proof uses only finite-dimensional constructions and requires no choice axiom.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Joel A. Tropp, An Introduction to Matrix Concentration Inequalities, §3.3, equation (3.3.3), printed p.34"
      url: "https://arxiv.org/pdf/1501.01571"
proof_strategy: direct
---

## Statement

For Hermitian matrices $H,K\in\mathbb C^{p\times p}$ with $p\ge1$,
$$\operatorname{tr}\exp(H+K)\le\operatorname{tr}\bigl(\exp(H)\exp(K)\bigr).$$
Here $\exp(A)=\sum_{j=0}^{\infty}A^j/j!$ is the norm-convergent finite-matrix exponential series. No commutativity assumption is imposed.

## Facts & Assumptions

**Given:** The Hermitian matrices $H,K$ and the usual Euclidean operator norm. The trace is the sum of diagonal entries as in [[def-trace-of-a-square-matrix]].

[F1] The finite singular value decomposition is supplied by [[thm-singular-value-decomposition]]. If $s_j(A)$ are the singular values, set $\|A\|_q=(\sum_j s_j(A)^q)^{1/q}$ for $q\ge1$. The operator norm is the largest singular value; this follows immediately by applying the diagonal singular-value matrix to a unit vector. Unitary multiplication preserves these norms.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] supplies orthonormal eigenbases for Hermitian matrices. In particular $\exp(itH)$ is unitary for real $t$, and $\exp(H)$ is positive definite. The exponential series converges uniformly on every norm-bounded matrix set, because $\|A^j/j!\|\le\|A\|^j/j!$; thus it is continuous and its entries are entire functions of a scalar complex multiplier.

[F3] [[thm-hadamard-three-lines]]: a bounded continuous scalar function on $0\le\operatorname{Re}z\le1$ that is holomorphic inside and has boundary moduli at most $M_0,M_1$ satisfies $|f(s)|\le M_0^{1-s}M_1^s$ for $0<s<1$.

## Proof

**Proof technique:** direct.

1.1 We first record two elementary trace estimates. If $A=U\operatorname{diag}(a_j)V^*$ is a singular value decomposition, cyclically expanding the finite diagonal sum gives $\operatorname{tr}(AB)=\sum_j a_j\langle V^*BUe_j,e_j\rangle$, so $|\operatorname{tr}(AB)|\le\|A\|_1\|B\|_{\rm op}$. Also $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}$, so scalar Cauchy–Schwarz gives $|\operatorname{tr}(AB)|\le\|A\|_2\|B\|_2$, since $\|A\|_2^2=\operatorname{tr}(A^*A)=\sum_{i,j}|A_{ij}|^2$ by the singular value decomposition. These arguments also prove the trace cyclicity used here by interchanging two finite sums. [F1, given, algebra]

1.2 Set $F(z)=\exp(zH/2)\exp(zK/2)$ and $M=\|\exp(H/2)\exp(K/2)\|_2>0$. The function $F$ is entrywise entire and uniformly bounded on the closed strip: for $z=x+iy$ each exponential is the product of a bounded positive real exponential with a unitary imaginary exponential of the same Hermitian matrix. On the line $x=0$, $\|F(iy)\|_{\rm op}=1$. On $x=1$, the identity $F(1+iy)=\exp(iyH/2)\exp(H/2)\exp(K/2)\exp(iyK/2)$ and unitary invariance give $\|F(1+iy)\|_2=M$. [F1, F2, algebra]

1.3 We need a finite eigenvalue comparison only for a diagonalizable invertible matrix $A$. Order its eigenvalue moduli and its singular values decreasingly. For $1\le k\le p$, the $k$th exterior space has the orthonormal wedge basis $e_{j_1}\wedge\cdots\wedge e_{j_k}$, $j_1<\cdots<j_k$, and its induced map sends a wedge to the wedge of the images. This defines the finite matrix $\bigwedge^k A$ directly by multilinearity and alternation. The singular value decomposition makes its norm $\prod_{j=1}^k s_j(A)$: wedges of the two singular-vector orthonormal bases give diagonal coefficients consisting of all $k$-fold singular-value products. Wedges of the first $k$ independent eigenvectors are nonzero eigenvectors with eigenvalue $\prod_{j=1}^k\lambda_j(A)$; nonvanishing follows by expanding independent vectors in a basis and noting that some $k$-minor is nonzero. The norm bounds the modulus of an eigenvalue, proving $\prod_{j=1}^k|\lambda_j(A)|\le\prod_{j=1}^k s_j(A)$. This uses only finite bases and finite determinants. [F1, construct, algebra]

2.1 Fix $0<s<1$, put $q=2/s$ and $q'=2/(2-s)$, and choose a singular value decomposition $F(s)=U\operatorname{diag}(a_j)V^*$. All $a_j$ are positive because $F(s)$ is invertible. Set $N=(\sum_j a_j^q)^{1/q}>0$ and $b_j=(a_j/N)^{q-1}$, so $\sum_j b_j^{q'}=1$. Define $G(z)=V\operatorname{diag}(\exp(q'(1-z/2)\log b_j))U^*$ and $g(z)=\operatorname{tr}(G(z)F(z))$. These functions are continuous and bounded on the closed strip and holomorphic inside: their entries are finite sums of entire exponentials and their moduli are bounded uniformly in the imaginary coordinate. On its left boundary $\|G(iy)\|_1=\sum_j b_j^{q'}=1$, and on its right boundary $\|G(1+iy)\|_2=(\sum_j b_j^{q'})^{1/2}=1$. The two trace estimates of step 1.1 therefore bound $|g|$ by $1$ and $M$ on the respective boundaries. Since $q'(1-s/2)=1$, one has $g(s)=\sum_j a_jb_j=N$. Applying [F3] yields $\|F(s)\|_{2/s}\le M^s$. [F1, F2, F3, step 1.1, step 1.2, construct, algebra]

2.2 Put $x_j=\log|\lambda_j(A)|$ and $y_j=\log s_j(A)$ in decreasing order. Step 1.3 gives $\sum_{j=1}^k x_j\le\sum_{j=1}^k y_j$ for every $k$. For any real $u$, the positive terms form an initial segment, so $\sum_j(x_j-u)_+=\max_{0\le k\le p}(\sum_{j=1}^k x_j-ku)\le\sum_j(y_j-u)_+$. For every $c>0$, multiply by $c^2e^{cu}$ and integrate: $c^2\int_{-\infty}^x(x-u)e^{cu}\,du=e^{cx}$, as follows by evaluating the elementary exponential primitive at finite lower limits and sending that limit to $-\infty$. The finite sums can be integrated termwise and all integrands are nonnegative, giving $\sum_j|\lambda_j(A)|^c\le\sum_j s_j(A)^c$. [step 1.3, algebra]

3.1 For each integer $n\ge2$, let $A_n=F(1/n)$. It is similar to the positive definite matrix $\exp(K/4n)\exp(H/2n)\exp(K/4n)$, since conjugating $A_n$ by $\exp(K/4n)$ gives that matrix. Thus [F2] makes $A_n$ diagonalizable with positive eigenvalues. Apply step 2.2 with $c=2n$ and step 2.1 with $s=1/n$ to obtain $\operatorname{tr}(A_n^{2n})\le\sum_j s_j(A_n)^{2n}=\|A_n\|_{2n}^{2n}\le M^2$. [F2, step 1.2, step 2.1, step 2.2, algebra]

4.1 The exponential series gives $A_n=I+(H+K)/(2n)+O(n^{-2})$ and $B_n:=\exp((H+K)/(2n))=I+(H+K)/(2n)+O(n^{-2})$ in operator norm, where the constants depend only on the fixed matrices. Also $\|A_n\|,\|B_n\|\le e^{c/n}$ for one fixed $c$. The telescoping identity $A^N-B^N=\sum_{j=0}^{N-1}A^j(A-B)B^{N-1-j}$, valid by cancellation without commutativity, gives $\|A_n^{2n}-B_n^{2n}\|=O(n^{-1})$. The addition law for exponential series of scalar multiples of one matrix gives $B_n^{2n}=\exp(H+K)$. Therefore $\operatorname{tr}\exp(H+K)=\lim_n\operatorname{tr}(A_n^{2n})\le M^2=\operatorname{tr}(\exp(H)\exp(K))$, using $|\operatorname{tr}C|\le p\|C\|_{\rm op}$ and cyclicity to evaluate the Hilbert–Schmidt square $M^2$. This is the claimed inequality. [F1, F2, step 1.1, step 3.1, algebra] ∎
