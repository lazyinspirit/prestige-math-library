---
id: lem-qa-36-clock-penalty-gap-perturbation
kind: lemma
title: Large clock-penalty perturbation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional spectral and block-matrix arguments are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Lemma 3.17, PDF pp. 18–19; clock-penalty gap transfer.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, PDF pp. 174–176; local clock penalties and legal subspace.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $\mathcal H=S\oplus S^\perp$ be finite-dimensional, let $H_1=H_1^*$ with $\|H_1\|\le K$, and let $H_2=H_2^*\ge0$ satisfy $H_2|_S=0$ and $H_2|_{S^\perp}\ge I$. For $J>2K$, set $H_J=H_1+JH_2$, and let $\mu_1\le\mu_2\le\cdots$ be the eigenvalues of the compression $A=P_SH_1|_S$, where $\dim S\ge2$. With $\epsilon_J=K^2/(J-2K)$, the two smallest eigenvalues of $H_J$ obey
$$\mu_k-\epsilon_J\le\lambda_k(H_J)\le\mu_k\quad(k=1,2).$$
Consequently $\lambda_2(H_J)-\lambda_1(H_J)\ge(\mu_2-\mu_1)-\epsilon_J$; positivity of this bound requires the separate condition $\epsilon_J<\mu_2-\mu_1$. Every unit eigenvector $x=s+t$ of $H_J$ with eigenvalue $\lambda\le K$ also satisfies $\|t\|\le K\|s\|/(J-2K)$. Thus $J>2K$ alone supplies no general gap conclusion.

## Facts & Assumptions

**Given:** The orthogonal splitting $S\oplus S^\perp$, the operators and bounds in the Statement, and the ordered eigenvalues of the finite-dimensional Hermitian compressions.

[F1] $H_1$ and $H_2$ are self-adjoint, with their finite-dimensional eigenvalues characterized by [[def-self-adjoint-and-normal-endomorphism]] and [[thm-complex-spectral-theorem-for-normal-endomorphisms]].

[F2] The operator norm is the maximum of $\|Tv\|$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Write $H_J$ in blocks as $\begin{pmatrix}A&B\\B^*&D\end{pmatrix}$ for $S\oplus S^\perp$. Then $\|B\|\le K$ and $D=Q_SH_1Q_S+JQ_SH_2Q_S\ge(J-K)I$ by [F1]–[F2]. For real $\lambda\le K$, $D-\lambda I\ge(J-2K)I>0$, so the Schur complement $\displaystyle S_\lambda=A-\lambda I-B(D-\lambda I)^{-1}B^*$ is defined and $0\le B(D-\lambda I)^{-1}B^*\le\epsilon_J I$. [given, F1, F2, algebra]

2.1 The invertible block triangular change of variables completing the square in $\langle(H_J-\lambda)x,x\rangle$ gives the direct sum quadratic form of $S_\lambda$ and $D-\lambda I$. Since the latter is positive definite, the largest dimension of a subspace on which $H_J-\lambda I$ is negative definite equals the corresponding dimension for $S_\lambda$. This follows directly because the triangular change is an invertible linear map and hence preserves subspace dimension and signs of the quadratic form. [step 1.1, construct, algebra]

2.2 For $k=1,2$, the span of the first $k$ eigenvectors of $A$ is a $k$-dimensional subspace of $S$ on which the Rayleigh quotient of $H_J$ is at most $\mu_k$. If $H_J$ had fewer than $k$ eigenvalues at most $\mu_k$, that subspace would contain a nonzero vector orthogonal to its first $k-1$ eigenvectors, whose Rayleigh quotient would be strictly larger than $\mu_k$, a contradiction. Thus $\lambda_k(H_J)\le\mu_k\le K$. [given, F1, step 1.1, algebra]

3.1 Fix $k=1$ or $2$ and suppose $\lambda<\mu_k-\epsilon_J$. Then $\lambda<K$, and step 1.1 gives $S_\lambda\ge A-(\lambda+\epsilon_J)I$. Since $\lambda+\epsilon_J<\mu_k$, at most $k-1$ eigenvalues of $S_\lambda$ are negative. By step 2.1, at most $k-1$ eigenvalues of $H_J-\lambda I$ are negative. Letting $\lambda$ increase to $\mu_k-\epsilon_J$ proves $\lambda_k(H_J)\ge\mu_k-\epsilon_J$. The gap estimate follows by subtracting the bounds for $k=1,2$. [step 1.1, step 2.1, step 2.2, algebra]

4.1 If $x=s+t$ is a unit eigenvector of eigenvalue $\lambda\le K$, its $S^\perp$ block equation is $B^*s+(D-\lambda I)t=0$. By step 1.1, $\|(D-\lambda I)^{-1}\|\le1/(J-2K)$; then [F2] yields $\|t\|\le K\|s\|/(J-2K)$. No lower bound on the compressed gap was used in this leakage estimate. For a counterexample to any gap conclusion from $J>2K$ alone, take $\dim S=2$, $H_1=0$, and $H_2=0$ on $S$ and $I$ on $S^\perp$; then $K=0$, every $J>0$ satisfies $J>2K$, and the lowest eigenvalue of $H_J$ has multiplicity two. Hence the separate compressed-gap condition is necessary. [given, F1, F2, step 1.1, algebra] ∎
