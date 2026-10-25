---
id: ex-real-projective-space-shows-coefficient-dependent-perfectness
kind: example
title: "Real projective space shows coefficient-dependent perfectness"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, thm-morse-polynomial-identity, def-perfect-morse-function-over-a-field, cor-morse-euler-characteristic-identity, lem-real-projective-space-cellular-homology-and-pinch-map, def-critical-point-and-critical-value-of-a-smooth-function, def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex, def-euclidean-spheres-and-closed-balls, def-countable-choice, thm-cellular-homology-computes-singular-homology, cor-weak-morse-inequalities, def-euler-characteristic-of-a-finite-cw-complex]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-computation
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 5
---

## Example

Assume $\mathrm{AC}_\omega$. Regard $\mathbb{RP}^n$ as the quotient of $S^n$ by
the antipodal map and let
$$f([x]):=\sum_{i=0}^n(i+1)x_i^2,$$
which is well defined because the squared coordinates are antipodally invariant.
Its critical points are the $n+1$ coordinate axes $[e_0],\dots,[e_n]$, of
indices $0,1,\dots,n$, so
$$M_f(t)=1+t+\cdots+t^n.$$
By the cellular homology of real projective space,
$b_k(\mathbb{RP}^n;\mathbb F_2)=1$ for $0\le k\le n$ (all boundary maps vanish
mod two), so $f$ is $\mathbb F_2$-perfect; over any field of characteristic
different from two, $b_0=1$, $b_k=0$ for $0<k<n$ and $b_n=1$ exactly when $n$
is odd, so for $n\ge2$ we get $b_1=0<1=m_1$ and $f$ is not perfect. For every
field the Euler identity holds: $\sum_k(-1)^k=1$ for even $n$ and $0$ for odd
$n$, which equals $\chi(\mathbb{RP}^n)$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the quotient $\mathbb{RP}^n=S^n/(x\sim -x)$ of the unit sphere, and the function $f([x])=\sum_{i=0}^n(i+1)x_i^2$.

[F1] Critical points, nondegeneracy, the Hessian and the index have the meanings of the local Morse definitions ([[def-critical-point-and-critical-value-of-a-smooth-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-hessian-of-a-function-at-a-critical-point]]).

[F2] The Morse numbers and Morse polynomial are $m_k(f)=\#\{p:\operatorname{ind}(p)=k\}$ and $M_f(t)=\sum_km_k(f)t^k$; the Poincare polynomial is $P_{X,F}(t)=\sum_k\dim_FH_k(X;F)t^k$; $f$ is $F$-perfect when $m_k(f)=b_k(\mathbb{RP}^n;F)$ for all $k$ ([[def-morse-numbers-and-morse-polynomial]], [[def-poincare-polynomial-over-a-field]], [[def-perfect-morse-function-over-a-field]]).

[F3] $\mathbb{RP}^m$ has a CW structure with one cell in each dimension $0,\dots,m$ whose integral cellular complex has $C_j=\mathbb Z$, $d_j=2$ for positive even $j$ and $d_j=0$ for odd $j$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]]).

[F4] Cellular homology computes singular homology for every coefficient group ([[thm-cellular-homology-computes-singular-homology]]).

[F5] In the situation of the Morse polynomial identity, $m_k(f)\ge b_k(M;F)$ for every $k$, so a strict inequality $m_k(f)>b_k(M;F)$ excludes perfectness ([[cor-weak-morse-inequalities]]).

[L1] The Euler characteristic of a finite CW complex is $\chi(X)=\sum_n(-1)^nc_n(X)$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Verification

**Proof technique:** direct-computation.

1.1 The formula $f([x])=\sum_i(i+1)x_i^2$ is well defined on the quotient because replacing $x$ by $-x$ leaves every squared coordinate unchanged; the quotient $\mathbb{RP}^n$ is the familiar closed smooth $n$-manifold with the standard charts $u_j=x_j/x_i$ around the axis $[e_i]$. [given, construct]

2.1 Write $\lambda_j=j+1$. A tangent vector $v$ to the unit sphere at $x$ satisfies $x\cdot v=0$, and the differential of the lifted function is $2\sum_j\lambda_jx_jv_j$. It vanishes on all such $v$ exactly when $(\lambda_jx_j)_j$ is a scalar multiple of $x$. Since the $\lambda_j$ are distinct, at most one coordinate of a critical point is nonzero. Thus the critical classes are exactly the axes $[e_i]$. In the chart $u_j=x_j/x_i$ for $j\ne i$, $$f(u)=\frac{\lambda_i+\sum_{j\ne i}\lambda_ju_j^2}{1+\sum_{j\ne i}u_j^2}.$$ Expanding at zero gives $f(u)=\lambda_i+\sum_{j\ne i}(\lambda_j-\lambda_i)u_j^2+O(|u|^4)$, so the Hessian is $\operatorname{diag}(2(j-i))_{j\ne i}$, with exactly $i$ negative entries. Every critical point is nondegenerate of index $i$, and $M_f(t)=1+t+\cdots+t^n$. [F1, F2, step 1.1, algebra]

3.1 Over $\mathbb F_2$ the cellular complex of [F3] reads $C_j=\mathbb F_2$ with $d_j=2=0$ for all $j$, so $H_j(\mathbb{RP}^n;\mathbb F_2)=\mathbb F_2$ for $0\le j\le n$ and zero otherwise, by [F4]; hence $b_k=1=m_k$ for all $k$ and $f$ is $\mathbb F_2$-perfect with correction polynomial $Q=0$. [F3, F4, F2, step 2.1]

3.2 Over a field $F$ of characteristic different from two the same complex reads $C_j=F$ with $d_j=2$ invertible for positive even $j$ and $d_j=0$ for odd $j$; taking kernels modulo images gives $H_0=F$, $H_j=0$ for $0<j<n$, and $H_n=F$ if $n$ is odd and $H_n=0$ if $n$ is even. Thus for $n\ge2$ we have $b_1(\mathbb{RP}^n;F)=0<1=m_1(f)$, and $f$ is not $F$-perfect by [F5]. [F3, F4, F5, step 2.1]

4.1 Finally, for every field the Euler identity holds: $\sum_{k=0}^n(-1)^km_k(f)=\sum_{k=0}^n(-1)^k$ equals $1$ for even $n$ and $0$ for odd $n$, while $\chi(\mathbb{RP}^n)=1$ for even $n$ and $0$ for odd $n$ by [L1] applied to the cell counts of [F3] (one cell in each dimension $0,\dots,n$). The alternating sums of the Betti numbers agree with the same value in both characteristics, consistent with the Euler identity. [L1, F3, step 2.1] ∎

## Remarks

- **The case $n=1$.** Here $\mathbb{RP}^1\cong S^1$: over any field $b_0=b_1=1$ and $m_0=m_1=1$, so $f$ is perfect over every field; the coefficient dependence begins in dimension $n\ge2$.
- **What the example shows.** A function can be perfect over $\mathbb F_2$ and imperfect over fields of characteristic different from two, so perfectness is a field-relative notion, exactly as the coefficient-field remark records; the Euler identity, by contrast, holds in every characteristic.
