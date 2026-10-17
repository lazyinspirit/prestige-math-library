---
id: lem-phi-series-converges-absolutely
kind: lemma
title: "The scalar and matrix phi series converge absolutely"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - cor-finite-dimensional-normed-spaces-are-banach
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-phi-functions-by-everywhere-convergent-series
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
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
      locator: "Section 2, equation (2.5), printed pp. 490–491."
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 3.1, matrix functions defined by power series, printed pp. 3–4."
---

## Statement

For every integer $k\ge0$, the scalar series defining $\varphi_k(z)$ converges absolutely for every $z\in\mathbb C$, and the matrix series defining $\varphi_k(X)$ converges absolutely in operator $2$-norm for every $X\in M_n(\mathbb C)$, $n\ge0$. At zero, $\varphi_k(0)=1/k!$ and $\varphi_k(0_{n\times n})=I_n/k!$.

## Facts & Assumptions

**Given:** $k\ge0$, $z\in\mathbb C$, $X\in M_n(\mathbb C)$ with $n\ge0$, and the series definitions of [[def-phi-functions-by-everywhere-convergent-series]].

[F1] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|X\|_2=0$ on $\mathbb C^0$; for $n\ge1$, $\|X\|_2=\max_{\|x\|_2=1}\|Xx\|_2$ for a linear endomorphism of $\mathbb C^n$.

[F2] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|YZ\|_2\le\|Y\|_2\|Z\|_2$ for compatible finite-dimensional maps.

[F3] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space over $\mathbb R$ or $\mathbb C$ is complete.

[F4] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: for every $R\ge0$, $\sum_{j\ge0}R^j/j!=e^R<\infty$.

## Proof

**Proof technique:** direct.

1.1 Put $R:=|z|$. Since $(j+k)!\ge j!$ for every $j\ge0$, $|z^j/(j+k)!|\le R^j/j!$; the majorant sums to $e^R$ by [F4]. Thus the scalar series is absolutely convergent. [given, F4, algebra]

1.2 If $n=0$, the series definition gives $X^j=I_0=0_{0\times0}$ for every $j\ge0$. Every term has norm $0$ by [F1], so the matrix series is absolutely convergent and every partial sum equals the unique empty matrix. For $n\ge1$, put $R:=\|X\|_2$. The operator norm is defined by [F1]. Repeated submultiplicativity in [F2] gives $\|X^j\|_2\le R^j$, so $\|X^j/(j+k)!\|_2\le R^j/j!$ for every $j$. The norms therefore have a finite sum by [F4]. [given, F1, F2, F4]

2.1 For $n\ge1$, let $S_N$ be the partial sums of the matrix series. For $N>M$, the triangle inequality bounds $\|S_N-S_M\|_2$ by the tail of the convergent scalar majorant in step 1.2, so $(S_N)$ is Cauchy. The matrix space is finite-dimensional and complete by [F3], hence $(S_N)$ converges in operator norm. For $n=0$, convergence was established directly in step 1.2. [given, step 1.2, F3, algebra]

3.1 At $z=0$ only the $j=0$ term of the scalar series is nonzero, and at $X=0$ with $n\ge1$ only the $j=0$ matrix term is nonzero; these terms are respectively $1/k!$ and $I_n/k!$. When $n=0$, every matrix term and $I_0/k!$ is the unique empty matrix by step 1.2. Hence both stated zero values follow for every allowed size. [given, step 1.1, step 1.2, step 2.1, algebra] ∎
