---
id: alg-aaa-finite-sample-rational-approximation
kind: algorithm
title: Finite-sample AAA rational approximation with exact SVD
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-barycentric-rational-quotient
  - prop-barycentric-rational-quotient-well-defined
  - thm-singular-value-decomposition
  - alg-householder-bidiagonalization
  - alg-implicit-shifted-bidiagonal-qr-with-deflation
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm for rational approximation, Sections 2–4
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
---

## Definition

Input a nonempty ordered list of distinct sample points
$Z=(z_1,\ldots,z_N)\subset\mathbb C$, data
$F=(f_1,\ldots,f_N)\in\mathbb C^N$, an absolute tolerance $\tau\ge0$, an
integer support budget $B$ with $0\le B\le\lfloor N/2\rfloor$, and a finite
bidiagonal-QR sweep budget $S\ge0$. The procedure is evaluated in exact
arithmetic; its finite-precision implementation makes no optimality claim.
For $v\in\mathbb C^k$, use the standard Hermitian inner product and Euclidean
norm $\|v\|_2=(\sum_{j=1}^k|v_j|^2)^{1/2}$.

1. Set the initial rational candidate $r_0$ to the constant mean
$\bar f=N^{-1}\sum_i f_i$. Compute
$\eta_0=\max_i|f_i-\bar f|$. If $\eta_0\le\tau$, return
$(r_0,\varnothing,\texttt{tolerance-met})$.

2. For $m=1,\ldots,B$, choose the least original index among the remaining
sample points that maximizes the absolute residual from the last accepted
rational candidate. Append that point and its datum provisionally to the
support list; remove it from the remaining sample list.

3. Form the $(N-m)\times m$ Loewner matrix
$L_{ij}=(f_i-f_{s_j})/(z_i-z_{s_j})$, where $i$ ranges over the remaining
sample indices and $s_j$ are the provisional support indices. The denominator
is nonzero because all sample points are distinct.

4. Compute an exact full singular value decomposition (SVD) of $L$ by applying
[[alg-householder-bidiagonalization]] followed by
[[alg-implicit-shifted-bidiagonal-qr-with-deflation]] with zero deflation
tolerance and budget $S$. If either call returns failure or the QR budget is
exhausted, return the last accepted candidate and status
$\texttt{inconclusive}$.

5. Let $E$ be the right singular subspace for the smallest singular value of
$L$, and let $P_E$ be its orthogonal projection. Choose the least coordinate
index $j$ for which $P_Ee_j\ne0$ and set $w=P_Ee_j/\|P_Ee_j\|_2$. This rule
applies at every multiplicity, including dimension one. Multiply by the
unique unit scalar that makes the first nonzero coordinate of $w$ positive
real. If any coordinate of $w$ is zero, reject this provisional support and
return the last accepted candidate with status $\texttt{zero-support-weight}$.

6. Form the barycentric rational quotient using the provisional support
nodes, their data, and $w$ as its weights. If this rational function has a
genuine pole at any remaining sample point, reject this provisional support
and return the last accepted candidate with status $\texttt{pole-status}$.
Otherwise accept the candidate and record both its maximum sampled residual
$\eta_m$ and the Loewner residual $\sigma_m=\|Lw\|_2$. If
$\eta_m\le\tau$, return status $\texttt{tolerance-met}$.

7. If all $B$ iterations finish without another return, return the last
accepted candidate with status $\texttt{support-budget-exhausted}$. In
particular $B=0$ returns the initial constant with this status when step 1
does not return.

The support tie rule and the projection rule make the exact procedure
deterministic, including when the smallest singular value has multiplicity
greater than one. Rank deficiency is permitted: if the smallest singular
value is zero and all selected weights are nonzero and the quotient is finite
at the remaining sample points, the candidate is accepted and its exact
sample residual is evaluated. The algorithm asserts no uniform off-grid error
bound and no minimax optimality. The Loewner residual $\sigma_m$ is a linear
least-squares residual, not the nonlinear sampled residual $\eta_m$.
