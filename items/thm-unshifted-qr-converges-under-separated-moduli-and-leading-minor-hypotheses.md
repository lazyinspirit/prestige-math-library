---
id: thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses
kind: theorem
title: "Under separated moduli and leading-minor hypotheses, unshifted QR drives the strict lower triangle to zero and orders the eigenvalues on the diagonal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-diagonalisable-endomorphism,
       prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity,
       thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$ and let
$A=X\Lambda X^{-1}\in M_n(\mathbb F)$ be diagonalisable, with
$|\lambda_1|>|\lambda_2|>\cdots>|\lambda_n|>0$, and suppose every leading
principal minor of $X^{-1}$ is nonzero. At every step choose the QR
factorisation $A_k=Q_kR_k$ with each diagonal entry of $R_k$ positive real.
Then
$$(A_k)_{ij}\longrightarrow0\quad(i>j),\qquad (A_k)_{jj}\longrightarrow\lambda_j\quad(1\le j\le n).$$
Thus the iterates converge to triangular form with the eigenvalues ordered on
the diagonal. The upper-triangular entries need not themselves converge.

## Facts & Assumptions

**Given:** A diagonalisable invertible matrix $A=X\Lambda X^{-1}$ with distinct
eigenvalue moduli, nonzero leading principal minors of $X^{-1}$, and the
positive-real-diagonal QR convention from the statement.

[L1] Unshifted QR is orthonormalised simultaneous iteration, and $A_k=\widehat Q_k^*A\widehat Q_k$ ([[prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity]]).

[L2] Subspace iteration converges to the dominant invariant subspace under a spectral gap and nondegenerate initial projection ([[thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap]]).

[L3] A diagonalisable matrix admits an eigenbasis ([[def-diagonalisable-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For each $j=1,\dots,n-1$, apply [L2] to the first $j$ columns of the simultaneous-iteration frame from [L1]. In eigenvector coordinates, the initial frame is $X^{-1}[e_1\ \cdots\ e_j]$; its leading $j\times j$ coefficient block is the leading principal block of $X^{-1}$ and is invertible by hypothesis. [L1, L2, L3, algebra]
2.1 Because $|\lambda_j|>|\lambda_{j+1}|$ for every $j$, each dominant $j$-dimensional invariant subspace is unique. Step 1.1 therefore shows that, for every $j$, the span $S_{j,k}$ of the first $j$ columns of $\widehat Q_k$ converges to $E_j:=\operatorname{span}(v_1,\dots,v_j)$. Thus the orthonormal frames converge flag-by-flag to the ordered eigenvector flag, even though individual frame vectors may retain varying signs or phases. [step 1.1, algebra]
3.1 By [L1], $A_k=\widehat Q_k^*A\widehat Q_k$. Since $E_j$ is $A$-invariant and $S_{j,k}\to E_j$, the component of $A(S_{j,k})$ orthogonal to $S_{j,k}$ tends to zero. In the $\widehat Q_k$ coordinates this component is the block of $A_k$ below the first $j$ columns, so $(A_k)_{ij}\to0$ whenever $i>j$. [L1, step 2.1, algebra]
3.2 The trace of the leading $j\times j$ block of $A_k$ is the trace of the compression of $A$ to $S_{j,k}$. By $S_{j,k}\to E_j$, it tends to the trace of $A|_{E_j}$, namely $\lambda_1+\cdots+\lambda_j$. Subtracting the corresponding limit for $j-1$ gives $(A_k)_{jj}\to\lambda_j$. [step 2.1, algebra]
4.1 Steps 3.1 and 3.2 prove that the strict lower triangle tends to zero and the diagonal tends to $(\lambda_1,\dots,\lambda_n)$. No convergence of the upper-triangular entries is asserted. [step 3.1, step 3.2] ∎
