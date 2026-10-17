---
id: thm-finite-time-tangent-volume-growth-from-qr
kind: theorem
title: Positive-diagonal QR factors give the exact finite-time tangent-volume change
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-qr-factorisation-over-r-or-c, thm-determinant-multiplicative, thm-determinant-of-a-triangular-matrix, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus, thm-logarithm-derivative-and-integral]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Predrag Cvitanović et al., ChaosBook, Chapter 6: Lyapunov exponents, §6.2"
      url: "https://chaosbook.org/version15/chapters/Lyapunov.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, 4th ed., §7D, result 7.58"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $A_1,\ldots,A_N\in\mathbb R^{n\times n}$ be invertible, with $n,N\ge1$, and let $Q_0$ be orthogonal. For $1\le k\le N$, form the unique positive-diagonal QR factorization
$$A_kQ_{k-1}=Q_kR_k,$$
where $Q_k$ is orthogonal and $R_k$ is upper triangular with positive diagonal $r_{k,ii}$. Put $P_N=A_N\cdots A_1$ and define the exact finite-time log-volume change by $\log|\det P_N|$. Then
$$\log|\det P_N|=\sum_{k=1}^N\sum_{i=1}^n\log r_{k,ii}.$$
No infinite-time Lyapunov exponent or shadowing conclusion follows.

For a numerical log record, define $\sigma_{\min}(A):=\inf_{\|x\|_2=1}\|Ax\|_2$. If $\sigma_{\min}(A_k)\ge\sigma>0$, each exact $r_{k,ii}\ge\sigma$. If positive computed diagonals $\widetilde r_{k,ii}$ satisfy $|\widetilde r_{k,ii}-r_{k,ii}|\le\varepsilon_{k,i}\le\sigma/2$, and each computed logarithm $\widehat l_{k,i}$ satisfies $|\widehat l_{k,i}-\log\widetilde r_{k,ii}|\le\delta_{k,i}$, then
$$\left|\sum_{k,i}\widehat l_{k,i}-\log|\det P_N|\right|\le\sum_{k,i}\left(\frac{2\varepsilon_{k,i}}{\sigma}+\delta_{k,i}\right).$$
If any factor loses rank, this log-volume branch returns failure.

## Facts & Assumptions

**Given:** The finite list of invertible tangent matrices, an orthogonal $Q_0$, and the stated factorizations. The numerical bound additionally assumes the displayed certified singular-value and log-evaluation errors.

[F1] Every invertible real square matrix has a unique factorization $A=QR$ with $Q$ orthogonal and $R$ upper triangular with positive diagonal ([[thm-qr-factorisation-over-r-or-c]]).

[F2] Determinants multiply under finite square matrix products ([[thm-determinant-multiplicative]]).

[F3] The determinant of an upper triangular matrix is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[F4] An orthogonal matrix has determinant modulus one ([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

[F5] The logarithm difference is the integral of $1/t$ between positive endpoints ([[thm-logarithm-derivative-and-integral]]).

[A1] For the numerical bound, $\sigma_{\min}(A_k)\ge\sigma>0$, $|\widetilde r_{k,ii}-r_{k,ii}|\le\varepsilon_{k,i}\le\sigma/2$, and the computed logarithm errors are bounded by $\delta_{k,i}$.

## Proof

1.1 Induction on $k$ using $A_kQ_{k-1}=Q_kR_k$ gives $$P_kQ_0=Q_kR_kR_{k-1}\cdots R_1,\qquad P_k:=A_k\cdots A_1.$$ For $k=1$ this is the defining factorization; multiplying the identity at $k$ on the left by $A_{k+1}$ and substituting $A_{k+1}Q_k=Q_{k+1}R_{k+1}$ proves the next case. [given, algebra, induction]

1.2 Orthogonal factors preserve Euclidean norms, so $\sigma_{\min}(R_k)=\sigma_{\min}(Q_kR_k)=\sigma_{\min}(A_kQ_{k-1})=\sigma_{\min}(A_k)\ge\sigma$. For a fixed $i$, the leading $(i-1)\times(i-1)$ block of $R_k$ is invertible. Choose $x\in\mathbb R^{i-1}$ solving $R_{1:i-1,1:i-1}x=-R_{1:i-1,i}$ and set $z=(x,1,0,\ldots,0)^T$. Upper triangularity gives $R_kz=r_{k,ii}e_i$ and $\|z\|_2\ge1$, so $\sigma_{\min}(R_k)\le\|R_kz\|_2/\|z\|_2\le r_{k,ii}$. For $i=1$, take $z=e_1$. Hence $r_{k,ii}\ge\sigma$. [F1, given, algebra]

2.1 Take determinants in step 1.1. By [F2], $\det(P_N)\det(Q_0)=\det(Q_N)\prod_{k=1}^N\det(R_k)$. By [F3] each $\det(R_k)=\prod_i r_{k,ii}>0$, and by [F4] $|\det(Q_0)|=|\det(Q_N)|=1$. Thus $|\det(P_N)|=\prod_{k,i}r_{k,ii}$. Taking logarithms of positive numbers proves the exact identity. [F2, F3, F4, step 1.1, algebra]

3.1 Both $r_{k,ii}$ and $\widetilde r_{k,ii}$ are at least $\sigma/2$. By [F5], $|\log\widetilde r_{k,ii}-\log r_{k,ii}|\le(2/\sigma)|\widetilde r_{k,ii}-r_{k,ii}|$. Adding the computation error $\delta_{k,i}$ and summing the scalar bounds by the triangle inequality proves the stated numerical log bound. The lower singular-value bound is essential to keep the log derivative bounded; if any factor is singular its determinant is zero and its log-volume is undefined. [A1, F5, step 1.2, algebra] ∎
