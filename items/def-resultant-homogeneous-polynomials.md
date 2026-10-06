---
id: def-resultant-homogeneous-polynomials
kind: definition
title: Resultant of two plane forms, viewed in one variable
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, def-polynomial-degree-leading-coefficient-and-monic, def-sylvester-resultant-of-binary-forms, lem-binary-resultant-scaling-specialization-and-dehomogenization, thm-binary-resultant-zero-iff-common-geometric-projective-root]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "Andreas Gathmann, Algebraic Geometry class notes (2002), Sections 6.1-6.2"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
---

## Definition

Let $k$ be a field and let $F,G\in k[x_0,x_1,x_2]$ be nonzero homogeneous forms of positive total degrees $d,e$ [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[def-monomials-multidegree-and-total-degree]]. Write $F=\sum_{i=0}^d a_i(x_0,x_1)x_2^i$, $G=\sum_{i=0}^e b_i(x_0,x_1)x_2^i$. Over $R=k[x_0,x_1]$ introduce auxiliary variables $X,Y$ and homogenise with the nominated degrees:

$$ H_F(X,Y)=\sum_{i=0}^d a_iX^iY^{d-i},\qquad H_G(X,Y)=\sum_{i=0}^e b_iX^iY^{e-i}. $$

Define the **resultant eliminating $x_2$** by

$$ \operatorname{Res}_{x_2}(F,G):=\operatorname{Res}_{d,e}(H_F,H_G)\in k[x_0,x_1], $$

using the Sylvester determinant and ordered bases of [[def-sylvester-resultant-of-binary-forms]]. Thus $H_F(X,1)=F(x_0,x_1,X)$, but the nominations remain $d,e$ even if the actual degrees in $X$ drop.

The resultant is zero or homogeneous of total degree $de$ in $x_0,x_1$. To see this, index matrix rows by the exponent $r=0,\ldots,d+e-1$ of $X$ in the target monomial, and index the $F$-columns by multiplier exponents $j=0,\ldots,e-1$ and the $G$-columns by $j=0,\ldots,d-1$. An $F$-entry is $a_{r-j}$ of degree $d-r+j$ and a $G$-entry is $b_{r-j}$ of degree $e-r+j$. Every nonzero determinant term therefore has total degree

$$ ed+de+\frac{e(e-1)}2+\frac{d(d-1)}2-\frac{(d+e-1)(d+e)}2=de. $$

**Specialisation.** Coefficient specialisation sends the determinant to the determinant of $H_F(a,b;X,Y)$ and $H_G(a,b;X,Y)$, for any $(a,b)\ne(0,0)$ [[lem-binary-resultant-scaling-specialization-and-dehomogenization]]. Over an algebraically closed extension, its vanishing detects a common projective root of these binary forms [[thm-binary-resultant-zero-iff-common-geometric-projective-root]]. Such a root is either $[c:1]$, with $F(a,b,c)=G(a,b,c)=0$, or $[1:0]$, when both coefficients $a_d,b_e$ vanish. Consequently the value need not detect a finite root when both leading coefficients vanish. The later detection lemma excludes that case by assuming $[0:0:1]$ lies on neither curve.

## Remarks

- The elimination coordinate is fixed; the resultant polynomial depends on it. The underlying projective curves do not depend on a choice of coordinates.
- The scaling rule gives $\operatorname{Res}_{x_2}(uF,vG)=u^ev^d\operatorname{Res}_{x_2}(F,G)$ for $u,v\in k$ [[lem-binary-resultant-scaling-specialization-and-dehomogenization]]. In particular it is not a scalar-independent function of the curves.
