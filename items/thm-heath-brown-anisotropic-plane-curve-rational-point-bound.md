---
id: thm-heath-brown-anisotropic-plane-curve-rational-point-bound
kind: theorem
title: "Heath-Brown's anisotropic rational-point bound for a plane curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-anisotropic-box-and-monomial-scale-parameters
  - def-coefficient-height-of-an-integral-form
  - thm-heath-brown-determinant-method-auxiliary-form-cover
  - thm-heath-brown-plane-curve-coefficient-height-alternative
  - lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form
  - lem-bounded-projective-intersection-points-from-graded-dimensions
  - thm-logarithm-derivative-and-integral
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Theorem 3 and Corollary 1"
      url: "https://arxiv.org/pdf/math/0405392v1"
    - title: "Per Salberger, Counting rational points on hypersurfaces of low dimension, Theorem 1.3"
      url: "https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf"
    - title: "D. R. Heath-Brown, Counting Rational Points on Algebraic Varieties, Lectures 3 and 5"
      url: "https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties"
    - title: "Per Salberger, Counting rational points on projective varieties, Theorem 1.17"
      url: "https://research.chalmers.se/publication/535246/file/535246_Fulltext.pdf"
---

## Statement

Let $d\ge1$, let $F\in\mathbb Z[x_1,x_2,x_3]$ be a nonzero homogeneous
form of degree $d$ irreducible over $\mathbb Q$, and let $B_1,B_2,B_3\ge1$.
For the primitive normalized integer representative of each rational projective
point, define

$$N(F;B_1,B_2,B_3)=\#\{[x]\in\mathbb P^2(\mathbb Q):F(x)=0,\ |x_i|\le B_i\ (i=1,2,3)\},\quad V=B_1B_2B_3,$$

and let $T$ be the maximum of $B_1^{e_1}B_2^{e_2}B_3^{e_3}$ over the monomials
$x_1^{e_1}x_2^{e_2}x_3^{e_3}$ with nonzero coefficient in $F$. For every
$\varepsilon>0$ there is a constant $C_{d,\varepsilon}$, independent of $F$
and the $B_i$, such that

$$N(F;B_1,B_2,B_3)\le C_{d,\varepsilon}\left(\frac{V^d}{T}\right)^{1/d^2}V^{\varepsilon}.$$

## Statement references

