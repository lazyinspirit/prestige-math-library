---
id: alg-strong-rrqr-interpolative-decomposition
kind: algorithm
title: "Strong-RRQR interpolative decomposition with explicit statuses"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - alg-strong-rank-revealing-qr-with-finite-swaps
dependency_level: 0
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, §§3–4"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §13"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
---

## Definition

Input a finite real or complex matrix $A\in\mathbb F^{m\times n}$ with $m\ge n\ge1$, an integer $k$ with $0\le k\le n$, a factor $f\ge1$, a finite swap cap $S\in\mathbb N\cup\{0\}$, and an arithmetic mode: exact arithmetic or finite precision. The procedure returns an algorithm status in `success`, `rank-deficient-input`, `singular-selected-block`, `swap-budget-exhausted`, or `range-failure`. On a successful branch it returns the selected index list $J$ and coefficient matrix $T$; finite-precision outputs are candidates until their certification status is checked. For $1\le k<n$, it also returns the RRQR diagnostics specified in step 4, including the rank status, selected-block conditioning data, and score data. In finite precision it returns separately the underlying RRQR certificate status and certificate data, and an ID-certificate status for the returned $J,T$.

1. If $k=0$, return `success`, $J=\varnothing$, and the unique $0\times n$ matrix $T$. Then $A(:,J)T=0$. Set the block, rank, and conditioning diagnostics to not applicable and the certificate status to not required. This branch includes $A=0$.
2. If $k=n$, return `success`, $J=(1,\ldots,n)$, and $T=I_n$. Then $A(:,J)T=A$. Set the block, rank, and conditioning diagnostics to not applicable and the certificate status to not required.
3. If $1\le k<n$, call [[alg-strong-rank-revealing-qr-with-finite-swaps]] on $(A,k,f,S)$ in the requested arithmetic mode. In exact arithmetic, propagate each nonsuccess status without returning $J,T$. In finite precision, propagate each nonsuccess status, including `range-failure`, without returning $J,T$; retain any partial diagnostics supplied by the called procedure.
4. On success, let $\Pi$ be the returned column permutation. In exact arithmetic retain the full factorization $A\Pi=QR$ with unitary $Q$ and partition its upper-trapezoidal factor after its first $k$ rows and columns as
   $$R=\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix}.$$
   In finite precision use the returned candidate factors $\widehat Q,\widehat R$ and the corresponding blocks; the exact unitary transformation representation $W$ remains part of the certificate data in step 5. Let $J$ be the ordered list of original column indices in the first $k$ positions of $\Pi$. Set $X=R_{11}^{-1}R_{12}$ in exact arithmetic, or use the returned candidate $X$ in finite precision, and define $T$ by $T\Pi=[I_k\ \ X]$. Return $J,T$, the full factor ($Q$ or $\widehat Q$), and the diagnostics $(\Pi,R_{11},R_{12},R_{22},X,(\omega_i)_i,(\gamma_j)_j,(s_{ij})_{ij},\max_{i,j}|X_{ij}|,\max_{i,j}s_{ij})$, where $\omega_i=\|e_i^*R_{11}^{-1}\|_2$, $\gamma_j=\|R_{22}(:,j)\|_2$, and $s_{ij}=(|X_{ij}|^2+(\omega_i\gamma_j)^2)^{1/2}$. In finite precision these are candidate values; return validated enclosures only when supplied by the certificate.
5. In exact arithmetic, the returned decomposition and diagnostics refer to the exact successful factorization. In finite precision, return the called procedure's certificate status and certificate data $(W,(b_{ij}),\varepsilon)$ unchanged, including its exact unitary transformation representation, score bounds, and factorization-residual bound. Set the ID-certificate status to `certified` only if verified data establish $T(:,J)=I_k$, $\max_{i,j}|T_{ij}|\le f$, and a stated bound for $\|A-A(:,J)T\|_2$ for the returned $T$; otherwise set it to `uncertified`. In particular, if the called procedure reports an uncertified candidate, return the candidate and diagnostics but do not label it a certified interpolative decomposition. Rounded scores alone do not certify the result.

The error theorem below concerns exact-arithmetic success. It gives no finite-precision error bound for a returned candidate; such a bound requires verified score bounds and a reconstruction certificate for the returned interpolative decomposition.
