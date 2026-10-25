---
id: alg-aaa-finite-sample-rational-approximation
kind: algorithm
title: Finite-sample AAA rational approximation with exact SVD
status: published
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
    - title: Yuji Nakatsukasa, Olivier Sète, and Lloyd N. Trefethen, The AAA algorithm
        for rational approximation, Sections 2–4
      url: https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Input a nonempty ordered list of distinct sample points
$Z=(z_1,\ldots,z_N)\subset\mathbb C$, data
$F=(f_1,\ldots,f_N)\in\mathbb C^N$, an absolute tolerance $\tau\ge0$, an
integer support budget $B$ with $0\le B\le\lfloor N/2\rfloor$, and a finite integer
bidiagonal-QR sweep budget $S\ge0$. The procedure is evaluated in exact
arithmetic; its finite-precision implementation makes no optimality claim.
For $v\in\mathbb C^k$, use the standard Hermitian inner product and Euclidean
norm $\|v\|_2=(\sum_{j=1}^k|v_j|^2)^{1/2}$.
Initialize the accepted support-record list $S_{\rm acc}=\varnothing$; each
record stores an original index, its sample point, and its data value. Set the
remaining original-index list $R=(1,\ldots,N)$. Every return has form
$(r_{\rm acc},S_{\rm acc},\text{status},\mathcal R)$, where $\mathcal R$ is
the residual record maintained below.

1. Set the initial rational candidate $r_0$ to the constant mean
$\bar f=N^{-1}\sum_i f_i$. Compute
$\eta_0=\max_i|f_i-\bar f|$, set the last accepted candidate $r_{\rm acc}=r_0$,
and set $\mathcal R=((0,\eta_0))$. If $\eta_0\le\tau$, return
$(r_{\rm acc},S_{\rm acc},\texttt{tolerance-met},\mathcal R)$.

2. For $m=1,\ldots,B$, choose from $R$ the least original index $s$ that
maximizes the absolute residual from $r_{\rm acc}$. Let $S_{\rm prov}$ be
$S_{\rm acc}$ with $(s,z_s,f_s)$ appended; remove $s$ from $R$.

3. Form the $(N-m)\times m$ Loewner matrix
$L_{ij}=(f_i-f_{s_j})/(z_i-z_{s_j})$, where $i$ ranges over the indices in
$R$ and $s_j$ are the original indices in $S_{\rm prov}$. The denominator is
nonzero because all sample points are distinct.

4. Compute an exact full singular value decomposition (SVD) of $L$ by applying
[[alg-householder-bidiagonalization]] followed by
[[alg-implicit-shifted-bidiagonal-qr-with-deflation]] with zero deflation
tolerance and budget $S$. If either call returns failure or the QR budget is
exhausted, return $(r_{\rm acc},S_{\rm acc},\texttt{inconclusive},\mathcal R)$.

5. Let $E$ be the right singular subspace for the smallest singular value of
$L$, and let $P_E$ be its orthogonal projection. Choose the least coordinate
index $j$ for which $P_Ee_j\ne0$ and set $w=P_Ee_j/\|P_Ee_j\|_2$. This rule
applies at every multiplicity, including dimension one. Multiply by the
unique unit scalar that makes the first nonzero coordinate of $w$ positive
real. If any coordinate of $w$ is zero, reject this provisional support and
return $(r_{\rm acc},S_{\rm acc},\texttt{zero-support-weight},\mathcal R)$.

6. Form the barycentric rational quotient using the nodes and data in
$S_{\rm prov}$ and $w$ as its weights. If this rational function has a
genuine pole at any remaining sample point, reject this provisional support
and return $(r_{\rm acc},S_{\rm acc},\texttt{pole-status},\mathcal R)$.
Otherwise accept the candidate by setting $r_{\rm acc}$ to it and
$S_{\rm acc}=S_{\rm prov}$, and append $(m,\eta_m,\sigma_m)$, where $\eta_m$
is its maximum sampled residual and $\sigma_m=\|Lw\|_2$, to $\mathcal R$. If
$\eta_m\le\tau$, return
$(r_{\rm acc},S_{\rm acc},\texttt{tolerance-met},\mathcal R)$.

7. If all $B$ iterations finish without another return, return
$(r_{\rm acc},S_{\rm acc},\texttt{support-budget-exhausted},\mathcal R)$. In
particular $B=0$ returns the initial constant and empty support list with this
status when step 1 does not return.

The support tie rule and the projection rule make the exact procedure
deterministic, including when the smallest singular value has multiplicity
greater than one. Rank deficiency is permitted: if the smallest singular
value is zero and all selected weights are nonzero and the quotient is finite
at the remaining sample points, the candidate is accepted and its exact
sample residual is evaluated. The algorithm asserts no uniform off-grid error
bound and no minimax optimality. The Loewner residual $\sigma_m$ is a linear
least-squares residual, not the nonlinear sampled residual $\eta_m$.
