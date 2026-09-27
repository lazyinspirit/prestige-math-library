---
id: def-sylvester-resultant-of-binary-forms
kind: definition
title: "Sylvester resultant of two positive-degree binary forms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: true
short: "the binary Sylvester resultant"
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, elimination theory, p. 166"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Definition

Let $R$ be a commutative ring ([[def-polynomial-ring-over-a-commutative-ring]])
and let $d,e\ge1$. For $m\ge0$ let
$$R[X,Y]_m=\Bigl\{\sum_{i=0}^{m}c_iX^{m-i}Y^i:c_i\in R\Bigr\}$$
be the $R$-module of homogeneous polynomials of total degree $m$ in $X,Y$, with
the ordered basis
$$X^m,\ X^{m-1}Y,\ \dots,\ XY^{m-1},\ Y^m .$$

Fix homogeneous elements $F\in R[X,Y]_d$ and $G\in R[X,Y]_e$ of the **nominated
degrees** $d$ and $e$; the zero polynomial is allowed, and it is homogeneous of
every degree. The **Sylvester resultant**
$$\operatorname{Res}_{d,e}(F,G)\in R$$
is the determinant ([[def-determinant-of-a-square-matrix]]) of the $R$-linear
map
$$\Phi_{F,G}\colon R[X,Y]_{e-1}\oplus R[X,Y]_{d-1}\longrightarrow R[X,Y]_{d+e-1},\qquad (A,B)\longmapsto AF+BG,$$
in the ordered bases above: the $e$ basis vectors of the $F$-block
$R[X,Y]_{e-1}$ are listed first, then the $d$ basis vectors of the $G$-block
$R[X,Y]_{d-1}$. The target has $d+e$ basis vectors, so the matrix is square.

Since $F$ and $G$ have no constant term when they are nonzero and positive
degree, the map is well defined and $R$-linear, and no hypothesis on the leading
coefficients of $F$ or $G$ is imposed. For two linear forms $F=aX+bY$ and
$G=cX+dY$ the definition gives $\operatorname{Res}_{1,1}(F,G)=ad-bc$, because
$\Phi_{F,G}(1,0)=aX+bY$ and $\Phi_{F,G}(0,1)=cX+dY$ are the two matrix columns.

The degrees $d,e$ belong to the data: if the coefficient of $X^d$ in $F$
vanishes, then $\operatorname{Res}_{d,e}(F,G)$ is still read off the degree-$d$
Sylvester matrix. In particular dehomogenising to $f(T)=F(T,1)$ and
$g(T)=G(T,1)$ never replaces $d$ or $e$ by the actual degrees of $f$ or $g$.
