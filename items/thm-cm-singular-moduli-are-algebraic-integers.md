---
id: thm-cm-singular-moduli-are-algebraic-integers
kind: theorem
title: "Singular moduli of imaginary quadratic orders are algebraic integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-elliptic-lattice-with-complex-multiplication-by-an-order
  - def-classical-modular-equation-for-cyclic-isogenies
  - thm-classical-modular-equation-integrality-and-kronecker-congruence
  - lem-primitive-principal-ideal-gives-cyclic-isogeny-sublattice
  - def-quadratic-order-of-discriminant
  - thm-j-invariant-classifies-complex-tori
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Proof of Theorem 11.1, printed pp. 237–238"
    - title: "J. S. Milne, Modular Functions and Modular Forms"
      url: "https://www.jmilne.org/math/CourseNotes/MF110.pdf"
      locator: "Chapter 7, algebraicity and integrality of CM values"
verification: {}
---

## Statement

Let $D<0$ be a nonzero quadratic discriminant, let $\mathcal O_D$ be its
quadratic order in $K_D$, and let $I$ be any proper invertible fractional
$\mathcal O_D$-ideal. Then the singular modulus $j(I)$ is an algebraic integer.

## Statement references

[[def-elliptic-lattice-with-complex-multiplication-by-an-order|A singular modulus is the $j$-invariant of a lattice with multiplier ring $\mathcal O_D$.]]

[Cox, proof of Theorem 11.1, pp. 237–238](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** $D<0$, its order $\mathcal O_D$, and a proper invertible fractional ideal $I$.

[F1] [[def-quadratic-order-of-discriminant]]: $\mathcal O_D=\mathbb Z[\omega]$ for an algebraic integer $\omega$ with quadratic minimal polynomial and $\mathcal O_D$ is a rank-two lattice.

[F2] [[lem-primitive-principal-ideal-gives-cyclic-isogeny-sublattice]]: a primitive $\alpha\in\mathcal O_D$ makes $\alpha I\subset I$ cyclic of index $N(\alpha)$.

[F3] [[def-classical-modular-equation-for-cyclic-isogenies]]: cyclic index-$m$ sublattices satisfy $\Phi_m(j(I'),j(I))=0$.

[F4] [[thm-classical-modular-equation-integrality-and-kronecker-congruence]]: $\Phi_m\in\mathbb Z[X,Y]$ and, when $m$ is nonsquare, $\Phi_m(X,X)$ has leading coefficient $\pm1$.

[F5] [[thm-j-invariant-classifies-complex-tori]]: homothetic lattices have equal $j$-invariants.

[F6] [[def-field-norm-and-trace]]: $N_{K_D/\mathbb Q}(x)=x\bar x$.

## Proof

1.1 Choose $\omega$ with $\mathcal O_D=\mathbb Z[\omega]$, and write its monic minimal polynomial as $X^2-tX+u$. For each integer $n$, put $\alpha_n=n+\omega$. Its coefficient of $\omega$ is $1$, so $\alpha_n\notin d\mathcal O_D$ for every $d>1$; it is primitive. Its norm is $N(\alpha_n)=n^2+tn+u$, which is positive for all sufficiently large $n$. [F1, F6, given, algebra]

2.1 Only finitely many integers $n$ make $N(\alpha_n)$ a square: if $N(\alpha_n)=k^2$, then $(2k-(2n+t))(2k+(2n+t))=-(t^2-4u)=-D$, the fixed positive order discriminant, so the two positive factors range over finitely many divisor pairs and determine finitely many $n$. Choose a sufficiently large $n$ outside this finite set; then $m=N(\alpha_n)>0$ is nonsquare. [F1, step 1.1, algebra, choose]

3.1 By [F2], $\alpha_n I$ is a cyclic sublattice of $I$ of index $m$. Also $\alpha_n I$ is homothetic to $I$, so [F5] gives $j(\alpha_n I)=j(I)$. The defining product [F3] now yields $\Phi_m(j(I),j(I))=0$. [F2, F3, F5, step 2.1, algebra]

4.1 By [F4], the polynomial $\Phi_m(X,X)\in\mathbb Z[X]$ has leading coefficient $1$ or $-1$. Since $j(I)$ is its root by step 3.1, changing sign if needed gives a monic integer polynomial having $j(I)$ as root. Therefore $j(I)$ is an algebraic integer. [F4, step 3.1, algebra] ∎
