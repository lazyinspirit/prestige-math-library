---
id: ex-binary-resultant-two-linear-forms
kind: example
title: "Resultant of two binary linear forms"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sylvester-resultant-of-binary-forms, def-determinant-of-a-square-matrix, thm-binary-resultant-zero-iff-common-geometric-projective-root, def-algebraic-closure, def-projective-space-points]
justified_by: []
aliases: []
landmark: false
short: "Res of two linear forms is ad-bc"
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Sylvester determinant and Proposition 7.28, pp. 166-167"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Example

Let $k$ be a field and let $F=aX+bY$ and $G=cX+dY$ with $a,b,c,d\in k$ be
binary forms of nominated degree one. Then
$$\operatorname{Res}_{1,1}(F,G)=ad-bc,$$
and this element of $k$ vanishes exactly when $F$ and $G$ have a common point of
$\mathbf P^1(K)$ for an algebraic closure $K$ of $k$. The two zero-form cases
$F=0$ and $G=0$ are included: then $ad-bc=0$ and the two forms do have a common
projective zero.

## Facts & Assumptions

**Given:** A field $k$, coefficients $a,b,c,d\in k$, the linear forms $F=aX+bY$, $G=cX+dY$ of nominated degree $1$, and an algebraic closure $K$ of $k$.

[L1] For $d=e=1$ the Sylvester map is $(A,B)\mapsto AF+BG$ from $k[X,Y]_0\oplus k[X,Y]_0$ to $k[X,Y]_1$, and $\operatorname{Res}_{1,1}(F,G)$ is the determinant of its matrix in the ordered bases $1$ of each copy of $k[X,Y]_0$ and $X,Y$ of the target ([[def-sylvester-resultant-of-binary-forms]], [[def-determinant-of-a-square-matrix]]).

[L2] For a field $k$, an algebraic closure $K$, and homogeneous $F,G$ of nominated positive degrees, $\operatorname{Res}(F,G)=0$ if and only if $F$ and $G$ vanish together at some point of $\mathbf P^1(K)$; the zero forms are allowed ([[thm-binary-resultant-zero-iff-common-geometric-projective-root]], [[def-algebraic-closure]], [[def-projective-space-points]]).

## Verification

**Proof technique:** direct.

1.1 The domain $k[X,Y]_0\oplus k[X,Y]_0$ has basis $(1,0),(0,1)$, and $\Phi(1,0)=F=aX+bY$, $\Phi(0,1)=G=cX+dY$ are the two columns of the matrix in the target basis $X,Y$; hence the Sylvester matrix is $\begin{pmatrix}a&c\\ b&d\end{pmatrix}$ and its determinant is $\operatorname{Res}_{1,1}(F,G)=ad-bc$. [L1, algebra]

1.2 If $ad-bc=0$ and $(c,d)\ne(0,0)$, then the nonzero vector $(d,-c)\in K^2$ satisfies $a\cdot d+b\cdot(-c)=ad-bc=0$ and $c\cdot d+d\cdot(-c)=0$, so $[d:-c]\in\mathbf P^1(K)$ is a common zero of $F$ and $G$. If $(c,d)=(0,0)$ then $G=0$ vanishes at every point. When also $(a,b)=(0,0)$, $F=0$ too and any point, such as $[1:0]$, is common; otherwise $(b,-a)\in K^2$ is nonzero and $F(b,-a)=ab-ba=0$, so $[b:-a]\in\mathbf P^1(K)$ is common. [algebra, given]

1.3 Conversely, if $F$ and $G$ vanish together at a point $[x:y]$ of $\mathbf P^1(K)$, then $(x,y)\ne(0,0)$ is a nonzero vector orthogonal to both coefficient vectors $(a,b)$ and $(c,d)$, so those two vectors are linearly dependent and $ad-bc=0$. [algebra, given]

2.1 Steps 1.1-1.3 show that $ad-bc=0$ if and only if $F$ and $G$ have a common zero in $\mathbf P^1(K)$; this agrees with the general criterion [L2], and the zero-form cases are covered by step 1.2. [L2, step 1.1, step 1.2, step 1.3] ∎
