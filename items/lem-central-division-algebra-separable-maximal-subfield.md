---
id: lem-central-division-algebra-separable-maximal-subfield
kind: lemma
title: A central division algebra has a separable maximal splitting subfield
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- lem-finite-density-and-central-simple-base-change
- lem-separable-subfield-centralizer-and-splitting
- lem-finite-division-rings-are-fields
- thm-cayley-hamilton
- lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring
- thm-polynomial-is-separable-iff-coprime-to-its-derivative
- thm-splitting-fields-exist-for-nonzero-polynomials
- thm-finitely-generated-algebraic-extensions-are-finite
justified_by: []
proof_strategy: direct
axiom_use: None. Every field adjunction, basis and generic polynomial witness is finite; a finite polynomial splitting field replaces any generic algebraic or separable closure.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §3, Proposition 3.8, Lemma 3.9 and Corollary 3.10, printed pp.134–135; alternative generic-power-minor/separability-chart proof reconstructed here.
verification: {}
---

## Statement

If $D/K$ is a central division algebra of dimension $d^2$, it contains a separable subfield $E/K$ of degree $d$, and $E$ splits $D$. Consequently every finite-dimensional central simple $K$-algebra splits over a finite Galois extension of $K$.

## Statement references

[[lem-finite-density-and-central-simple-base-change]]

[[lem-separable-subfield-centralizer-and-splitting]]

[[lem-finite-division-rings-are-fields]]

[[thm-cayley-hamilton]]

[[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]

[[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] Central simple algebras have division representatives, square dimension, and an arbitrary finite splitting field. [[lem-finite-density-and-central-simple-base-change]]

[F2] A separable subfield of degree $d$ in a central division algebra of dimension $d^2$ is self-centralizing and splits it. [[lem-separable-subfield-centralizer-and-splitting]]

[F3] Finite division rings are fields. [[lem-finite-division-rings-are-fields]]

[F4] Every square matrix satisfies its characteristic polynomial. [[thm-cayley-hamilton]]

[F5] A nonzero polynomial over an infinite field has a tuple on which it is nonzero. [[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]

[F6] A polynomial is separable exactly when it is coprime to its derivative. [[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]

[F7] A single nonzero polynomial has a splitting field. It is finite because its finitely many generating roots are algebraic. [[thm-splitting-fields-exist-for-nonzero-polynomials]] [[thm-finitely-generated-algebraic-extensions-are-finite]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 If $d=1$, take $E=K$. If $K$ is finite, $D$ is finite, hence a field by [F3]; centrality then forces $D=K$. Thus the remaining case has $K$ infinite and $d>1$. Choose a finite splitting field $F/K$ using [F1], with $D_F=M_d(F)$. In a fixed $K$-basis of $D$, the coordinates of $1,x,\ldots,x^d$ are polynomials over $K$ in the coordinates of $x$. [F1, F3, given, choose, algebra]

2.1 Every $(d+1)$-minor of this coordinate matrix is the zero polynomial. Indeed, after extension to $F$, every numerical matrix $x\in M_d(F)$ satisfies a degree-$d$ relation by [F4], so the minor vanishes at every $F$-tuple. As $F$ is infinite, [F5] makes it the zero polynomial over $F$, hence over $K$. On the other hand, at a diagonal matrix with $d$ distinct entries, $1,x,\ldots,x^{d-1}$ are independent by the Vandermonde determinant. Fix a $d$-minor $\Delta$ of these columns nonzero at such a matrix. It is a nonzero polynomial over $K$. [F4, F5, step 1.1, choose, algebra]

3.1 On the chart $\Delta\ne0$, Cramer's rule defines a monic degree-$d$ polynomial $p_x(T)$, with coefficients rational functions over $K$, satisfying $p_x(x)=0$. The relation holds in all coordinates, not just the selected rows: the vanishing $(d+1)$-minors in step 2.1 force the next column into their span. Independence of the first $d$ columns makes $p_x$ the minimal polynomial on this chart. At the chosen diagonal matrix it has precisely the $d$ distinct diagonal entries as roots. [step 2.1, algebra]

4.1 Separability on this chart is a nonempty polynomial nonvanishing condition over $K$. To see this without presupposing reduced-characteristic-polynomial descent, form the determinant $R(p)$ of the linear map $(a,b)\longmapsto ap+bp',\qquad \deg a<d-1,\quad\deg b<d,$ into polynomials of degree $<2d-1$. It is a square matrix with polynomial entries in the coefficients of $p$. Its determinant is nonzero exactly when $\gcd(p,p')=1$: if the gcd is one, $ap=-bp'$ implies $p\mid b$ and hence $a=b=0$; if a nonconstant gcd $g$ exists, $(p'/g,-p/g)$ is a nonzero kernel vector with the required degree bounds. This also covers a derivative with smaller than expected degree, including characteristic dividing $d$. At the diagonal point $R(p_x)\ne0$ by [F6]. Clearing powers of $\Delta$ gives a nonzero numerator polynomial $S$ over $K$. [F6, step 3.1, algebra]

5.1 Apply [F5] to the nonzero polynomial $\Delta S$ to choose coordinates in $K$ where both are nonzero. For this $x\in D$, $K[x]$ is a field because it is a finite-dimensional commutative domain. Its minimal polynomial $p_x$ has degree $d$ and is separable by steps 3.1–4.1. Thus $E=K(x)$ has the required degree and separability, and splits $D$ by [F2]. [F2, F5, F6, step 3.1, step 4.1, choose]

6.1 A central simple algebra is a matrix algebra over such a $D$ by [F1], so the same finite separable extension splits it. For the scalar case $E=K$, use $K$ itself. Otherwise $E=K(x)$ is the simple separable field just constructed. By [F7], take a splitting field $M/K$ of the separable minimal polynomial of $x$. A root gives a $K$-embedding $E\hookrightarrow M$ by evaluation in its polynomial quotient. The finitely many roots generate $M$, which is finite, normal and separable over $K$, hence finite Galois. Further scalar extension along $E\hookrightarrow M$ preserves the matrix splitting. This constructs the required finite Galois field without choosing a generic closure. This proves the final assertion, including already split algebras. [F1, F7, step 5.1, choose, algebra] ∎

