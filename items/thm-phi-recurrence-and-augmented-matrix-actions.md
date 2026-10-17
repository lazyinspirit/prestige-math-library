---
id: thm-phi-recurrence-and-augmented-matrix-actions
kind: theorem
title: "Phi recurrence and augmented-matrix action identities"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-phi-functions-by-everywhere-convergent-series
  - lem-phi-series-converges-absolutely
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Awad H. Al-Mohy and Nicholas J. Higham, Computing the action of the matrix exponential, with an application to exponential integrators"
      url: "https://eprints.maths.manchester.ac.uk/1536/3/paper16.pdf"
      locator: "Section 2, Theorem 2.1 and its complete proof, printed pp. 490–492."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 2, equations (1)–(2), and Section 3.1, augmented matrix (6)."
---

## Statement

For every integer $k\ge0$, scalar $z\in\mathbb C$, and square matrix $X\in M_n(\mathbb C)$ with $n\ge0$, the series-defined functions of [[def-phi-functions-by-everywhere-convergent-series]] satisfy

$$\varphi_k(z)=\frac1{k!}+z\varphi_{k+1}(z),\qquad \varphi_k(X)=\frac1{k!}I_n+X\varphi_{k+1}(X).$$

For $k\ge1$ and $w\in\mathbb C^n$, let $J_k\in M_k(\mathbb C)$ have ones on the superdiagonal and zeros elsewhere, and let $e_1,e_k\in\mathbb C^k$ be the first and last coordinate vectors. Define $B_k(X,w):=\begin{bmatrix}X&we_1^*\\0&J_k\end{bmatrix}$. Then the first $n$ entries of $e^{B_k(X,w)}\begin{bmatrix}0\\e_k\end{bmatrix}$ equal $\varphi_k(X)w$. The identity is valid at $X=0$ and requires no division by $X$ or by a scalar argument.

## Facts & Assumptions

**Given:** $k\ge0$, $z\in\mathbb C$, $X\in M_n(\mathbb C)$ with $n\ge0$, and $w\in\mathbb C^n$ when $k\ge1$.

[F1] [[def-phi-functions-by-everywhere-convergent-series]]: $\varphi_k(z)=\sum_{j\ge0}z^j/(j+k)!$ and $\varphi_k(X)=\sum_{j\ge0}X^j/(j+k)!$.

[F2] [[lem-phi-series-converges-absolutely]]: these scalar and matrix series converge absolutely, so their tails may be reindexed and their matrix-exponential blocks may be read termwise.

## Proof

**Proof technique:** direct.

1.1 Absolute convergence in [F2] permits an index shift: $z\varphi_{k+1}(z)=\sum_{j\ge0}z^{j+1}/(j+k+1)!=\sum_{r\ge1}z^r/(r+k)!=\varphi_k(z)-1/k!$. Rearranging proves the scalar recurrence, including $z=0$. [F1, F2, algebra]

1.2 For $n=0$, every matrix term is the unique empty matrix by [F1], so the matrix recurrence is the equality of that matrix with itself. For $n\ge1$, the same index shift is valid in operator norm by [F2]; left multiplication by $X$ sends the $(j+k+1)!$ denominator term to $X^{j+1}/(j+k+1)!$. Thus $X\varphi_{k+1}(X)=\varphi_k(X)-I_n/k!$, proving the matrix recurrence. [F1, F2, algebra]

1.3 For $n\ge1$, in $B_k(X,w)$, a block-product path from the first block row to the last column of the last block must move through the $w e_1^*$ block and then through all $k-1$ superdiagonal entries of $J_k$. It uses exactly $k$ block transitions; any remaining factors can only be copies of $X$ before that first transition. Hence the last column of the top-right block of $B_k^r$ is zero for $r<k$, and is $X^{r-k}w$ for $r\ge k$. [given, algebra]

2.1 For $n\ge1$, by [F2] with $k=0$, $e^{B_k}=\varphi_0(B_k)=\sum_{r\ge0}B_k^r/r!$. By step 1.3, the last column of its top-right block is $\sum_{r\ge k}X^{r-k}w/r!=\sum_{j\ge0}X^jw/(j+k)!=\varphi_k(X)w$. This is exactly the first $n$ entries obtained by applying $e^{B_k}$ to the last coordinate vector. When $n=0$, $w$ is the unique vector in $\mathbb C^0$ and $B_k(X,w)=J_k$; the first zero entries of $e^{J_k}e_k$ and $\varphi_k(X)w$ are both the empty vector. Thus the augmented identity also holds in that case. [step 1.3, F1, F2, algebra] ∎
