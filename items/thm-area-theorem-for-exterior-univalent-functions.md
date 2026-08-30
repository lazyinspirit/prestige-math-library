---
id: thm-area-theorem-for-exterior-univalent-functions
kind: theorem
title: "The area theorem for exterior univalent functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-univalent-holomorphic-function, cor-injective-holomorphic-derivative-nonzero, thm-identity-theorem-for-real-analytic-functions-on-an-interval, def-type-i-type-ii-and-elementary-green-regions, cor-area-as-a-line-integral-for-elementary-regions]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 7.5.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.13"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let

$$g(z)=\frac1z+\sum_{n\ge1} b_n z^n$$

be holomorphic and univalent on $0<|z|<1$. Then

$$\sum_{n\ge1} n|b_n|^2\le1.$$

## Facts & Assumptions

**Given:** A holomorphic univalent function $g(z)=z^{-1}+\sum_{n\ge1}b_nz^n$ on $0<|z|<1$.

[L1] Univalence means injectivity ([[def-univalent-holomorphic-function]]).

[L2] The derivative of an injective holomorphic map on a domain never vanishes ([[cor-injective-holomorphic-derivative-nonzero]]).

[L3] A real-analytic function on an interval whose zeros accumulate is identically zero ([[thm-identity-theorem-for-real-analytic-functions-on-an-interval]]).

[L4] A supplied finite decomposition into regions bounded in both coordinate directions is a finite elementary Green region ([[def-type-i-type-ii-and-elementary-green-regions]]).

[L5] For a finite elementary Green region, area is one half the positively oriented integral of $x\,dy-y\,dx$ ([[cor-area-as-a-line-integral-for-elementary-regions]]).

## Proof

**Proof technique:** direct.

1.1 Fix $0<r<1$ and put $\gamma_r(t):=g(re^{it})$. By [L1], $\gamma_r$ is simple on $[0,2\pi)$, and by [L2], $$\gamma_r'(t)=ire^{it}g'(re^{it})\ne0.$$ Thus $\Gamma_r:=\gamma_r([0,2\pi])$ is a regular real-analytic simple closed curve. Since $g(z)=z^{-1}+O(z)$ near zero, the image $g(\{0<|z|<r\})$ is the unbounded side of $\Gamma_r$; write $E_r$ for the bounded side. The parametrization $\gamma_r$ is clockwise relative to $E_r$. [L1, L2, given, algebra]

2.1 The real and imaginary coordinate functions of $\gamma_r$ and their derivatives are real analytic. Neither coordinate derivative is identically zero, since a regular simple closed curve cannot lie in one vertical or horizontal line. By [L3], the zeros of each derivative are isolated; periodic real analyticity and compactness of the parameter circle make both zero sets finite. Subdivide at those finitely many critical parameters and at the finitely many intersections with their horizontal and vertical critical lines. The nonintersecting coordinate-monotone arcs then bound finitely many pieces, each describable both between two piecewise-$C^1$ graphs in $x$ and between two such graphs in $y$. These pieces have disjoint interiors and share complete oppositely oriented arcs, so they supply $E_r$ with a finite elementary Green decomposition in the sense of [L4]. [L3, L4, step 1.1, construct]

3.1 Apply [L5] to the decomposition in step 2.1 and reverse the clockwise orientation from step 1.1. Writing $w=g(z)$ and using $dw=g'(z)\,dz$ gives $$\operatorname{Area}(E_r)=-\frac1{2i}\int_{|z|=r}\overline{g(z)}g'(z)\,dz.$$ [L5, step 1.1, step 2.1, algebra]

4.1 On $|z|=r$, one has $\overline z=r^2/z$, so $$\overline{g(z)}=\frac z{r^2}+\sum_{n\ge1}\overline{b_n}\frac{r^{2n}}{z^n}.$$ Multiplying by $$g'(z)=-\frac1{z^2}+\sum_{n\ge1} n b_n z^{n-1}$$ and taking the contour integral leaves only the $z^{-1}$ coefficient. Hence $$\frac1{2i}\int_{|z|=r}\overline{g(z)}g'(z)\,dz=\pi\!\left(\sum_{n\ge1} n|b_n|^2r^{2n}-\frac1{r^2}\right).$$ [step 3.1, algebra]

5.1 Combining steps 3.1 and 4.1 with $\operatorname{Area}(E_r)\ge0$ gives $$\sum_{n\ge1}n|b_n|^2r^{2n}\le\frac1{r^2}.$$ For every $N$, discard the nonnegative terms with $n>N$ and let $r\uparrow1$ to obtain $\sum_{n=1}^N n|b_n|^2\le1$. Letting $N\to\infty$ proves the asserted inequality. [step 3.1, step 4.1, algebra] ∎
