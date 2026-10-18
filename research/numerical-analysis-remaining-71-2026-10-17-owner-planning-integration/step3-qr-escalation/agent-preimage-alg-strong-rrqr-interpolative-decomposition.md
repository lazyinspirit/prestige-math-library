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
justified_by: [lem-strong-rrqr-interpolative-decomposition-returns-a-status]
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

Input a finite real or complex matrix $A\in\mathbb F^{m\times n}$ with $m\ge n\ge1$, an integer $k$ with $0\le k\le n$, a factor $f\ge1$, a finite swap cap $S\in\mathbb N\cup\{0\}$, and an arithmetic mode: exact arithmetic or finite precision. Finite-precision inputs and the arithmetic format have the represented-dyadic meaning specified by the called QR algorithm; all exact certificate calculations below use unbounded-size rational arithmetic on those represented values. The procedure returns an algorithm status in `success`, `rank-deficient-input`, `singular-selected-block`, `swap-budget-exhausted`, or `range-failure`. On a successful branch it returns the selected index list $J$ and coefficient matrix $T$; finite-precision outputs are candidates until their certification status is checked. For $1\le k<n$, it also returns the RRQR diagnostics specified in step 4, including the rank status, selected-block conditioning data, and score data. In finite precision it returns separately the underlying RRQR certificate status and certificate data, and an ID-certificate status for the returned $J,T$.

1. If $k=0$, return `success`, $J=\varnothing$, and the unique $0\times n$ matrix $T$. Then $A(:,J)T=0$. Set the block, rank, and conditioning diagnostics to not applicable and both certificate statuses to `not-required`. This branch includes $A=0$.
2. If $k=n$, return `success`, $J=(1,\ldots,n)$, and $T=I_n$. Then $A(:,J)T=A$. Set the block, rank, and conditioning diagnostics to not applicable and both certificate statuses to `not-required`.
3. If $1\le k<n$, call [[alg-strong-rank-revealing-qr-with-finite-swaps]] on $(A,k,f,S)$ in the requested arithmetic mode. In exact arithmetic, propagate each nonsuccess status without returning $J,T$. In finite precision, propagate each nonsuccess status, including `range-failure`, without returning $J,T$; retain any partial diagnostics supplied by the called procedure. On either mode's nonsuccess branch set both certificate statuses to `not-applicable` and return no ID-certificate data.
4. On success, let $\Pi$ be the returned column permutation. In exact arithmetic retain the full factorization $A\Pi=QR$ with unitary $Q$ and partition its upper-trapezoidal factor after its first $k$ rows and columns as
   $$R=\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix}.$$
   In finite precision use the returned candidate factors $\widehat Q,\widehat R$ and the corresponding blocks; the exact unitary transformation representation $W$ remains part of the certificate data in step 5. Let $J$ be the ordered list of original column indices in the first $k$ positions of $\Pi$. Set $X=R_{11}^{-1}R_{12}$ in exact arithmetic, or use the returned candidate $X$ in finite precision, and define $T$ by $T\Pi=[I_k\ \ X]$. Retain for the final output $J,T$, the full factor ($Q$ or $\widehat Q$), and the diagnostics $(\Pi,R_{11},R_{12},R_{22},X,(\omega_i)_i,(\gamma_j)_j,(s_{ij})_{ij},\max_{i,j}|X_{ij}|,\max_{i,j}s_{ij})$, where $\omega_i=\|e_i^*R_{11}^{-1}\|_2$, $\gamma_j=\|R_{22}(:,j)\|_2$, and $s_{ij}=(|X_{ij}|^2+(\omega_i\gamma_j)^2)^{1/2}$. In finite precision these are candidate values; retain validated enclosures only when supplied by the certificate. Continue to step 5 before returning.
5. In exact arithmetic, the returned decomposition and diagnostics refer to the exact successful factorization; set both certificate statuses to `not-required`. In finite precision, retain the called procedure's RRQR certificate status and data $(W,(b_{ij}),\varepsilon)$ unchanged, independently of the following direct ID check. If a candidate $X$ or other required output is nonfinite, return `range-failure` without $J,T$, with both certificate statuses `not-applicable`. Otherwise form $T$ by copying the candidate entries and inserting exact zeros and ones, so no new rounding changes $X$. For the actual returned $J,T$, compute in exact rational complex arithmetic
   $$D=A-A(:,J)T,\qquad r^2=\sum_{a=1}^m\sum_{b=1}^n|D_{ab}|^2,\qquad c^2=\max_{a,b}|T_{ab}|^2.$$
   Check the dimensions, distinct valid indices in $J$, the entrywise identity $T(:,J)=I_k$, and $c^2\le f^2$. Set the ID-certificate status to `certified` exactly when these checks pass, and otherwise to `uncertified`. Return the exact rational data $(D,r^2,c^2)$ and the check outcomes in either case. The residual bound is the symbolic nonnegative square root $\sqrt{r^2}$, so its reporting requires no floating-point square root or range conversion. A `certified` ID therefore obeys
   $$T(:,J)=I_k,\qquad \max_{a,b}|T_{ab}|\le f,\qquad \|A-A(:,J)T\|_2\le\sqrt{r^2}.$$
   This direct certificate is independent of the RRQR certificate: it can certify the actual interpolation and this explicit residual bound even when RRQR score certification is unavailable. It does not certify the RRQR singular-value comparison or replace its score and unitary-reconstruction conditions. No iterative certificate search or rounding-based equality test is used. Return `success` with these outputs and the two separately assigned certificate statuses.

The error theorem below concerns exact-arithmetic success. It gives no finite-precision error bound for a returned candidate; a strong singular-value-relative bound additionally requires verified RRQR score and factorization information. Step 5 supplies its separate direct bound for the actual represented output, without asserting that it equals the exact-arithmetic trailing-block bound.
