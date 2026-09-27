---
id: ex-resultant-detects-root-at-infinity
kind: example
title: "A binary resultant detects a common root at infinity lost by naive dehomogenization"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sylvester-resultant-of-binary-forms, def-determinant-of-a-square-matrix, thm-binary-resultant-zero-iff-common-geometric-projective-root, lem-binary-resultant-scaling-specialization-and-dehomogenization, def-projective-space-points, def-algebraic-closure, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
short: "resultant sees the point at infinity"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 7.27 boundary and Proposition 7.28, pp. 166-167"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Example

Let $k$ be any field, let $F(X,Y)=Y$ be of nominated degree one and
$G(X,Y)=XY$ of nominated degree two, and let $K$ be an algebraic closure of
$k$. Then
$\operatorname{Res}_{1,2}(F,G)=0$, because $F$ and $G$ both vanish at the point
$[1:0]$ of $\mathbf P^1(K)$, whereas the dehomogenisations $F(T,1)=1$ and
$G(T,1)=T$ have no common affine root. The nominated degrees $1$ and $2$ are
not reset after dehomogenisation.

## Facts & Assumptions

**Given:** A field $k$, the forms $F=Y\in k[X,Y]_1$ and $G=XY\in k[X,Y]_2$ of nominated degrees $1$ and $2$, and an algebraic closure $K$ of $k$.

[L1] For $d=1,e=2$ the Sylvester map is $(A,B)\mapsto AY+BXY$ from $k[X,Y]_1\oplus k[X,Y]_0$ to $k[X,Y]_2$, with the $F$-block basis $X,Y$ listed first and then the $G$-block basis $1$, and $\operatorname{Res}_{1,2}(F,G)$ is the determinant of this map in those bases ([[def-sylvester-resultant-of-binary-forms]], [[def-determinant-of-a-square-matrix]], [[def-polynomial-ring-over-a-commutative-ring]]).

[L2] Over a field $k$ with algebraic closure $K$, $\operatorname{Res}_{d,e}(F,G)=0$ if and only if $F$ and $G$ vanish together at some point of $\mathbf P^1(K)$ ([[thm-binary-resultant-zero-iff-common-geometric-projective-root]], [[def-projective-space-points]], [[def-algebraic-closure]]).

[L3] For a field $k$, an algebraically closed extension $K$, and homogeneous $F,G$ of nominated positive degrees $d,e$, the common zeros in $\mathbf P^1(K)$ are exactly the points $[a:1]$ with $f(a)=g(a)=0$ for $f(T)=F(T,1)$, $g(T)=G(T,1)$, together with the point $[1:0]$ when the coefficient of $X^d$ in $F$ and the coefficient of $X^e$ in $G$ both vanish ([[lem-binary-resultant-scaling-specialization-and-dehomogenization]]).



## Verification

**Proof technique:** direct.

1.1 The Sylvester map has $\Phi(X,0)=XY$, $\Phi(Y,0)=Y^2$ and $\Phi(0,1)=XY$, so the first and the third column of its matrix are equal; the matrix is therefore singular and $\operatorname{Res}_{1,2}(F,G)=0$. [L1, algebra]

2.1 One has $F(1,0)=0$ and $G(1,0)=0$, so $[1:0]\in\mathbf P^1(K)$ is a common zero of $F$ and $G$, in agreement with the vanishing of the resultant by [L2]; in the chart description of [L3] this is the extra point $[1:0]$, because the coefficient of $X^1$ in $F=Y$ is $0$ and the coefficient of $X^2$ in $G=XY$ is $0$. [L2, L3, step 1.1]

3.1 The dehomogenisations are $F(T,1)=1$ and $G(T,1)=T$, and a common affine root would satisfy $T=0$ from $G(T,1)=0$ and $1=0$ from $F(T,1)=0$, which is impossible in $k$; so there is no affine common root even though the resultant vanishes. [L3, step 2.1, algebra]

4.1 Hence the vanishing of the resultant detects the common projective zero $[1:0]$ that naive affine dehomogenisation misses: the affinely dehomogenised forms $1$ and $T$ are coprime, and the nominated degrees $1$ and $2$ are still the degrees used in the matrix of step 1.1. [step 3.1, given] ∎
