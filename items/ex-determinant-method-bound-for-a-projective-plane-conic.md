---
id: ex-determinant-method-bound-for-a-projective-plane-conic
kind: example
title: "Applying the determinant-method bound to a conic in a box"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-heath-brown-anisotropic-plane-curve-rational-point-bound
  - def-homogeneous-polynomial-and-homogeneous-ideal
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Theorem 3"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $F(X,Y,Z)=XZ-Y^2$ and let $B\ge1$. In the isotropic box
$|X|,|Y|,|Z|\le B$, the determinant-method theorem gives
$$N(F;B,B,B)\ll_{\varepsilon}B^{1+3\varepsilon}$$
for every $\varepsilon>0$.

## Statement references

[Heath-Brown, Theorem 3](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** The conic form $F$ and the box radius $B$ in the Statement.

[F1] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: A homogeneous form has all its monomials in one total degree.

[F2] [[thm-heath-brown-anisotropic-plane-curve-rational-point-bound]]: For an irreducible degree-$d$ ternary form, the box count is $\ll_{d,\varepsilon}(V^d/T)^{1/d^2}V^{\varepsilon}$.

## Verification

1.1 The degree-two symmetric matrix of $XZ-Y^2$ over $\mathbb Q$ is
$$\begin{pmatrix}0&0&1/2\\0&-1&0\\1/2&0&0\end{pmatrix},$$
which has nonzero determinant. If a quadratic form were a product of two linear forms, its symmetric matrix would have image contained in the span of their two coefficient vectors and hence rank at most $2$. Thus $F$ is irreducible over $\mathbb Q$. Its two monomials both have degree $2$ by [F1]. [F1, given, algebra]

1.2 In this box, $V=B^3$ and the two support monomials have scales $B^2$ and $B^2$, so $T=B^2$. Therefore $(V^2/T)^{1/4}=(B^6/B^2)^{1/4}=B$ and $V^{\varepsilon}=B^{3\varepsilon}$. Applying [F2] with $d=2$ yields the bound in the Statement. [F2, step 1.1, algebra] ∎
