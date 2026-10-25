---
id: thm-strong-rrqr-interpolative-decomposition-error
kind: theorem
title: "Strong-RRQR interpolative decomposition error and coefficient bounds"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - alg-strong-rrqr-interpolative-decomposition
  - alg-strong-rank-revealing-qr-with-finite-swaps
  - thm-strong-rrqr-singular-value-comparisons
  - thm-operator-norm-is-the-largest-singular-value
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, Theorem 3.2"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §13.3"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Nathan Halko, Per-Gunnar Martinsson, and Joel A. Tropp, Finding Structure with Randomness, §3.3.2"
      url: "https://arxiv.org/pdf/0909.4061"
---

## Statement

Let $A\in\mathbb F^{m\times n}$ over $\mathbb F\in\{\mathbb R,\mathbb C\}$, with $m\ge n\ge1$, and let $0\le k\le n$, $f\ge1$. The spectral norm is $\|M\|_2=\sup_{\|x\|_2=1}\|Mx\|_2$, and $\sigma_j(M)$ is the $j$th singular value in decreasing order. The procedure [[alg-strong-rrqr-interpolative-decomposition]] returns the exact zero approximation for $k=0$ and the exact reconstruction for $k=n$. For $1\le k<n$, assume $\operatorname{rank}(A)=n$ and its exact-arithmetic strong-RRQR call returns success, and write $g=(1+f^2k(n-k))^{1/2}$ for the returned blocks. Then $T(:,J)=I_k$, $\max_{i,j}|T_{ij}|\le f$, and

$$\|A-A(:,J)T\|_2=\|R_{22}\|_2\le g\,\sigma_{k+1}(A).$$

No decomposition or error conclusion is asserted when the procedure returns a rank-loss or budget status. This theorem gives no finite-precision error bound for a returned candidate; such a bound requires verified score bounds and a reconstruction certificate for the actual returned interpolative decomposition.

## Facts & Assumptions

**Given:** A matrix $A\in\mathbb F^{m\times n}$, the factor $f\ge1$, and the exact-arithmetic procedure with $1\le k<n$.

[F1] [[alg-strong-rrqr-interpolative-decomposition]]: on exact-arithmetic success, the first $k$ permuted columns are $J$, $T\Pi=[I_k\ \ X]$, and $X=R_{11}^{-1}R_{12}$.

[F2] [[alg-strong-rank-revealing-qr-with-finite-swaps]]: in exact arithmetic the procedure returns success only when every coefficient score and combined trailing-residual score is at most $f$.

[F3] [[thm-strong-rrqr-singular-value-comparisons]]: for an exact-arithmetic successful factorization, $\sigma_j(R_{22})\le g\,\sigma_{k+j}(A)$ for $1\le j\le n-k$, where $g=(1+f^2k(n-k))^{1/2}$.

[F4] [[thm-operator-norm-is-the-largest-singular-value]]: on a nonzero finite-dimensional domain, the operator norm is the largest singular value.
 
## Proof

1.1 If $k=0$, the algorithm returns $T$ with zero rows, so $A(:,J)T=0$ and the residual is $A$. If $k=n$, it returns $J=(1,\ldots,n)$ and $T=I_n$, so the residual is zero. Assume henceforth $1\le k<n$ and exact-arithmetic success. [given, F1, algebra]

1.2 With $X=R_{11}^{-1}R_{12}$, [F1] gives $T\Pi=[I_k\ \ X]$, so the first $k$ columns of $T\Pi$ are $I_k$ and therefore $T(:,J)=I_k$. By [F2], $|X_{ij}|^2\le |X_{ij}|^2+(\omega_i\gamma_j)^2\le f^2$, hence $|X_{ij}|\le f$. Since $f\ge1$, the identity entries also obey the same coefficient bound. [F1, F2, algebra]

1.3 Put $C=A(:,J)$, the first $k$ columns of $A\Pi$. Then $C=Q\begin{bmatrix}R_{11}\\0\end{bmatrix}$ and $C(T\Pi)=Q\begin{bmatrix}R_{11}&R_{11}X\\0&0\end{bmatrix} =Q\begin{bmatrix}R_{11}&R_{12}\\0&0\end{bmatrix}$. Subtracting from $A\Pi$ gives $(A-CT)\Pi=Q\begin{bmatrix}0&0\\0&R_{22}\end{bmatrix}$. A unitary matrix preserves vector norms, and a permutation maps the unit sphere onto itself; the definition of the operator norm therefore gives $\|A-CT\|_2=\|R_{22}\|_2$. [F1, algebra]

2.1 The domain of $R_{22}$ has dimension $n-k>0$, so [F4] gives $\|R_{22}\|_2=\sigma_1(R_{22})$. Apply [F3] with $j=1$ and combine with step 1.3 to obtain the stated residual bound. [F3, F4, step 1.3] ∎
