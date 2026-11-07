---
id: thm-heath-brown-plane-curve-coefficient-height-alternative
kind: theorem
title: "A coefficient-height alternative for a rational plane curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-anisotropic-box-and-monomial-scale-parameters
  - def-coefficient-height-of-an-integral-form
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-primitive-projective-coordinate-representative
  - lem-primitive-projective-coordinate-representative-well-defined
  - def-common-divisor-and-gcd
  - cor-common-divisor-divides-gcd
  - lem-coprime-divides-product
  - thm-bezout-identity
  - lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form
  - lem-bounded-projective-intersection-points-from-graded-dimensions
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Theorem 4 and Corollary 1"
      url: "https://arxiv.org/pdf/math/0405392v1"
    - title: "Per Salberger, Counting rational points on hypersurfaces of low dimension, Theorem 1.3"
      url: "https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf"
    - title: "D. R. Heath-Brown, Counting Rational Points on Algebraic Varieties, Lecture 3"
      url: "https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties"
---

## Statement

Let $d\ge1$, $B\ge1$, and let $F\in\mathbb Z[x_0,x_1,x_2]$ be a primitive
homogeneous form of degree $d$ that is irreducible over $\mathbb Q$. For a
rational projective point, use its unique integer representative whose
coordinates have greatest common divisor $1$ and whose first nonzero coordinate
is positive. Let $N(F;B)$ be the number of rational projective zeros of $F$
whose representative satisfies $\max_i|x_i|\le B$, and put
$M=\binom{d+2}{2}$. Then there is a constant $C_d>0$, depending only on $d$,
such that either

$$N(F;B)\le d^2\qquad\text{or}\qquad \|F\|\le C_d B^{dM},$$

where $\|F\|$ is the maximum absolute coefficient of $F$.

## Statement references

[Heath-Brown, Theorem 4 and Corollary 1](https://arxiv.org/pdf/math/0405392v1)

[Salberger, the determinant-method and intersection-bound setting](https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf)

[Heath-Brown, lecture-note treatment of the coefficient-height alternative](https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties)

## Facts & Assumptions

**Given:** $F,d,B,N(F;B)$, and $M$ as in the Statement.

[F1] [[def-primitive-projective-coordinate-representative]], [[lem-primitive-projective-coordinate-representative-well-defined]]: The representative is defined by coordinate gcd $1$ and first nonzero coordinate positive, and every rational projective point has exactly one such representative; [[def-anisotropic-box-and-monomial-scale-parameters]]: bounded coordinate boxes count these representatives, so $N(F;B)$ is finite.

[F2] [[def-coefficient-height-of-an-integral-form]]: A primitive form has coefficient content $1$, and its coefficient height is the maximum absolute coefficient.

[F3] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: The degree-$d$ forms in three variables have the degree-$d$ monomials as a coefficient basis, of cardinality $M$.

[F4] [[lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form]]: If $F$ is irreducible over $\mathbb Q$ but reducible over $\overline{\mathbb Q}$, there are coprime degree-$e$ forms $G,H$ over $\overline{\mathbb Q}$, with $1\le e<d$, whose common projective zeros contain every rational projective zero of $F$.

[F5] [[lem-bounded-projective-intersection-points-from-graded-dimensions]]: Two positive-degree coprime plane forms of degrees $a,b$ over an algebraically closed field have at most $ab$ distinct common projective zeros.

[F6] [[def-common-divisor-and-gcd]], [[cor-common-divisor-divides-gcd]], [[thm-bezout-identity]]: The greatest common divisor is the greatest nonnegative common divisor and is an integer linear combination; hence a rational number can be written as $a/b$ in lowest terms with $b>0$ and $\gcd(a,b)=1$.

[F7] [[lem-coprime-divides-product]]: If $a,b$ are coprime integers and $a$ divides $bc$, then $a$ divides $c$.

## Proof

1.1 If $F$ is reducible over $\overline{\mathbb Q}$, then [F4] and [F5] show that its rational projective zeros number at most $e^2\le d^2$. This is the first alternative. Hence assume $F$ is absolutely irreducible. [F4, F5, given, algebra]

1.2 Suppose $N(F;B)>d^2$. By [F1], choose $s=d^2+1$ distinct rational projective zeros and their primitive normalized representatives $x^{(1)},\ldots,x^{(s)}$. Index the degree-$d$ monomials by the $M$ columns and form the integer $s\times M$ matrix $A$ whose $(a,e)$ entry is $(x^{(a)})^e$. The nonzero coefficient vector of $F$ lies in the kernel of $A$, so its rank $r$ is at most $M-1$. Every row is nonzero because some coordinate of $x^{(a)}$ is nonzero and the corresponding pure-power monomial has nonzero value; hence $1\le r<M$. [F1, F3, given, choose, construct, algebra]

2.1 Choose $r$ linearly independent rows and $r$ columns giving an invertible square submatrix $R$. Since $r<M$, choose one additional column, with entries $u$ on those rows. Define a coefficient vector $g$ on these $r+1$ columns by $g_{\rm extra}=\det R$ and $g_{\rm pivot}=-\operatorname{adj}(R)u$, and put its other entries equal to zero. The identity $R\operatorname{adj}(R)=(\det R)I$ gives zero on the chosen rows. Every row of $A$ is in their span because the chosen rows have rank $r$, so $Ag=0$; moreover $g\ne0$ since $\det R\ne0$. Each matrix entry has absolute value at most $B^d$. The determinant expansion bounds $|\det R|\le r!B^{dr}$ and each adjugate entry by $(r-1)!B^{d(r-1)}$, so each coordinate of $g$ is at most $r!B^{dr}$. [F1, F3, step 1.2, construct, algebra]

2.2 Let $G$ be the degree-$d$ integral form with coefficient vector $g$. Then $G$ vanishes at all $s$ chosen points by $Ag=0$. If $G$ is not a scalar multiple of $F$ over $\overline{\mathbb Q}$, absolute irreducibility of $F$ implies that $F$ and $G$ have no common nonconstant factor. Applying [F5] gives at most $d^2$ common projective zeros, contrary to the chosen $s=d^2+1$. Thus $G=\lambda F$ for some nonzero $\lambda\in\overline{\mathbb Q}$. [F5, step 1.2, step 2.1, algebra]

3.1 Choose a nonzero coefficient $f_e$ of $F$. Since the corresponding coefficient of $G$ is an integer, $\lambda=G_e/f_e$ is rational. By [F6], write $\lambda=a/b$ in lowest terms with $b>0$. For every coefficient $f_j$ of $F$, integrality of $G_j=af_j/b$ gives $b\mid af_j$; [F7] gives $b\mid f_j$. Primitivity of $F$ means its coefficients have no common positive divisor greater than $1$, so $b=1$. Hence $|\lambda|\ge1$ and $\|F\|\le\|G\|\le r!B^{dr}\le M!B^{dM}$. This is the second alternative with $C_d=M!$. [F2, F6, F7, step 2.2, algebra] ∎