[Heath-Brown, Theorem 3 and Corollary 1](https://arxiv.org/pdf/math/0405392v1)

[Salberger, Theorem 1.3, a distinct determinant-method curve bound](https://www.numdam.org/article/ASENS_2005_4_38_1_93_0.pdf)

[Heath-Brown, lecture-note treatments of auxiliary forms and weighted exponent sets](https://www.researchgate.net/publication/298863534_Counting_rational_points_on_algebraic_varieties)

[Salberger, a distinct global method and curve-counting comparison](https://research.chalmers.se/publication/535246/file/535246_Fulltext.pdf)

## Facts & Assumptions

**Given:** $F,d,B_i,V,T,\varepsilon$ as in the Statement.

[F1] [[def-anisotropic-box-and-monomial-scale-parameters]]: The projective count uses the unique primitive normalized representative; $V=\prod_iB_i$ and $T$ is the largest scale among the monomials in the support of $F$. Since $B_i\ge1$ and each support exponent has total degree $d$, $T\le V^d$.

[F2] [[def-coefficient-height-of-an-integral-form]]: Dividing $F$ by its positive coefficient content gives a primitive integral form with the same support, rational zero set and monomial scale, and with coefficient height no larger than $\|F\|$.

[F3] [[thm-heath-brown-determinant-method-auxiliary-form-cover]]: For $n=3$ and any $\delta>0$, bounded-degree integral forms, none divisible by the given rationally irreducible form, cover its rational points in the box; their number is $\ll_{d,\delta}(V^d/T)^{1/d^2}V^\delta(\log(2+\|F\|))^3$.

[F4] [[thm-heath-brown-plane-curve-coefficient-height-alternative]]: For a primitive rationally irreducible plane form, either its isotropic projective count in a box of radius $B$ is at most $d^2$, or its coefficient height is at most $C_dB^{d\binom{d+2}{2}}$.

[F5] [[lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form]], [[lem-bounded-projective-intersection-points-from-graded-dimensions]]: If $F$ is irreducible over $\mathbb Q$ but reducible over $\overline{\mathbb Q}$, all its rational projective zeros lie among the common zeros of two coprime degree-$e$ plane forms, with $e<d$, so there are at most $e^2\le d^2$ such points.

[F6] [[lem-bounded-projective-intersection-points-from-graded-dimensions]]: Coprime positive-degree plane forms of degrees $a,b$ over an algebraically closed field have at most $ab$ distinct common projective zeros.

[F7] [[thm-logarithm-derivative-and-integral]]: For $x>0$, the natural logarithm is increasing and $\log x=\int_1^xdt/t$.

## Proof

1.1 Let $F_0=F^{\mathrm{prim}}$. By [F2], $F_0$ has the same rational projective zero set, support and $T$ as $F$, and $\|F_0\|\le\|F\|$. Put $R=V^d/T$; [F1] gives $R\ge1$. If $F_0$ is reducible over $\overline{\mathbb Q}$, [F5] yields $N(F;B_1,B_2,B_3)\le d^2$, which implies the asserted bound after increasing $C_{d,\varepsilon}$ because $V\ge1$. [F1, F2, F5, given, algebra]

1.2 Assume henceforth that $F_0$ is irreducible over $\overline{\mathbb Q}$. Apply [F3] with $\delta=\varepsilon/2$ to obtain forms $G_1,\ldots,G_k$ of degrees at most some $D(d,\varepsilon)$ covering every counted point, with
$$k\ll_{d,\varepsilon}R^{1/d^2}V^{\varepsilon/2}\bigl(\log(2+\|F_0\|)\bigr)^3.$$
If a $G_j$ is constant, it has no zeros and can be discarded. For every remaining $G_j$, if $F_0$ and $G_j$ had a common nonconstant factor over $\overline{\mathbb Q}$, absolute irreducibility of $F_0$ would make that factor associate to $F_0$. Divisibility by $F_0$ would then descend to $\mathbb Q$: normalize its leading coefficient in a fixed monomial order to $1$ and divide $G_j$ by it over $\mathbb Q$; the remainder is rational and is zero after extension to $\overline{\mathbb Q}$, hence is already zero. This contradicts the nondivisibility in [F3]. Thus $F_0,G_j$ are coprime over $\overline{\mathbb Q}$. [F2, F3, given, algebra]

2.1 Each nonconstant $G_j$ has degree at most $D$, so [F6] bounds the number of common projective zeros of $F_0$ and $G_j$ by $dD$. The covering property in step 1.2 therefore gives
$$N(F;B_1,B_2,B_3)\ll_{d,\varepsilon}R^{1/d^2}V^{\varepsilon/2}\bigl(\log(2+\|F_0\|)\bigr)^3.$$
If $N(F;B_1,B_2,B_3)\le d^2$, the desired conclusion already follows from $R,V\ge1$. [F3, F6, step 1.2, algebra]

2.2 In the remaining case $N(F;B_1,B_2,B_3)>d^2$, put $H=\max_iB_i$. Every point in the anisotropic box also lies in the isotropic box of radius $H$, so [F4] gives
$$\|F_0\|\le C_d H^{d\binom{d+2}{2}}.$$
Since $H\ge1$, this implies $\log(2+\|F_0\|)\ll_d\log(2+H)$. Also $H\le V$ because the other two box sizes are at least $1$. [F1, F2, F4, step 2.1, algebra]

3.1 Substitute the estimate of step 2.2 in step 2.1. Set $\alpha=\varepsilon/6$. For $x\ge1$, [F7] and $t^{-1}\le t^{\alpha-1}$ for $t\ge1$ give
$$\log x=\int_1^x\frac{dt}{t}\le\int_1^x t^{\alpha-1}\,dt\le\alpha^{-1}x^\alpha.$$
Taking $x=2+V\le3V$ gives $\log(2+V)^3\ll_\varepsilon V^{\varepsilon/2}$. Multiplying the two factors $V^{\varepsilon/2}$ proves
$$N(F;B_1,B_2,B_3)\ll_{d,\varepsilon}R^{1/d^2}V^{\varepsilon},$$
which is the Statement. [F1, F7, step 2.1, step 2.2, algebra] ∎
