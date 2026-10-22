---
id: ex-qftx-dual-number-topological-model
kind: example
title: "Nonsemisimple Frobenius sewing is also possible"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps: [thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The closed classification inherits AC_omega only through its boundary-relative surface normal-form supplier; the dual-number algebra and finite checks use no choice."
proof_strategy: direct
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories (short version)"
      url: "https://ncatlab.org/nlab/files/Kock-FrobAlgTQFT-short.pdf"
      locator: "§§2.2–2.4 and 3.1.12–3.1.13 (PDF pp. 22–30, 34–36), for Frobenius functionals, inverse-pairing comultiplication, and closed classification. The explicit dual-number matrix is checked locally."
    - title: "Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories (Cambridge book excerpt)"
      url: "https://assets.cambridge.org/97805218/32670/excerpt/9780521832670_excerpt.pdf"
      locator: "Excerpt pp. 1–7, for closed TQFTs from commutative Frobenius algebras; the dual-number calculation is supplied locally."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–3.7 and 4 (PDF pp. 18–42), for the closed-sector TQFT classification and its no-free-boundary convention."
verification:
  precheck: pass
---

## Example

Let $A=\mathbb C[x]/(x^2)$ with basis $(1,x)$, unit $1$, multiplication inherited from the quotient, and Frobenius functional $\epsilon(1)=0$, $\epsilon(x)=1$. The bilinear pairing $b(a,b)=\epsilon(ab)$ has matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ in that basis, hence is nondegenerate. With the conjugate-linear involution fixing $x$, the form $h(a,b)=\epsilon(a^*b)$ is Hermitian but indefinite. Here a finite-dimensional algebra is semisimple when its Jacobson radical (the intersection of its maximal left ideals) is zero; $A$ is not semisimple because $x$ is a nonzero nilpotent in that radical. The closed oriented classification therefore gives a closed two-dimensional TQFT from a nonsemisimple Frobenius algebra without asserting positive reflection form data.

## Example references

[[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]

## Facts & Assumptions

**Given:** The quotient algebra $A=\mathbb C[x]/(x^2)$, its basis $(1,x)$, the stated functional, and the conjugate-linear involution $1^*=1$, $x^*=x$.

[F1] [[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]: over any field, every finite-dimensional commutative Frobenius algebra supplies a strong symmetric monoidal functor on the closed oriented two-dimensional cobordism category, whose morphisms have no free boundary.

## Verification

1.1 Every class in $A$ is uniquely $a+bx$ with $a,b\in\mathbb C$, and $(a+bx)(c+dx)=ac+(ad+bc)x$ because $x^2=0$. This is the quotient of the associative commutative algebra $\mathbb C[x]$, so $A$ is a two-dimensional commutative unital associative algebra with nonzero nilpotent $x$. [given, algebra]

1.2 The pairing values are $b(1,1)=0$, $b(1,x)=1$, $b(x,1)=1$, and $b(x,x)=0$, so its matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and determinant $-1\ne0$. Hence $b$ is nondegenerate. [given, algebra]

2.1 Define $\Delta(1)=1\otimes x+x\otimes1$ and $\Delta(x)=x\otimes x$. On both basis elements, $(\epsilon\otimes1)\Delta=(1\otimes\epsilon)\Delta=\operatorname{id}_A$ as counit identities; the two coassociative composites on $1$ both equal $1\otimes x\otimes x+x\otimes1\otimes x+x\otimes x\otimes1$, and on $x$ both equal $x\otimes x\otimes x$. For the two Frobenius identities, bilinearity reduces to the four basis pairs $(1,1),(1,x),(x,1),(x,x)$; on these pairs all three composites $\Delta\mu$, $(1\otimes\mu)(\Delta\otimes1)$, and $(\mu\otimes1)(1\otimes\Delta)$ respectively equal $\Delta(1),\Delta(x),\Delta(x),0$. Thus the specified maps make $A$ a commutative Frobenius algebra. [given, step 1.1, step 1.2, algebra]

2.2 The ideal $(x)$ is maximal because $A/(x)\cong\mathbb C$. For every maximal ideal $M$, the quotient $A/M$ is a field and the image of $x$ there is nilpotent because $x^2=0$; a field has no nonzero nilpotents, so $x\in M$. Hence $0\ne x\in J(A)$, the intersection of all maximal left ideals, and $A$ is not semisimple under the stated definition. [given, step 1.1, algebra]

2.3 For $a=a_0+a_1x$ and $b=b_0+b_1x$, $h(a,b)=\overline{a_0}b_1+\overline{a_1}b_0$, so $h(a,b)=\overline{h(b,a)}$ and the form is Hermitian. Also $h(1+x,1+x)=\epsilon((1+x)^2)=2$ while $h(1-x,1-x)=\epsilon((1-x)^2)=-2$, so it takes both signs and is not positive definite. [given, step 1.2, algebra]

3.1 By step 2.1 the algebra is finite-dimensional, commutative, and Frobenius, so [F1] applies over $k=\mathbb C$ and gives the closed oriented two-dimensional TQFT. This conclusion uses the closed category only and adds no open/closed or positivity claim. [given, F1, step 2.1] ∎
